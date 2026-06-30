'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<'idle' | 'pending' | 'revealed'>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Browser-only animation setup: hide the element right after mount so
    // server-rendered content stays visible until JS confirms motion is allowed.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhase('pending');

    const fallback = setTimeout(() => setPhase('revealed'), 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('revealed');
          clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      data-reveal
      className={`${phase === 'pending' ? 'hr-pending' : ''} ${phase === 'revealed' ? 'hr-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
