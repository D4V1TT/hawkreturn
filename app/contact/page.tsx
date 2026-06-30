import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the HawkReturn team.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="px-6 py-14 sm:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Contact
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-text-body">
            Questions, feedback, or a bug to report? Email us directly at{' '}
            <a href="mailto:hello@hawkreturn.com" className="text-accent hover:underline">
              hello@hawkreturn.com
            </a>{' '}
            or use the form below.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
