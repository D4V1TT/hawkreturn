import type { Metadata } from 'next';
import ArticleLayout, { ArticleJsonLd } from '@/components/ArticleLayout';

const title = 'Store return policies, by retailer type';
const description =
  'General return policy patterns across marketplaces, electronics, apparel, and big-box retailers - with a reminder that policies change, so always verify on the store site.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/store-return-policies' },
};

export default function StoreReturnPoliciesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={title}
        description={description}
        url="https://www.hawkreturn.com/store-return-policies"
      />
      <ArticleLayout
        eyebrow="Learn"
        title={title}
        lead="Return policies aren't standardized across the industry, but they do tend to follow patterns by retailer type. Here's a general reference - not a substitute for checking the actual policy on the store's site."
        ctaSource="learn_store_policies"
      >
        <div className="rounded-xl border border-warning/25 bg-warning/[0.08] p-5 text-[14.5px] text-text-emphasis">
          <strong className="text-warning">Policies change.</strong> Return windows, exclusions,
          and fees are set by each retailer and can change at any time, including by category,
          season, and membership tier. Always verify the current policy on the store&apos;s
          website before relying on it.
        </div>

        <div>
          <h2>Online marketplaces</h2>
          <p>
            Large marketplaces typically set a baseline return window for items sold and shipped
            by the platform itself, often in the 30-day range, while third-party sellers on the
            same marketplace can set their own, sometimes shorter, policies. Always check whether
            an item is sold by the platform or by a third-party seller before assuming the
            standard policy applies.
          </p>
        </div>

        <div>
          <h2>Electronics</h2>
          <p>
            Electronics retailers commonly use shorter windows than general merchandise -
            frequently 14 to 30 days - and often apply a restocking fee on opened items,
            particularly for higher-value categories like laptops, cameras, and drones. Original
            packaging and all included accessories are usually required for a full refund.
          </p>
        </div>

        <div>
          <h2>Apparel</h2>
          <p>
            Clothing and footwear retailers tend to offer more generous windows, often 30 to 60
            days, since fit and sizing are common reasons for return. Items typically need tags
            attached and to be unworn; final-sale and clearance items are very commonly excluded
            even when the general policy is lenient.
          </p>
        </div>

        <div>
          <h2>Department stores and big-box retailers</h2>
          <p>
            Larger general retailers often have the most generous windows, sometimes extending to
            90 days or beyond for store-branded loyalty members, but they also tend to carve out
            shorter exceptions for specific categories like electronics, mattresses, or seasonal
            goods. The headline policy on the homepage is rarely the whole story - check the
            category-specific terms.
          </p>
        </div>

        <div>
          <h2>The bottom line</h2>
          <p>
            There&apos;s no substitute for checking the specific policy that applies to your
            order. HawkReturn does this automatically by identifying the retailer from your order
            confirmation and applying their current return policy to calculate your real
            deadline.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
}
