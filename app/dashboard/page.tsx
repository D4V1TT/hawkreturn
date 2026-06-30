import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import PageShell from '@/components/PageShell';
import SignOutButton from '@/components/SignOutButton';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // Protected page - bounce signed-out visitors back to the landing page
  // rather than rendering an empty/broken dashboard.
  if (!session) {
    redirect('/');
  }

  return (
    <PageShell>
      <div className="px-6 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Welcome {session.user?.name ?? session.user?.email}
            </h1>
            <SignOutButton />
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-10 text-center text-text-body">
            Your purchases will appear here.
          </div>
        </div>
      </div>
    </PageShell>
  );
}
