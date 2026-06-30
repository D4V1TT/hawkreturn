import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { LegalSection, LegalList } from '@/components/LegalSection';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How HawkReturn collects, uses, and protects your data, including our Gmail read-only access and Google API Limited Use compliance.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <div className="px-6 py-14 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-text-muted">Effective date: July 1, 2026</p>
          <p className="mt-6 text-[15px] leading-relaxed text-text-body">
            HawkReturn (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a product that helps
            online shoppers track return deadlines. This Privacy Policy explains what information
            we collect, how we use it, and your rights over it.
          </p>

          <div className="mt-10 space-y-10">
            <LegalSection title="1. Information we collect">
              <p>
                <strong className="text-text-emphasis">Google account information.</strong> When
                you sign in with Google, we receive your name and email address from
                Google&apos;s authentication service.
              </p>
              <p>
                <strong className="text-text-emphasis">Gmail data.</strong> With your explicit
                permission, HawkReturn accesses your Gmail inbox using read-only scope. We scan
                emails for order confirmations and shipping notifications from online retailers.
                We extract only the following data points from those emails: retailer name,
                estimated delivery date, and any return window information. We do not read,
                store, index, or process any other email content.
              </p>
              <p>
                <strong className="text-text-emphasis">Account data.</strong> We store your email
                address, the purchases we&apos;ve detected, their return deadlines, and your
                notification preferences.
              </p>
              <p>
                <strong className="text-text-emphasis">Usage data.</strong> We collect basic usage
                logs (pages visited, features used) to improve the product. We do not sell this
                data.
              </p>
            </LegalSection>

            <LegalSection title="2. How we use your information">
              <p>We use your information solely to:</p>
              <LegalList
                items={[
                  'Identify online purchases from your Gmail inbox',
                  'Calculate return window deadlines per retailer',
                  'Send you reminder emails before deadlines close',
                  'Maintain and improve the HawkReturn service',
                  'Communicate with you about your account',
                ]}
              />
              <p>
                We do not use your data for advertising, profiling, or any purpose unrelated to
                return deadline tracking.
              </p>
            </LegalSection>

            <LegalSection title="3. Google API Limited Use disclosure">
              <p>
                HawkReturn&apos;s use of information received from Google APIs adheres to the{' '}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  className="text-accent hover:underline"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
              <p>Specifically:</p>
              <LegalList
                items={[
                  'We only use Gmail data to provide the return tracking service you signed up for',
                  'We do not transfer Gmail data to third parties except as necessary to provide the service',
                  'We do not use Gmail data for serving advertisements',
                  'We do not allow humans to read your Gmail data unless you have given explicit permission, it is necessary for security purposes, or we are required to by law',
                ]}
              />
            </LegalSection>

            <LegalSection title="4. Data sharing">
              <p>
                We do not sell your personal data. We do not share your personal data with
                advertisers.
              </p>
              <p>We share data with the following service providers, solely to operate HawkReturn:</p>
              <LegalList
                items={[
                  'Supabase - database storage (encrypted at rest)',
                  'Resend - sending reminder emails to you',
                  'Vercel - hosting the application',
                  'Google LLC - authentication and Gmail access',
                ]}
              />
              <p>Each provider is bound by their own data processing terms.</p>
            </LegalSection>

            <LegalSection title="5. Data retention">
              <p>
                We retain your account data for as long as your account is active. If you delete
                your account or disconnect Gmail access, we delete your associated data within 30
                days.
              </p>
            </LegalSection>

            <LegalSection title="6. Your rights">
              <p>You have the right to:</p>
              <LegalList
                items={[
                  'Access the personal data we hold about you',
                  'Request correction of inaccurate data',
                  'Request deletion of your data',
                  'Withdraw Gmail access at any time via your Google Account permissions',
                  'Object to our processing of your data',
                ]}
              />
              <p>
                To exercise any of these rights, email us at{' '}
                <a href="mailto:hello@hawkreturn.com" className="text-accent hover:underline">
                  hello@hawkreturn.com
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="7. Security">
              <p>
                We use industry-standard security practices including TLS encryption in transit,
                encryption at rest, and access controls. See our{' '}
                <a href="/security" className="text-accent hover:underline">
                  Security
                </a>{' '}
                page for details.
              </p>
            </LegalSection>

            <LegalSection title="8. Children">
              <p>
                HawkReturn is not directed at children under 13. We do not knowingly collect data
                from children under 13. If you believe we have, please contact us.
              </p>
            </LegalSection>

            <LegalSection title="9. Changes to this policy">
              <p>
                We may update this policy as the product evolves. We will notify you by email of
                material changes. Continued use of HawkReturn after changes constitutes
                acceptance.
              </p>
            </LegalSection>

            <LegalSection title="10. Contact">
              <p>
                Questions about this policy:{' '}
                <a href="mailto:hello@hawkreturn.com" className="text-accent hover:underline">
                  hello@hawkreturn.com
                </a>
              </p>
            </LegalSection>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
