import Image from 'next/image';
import Link from 'next/link';

const productLinks = [
  { href: '/#how', label: 'How it works' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#join', label: 'Join the waitlist' },
];

const learnLinks = [
  { href: '/never-miss-a-return-window', label: 'Never miss a return window' },
  { href: '/how-return-windows-work', label: 'How return windows work' },
  { href: '/store-return-policies', label: 'Store return policies' },
];

const companyLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/security', label: 'Security' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-[#0a0b0b]">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-4 sm:px-8">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <Image
              src="/logo-icon.jpg"
              alt="HawkReturn logo"
              width={28}
              height={28}
              className="rounded-md"
              style={{ mixBlendMode: 'screen' }}
            />
            <span className="font-display text-base font-extrabold text-white">
              Hawk<span className="text-accent">Return</span>
            </span>
          </div>
          <p className="max-w-[260px] text-sm leading-relaxed text-text-muted">
            Automatic return-deadline reminders for your online orders. Never lose money to a
            forgotten return window again.
          </p>
        </div>

        <FooterColumn title="Product" links={productLinks} />
        <FooterColumn title="Learn" links={learnLinks} />
        <FooterColumn title="Company" links={companyLinks} />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 border-t border-border px-6 py-4 text-sm text-text-muted sm:flex-row sm:px-8">
        <span>HawkReturn © 2026</span>
        <span>Made for people who forget to return things.</span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
        {title}
      </div>
      <div className="flex flex-col gap-2.5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-text-body transition hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
