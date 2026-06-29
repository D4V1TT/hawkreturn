import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col flex-1">
      <header className="px-6 py-6 sm:px-12">
        <Link href="/" className="text-lg font-bold">
          Hawk<span className="text-accent">Return</span>
        </Link>
      </header>

      <main className="flex-1 px-6 py-12 sm:px-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-white/50">Last updated: June 2026</p>

          <div className="mt-10 space-y-10 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white">What we collect</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Read-only access to your Gmail inbox, used to find order confirmation emails.</li>
                <li>Your email address and name, from your Google account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">What we do with it</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Extract return deadlines from order confirmation emails.</li>
                <li>Send you reminder notifications before those deadlines expire.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">What we don&apos;t do</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>We never store the content of your emails.</li>
                <li>We never share your data with third parties.</li>
                <li>We never sell your data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Gmail access</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>We request read-only access - we can never send, delete, or modify your emails.</li>
                <li>We only read order confirmation emails to extract return deadlines.</li>
                <li>You can revoke our access at any time from your Google account settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Data storage</h2>
              <p className="mt-4">
                Return deadlines and purchase information are stored in Supabase and encrypted at
                rest.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p className="mt-4">
                Questions about this policy? Email us at{' '}
                <a href="mailto:hello@hawkreturn.com" className="text-accent hover:underline">
                  hello@hawkreturn.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 sm:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-white/50 sm:flex-row">
          <span>HawkReturn © 2026</span>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
