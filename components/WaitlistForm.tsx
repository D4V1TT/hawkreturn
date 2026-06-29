'use client';

import { useState, type FormEvent } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error';

export default function WaitlistForm({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [validationError, setValidationError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email.trim())) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setValidationError('');
    setStatus('submitting');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'landing_page' }),
      });

      if (res.status === 201) {
        setStatus('success');
      } else if (res.status === 409) {
        setStatus('duplicate');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className={`text-accent font-medium ${className}`}>
        You&apos;re on the list! We&apos;ll email you when we launch.
      </p>
    );
  }

  if (status === 'duplicate') {
    return <p className={`text-accent font-medium ${className}`}>You&apos;re already on the list!</p>;
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={status === 'submitting'}
          className="flex-1 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-md bg-accent px-6 py-3 font-semibold text-black transition hover:bg-accent/90 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      {validationError && <p className="mt-2 text-sm text-red-400">{validationError}</p>}
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-400">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
