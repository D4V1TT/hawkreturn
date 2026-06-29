import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo-icon.jpg" alt="HawkReturn logo" width={32} height={32} className="rounded-full" />
      <span className="text-lg font-bold">
        Hawk<span className="text-accent">Return</span>
      </span>
    </Link>
  );
}
