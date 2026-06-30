'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text-emphasis transition hover:border-border-accent hover:text-white"
    >
      Sign out
    </button>
  );
}
