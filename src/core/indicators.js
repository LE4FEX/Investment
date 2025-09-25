export function sma(values, period) {
  const result = new Array(values.length).fill(null);
  const queue = [];
  let sum = 0;
  values.forEach((value, index) => {
    if (!Number.isFinite(value)) return;
    queue.push(value);
    sum += value;
    if (queue.length > period) {
      sum -= queue.shift();
    }
    if (queue.length === period) {
      result[index] = sum / period;
    }
  });
  return result;
}

export function ema(values, period) {
  const result = new Array(values.length).fill(null);
  const k = 2 / (period + 1);
  let previous;
  values.forEach((value, index) => {
    if (!Number.isFinite(value)) return;
    if (previous === undefined) {
      previous = value;
    } else {
      previous = value * k + previous * (1 - k);
    }
    if (index >= period - 1) {
      result[index] = previous;
    }
  });
  return result;
}

export function rsi(values, period = 14) {
  const result = new Array(values.length).fill(null);
  let gainSum = 0;
  let lossSum = 0;

  for (let i = 1; i < values.length; i++) {
    const change = values[i] - values[i - 1];
    const gain = Math.max(0, change);
    const loss = Math.max(0, -change);

    if (i <= period) {
      gainSum += gain;
      lossSum += loss;
      if (i === period) {
        const avgGain = gainSum / period;
        const avgLoss = lossSum / period;
        const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
        result[i] = 100 - 100 / (1 + rs);
      }
    } else {
      gainSum = (gainSum * (period - 1) + gain) / period;
      lossSum = (lossSum * (period - 1) + loss) / period;
      const rs = lossSum === 0 ? 100 : gainSum / lossSum;
      result[i] = 100 - 100 / (1 + rs);
    }
  }

  return result;
}

export function macd(values, fast = 12, slow = 26, signalPeriod = 9) {
  const emaFast = ema(values, fast);
  const emaSlow = ema(values, slow);
  const macdLine = values.map((_, index) => {
    if (emaFast[index] === null || emaSlow[index] === null) return null;
    return emaFast[index] - emaSlow[index];
  });
  const signalLineRaw = ema(
    macdLine.map((value) => (value === null ? 0 : value)),
    signalPeriod
  );
  const signalLine = signalLineRaw.map((value, index) => (macdLine[index] === null ? null : value));
  const histogram = macdLine.map((value, index) =>
    value === null || signalLine[index] === null ? null : value - signalLine[index]
  );
  return { macdLine, signalLine, histogram };
}

export function crossoverSignals(series, shortPeriod, longPeriod) {
  const closes = series.map((point) => point.close);
  const shortMA = sma(closes, shortPeriod);
  const longMA = sma(closes, longPeriod);
  const signals = [];

  for (let i = 1; i < series.length; i++) {
    const prevShort = shortMA[i - 1];
    const prevLong = longMA[i - 1];
    const currShort = shortMA[i];
    const currLong = longMA[i];

    if ([prevShort, prevLong, currShort, currLong].some((value) => value === null)) continue;

    if (prevShort <= prevLong && currShort > currLong) {
      signals.push({ type: 'buy', index: i, date: series[i].date, price: series[i].close });
    }
    if (prevShort >= prevLong && currShort < currLong) {
      signals.push({ type: 'sell', index: i, date: series[i].date, price: series[i].close });
    }
  }

  return { shortMA, longMA, signals };
}
