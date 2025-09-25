function seedFrom(symbol) {
  return symbol
    .toUpperCase()
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function createRng(seed) {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const cache = new Map();

function generateSeries(symbol, interval) {
  const key = `${symbol.toUpperCase()}-${interval}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  const rng = createRng(seedFrom(symbol + interval));
  const today = new Date();
  const points = interval === 'weekly' ? 260 : 520;
  let price = 30 + rng() * 200;
  const series = [];
  let cursor = new Date(today);

  for (let i = 0; i < points; i++) {
    if (interval === 'weekly') {
      cursor.setDate(cursor.getDate() - 7);
    } else {
      do {
        cursor.setDate(cursor.getDate() - 1);
      } while (cursor.getDay() === 0 || cursor.getDay() === 6);
    }

    const drift = 0.015 + rng() * 0.025;
    const direction = rng() - 0.5;
    price = Math.max(5, price * (1 + direction * drift));
    const high = price * (1 + rng() * 0.02);
    const low = price * (1 - rng() * 0.02);
    const open = (high + low) / 2;
    const close = price;
    const volumeBase = interval === 'weekly' ? 7.5e6 : 1.5e6;
    const volume = Math.round(volumeBase * (0.7 + rng() * 0.6));

    series.push({
      date: formatDate(cursor),
      open,
      high,
      low,
      close,
      adjustedClose: close,
      volume,
    });
    cursor = new Date(cursor);
  }

  series.sort((a, b) => new Date(a.date) - new Date(b.date));
  cache.set(key, series);
  return series;
}

export class MockAdapter {
  async getQuote(symbol) {
    const series = generateSeries(symbol, 'daily');
    const last = series.at(-1);
    const prev = series.at(-2) ?? last;
    const change = last.close - prev.close;
    const changePercent = (change / prev.close) * 100;
    return {
      status: 'mock',
      data: {
        symbol: symbol.toUpperCase(),
        price: last.close,
        previousClose: prev.close,
        change,
        changePercent,
      },
    };
  }

  async getSeries(symbol, interval) {
    const series = generateSeries(symbol, interval);
    return {
      status: 'mock',
      data: series,
    };
  }
}
