import type { SimulationFormData } from '@/data/Simulation';
import { parseCurrencyToNumber } from './currency';

export function calcMonthlySavings(data: SimulationFormData): number {
  const income = parseCurrencyToNumber(data.income);
  const expenses = parseCurrencyToNumber(data.expenses);
  const debts = parseCurrencyToNumber(data.debts);

  return income - expenses - debts;
}

export type SimulationRecord = SimulationFormData & { id: string };
