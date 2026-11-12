import { describe, expect, it } from "vitest";
import { whatIf, type PricePoint } from "./whatIf";

const prices: PricePoint[] = [
  { date: "2024-01-04", close: 50 },
  { date: "2024-01-05", close: 60 },
  { date: "2024-06-03", close: 75 },
];

describe("whatIf", () => {
  it("values $1,000 bought at a $50 close with a later close of $75", () => {
    expect(whatIf(prices, "2024-01-04", 1000)).toEqual({
      buyDate: "2024-01-04",
      buyPrice: 50,
      shares: 20,
      currentValue: 1500,
      gain: 500,
      gainPercent: 0.5,
    });
  });
});
