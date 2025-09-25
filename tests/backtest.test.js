import { describe, expect, it } from 'vitest';
import { runBacktest } from '../src/core/backtest.js';

describe('backtest', () => {
  it('produces equity curve and stats for simple series', () => {
    const series = [
      { date: '2024-01-01', close: 10 },
      { date: '2024-01-02', close: 11 },
      { date: '2024-01-03', close: 12 },
      { date: '2024-01-04', close: 13 },
      { date: '2024-01-05', close: 14 },
      { date: '2024-01-08', close: 15 },
      { date: '2024-01-09', close: 16 },
      { date: '2024-01-10', close: 15 },
      { date: '2024-01-11', close: 14 },
      { date: '2024-01-12', close: 16 },
      { date: '2024-01-15', close: 18 },
      { date: '2024-01-16', close: 20 },
    ];

    const result = runBacktest(series, { shortPeriod: 3, longPeriod: 5, capital: 10000 });

    expect(result.equityCurve).toHaveLength(series.length);
    expect(result.buyHoldCurve).toHaveLength(series.length);
    expect(result.stats.completedTrades).toBe(1);
    expect(result.stats.winRate).toBeCloseTo(1, 5);
    expect(result.stats.totalReturn).toBeCloseTo(0.11111, 5);
    expect(result.stats.buyHoldReturn).toBeCloseTo(1, 5);
    expect(result.stats.maxDrawdown).toBeCloseTo(0, 5);
    expect(result.equityCurve.at(-1).value).toBeCloseTo(11111.1111, 3);
  });
});
