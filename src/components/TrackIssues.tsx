import React, { useEffect, useState } from 'react';
import { TrackIssue } from '../services/api';
import { trainApi } from '../services/api';
import { ExclamationCircleIcon, WrenchIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const severityColors = {
  low: 'bg-blue-900/50 text-blue-400 border border-blue-500/30',
  medium: 'bg-yellow-900/50 text-yellow-400 border border-yellow-500/30',
  high: 'bg-orange-900/50 text-orange-400 border border-orange-500/30',
  critical: 'bg-red-900/50 text-red-400 border border-red-500/30',
};

const statusIcons = {
  reported: ExclamationCircleIcon,
  in_progress: WrenchIcon,
  resolved: CheckCircleIcon,
};

export const TrackIssues: React.FC = () => {
  const [issues, setIssues] = useState<TrackIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const data = await trainApi.getIssues();
        setIssues(data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar problemas reportados');
        toast.error('Erro ao carregar problemas reportados');
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
    const interval = setInterval(fetchIssues, 60000); // Atualiza a cada minuto

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
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold mb-4">Problemas Reportados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {issues.map((issue) => {
          const StatusIcon = statusIcons[issue.status];
          return (
            <div
              key={issue.id}
              className={`rounded-lg shadow-lg p-4 ${severityColors[issue.severity]} backdrop-blur-sm`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{issue.location}</h3>
                <StatusIcon className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Descrição:</span> {issue.description}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Severidade:</span> {issue.severity}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Status:</span> {issue.status}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Reportado em:</span>{' '}
                  {new Date(issue.reportedAt).toLocaleString()}
                </p>
                {issue.resolvedAt && (
                  <p className="text-sm">
                    <span className="font-medium">Resolvido em:</span>{' '}
                    {new Date(issue.resolvedAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 