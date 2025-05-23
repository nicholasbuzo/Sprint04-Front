'use client';

import { Toaster } from 'react-hot-toast';
import { TrainStatus } from '../components/TrainStatus';
import { TrackIssues } from '../components/TrackIssues';
import { TrackConditions } from '../components/TrackConditions';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sistema de Monitoramento CPTM
        </h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Status das Linhas</h2>
          <TrainStatus />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Problemas Reportados</h2>
          <TrackIssues />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Condições dos Trilhos</h2>
          <TrackConditions />
        </section>
      </div>
    </main>
  );
}