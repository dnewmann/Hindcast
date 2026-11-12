/** One trading day's closing price. */
export interface PricePoint {
  /** Trading date, ISO "YYYY-MM-DD". */
  date: string;
  /** Closing price per share, in dollars. */
  close: number;
}

/** What `amount` dollars invested on `buyDate` would be worth at the latest close. */
export interface WhatIfResult {
  /** First trading day on or after the requested buy date. */
  buyDate: string;
  /** Close on `buyDate`, in dollars. */
  buyPrice: number;
  /** Shares bought (fractional allowed). */
  shares: number;
  /** Value of those shares at the latest close, in dollars. */
  currentValue: number;
  /** currentValue - amount, in dollars (negative for a loss). */
  gain: number;
  /** gain / amount as a fraction: 0.5 means +50%. Format as a percentage only at display. */
  gainPercent: number;
}

export function whatIf(
  prices: PricePoint[],
  buyDate: string,
  amount: number,
): WhatIfResult {
  void prices;
  void buyDate;
  void amount;
  throw new Error("whatIf: not implemented");
}
