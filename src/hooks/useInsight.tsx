// useInsight.tsx
import { buildAIPrompt } from '@/data/aiPrompt';
import { getInsight, type InsightData } from '@/services/aiService';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSimulationStorage } from './useSimulationStorage';

export const useInsight = (id: string) => {
  const [insight, setInsight] = useState<InsightData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { getFormData } = useSimulationStorage();

  // Guard para evitar disparos duplicados/infinitos
  const fetchedIdRef = useRef<string | null>(null);

  const fetchInsight = useCallback(
    async (simulationId: string) => {
      const simulation = getFormData(simulationId);

      if (!simulation) {
        setError('Simulação não encontrada.');
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const prompt = buildAIPrompt(simulation);
        const data = await getInsight(prompt);
        setInsight(data);
      } catch (err) {
        console.error('Erro na API Gemini:', err);
        setError('Erro ao gerar o diagnóstico. Tente novamente.');
      } finally {
        setIsLoading(false);
      }
    },
    [getFormData]
  );

  useEffect(() => {
    // Executa apenas se houver ID e se esse ID ainda não tiver sido buscado
    if (id && fetchedIdRef.current !== id) {
      fetchedIdRef.current = id;
      fetchInsight(id);
    }
  }, [id, fetchInsight]);

  return { insight, isLoading, error, fetchInsight };
};
