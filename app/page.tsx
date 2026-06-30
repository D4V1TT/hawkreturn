import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import WaitlistForm from '@/components/WaitlistForm';
import FaqAccordion from '@/components/FaqAccordion';

const waitlistCount = 400;

const problemCards = [
  {
    stat: '$150',
    unit: '/yr',
    title: 'You bought it. You forgot it.',
    body: 'The average shopper loses around $150 a year to return windows that quietly slipped past.',
  },
  {
    stat: '30',
    unit: ' days',
    title: 'The window closes quietly.',
    body: 'Retailers rarely remind you a deadline is near. They benefit every single time you forget.',
  },
  {
    stat: '0',
    unit: ' effort',
    title: 'You do nothing. We watch.',
    body: 'Connect Gmail once and HawkReturn handles the tracking from then on. No spreadsheets, no calendar.',
  },
];

const deadlines = [
  { tag: 'BB', item: 'Sony WH-1000XM5 Headphones', store: 'Best Buy', by: 'Jul 3', left: '2 days', urgent: true },
  { tag: 'AM', item: 'Anker 737 Power Bank', store: 'Amazon', by: 'Jul 9', left: '8 days', urgent: false },
  { tag: 'NK', item: 'Nike Pegasus 41, Size 10', store: 'Nike', by: 'Jul 18', left: '17 days', urgent: false },
  { tag: 'UQ', item: 'Merino Crew Sweater', store: 'Uniqlo', by: 'Jul 22', left: '21 days', urgent: false },
];

const steps = [
  {
    number: '1',
    title: 'Connect your Gmail',
    body: 'Secure, read-only access in two clicks. We never send email on your behalf - ever.',
  },
  {
    number: '2',
    title: 'We scan your inbox',
    body: 'HawkReturn finds order confirmations and works out each return deadline automatically.',
  },
  {
    number: '3',
    title: 'You get reminded',
    body: 'A reminder lands at the moments that matter, so the choice is always still yours.',
  },
];

const diyPoints = [
  'Set a calendar alert for every single order',
  "Look up each retailer's return policy by hand",
  'Remember to do it the moment you buy',
  'One slip and the refund is gone',
];

const hawkReturnPoints = [
  'Connect once - tracking starts automatically',
  'Return policies applied for you, per store',
  'Nothing to remember, nothing to enter',
  'Reminders before every window closes',
];

const trustPoints = [
  {
    title: 'Read-only access',
    body: 'We can never send, delete, or change anything in your mailbox.',
  },
  {
    title: 'Never sold, never shared',
    body: "Your data isn't a product. We don't sell it to anyone.",
  },
  {
    title: 'Disconnect anytime',
    body: 'One click revokes access and removes your data. No questions.',
  },
  {
    title: 'Google-verified scopes',
    body: 'We request the minimum permissions needed and nothing more.',
  },
];

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HawkReturn',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  description:
    "HawkReturn connects to your Gmail, automatically finds order confirmation emails, calculates each purchase's return deadline, and emails you reminders before the return window closes.",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does HawkReturn know my return deadlines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "HawkReturn reads your order confirmation emails, identifies the retailer, and applies that retailer's return policy to calculate the exact date your return window closes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is my Gmail data safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. HawkReturn requests read-only access, never sends email on your behalf, never sells your data, and you can disconnect with one click at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does HawkReturn cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HawkReturn is free during the beta and requires no credit card to join the waitlist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which stores does it support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HawkReturn works with order confirmations from most major online retailers and is constantly expanding its coverage of store return policies.',
      },
    },
  ],
};

export default function Home() {
  return (
    <div id="top" className="relative flex flex-1 flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div
        aria-hidden
        className="hr-glow pointer-events-none absolute -top-44 left-1/2 z-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[20px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(46,224,107,.16), rgba(46,224,107,0))',
        }}
      />

      <Nav />

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-6 sm:px-8">
        {/* HERO */}
        <header className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-accent bg-accent/[0.07] px-3.5 py-1.5 text-[13px] font-medium text-accent-soft">
              <span className="hr-pulse h-1.5 w-1.5 rounded-full bg-accent" />
              Now in private beta
            </div>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Stop losing money to <span className="text-accent">missed return</span> windows.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-body">
              Connect your Gmail once. HawkReturn quietly finds every order confirmation,
              figures out each return deadline, and emails you before the window closes.{' '}
              <span className="text-text-emphasis">You shop how you always do.</span>
            </p>
            <WaitlistForm className="mt-8 max-w-lg" source="landing_hero" />
            <div className="mt-5 flex flex-wrap items-center gap-4 text-[13.5px] text-text-muted">
              <span>Free during beta &middot; No credit card</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Read-only Gmail access</span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="hr-float relative">
            <div className="absolute -inset-px top-6 -left-1 rounded-2xl border border-accent/10 bg-accent/[0.06]" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101413] shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-1.5 border-b border-white/[0.07] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-text-muted">New message</span>
              </div>
              <div className="px-5 pb-2 pt-5">
                <div className="mb-3.5 flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/30 bg-accent/[0.12] text-sm font-extrabold text-accent">
                    HR
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">HawkReturn</div>
                    <div className="text-xs text-text-muted">reminders@hawkreturn.com</div>
                  </div>
                  <span className="ml-auto text-[11.5px] text-text-muted">now</span>
                </div>
                <div className="font-display mb-1.5 text-[17px] font-bold tracking-tight text-white">
                  Your Sony headphones return closes in 2 days
                </div>
                <p className="mb-4 text-[13.5px] leading-relaxed text-text-body">
                  Heads up - your return window for the{' '}
                  <span className="text-text-emphasis">Sony WH-1000XM5</span> from Best Buy ends{' '}
                  <span className="text-text-emphasis">Fri, Jul 3</span>. Don&apos;t want it? Start
                  the return before it&apos;s too late.
                </p>
                <div className="mb-4 flex items-center justify-between rounded-xl border border-white/[0.07] bg-surface-inset px-4 py-3.5">
                  <div>
                    <div className="mb-0.5 text-xs text-text-muted">Refund at risk</div>
                    <div className="font-display text-[22px] font-extrabold text-white">
                      $398.00
                    </div>
                  </div>
                  <span className="rounded-full border border-warning/25 bg-warning/[0.12] px-3 py-1.5 text-xs font-semibold text-warning">
                    2 days left
                  </span>
                </div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-accent px-4.5 py-2.5 text-[13.5px] font-bold text-accent-on">
                  View return details &rarr;
                </div>
              </div>
            </div>
          </ScrollReveal>
        </header>

        {/* PROBLEM */}
        <ScrollReveal className="py-16">
          <div className="mx-auto mb-11 max-w-xl text-center">
            <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              The quiet money leak
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
              Return windows are designed to be forgotten.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-surface p-7 transition hover:-translate-y-1 hover:border-border-accent"
              >
                <div className="font-display mb-2.5 text-[34px] font-extrabold text-accent">
                  {card.stat}
                  <span className="text-[17px] text-text-muted">{card.unit}</span>
                </div>
                <div className="mb-1.5 text-base font-semibold text-white">{card.title}</div>
                <p className="text-sm leading-relaxed text-text-body">{card.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* PRODUCT PREVIEW */}
        <ScrollReveal className="py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Every deadline, in one place
              </div>
              <h2 className="font-display mb-4 text-[34px] font-extrabold leading-tight tracking-tight text-white">
                See exactly what you can still send back.
              </h2>
              <p className="mb-5 text-base leading-relaxed text-text-body">
                HawkReturn builds a live list of your purchases and counts down each return
                window - so a decision is never made for you by a date you didn&apos;t notice.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Deadlines sorted by what's closing soonest",
                  "The refund amount you'd lose, per item",
                  "Pulled straight from your inbox - nothing to enter",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[15px] text-text-emphasis">
                    <span className="mt-0.5 text-accent">&#10003;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-surface shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <span className="font-display text-[15px] font-bold text-white">
                  Your return windows
                </span>
                <span className="text-xs text-text-muted">4 open &middot; 1 closing soon</span>
              </div>
              {deadlines.map((row) => (
                <div
                  key={row.item}
                  className="flex items-center gap-3.5 border-b border-white/[0.05] px-5 py-3.5 last:border-b-0"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-[#161a18] text-[13px] font-bold text-text-emphasis">
                    {row.tag}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium text-foreground">{row.item}</div>
                    <div className="text-xs text-text-muted">
                      {row.store} &middot; Return by {row.by}
                    </div>
                  </div>
                  <span
                    className={`whitespace-nowrap rounded-full border px-2.5 py-1.5 text-xs font-semibold ${
                      row.urgent
                        ? 'border-warning/25 bg-warning/[0.12] text-warning'
                        : 'border-white/[0.07] bg-accent/10 text-accent-soft'
                    }`}
                  >
                    {row.left}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* HOW IT WORKS */}
        <ScrollReveal id="how" className="scroll-mt-20 py-16">
          <div className="mb-12 text-center">
            <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              How it works
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
              Three steps. Then never think about it again.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-border bg-gradient-to-b from-[#0f1312] to-[#0c0f0e] p-7"
              >
                <div className="font-display mb-5 grid h-11 w-11 place-items-center rounded-xl border border-accent/35 bg-accent/[0.06] text-lg font-extrabold text-accent">
                  {step.number}
                </div>
                <h3 className="font-display mb-2 text-[19px] font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-text-body">{step.body}</p>
                {step.number === '3' && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {['7 days out', '2 days out', 'Day of'].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* COMPARISON */}
        <ScrollReveal className="py-16">
          <div className="mb-10 text-center">
            <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Why not just track it yourself?
            </div>
            <h2 className="font-display text-[34px] font-extrabold tracking-tight text-white">
              The manual way always breaks down.
            </h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-[#0c0d0d] p-7">
              <div className="mb-4.5 text-base font-bold text-text-body">Doing it yourself</div>
              <ul className="flex flex-col gap-3">
                {diyPoints.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[14.5px] text-[#8b938f]">
                    <span className="text-red-400">&#10007;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/[0.08] to-accent/[0.02] p-7 shadow-[0_0_40px_rgba(46,224,107,0.08)]">
              <div className="mb-4.5 text-base font-bold text-accent">With HawkReturn</div>
              <ul className="flex flex-col gap-3">
                {hawkReturnPoints.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[14.5px] text-[#dfe5e2]">
                    <span className="text-accent">&#10003;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* TRUST */}
        <ScrollReveal className="py-16">
          <div className="rounded-3xl border border-border bg-gradient-to-b from-[#0e1211] to-[#0a0c0b] p-8 sm:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  Privacy first
                </div>
                <h2 className="font-display mb-3 text-[30px] font-extrabold leading-tight tracking-tight text-white">
                  Your inbox stays yours.
                </h2>
                <p className="text-[15px] leading-relaxed text-text-body">
                  HawkReturn only ever reads what it needs to find your return deadlines - and you
                  stay in control the whole time.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-xl border border-white/[0.06] bg-surface-inset p-4.5"
                  >
                    <div className="mb-1.5 text-[14.5px] font-semibold text-white">
                      {point.title}
                    </div>
                    <p className="text-[13px] leading-relaxed text-[#8b938f]">{point.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal id="faq" className="scroll-mt-20 py-16">
          <div className="mb-10 text-center">
            <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Questions
            </div>
            <h2 className="font-display text-[36px] font-extrabold tracking-tight text-white">
              Good questions to ask first.
            </h2>
          </div>
          <FaqAccordion />
        </ScrollReveal>

        {/* FINAL CTA */}
        <ScrollReveal id="join" className="scroll-mt-20 py-16">
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-b from-[#0f1413] to-[#0a0c0b] px-6 py-14 text-center sm:px-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-28 left-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full blur-[10px]"
              style={{
                background: 'radial-gradient(closest-side, rgba(46,224,107,.16), transparent)',
              }}
            />
            <div className="relative">
              <h2 className="font-display mb-3.5 text-[32px] font-extrabold leading-tight tracking-tight text-white sm:text-[42px]">
                Join {waitlistCount}+ people
                <br />
                who stopped losing refunds.
              </h2>
              <p className="mx-auto mb-7 max-w-md text-base text-text-body sm:text-[17px]">
                Get early access while it&apos;s free. Connect Gmail once and never miss a return
                window again.
              </p>
              <WaitlistForm className="mx-auto max-w-md" source="landing_cta" align="center" />
              <p className="mt-4 text-[13px] text-text-muted">
                Free during beta &middot; No credit card &middot; Read-only Gmail access
              </p>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
