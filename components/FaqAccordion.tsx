const faqs = [
  {
    q: 'How does HawkReturn know my return deadlines?',
    a: "It reads your order confirmation emails, identifies the retailer, and applies that store's return policy to calculate the exact date your window closes - no input from you.",
  },
  {
    q: 'Is my Gmail data safe?',
    a: 'Yes. HawkReturn uses read-only access, never sends email on your behalf, never sells your data, and lets you disconnect with one click at any time.',
  },
  {
    q: 'How much does it cost?',
    a: "HawkReturn is free during the beta and there's no credit card required to join the waitlist.",
  },
  {
    q: 'Which stores does it support?',
    a: "It works with order confirmations from most major online retailers, and we're constantly expanding coverage of store return policies during the beta.",
  },
  {
    q: 'Do I have to do anything after connecting?',
    a: 'No. You shop exactly how you already do. HawkReturn runs in the background and only reaches out when a return window is about to close.',
  },
];

export function getFaqs() {
  return faqs;
}

export default function FaqAccordion() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {faqs.map((faq) => (
        <details
          key={faq.q}
          className="rounded-2xl border border-border bg-surface px-5 py-1"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-white">
            {faq.q}
            <span className="text-xl font-normal text-accent">+</span>
          </summary>
          <p className="pb-4 text-[14.5px] leading-relaxed text-text-body">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
