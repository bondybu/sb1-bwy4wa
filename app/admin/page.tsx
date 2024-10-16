"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login');
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Manage Listicles</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/admin/listicles')} className="w-full">
              Go to Listicles
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Manage Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/admin/items')} className="w-full">
              Go to Items
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Manage Sites</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/admin/sites')} className="w-full">
              Go to Sites
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>View Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/admin/analytics')} className="w-full">
              Go to Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}