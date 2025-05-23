'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import { TrainStatus } from '../../components/TrainStatus';
import { TrackIssues } from '../../components/TrackIssues';
import { TrackConditions } from '../../components/TrackConditions';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Verifica se está autenticado
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1F2937',
            color: '#F3F4F6',
          },
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-400">
            Sistema de Monitoramento CPTM
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
          >
            Sair
          </button>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Status das Linhas</h2>
          <TrainStatus />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Problemas Reportados</h2>
          <TrackIssues />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Condições dos Trilhos</h2>
          <TrackConditions />
        </section>
      </div>
    </main>
  );
} 