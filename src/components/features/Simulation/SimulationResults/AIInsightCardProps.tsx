import { useInsight } from '@/hooks/useInsight';
import { Error } from '../../Insights/Error';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Content } from '../../Insights/Content';

interface AIInsightsCardProps {
  simulationId: string;
}

export function AIInsightsCard({ simulationId }: AIInsightsCardProps) {
  const { insight, isLoading, error, fetchInsight } = useInsight(simulationId);

  return (
    <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
      <div className="mb-3 flex items-center gap-1.5">
        <span>✨</span>

        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          Insight Financeiro Personalizado
        </span>
      </div>

      {isLoading && (
        <div className="block w-full">
          <Skeleton
            count={10}
            height={20}
            baseColor="var(--skeleton-base-color)"
            highlightColor="var(--skeleton-highlight-color)"
            className="mb-3"
          />
        </div>
      )}

      {!isLoading && error && (
        <Error
          simulationId={simulationId}
          message={error}
          onRetry={() => fetchInsight(simulationId)}
        />
      )}

      {!isLoading && insight && typeof insight !== 'string' && !error && (
        <Content insight={insight} />
      )}
    </div>
  );
}
