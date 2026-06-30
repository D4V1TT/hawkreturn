import type { Metadata } from 'next';
import ArticleLayout, { ArticleJsonLd } from '@/components/ArticleLayout';

const title = 'How return windows work';
const description =
  'When the return-window clock actually starts, typical window lengths by category, and the exceptions that catch people off guard.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/how-return-windows-work' },
};

export default function HowReturnWindowsWorkPage() {
  return (
    <>
      <ArticleJsonLd
        headline={title}
        description={description}
        url="https://www.hawkreturn.com/how-return-windows-work"
      />
      <ArticleLayout
        eyebrow="Learn"
        title={title}
        lead="Return policies look simple on the surface, but the details that actually matter - when the clock starts, how long you have, and what voids your return entirely - vary a lot by store and category."
        ctaSource="learn_how_it_works"
      >
        <div>
          <h2>When does the clock start?</h2>
          <p>
            This is the detail most people get wrong. Some retailers count the return window from
            your <strong>purchase or ship date</strong>; most count it from the{' '}
            <strong>delivery date</strong> - the day the package actually arrives. A &quot;30-day
            return window&quot; can mean very different actual deadlines depending on which one
            applies, especially for items that take a week or more to ship.
          </p>
        </div>

        <div>
          <h2>Typical window lengths</h2>
          <ul>
            <li>
              <strong>14 days</strong> - common for fast-moving categories like beauty,
              perishables, or items with hygiene concerns.
            </li>
            <li>
              <strong>30 days</strong> - the most common general window for apparel, electronics,
              and home goods.
            </li>
            <li>
              <strong>60-90 days</strong> - offered by some larger retailers as a customer-
              friendly policy, particularly during certain seasons.
            </li>
            <li>
              <strong>365 days</strong> - occasionally offered for specific product lines or
              membership tiers, though it&apos;s the exception rather than the rule.
            </li>
          </ul>
          <p>
            These are general ranges, not guarantees - always check the specific policy for the
            store and item you bought.
          </p>
        </div>

        <div>
          <h2>The exceptions that catch people</h2>
          <ul>
            <li>
              <strong>Holiday extensions.</strong> Many retailers extend return windows for
              items bought in late November and December, but the extension usually doesn&apos;t
              apply to purchases made earlier in the season.
            </li>
            <li>
              <strong>Final sale items.</strong> Discounted or clearance items are frequently
              excluded from returns entirely, even if the rest of the store has a generous
              policy.
            </li>
            <li>
              <strong>Condition requirements.</strong> Items have to typically be unused, with
              tags attached and original packaging intact - a return can be rejected on condition
              alone, regardless of the date.
            </li>
            <li>
              <strong>Restocking fees.</strong> Some categories, especially electronics and
              large appliances, carry a restocking fee that reduces your refund even within the
              window.
            </li>
          </ul>
        </div>

        <div>
          <h2>Why this matters</h2>
          <p>
            Because the rules differ so much by retailer and category, the safest approach is to
            check the actual policy for every purchase rather than assuming a standard window.
            HawkReturn reads your order confirmations and applies each retailer&apos;s real
            policy automatically, so you don&apos;t have to look it up yourself every time.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
}
