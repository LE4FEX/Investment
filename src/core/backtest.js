import { crossoverSignals } from './indicators.js';

function calculateMaxDrawdown(equityCurve) {
  let peak = -Infinity;
  let maxDrawdown = 0;
  equityCurve.forEach(({ value }) => {
    if (value > peak) {
      peak = value;
    }
    const drawdown = (peak - value) / peak;
    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown;
    }
  });
  return maxDrawdown;
}

export function runBacktest(series, { shortPeriod, longPeriod, capital = 10000 }) {
  if (!Array.isArray(series) || series.length === 0) {
    throw new Error('Series data required');
  }
  if (shortPeriod >= longPeriod) {
    throw new Error('Short period must be less than long period');
  }

  const { signals } = crossoverSignals(series, shortPeriod, longPeriod);
  let cash = capital;
  let shares = 0;
  const equityCurve = [];
  const trades = [];

  series.forEach((point, index) => {
    const matchingSignal = signals.find((signal) => signal.index === index);
    if (matchingSignal && matchingSignal.type === 'buy' && shares === 0) {
      shares = cash / point.close;
      cash = 0;
      trades.push({ type: 'buy', date: point.date, price: point.close });
    } else if (matchingSignal && matchingSignal.type === 'sell' && shares > 0) {
      cash += shares * point.close;
      trades.push({ type: 'sell', date: point.date, price: point.close });
      shares = 0;
    }

    const equity = cash + shares * point.close;
    equityCurve.push({ date: point.date, value: equity });
  });

  if (shares > 0) {
    const last = series.at(-1);
    cash += shares * last.close;
    trades.push({ type: 'sell', date: last.date, price: last.close });
    shares = 0;
  }

  const finalValue = cash;
  const buyHoldShares = capital / series[0].close;
  const buyHoldCurve = series.map((point) => ({
    date: point.date,
    value: buyHoldShares * point.close,
  }));
  const buyHoldValue = buyHoldCurve.at(-1).value;

  const totalReturn = (finalValue - capital) / capital;
  const buyHoldReturn = (buyHoldValue - capital) / capital;

  const start = new Date(series[0].date);
  const end = new Date(series.at(-1).date);
  const years = Math.max(1 / 365, (end - start) / (1000 * 60 * 60 * 24 * 365));
  const cagr = Math.pow(finalValue / capital, 1 / years) - 1;
  const buyHoldCagr = Math.pow(buyHoldValue / capital, 1 / years) - 1;

  const completedTrades = trades.filter((trade) => trade.type === 'sell').length;
  const winningTrades = trades.filter((trade, index) => {
    if (trade.type !== 'sell') return false;
    const entry = trades
      .slice(0, index)
      .reverse()
      .find((t) => t.type === 'buy');
    if (!entry) return false;
    return trade.price > entry.price;
  }).length;
  const winRate = completedTrades > 0 ? winningTrades / completedTrades : 0;

  const maxDrawdown = calculateMaxDrawdown(equityCurve);

  return {
    equityCurve,
    buyHoldCurve,
    trades,
    stats: {
      totalReturn,
      buyHoldReturn,
      cagr,
      buyHoldCagr,
      completedTrades,
      winRate,
      maxDrawdown,
    },
  };
}
