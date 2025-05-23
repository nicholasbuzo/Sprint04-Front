'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Login } from '../components/Login';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Verifica se já está autenticado
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [router]);

  return <Login />;
}