import type { Metadata } from 'next';
import ArticleLayout, { ArticleJsonLd } from '@/components/ArticleLayout';

const title = 'How to never miss a return window again';
const description =
  'Why return windows get missed so easily, and a simple 4-step system to make sure you never lose a refund to a forgotten deadline.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/never-miss-a-return-window' },
};

export default function NeverMissPage() {
  return (
    <>
      <ArticleJsonLd
        headline={title}
        description={description}
        url="https://www.hawkreturn.com/never-miss-a-return-window"
      />
      <ArticleLayout
        eyebrow="Learn"
        title={title}
        lead="Return windows aren't hard to track. They're just easy to forget - because nothing in the buying experience reminds you they exist. Here's why that happens, and a simple system to fix it."
        ctaSource="learn_never_miss"
      >
        <div>
          <h2>Why return windows get missed</h2>
          <p>
            A return window doesn&apos;t announce itself. You get an order confirmation, then a
            shipping notification, then the package shows up - and that&apos;s usually the last
            you hear from the retailer about it. No reminder arrives a week before the deadline.
            No notification tells you the window is about to close. The clock just runs out
            quietly, and the retailer keeps your money.
          </p>
          <p>
            This isn&apos;t an accident. Retailers have little incentive to remind you to return
            something - every missed window is revenue they keep without having to do anything.
            The responsibility for tracking the deadline falls entirely on you, across every
            single purchase you make, from every store you shop at.
          </p>
        </div>

        <div>
          <h2>A 4-step system that actually works</h2>
          <ol>
            <li>
              <strong>Capture every order.</strong> The moment you buy something you might
              return, note it somewhere - the item, the store, and the price. If it&apos;s not
              written down, it&apos;s already at risk of being forgotten.
            </li>
            <li>
              <strong>Record the real deadline, from delivery.</strong> Most return windows start
              counting from the date the item arrives, not the date you ordered it. Look up the
              actual return policy for that retailer and calculate the real deadline from your
              delivery date, not your purchase date.
            </li>
            <li>
              <strong>Set reminders before the deadline, not on it.</strong> A reminder on the
              last day is too late if you&apos;re busy or traveling. Set alerts several days
              ahead so you have time to actually act.
            </li>
            <li>
              <strong>Decide deliberately.</strong> When the reminder hits, make an actual
              decision - keep it or return it - rather than letting the date pass by default.
            </li>
          </ol>
        </div>

        <div>
          <h2>How HawkReturn automates this</h2>
          <p>
            Doing all four steps by hand, for every order, from every store, is exactly the kind
            of repetitive tracking that&apos;s easy to abandon after a few weeks. HawkReturn
            does it automatically: it reads your order confirmation emails, calculates the real
            return deadline based on each retailer&apos;s policy, and emails you reminders before
            the window closes - so step four, the actual decision, is the only thing left for
            you to do.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
}
