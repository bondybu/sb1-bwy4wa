import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to{' '}
        <span className="text-primary">
          Listicle Comparison
        </span>
      </h1>

      <p className="text-xl mb-8 text-muted-foreground">
        Create and compare listicles with ease
      </p>

      <div className="flex justify-center space-x-4">
        <Link href="/login" passHref>
          <Button size="lg">Login</Button>
        </Link>
        <Link href="/admin" passHref>
          <Button variant="outline" size="lg">Admin Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}