# Investment Toolkit

Interactive single-page web app for tracking and analysing investments with vanilla HTML, CSS, and JavaScript. Designed for easy deployment (e.g., GitHub Pages) without a backend.

## Features

- **Portfolio Tracker** – record holdings, auto-compute cost basis, market value, and real-time P/L with live (Alpha Vantage) or mock data.
- **Quotes & Watchlist** – fetch the latest price, day change, and draw price history charts (with SMA20/50 overlays) for saved tickers.
- **Technical Analysis** – compute SMA/EMA, RSI, MACD, and highlight recent crossover signals with interactive charts.
- **Backtesting** – run SMA crossover simulations versus buy-and-hold, view equity curves, return/CAGR, and trade stats.
- **DCA Simulator** – model monthly dollar-cost averaging, tracking invested capital, units accumulated, and value over time.
- **Alerts** – store RSI high/low thresholds and show which symbols are currently oversold or overbought.
- **Settings** – save an Alpha Vantage API key (optional), pick a default symbol, and reset the entire workspace.

## Getting Started

1. Clone or download this repository.
2. Open `index.html` directly in a browser, or serve the folder with any static server (e.g. `npx serve .`).
3. (Optional) Grab a free [Alpha Vantage](https://www.alphavantage.co/support/#api-key) API key and store it under **Settings** → **Alpha Vantage API Key** for live data.
4. Start adding tickers in the Portfolio or Watchlist. The Technicals, Backtest, DCA, and Alerts panes auto-load using the saved default symbol.

Without an API key, the app automatically falls back to deterministic mock market data so every feature remains usable offline.

## Deployment

Because everything runs client-side, you can host the `/` directory on any static hosting provider (GitHub Pages, Netlify, Vercel, etc.).

## Tech Stack

- HTML5 + modern CSS (no frameworks)
- Vanilla ES modules
- [Chart.js](https://www.chartjs.org/) via CDN for visualization
- LocalStorage for persistent state

## Notes

- Alpha Vantage enforces rate limits (5 calls/min, 500/day). Heavy usage may trigger the mock fallback; wait a minute if you see repeated mock data when using a real key.
- Technical indicators are calculated locally; signal logic uses a basic SMA crossover and RSI thresholds for illustration purposes.
- All numbers are displayed in USD for consistency—adjust formatting as needed.

Enjoy building and testing investment strategies!
