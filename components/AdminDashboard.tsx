"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button onClick={() => router.push('/admin/listicles')}>
          Manage Listicles
        </Button>
        <Button onClick={() => router.push('/admin/items')}>
          Manage Items
        </Button>
        <Button onClick={() => router.push('/admin/sites')}>
          Manage Sites
        </Button>
        <Button onClick={() => router.push('/admin/analytics')}>
          View Analytics
        </Button>
      </div>
    </div>
  );
}