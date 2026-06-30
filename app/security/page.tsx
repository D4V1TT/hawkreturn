import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { LegalSection } from '@/components/LegalSection';

export const metadata: Metadata = {
  title: 'Security',
  description:
    'How HawkReturn protects your Gmail access: read-only minimal scope, encryption in transit and at rest, and Google OAuth verification.',
  alternates: { canonical: '/security' },
};

export default function SecurityPage() {
  return (
    <PageShell>
      <div className="px-6 py-14 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Security
          </h1>
          <p className="mt-3 text-sm text-text-muted">Last updated: July 1, 2026</p>
          <p className="mt-6 text-[15px] leading-relaxed text-text-body">
            Connecting your Gmail inbox is a significant ask. This page explains exactly how we
            protect that trust.
          </p>

          <div className="mt-10 space-y-10">
            <LegalSection title="Read-only, minimum scope">
              <p>
                HawkReturn requests the narrowest Gmail permission available - read-only access
                limited to identifying order and shipping emails. We cannot send email on your
                behalf, delete messages, or modify anything in your inbox. We do not request
                access to Google Drive, Calendar, or any other Google service.
              </p>
            </LegalSection>

            <LegalSection title="What we access vs. what we store">
              <p>
                We access order confirmation and shipping emails to extract return-relevant data.
                We store only: retailer name, detected delivery date, calculated return deadline,
                and your email address. We do not store email bodies, subject lines, sender
                addresses, or any other email content.
              </p>
            </LegalSection>

            <LegalSection title="Encryption">
              <p>
                All data transmitted between your browser and HawkReturn is encrypted using TLS
                (HTTPS). Data stored in our database is encrypted at rest. Your Google OAuth
                tokens are stored encrypted and are never exposed to the client browser.
              </p>
            </LegalSection>

            <LegalSection title="Access controls">
              <p>
                Access to production systems and user data is restricted to authorized personnel
                only. We follow the principle of least privilege - no person or system has access
                beyond what is strictly required.
              </p>
            </LegalSection>

            <LegalSection title="Google OAuth verification">
              <p>
                HawkReturn has undergone Google&apos;s OAuth verification process. We request only
                verified, approved scopes and comply fully with the Google API Services User Data
                Policy and its Limited Use requirements.
              </p>
            </LegalSection>

            <LegalSection title="Revoking access">
              <p>
                You can disconnect HawkReturn from your Google account at any time via Google
                Account &rarr; Security &rarr; Third-party access. Revoking access immediately
                stops all future inbox scanning. You can also delete your account and all
                associated data by emailing us.
              </p>
            </LegalSection>

            <LegalSection title="Incident response">
              <p>
                In the event of a data breach that affects your personal information, we will
                notify affected users within 72 hours of becoming aware of it, as required by
                applicable law.
              </p>
            </LegalSection>

            <LegalSection title="Reporting a vulnerability">
              <p>
                If you discover a security vulnerability in HawkReturn, please report it
                responsibly to{' '}
                <a href="mailto:hello@hawkreturn.com" className="text-accent hover:underline">
                  hello@hawkreturn.com
                </a>
                . Do not disclose it publicly until we have had a reasonable opportunity to
                address it. We take all reports seriously and will respond within 48 hours.
              </p>
            </LegalSection>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
