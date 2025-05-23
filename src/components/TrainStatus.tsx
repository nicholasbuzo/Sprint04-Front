import React, { useEffect, useState } from 'react';
import { TrainStatus as TrainStatusType } from '../services/api';
import { trainApi } from '../services/api';
import { ExclamationCircleIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const statusColors = {
  operational: 'bg-green-900/50 text-green-400 border border-green-500/30',
  delayed: 'bg-yellow-900/50 text-yellow-400 border border-yellow-500/30',
  maintenance: 'bg-blue-900/50 text-blue-400 border border-blue-500/30',
  suspended: 'bg-red-900/50 text-red-400 border border-red-500/30',
};

const statusIcons = {
  operational: CheckCircleIcon,
  delayed: ClockIcon,
  maintenance: ClockIcon,
  suspended: ExclamationCircleIcon,
};

export const TrainStatus: React.FC = () => {
  const [status, setStatus] = useState<TrainStatusType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await trainApi.getLinesStatus();
        setStatus(data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar status dos trens');
        toast.error('Erro ao carregar status dos trens');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Atualiza a cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 p-4">
        <ExclamationCircleIcon className="h-8 w-8 mx-auto mb-2" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {status.map((train) => {
        const StatusIcon = statusIcons[train.status];
        return (
          <div
            key={train.id}
            className={`rounded-lg shadow-lg p-4 ${statusColors[train.status]} backdrop-blur-sm`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Linha {train.line}</h3>
              <StatusIcon className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Status:</span> {train.status}
              </p>
              <p className="text-sm">
                <span className="font-medium">Próxima Estação:</span> {train.nextStation}
              </p>
              <p className="text-sm">
                <span className="font-medium">Chegada Estimada:</span>{' '}
                {new Date(train.estimatedArrival).toLocaleTimeString()}
              </p>
              <p className="text-sm">
                <span className="font-medium">Última Atualização:</span>{' '}
                {new Date(train.lastUpdate).toLocaleString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}; 