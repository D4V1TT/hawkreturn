'use client';

import { useState, type FormEvent } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error';

export default function WaitlistForm({
  className = '',
  source = 'landing_page',
  align = 'left',
}: {
  className?: string;
  source?: string;
  align?: 'left' | 'center';
}) {
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
        body: JSON.stringify({ email: email.trim(), source }),
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
      <p className={`font-medium text-accent ${align === 'center' ? 'text-center' : ''} ${className}`}>
        You&apos;re on the list - we&apos;ll email you when your spot opens.
      </p>
    );
  }

  if (status === 'duplicate') {
    return (
      <p className={`font-medium text-accent ${align === 'center' ? 'text-center' : ''} ${className}`}>
        You&apos;re already on the list!
      </p>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-wrap gap-2.5 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={status === 'submitting'}
          className="min-w-[220px] flex-1 rounded-xl border border-white/12 bg-surface-inset px-4 py-3.5 text-[15.5px] text-white outline-none transition placeholder:text-white/40 focus:border-accent focus:shadow-[0_0_0_3px_rgba(46,224,107,0.15)] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="whitespace-nowrap rounded-xl bg-accent px-6 py-3.5 text-[15.5px] font-bold text-accent-on shadow-[0_6px_22px_rgba(46,224,107,0.3)] transition hover:-translate-y-px hover:bg-accent-hover disabled:opacity-50"
        >
          {status === 'submitting' ? 'Joining...' : 'Join the waitlist'}
        </button>
      </form>
      {validationError && <p className="mt-2 text-sm text-red-400">{validationError}</p>}
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-400">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
