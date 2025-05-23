import { TrainStatus, TrackIssue, TrackCondition } from './api';

export const mockTrainStatus: TrainStatus[] = [
  {
    id: '1',
    line: '7-Rubi',
    status: 'operational',
    lastUpdate: new Date().toISOString(),
    nextStation: 'Francisco Morato',
    estimatedArrival: new Date(Date.now() + 5 * 60000).toISOString(),
  },
  {
    id: '2',
    line: '8-Diamante',
    status: 'delayed',
    lastUpdate: new Date().toISOString(),
    nextStation: 'Júlio Prestes',
    estimatedArrival: new Date(Date.now() + 15 * 60000).toISOString(),
  },
  {
    id: '3',
    line: '9-Esmeralda',
    status: 'maintenance',
    lastUpdate: new Date().toISOString(),
    nextStation: 'Osasco',
    estimatedArrival: new Date(Date.now() + 30 * 60000).toISOString(),
  },
  {
    id: '4',
    line: '10-Turquesa',
    status: 'suspended',
    lastUpdate: new Date().toISOString(),
    nextStation: 'Brás',
    estimatedArrival: new Date(Date.now() + 45 * 60000).toISOString(),
  },
];

export const mockTrackIssues: TrackIssue[] = [
  {
    id: '1',
    location: 'Entre Estações Júlio Prestes e Barra Funda',
    description: 'Trilho com desgaste excessivo',
    severity: 'high',
    status: 'in_progress',
    reportedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
  {
    id: '2',
    location: 'Estação Osasco',
    description: 'Problema no sistema de sinalização',
    severity: 'critical',
    status: 'reported',
    reportedAt: new Date(Date.now() - 1 * 3600000).toISOString(),
  },
  {
    id: '3',
    location: 'Entre Estações Brás e Tatuapé',
    description: 'Manutenção preventiva programada',
    severity: 'low',
    status: 'resolved',
    reportedAt: new Date(Date.now() - 24 * 3600000).toISOString(),
    resolvedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
  },
];

export const mockTrackConditions: TrackCondition[] = [
  {
    id: '1',
    section: 'Linha 7 - Trecho Júlio Prestes a Francisco Morato',
    condition: 'good',
    lastInspection: new Date(Date.now() - 7 * 24 * 3600000).toISOString(),
    nextInspection: new Date(Date.now() + 23 * 24 * 3600000).toISOString(),
    notes: 'Condição excelente, sem necessidade de manutenção imediata',
  },
  {
    id: '2',
    section: 'Linha 8 - Trecho Júlio Prestes a Itapevi',
    condition: 'fair',
    lastInspection: new Date(Date.now() - 14 * 24 * 3600000).toISOString(),
    nextInspection: new Date(Date.now() + 16 * 24 * 3600000).toISOString(),
    notes: 'Algumas áreas necessitam de atenção na próxima inspeção',
  },
  {
    id: '3',
    section: 'Linha 9 - Trecho Osasco a Grajaú',
    condition: 'poor',
    lastInspection: new Date(Date.now() - 21 * 24 * 3600000).toISOString(),
    nextInspection: new Date(Date.now() + 9 * 24 * 3600000).toISOString(),
    notes: 'Manutenção urgente necessária em alguns trechos',
  },
  {
    id: '4',
    section: 'Linha 10 - Trecho Brás a Rio Grande da Serra',
    condition: 'critical',
    lastInspection: new Date(Date.now() - 28 * 24 * 3600000).toISOString(),
    nextInspection: new Date(Date.now() + 2 * 24 * 3600000).toISOString(),
    notes: 'Intervenção imediata necessária em vários pontos',
  },
]; 