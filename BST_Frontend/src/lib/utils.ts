export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  }).format(amount);
}
