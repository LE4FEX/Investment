export function portfolioToCsv(positions) {
  const header = ['Symbol', 'Shares', 'AvgCost'];
  const lines = positions.map((position) =>
    [position.symbol, position.shares, position.avgCost].join(',')
  );
  return [header.join(','), ...lines].join('\n');
}

export function csvToPortfolio(csvText) {
  const rows = csvText.trim().split(/\r?\n/);
  if (rows.length < 2) {
    throw new Error('CSV must include header and at least one row');
  }
  const [, ...dataRows] = rows;
  return dataRows
    .map((row) => row.split(',').map((value) => value.trim()))
    .filter((columns) => columns.length >= 3)
    .map(([symbol, shares, avgCost]) => ({
      symbol: symbol.toUpperCase(),
      shares: Number.parseFloat(shares),
      avgCost: Number.parseFloat(avgCost),
    }))
    .filter(
      (entry) => entry.symbol && Number.isFinite(entry.shares) && Number.isFinite(entry.avgCost)
    );
}

export function portfolioToJson(portfolio) {
  return JSON.stringify({ portfolio }, null, 2);
}

export function jsonToPortfolio(jsonText) {
  const parsed = JSON.parse(jsonText);
  if (!Array.isArray(parsed.portfolio)) {
    throw new Error('Invalid JSON format. Expected { "portfolio": [...] }');
  }
  return parsed.portfolio.map((entry) => ({
    symbol: String(entry.symbol || '').toUpperCase(),
    shares: Number.parseFloat(entry.shares),
    avgCost: Number.parseFloat(entry.avgCost),
  }));
}

export function downloadFile(filename, content, type = 'text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}
