import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo-icon.jpg"
        alt="HawkReturn logo"
        width={size}
        height={size}
        className="rounded-lg"
        style={{ mixBlendMode: 'screen' }}
      />
      <span className="font-display text-lg font-extrabold tracking-tight text-white">
        Hawk<span className="text-accent">Return</span>
      </span>
    </Link>
  );
}
