import React from 'react';
import Link from './Link';

export default function Navbar() {
  return (
    <div className="top-0 w-full h-16 border-b border-gray-700 flex items-center justify-between py-4 px-6">
      <div className="font-semibold">TRPC OpenAPI Demo</div>
      <div className="space-x-3">
        <Link href={process.env.NEXT_PUBLIC_TRPC_BASE_URL!}>API Spec</Link>
        <Link href="/retrieve">Retrieve</Link>
        <Link href="/create">Create</Link>
        <Link href="/list">List</Link>
      </div>
    </div>
  );
}
