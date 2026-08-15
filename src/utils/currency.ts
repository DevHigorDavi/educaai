export function formatCurrencyMask(value: string): string {
  const digitsOnly = value.replace(/\D/g, '');
  if (!digitsOnly) return '';

  const amount = Number(digitsOnly) / 100;
  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function parseCurrencyToNumber(value: string | undefined): number {
  if (!value) return 0;

  const digitsOnly = value.replace(/\D/g, '');
  if (!digitsOnly) return 0;

  return Number(digitsOnly) / 100;
}
