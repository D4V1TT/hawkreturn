'use client';

import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';

export default function AuthButton() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-on shadow-[0_4px_18px_rgba(46,224,107,0.25)] transition hover:-translate-y-px hover:bg-accent-hover"
      >
        Go to Dashboard
      </Link>
    );
  }

  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text-emphasis transition hover:border-border-accent hover:text-white"
    >
      Sign In
    </button>
  );
}
