import { describe, expect, it } from 'vitest';
import { sma, ema, rsi, macd } from '../src/core/indicators.js';

describe('indicators', () => {
  it('computes simple moving average', () => {
    const values = [1, 2, 3, 4, 5];
    const result = sma(values, 3);
    expect(result).toEqual([null, null, 2, 3, 4]);
  });

  it('computes exponential moving average', () => {
    const values = [1, 2, 3, 4, 5];
    const result = ema(values, 3);
    expect(result[0]).toBeNull();
    expect(result[1]).toBeNull();
    expect(result[2]).toBeCloseTo(2.25, 5);
    expect(result[3]).toBeCloseTo(3.125, 5);
    expect(result[4]).toBeCloseTo(4.0625, 5);
  });

  it('computes RSI(14) matching Wilder example', () => {
    const closes = [
      44.34, 44.09, 44.15, 43.61, 44.33, 44.83, 45.1, 45.42, 45.84, 46.08, 45.89, 46.03, 45.61,
      46.28, 46.28, 46.0, 46.03,
    ];
    const result = rsi(closes, 14);
    const lastValues = result.slice(-3);
    expect(lastValues[0]).toBeCloseTo(70.4641, 3);
    expect(lastValues[1]).toBeCloseTo(70.1453, 3);
    expect(lastValues[2]).toBeCloseTo(70.1609, 3);
  });

  it('computes MACD histogram tail values', () => {
    const prices = [
      459.99, 448.85, 446.06, 450.81, 442.8, 448.97, 444.57, 441.4, 430.47, 420.05, 431.14, 425.66,
      430.58, 431.72, 437.87, 428.43, 428.35, 432.5, 443.66, 455.72, 454.49, 452.08, 452.73, 461.91,
      463.58, 461.14, 452.08, 442.66, 428.91, 429.79, 431.99, 427.72, 423.2, 426.21, 426.98, 435.69,
      443.29, 449.33, 443.95, 434.58, 428.85, 440.28, 431.72, 437.87, 428.43, 419.85, 436.04,
      437.81, 438.98, 440.85, 446.72, 453.01, 455.32, 452.31, 447.47, 444.59, 441.04, 443.86,
      448.97, 444.57, 441.4,
    ];

    const { macdLine, signalLine, histogram } = macd(prices);
    const macdTail = macdLine.slice(-1)[0];
    const signalTail = signalLine.slice(-1)[0];
    const histTail = histogram.slice(-1)[0];

    expect(macdTail).toBeCloseTo(1.668, 3);
    expect(signalTail).toBeCloseTo(1.6598, 3);
    expect(histTail).toBeCloseTo(0.00825, 4);
  });
});
