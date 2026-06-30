/**
 * Gmail API helper for finding order confirmation emails.
 *
 * Uses the user's OAuth access_token (read-only `gmail.readonly` scope,
 * granted during sign-in - see app/api/auth/[...nextauth]/route.ts) to
 * search the Gmail REST API directly. We call the REST API with fetch
 * rather than pulling in googleapis, since we only need three endpoints
 * and want to keep the dependency footprint small.
 */

const GMAIL_API_BASE = 'https://gmail.googleapis.com/gmail/v1/users/me';

// The exact Gmail search query used to find order confirmation emails.
// Retailers don't share a common sender domain, so we rely on the subject
// line rather than a sender allowlist to avoid missing real confirmations.
const SEARCH_QUERY = 'subject:(order confirmation OR your order OR order receipt) newer_than:90d';

// Common order-confirmation sender patterns. Exported for callers that want
// to apply an additional soft filter/ranking on top of the subject-line
// search results - not applied here, since it would risk excluding
// legitimate confirmations from retailers not on this list.
export const COMMON_ORDER_CONFIRMATION_SENDERS = [
  'amazon.com',
  'bestbuy.com',
  'nike.com',
  'uniqlo.com',
  'target.com',
  'walmart.com',
  'ebay.com',
  'etsy.com',
  'shopify.com',
  'orders@',
  'order-update@',
  'receipts@',
  'noreply@',
  'no-reply@',
];

export type OrderEmail = {
  id: string;
  subject: string;
  from: string;
  date: string;
  snippet: string;
  body: string;
};

type GmailMessageListResponse = {
  messages?: { id: string; threadId: string }[];
  nextPageToken?: string;
};

type GmailMessagePart = {
  mimeType?: string;
  body?: { data?: string; size?: number };
  parts?: GmailMessagePart[];
};

type GmailMessageResponse = {
  id: string;
  snippet?: string;
  payload?: GmailMessagePart & {
    headers?: { name: string; value: string }[];
  };
};

/**
 * Decodes Gmail's URL-safe base64 message body into plain text.
 */
function decodeBase64Url(data: string): string {
  const normalized = data.replace(/-/g, '+').replace(/_/g, '/');
  return Buffer.from(normalized, 'base64').toString('utf-8');
}

/**
 * Recursively walks a Gmail message payload to find the first text/plain
 * (falling back to text/html) body part and decode it. Gmail nests message
 * bodies inside `parts` for multipart messages (e.g. text + html + attachments).
 */
function extractBody(payload: GmailMessagePart | undefined): string {
  if (!payload) return '';

  if (payload.body?.data && (payload.mimeType === 'text/plain' || !payload.parts)) {
    return decodeBase64Url(payload.body.data);
  }

  if (payload.parts) {
    const plainPart = payload.parts.find((part) => part.mimeType === 'text/plain');
    if (plainPart?.body?.data) {
      return decodeBase64Url(plainPart.body.data);
    }

    const htmlPart = payload.parts.find((part) => part.mimeType === 'text/html');
    if (htmlPart?.body?.data) {
      return decodeBase64Url(htmlPart.body.data);
    }

    // Multipart/mixed messages can nest another multipart/alternative inside
    // a part - recurse into the first part that itself has sub-parts.
    for (const part of payload.parts) {
      if (part.parts) {
        const nested = extractBody(part);
        if (nested) return nested;
      }
    }
  }

  if (payload.body?.data) {
    return decodeBase64Url(payload.body.data);
  }

  return '';
}

function getHeader(headers: { name: string; value: string }[] | undefined, name: string): string {
  return headers?.find((h) => h.name.toLowerCase() === name.toLowerCase())?.value ?? '';
}

async function gmailFetch<T>(url: string, accessToken: string): Promise<T> {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gmail API request failed (${res.status}): ${text}`);
  }

  return res.json() as Promise<T>;
}

/**
 * Fetches order confirmation emails from the user's Gmail inbox.
 *
 * @param accessToken - OAuth access token with gmail.readonly scope
 * @param maxResults - maximum number of messages to return (default 50)
 */
export async function fetchOrderEmails(
  accessToken: string,
  maxResults = 50,
): Promise<OrderEmail[]> {
  const messageIds: string[] = [];
  let pageToken: string | undefined;

  // Gmail's list endpoint caps each page at 500, but we paginate in
  // batches of up to 50 per request and stop once we've collected
  // maxResults message ids across as many pages as needed.
  do {
    const remaining = maxResults - messageIds.length;
    if (remaining <= 0) break;

    const params = new URLSearchParams({
      q: SEARCH_QUERY,
      maxResults: String(Math.min(remaining, 50)),
    });
    if (pageToken) params.set('pageToken', pageToken);

    const listRes = await gmailFetch<GmailMessageListResponse>(
      `${GMAIL_API_BASE}/messages?${params.toString()}`,
      accessToken,
    );

    for (const message of listRes.messages ?? []) {
      messageIds.push(message.id);
    }

    pageToken = listRes.nextPageToken;
  } while (pageToken && messageIds.length < maxResults);

  // Fetch full message content for each id in parallel.
  const messages = await Promise.all(
    messageIds.map((id) =>
      gmailFetch<GmailMessageResponse>(
        `${GMAIL_API_BASE}/messages/${id}?format=full`,
        accessToken,
      ),
    ),
  );

  return messages.map((message) => ({
    id: message.id,
    subject: getHeader(message.payload?.headers, 'Subject'),
    from: getHeader(message.payload?.headers, 'From'),
    date: getHeader(message.payload?.headers, 'Date'),
    snippet: message.snippet ?? '',
    body: extractBody(message.payload),
  }));
}
