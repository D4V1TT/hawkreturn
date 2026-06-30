import type { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
