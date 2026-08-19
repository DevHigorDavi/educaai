import {
  CalendarClock,
  ChevronRight,
  Clock3,
  Goal,
  Trash2,
  Wallet,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import type { SimulationRecord } from '@/utils/simulation';
import { calcMonthlySavings } from '@/utils/simulation';

const LOCAL_STORAGE_KEY = 'simulation-data';

export function SimulationHistoryPage() {
  const [simulations, setSimulations] = useState<SimulationRecord[]>([]);

  useEffect(() => {
    loadSimulations();
  }, []);

  const loadSimulations = () => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!storage) {
      setSimulations([]);
      return;
    }

    try {
      const data = JSON.parse(storage) as SimulationRecord[];

      setSimulations([...data].reverse());
    } catch {
      setSimulations([]);
    }
  };

  const deleteSimulation = (id: string) => {
    const confirmed = window.confirm(
      'Tem certeza que deseja excluir esta simulação?'
    );

    if (!confirmed) {
      return;
    }

    const updatedSimulations = simulations.filter(
      (simulation) => simulation.id !== id
    );

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...updatedSimulations].reverse())
    );

    setSimulations(updatedSimulations);
  };

  const formatCurrency = (value: string) => {
    const numericValue = Number(
      value.replace('R$', '').replace(/\./g, '').replace(',', '.').trim()
    );

    if (Number.isNaN(numericValue)) {
      return value;
    }

    return numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <main className="mx-auto min-h-[calc(100vh-80px)] max-w-6xl px-4 py-10 sm:py-14">
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
          <Clock3 size={18} />
          Suas simulações
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Histórico de Simulações
        </h1>

        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Consulte suas simulações financeiras anteriores e acompanhe seus
          objetivos de planejamento.
        </p>
      </div>

      {simulations.length === 0 ? (
        <section className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-12 text-center shadow-sm">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Clock3 size={30} />
          </div>

          <h2 className="text-xl font-semibold">
            Nenhuma simulação encontrada
          </h2>

          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Você ainda não realizou nenhuma simulação financeira. Faça sua
            primeira simulação para começar a acompanhar seu planejamento.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Criar primeira simulação
          </Link>
        </section>
      ) : (
        <>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                {simulations.length}{' '}
                {simulations.length === 1
                  ? 'simulação registrada'
                  : 'simulações registradas'}
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center rounded-xl border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Nova simulação
            </Link>
          </div>

          <div className="grid gap-5">
            {simulations.map((simulation) => {
              const monthlySavings = calcMonthlySavings(simulation);

              return (
                <article
                  key={simulation.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex items-center gap-2 text-primary">
                        <Goal size={21} />

                        <h2 className="truncate text-lg font-bold text-foreground sm:text-xl">
                          {simulation.goalName}
                        </h2>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
                          <Wallet size={19} className="shrink-0 text-primary" />

                          <div>
                            <p className="text-xs text-muted-foreground">
                              Renda mensal
                            </p>

                            <p className="text-sm font-semibold">
                              {formatCurrency(simulation.income)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
                          <Goal size={19} className="shrink-0 text-primary" />

                          <div>
                            <p className="text-xs text-muted-foreground">
                              Valor da meta
                            </p>

                            <p className="text-sm font-semibold">
                              {formatCurrency(simulation.goalAmount)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
                          <CalendarClock
                            size={19}
                            className="shrink-0 text-primary"
                          />

                          <div>
                            <p className="text-xs text-muted-foreground">
                              Prazo
                            </p>

                            <p className="text-sm font-semibold">
                              {simulation.goalDeadline} meses
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-primary/10 p-3">
                          <Wallet size={19} className="shrink-0 text-primary" />

                          <div>
                            <p className="text-xs text-muted-foreground">
                              Economia mensal
                            </p>

                            <p className="text-sm font-semibold text-primary">
                              {monthlySavings.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 border-t border-border pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                      <Link
                        to={`/resultado/${simulation.id}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:flex-none"
                      >
                        Ver diagnóstico
                        <ChevronRight size={17} />
                      </Link>

                      <button
                        type="button"
                        onClick={() => deleteSimulation(simulation.id)}
                        title="Excluir simulação"
                        aria-label={`Excluir simulação de ${simulation.goalName}`}
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-destructive hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
}
