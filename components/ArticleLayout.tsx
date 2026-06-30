import type { ReactNode } from 'react';
import PageShell from './PageShell';
import WaitlistForm from './WaitlistForm';

export function ArticleJsonLd({
  headline,
  description,
  url,
}: {
  headline: string;
  description: string;
  url: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: { '@type': 'Organization', name: 'HawkReturn' },
    publisher: { '@type': 'Organization', name: 'HawkReturn' },
    mainEntityOfPage: url,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export default function ArticleLayout({
  eyebrow,
  title,
  lead,
  children,
  ctaSource,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
  ctaSource: string;
}) {
  return (
    <PageShell>
      <article className="px-6 py-14 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            {eyebrow}
          </div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-text-body">{lead}</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-body [&_h2]:font-display [&_h2]:mb-3 [&_h2]:mt-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_strong]:text-text-emphasis [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5">
            {children}
          </div>

          <div className="mt-14 rounded-2xl border border-accent/25 bg-gradient-to-b from-accent/[0.08] to-accent/[0.02] p-7 text-center sm:p-9">
            <h2 className="font-display mb-2 text-2xl font-extrabold text-white">
              Never miss a return window again.
            </h2>
            <p className="mb-6 text-sm text-text-body">
              Join the waitlist and HawkReturn will track every deadline for you, automatically.
            </p>
            <WaitlistForm className="mx-auto max-w-md" source={ctaSource} align="center" />
          </div>
        </div>
      </article>
    </PageShell>
  );
}
