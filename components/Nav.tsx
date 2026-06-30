import Link from 'next/link';
import Logo from './Logo';
import AuthButton from './AuthButton';

export default function Nav({ showAuthButton = false }: { showAuthButton?: boolean }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/55 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Logo size={36} />
        <div className="flex items-center gap-6">
          <Link
            href="/#how"
            className="hidden text-sm font-medium text-text-body transition hover:text-foreground sm:inline"
          >
            How it works
          </Link>
          <Link
            href="/#faq"
            className="hidden text-sm font-medium text-text-body transition hover:text-foreground sm:inline"
          >
            FAQ
          </Link>
          {showAuthButton ? (
            <AuthButton />
          ) : (
            <Link
              href="/#join"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-on shadow-[0_4px_18px_rgba(46,224,107,0.25)] transition hover:-translate-y-px hover:bg-accent-hover"
            >
              Join waitlist
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
