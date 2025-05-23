import axios from 'axios';
import { mockTrainStatus, mockTrackIssues, mockTrackConditions } from './mockData';

// Configuração do axios para quando tivermos a API real
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export interface TrainStatus {
  id: string;
  line: string;
  status: 'operational' | 'delayed' | 'maintenance' | 'suspended';
  lastUpdate: string;
  nextStation: string;
  estimatedArrival: string;
}

export interface TrackIssue {
  id: string;
  location: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'reported' | 'in_progress' | 'resolved';
  reportedAt: string;
  resolvedAt?: string;
}

export interface TrackCondition {
  id: string;
  section: string;
  condition: 'good' | 'fair' | 'poor' | 'critical';
  lastInspection: string;
  nextInspection: string;
  notes?: string;
}

// Função para simular delay de rede
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const trainApi = {
  // Obter status de todas as linhas
  getLinesStatus: async () => {
    await delay(500); // Simula delay de rede
    return mockTrainStatus;
  },

  // Obter status de uma linha específica
  getLineStatus: async (lineId: string) => {
    await delay(300);
    const line = mockTrainStatus.find(train => train.id === lineId);
    if (!line) throw new Error('Linha não encontrada');
    return line;
  },

  // Obter problemas reportados
  getIssues: async () => {
    await delay(700);
    return mockTrackIssues;
  },

  // Reportar um novo problema
  reportIssue: async (issue: Omit<TrackIssue, 'id' | 'reportedAt' | 'status'>) => {
    await delay(1000);
    const newIssue: TrackIssue = {
      id: String(mockTrackIssues.length + 1),
      ...issue,
      status: 'reported',
      reportedAt: new Date().toISOString(),
    };
    mockTrackIssues.push(newIssue);
    return newIssue;
  },

  // Obter condições dos trilhos
  getTrackConditions: async () => {
    await delay(600);
    return mockTrackConditions;
  },

  // Atualizar condição de um trecho específico
  updateTrackCondition: async (trackId: string, condition: Partial<TrackCondition>) => {
    await delay(800);
    const trackIndex = mockTrackConditions.findIndex(track => track.id === trackId);
    if (trackIndex === -1) throw new Error('Trecho não encontrado');
    
    mockTrackConditions[trackIndex] = {
      ...mockTrackConditions[trackIndex],
      ...condition,
    };
    
    return mockTrackConditions[trackIndex];
  },
}; 