import { buildAIPrompt } from '@/data/aiPrompt';
import type { SimulationRecord } from '@/data/Simulation';
import { getInsight, type InsightData } from '@/services/aiService';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSimulationStorage } from './useSimulationStorage';

export const useInsight = (id: string) => {
  const isRequestPending = useRef(false);

  const { getFormData, updateSimulation } = useSimulationStorage();

  const [insight, setInsight] = useState<InsightData | string | null>(() => {
    const simulation = getFormData(id);

    if (simulation?.insight) {
      return simulation.insight;
    }

    return null;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInsight = useCallback(
    async (simulationId: string) => {
      if (isRequestPending.current) {
        return;
      }

      const simulation = getFormData(simulationId);

      if (!simulation) {
        setError('Simulação não encontrada.');
        return;
      }

      isRequestPending.current = true;
      setIsLoading(true);
      setError(null);

      try {
        const prompt = buildAIPrompt(simulation);
        const data = await getInsight(prompt);

        setInsight(data);

        updateSimulation(simulationId, {
          ...simulation,
          insight: data,
        } as SimulationRecord);
      } catch (err) {
        console.error('Erro na API Gemini:', err);

        setError('Erro ao gerar o diagnóstico. Tente novamente.');
      } finally {
        isRequestPending.current = false;
        setIsLoading(false);
      }
    },
    [getFormData, updateSimulation]
  );

  useEffect(() => {
    if (insight) {
      return;
    }

    if (isRequestPending.current) {
      return;
    }

    fetchInsight(id);
  }, [id, insight, fetchInsight]);

  return {
    insight,
    isLoading,
    error,
    fetchInsight,
  };
};
