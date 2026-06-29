import Link from 'next/link';
import WaitlistForm from '@/components/WaitlistForm';

const problemCards = [
  {
    title: 'You bought it. You forgot it.',
    body: 'The average shopper loses $150/year to missed return windows.',
  },
  {
    title: 'The window closes quietly.',
    body: "Retailers don't remind you. They benefit when you forget.",
  },
  {
    title: 'You do nothing. We watch.',
    body: 'Connect Gmail once. We handle the rest.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Connect your Gmail',
    body: 'Read-only access — we never send emails on your behalf.',
  },
  {
    number: '2',
    title: 'We scan your inbox',
    body: 'We find order confirmations and extract return deadlines automatically.',
  },
  {
    number: '3',
    title: 'You get reminded',
    body: 'An email reminder lands 7 days before, 2 days before, and day-of.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="px-6 py-6 sm:px-12">
        <span className="text-lg font-bold">
          Hawk<span className="text-accent">Return</span>
        </span>
      </header>

      <main className="flex flex-1 flex-col">
        {/* HERO */}
        <section className="px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Stop losing money to missed return windows.
            </h1>
            <p className="mt-6 text-lg text-white/70">
              HawkReturn connects to your Gmail, finds every order confirmation, and
              alerts you before return deadlines expire. Automatic. Zero manual work.
            </p>
            <WaitlistForm className="mx-auto mt-10 max-w-md" />
            <p className="mt-4 text-sm text-white/50">
              Free during beta. No credit card needed.
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="px-6 py-20 sm:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-3">
              {problemCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-3 text-white/60">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 py-20 sm:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold">How it works</h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="text-center sm:text-left">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent font-semibold sm:mx-0">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-white/60">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAITLIST (repeat) */}
        <section className="px-6 py-20 sm:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Join 400+ people on the waitlist</h2>
            <WaitlistForm className="mx-auto mt-8 max-w-md" />
          </div>
        </section>
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
