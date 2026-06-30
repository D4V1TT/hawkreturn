'use client';

import { useState, type FormEvent } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [validationError, setValidationError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !EMAIL_REGEX.test(email.trim()) || !message.trim()) {
      setValidationError('Please fill in all fields with a valid email.');
      return;
    }

    setValidationError('');
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-border bg-surface p-7 text-center">
        <p className="font-medium text-accent">
          Thanks for reaching out - we&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-emphasis">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={status === 'submitting'}
          className="w-full rounded-xl border border-white/12 bg-surface-inset px-4 py-3 text-[15.5px] text-white outline-none transition placeholder:text-white/40 focus:border-accent focus:shadow-[0_0_0_3px_rgba(46,224,107,0.15)] disabled:opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-emphasis">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'submitting'}
          className="w-full rounded-xl border border-white/12 bg-surface-inset px-4 py-3 text-[15.5px] text-white outline-none transition placeholder:text-white/40 focus:border-accent focus:shadow-[0_0_0_3px_rgba(46,224,107,0.15)] disabled:opacity-50"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-emphasis">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          disabled={status === 'submitting'}
          className="w-full resize-none rounded-xl border border-white/12 bg-surface-inset px-4 py-3 text-[15.5px] text-white outline-none transition placeholder:text-white/40 focus:border-accent focus:shadow-[0_0_0_3px_rgba(46,224,107,0.15)] disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-xl bg-accent px-6 py-3.5 text-[15.5px] font-bold text-accent-on shadow-[0_6px_22px_rgba(46,224,107,0.3)] transition hover:-translate-y-px hover:bg-accent-hover disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>
      {validationError && <p className="text-sm text-red-400">{validationError}</p>}
      {status === 'error' && <p className="text-sm text-red-400">Something went wrong. Try again.</p>}
    </form>
  );
}
