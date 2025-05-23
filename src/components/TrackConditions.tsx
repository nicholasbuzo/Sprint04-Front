import React, { useEffect, useState } from 'react';
import { TrackCondition } from '../services/api';
import { trainApi } from '../services/api';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const conditionColors = {
  good: 'bg-green-100 text-green-800',
  fair: 'bg-blue-100 text-blue-800',
  poor: 'bg-yellow-100 text-yellow-800',
  critical: 'bg-red-100 text-red-800',
};

export const TrackConditions: React.FC = () => {
  const [conditions, setConditions] = useState<TrackCondition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConditions = async () => {
      try {
        const data = await trainApi.getTrackConditions();
        setConditions(data);
        setError(null);
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Erro ao carregar condições dos trilhos';
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchConditions();
    const interval = setInterval(fetchConditions, 300000); // Atualiza a cada 5 minutos

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <ExclamationCircleIcon className="h-8 w-8 mx-auto mb-2" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold mb-4">Condições dos Trilhos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {conditions.map((condition) => (
          <div
            key={condition.id}
            className={`rounded-lg shadow-md p-4 ${conditionColors[condition.condition]}`}
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{condition.section}</h3>
              <p className="text-sm">
                <span className="font-medium">Condição:</span> {condition.condition}
              </p>
              <p className="text-sm">
                <span className="font-medium">Última Inspeção:</span>{' '}
                {new Date(condition.lastInspection).toLocaleDateString()}
              </p>
              <p className="text-sm">
                <span className="font-medium">Próxima Inspeção:</span>{' '}
                {new Date(condition.nextInspection).toLocaleDateString()}
              </p>
              {condition.notes && (
                <p className="text-sm">
                  <span className="font-medium">Observações:</span> {condition.notes}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 