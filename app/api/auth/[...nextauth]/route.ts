import NextAuth, { type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import { supabaseAdmin } from '@/lib/supabase';

// Gmail read-only scope, in addition to the standard OpenID Connect scopes
// needed for sign-in (identity + email + profile). Read-only means
// HawkReturn can search/read messages but can never send, delete, or
// modify anything in the user's mailbox.
const GOOGLE_SCOPES = [
  'openid',
  'email',
  'profile',
  'https://www.googleapis.com/auth/gmail.readonly',
].join(' ');

export const authOptions: NextAuthOptions = {
  // SupabaseAdapter persists users/accounts/sessions into the `next_auth`
  // Postgres schema (see the SQL migration that accompanies this file) and
  // implies the 'database' session strategy - sessions live in Postgres,
  // not as signed JWT cookies.
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: GOOGLE_SCOPES,
          // access_type=offline + prompt=consent are required for Google to
          // return a refresh_token. Without prompt=consent, Google only
          // issues a refresh_token on the very first authorization for a
          // given account, which breaks re-connecting after a token expires.
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    }),
  ],
  callbacks: {
    /**
     * Runs on every successful sign-in. The Google `account` object here
     * carries the OAuth tokens (access_token, refresh_token, expires_at) -
     * this is the only point in the flow where we have direct access to
     * them, so we mirror them into our own `profiles` table immediately.
     */
    async signIn({ user, account, profile }) {
      if (!account || !user.email) return true;

      const tokenExpiresAt = account.expires_at
        ? new Date(account.expires_at * 1000).toISOString()
        : null;

      const { error } = await supabaseAdmin.from('profiles').upsert(
        {
          id: user.id,
          email: user.email,
          full_name: (profile as { name?: string } | undefined)?.name ?? user.name ?? null,
          gmail_access_token: account.access_token ?? null,
          // Google only sends refresh_token on the authorization that
          // grants consent - if a later sign-in doesn't include one, keep
          // whatever refresh_token we already stored rather than wiping it.
          ...(account.refresh_token ? { gmail_refresh_token: account.refresh_token } : {}),
          token_expires_at: tokenExpiresAt,
        },
        { onConflict: 'id' },
      );

      if (error) {
        console.error('Failed to upsert profile on sign-in:', error.message);
      }

      return true;
    },

    /**
     * Database sessions only forward id/name/email/image by default - add
     * the user id explicitly so the dashboard can look up profile/purchase
     * data without a second round-trip to resolve it from the email.
     */
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    // Send sign-in errors back to the landing page instead of NextAuth's
    // default error page, since that's the only public entry point we have.
    error: '/',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
