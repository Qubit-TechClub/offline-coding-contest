'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('handle');
    if (token && name) {
      setIsLoggedIn(true);
      setUsername(name);
    }
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-white dark:bg-gray-800">
      <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-300">PWIOI</Link>

      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/contests">Contests</Link>
        <Link href="/leaderboard">Leaderboard</Link>

        {isLoggedIn ? (
          <>
            <Link href="/my-contests">My Contests</Link>
            <span className="text-sm text-gray-500 dark:text-gray-300">Hi, {username}</span>
            <button
              className="text-red-500 hover:underline"
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('handle');
                location.reload();
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Enter</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
