# Investment Toolkit

Interactive single-page web app for tracking and analysing investments with vanilla HTML, CSS, and JavaScript. Designed for easy deployment (e.g., GitHub Pages) without a backend.

## Features

- **Portfolio Tracker** – record holdings, auto-compute cost basis, market value, and real-time P/L with live (Alpha Vantage) or mock data.
- **Quotes & Watchlist** – fetch the latest price, day change, and draw price history charts (with SMA20/50 overlays) for saved tickers.
- **Technical Analysis** – compute SMA/EMA, RSI, MACD, and highlight recent crossover signals with interactive charts.
- **Backtesting** – run SMA crossover simulations versus buy-and-hold, view equity curves, return/CAGR, and trade stats.
- **DCA Simulator** – model monthly dollar-cost averaging, tracking invested capital, units accumulated, and value over time.
- **Alerts** – store RSI high/low thresholds and show which symbols are currently oversold or overbought.
- **Settings & Controls** – quick header toggles for currency and language (English/ไทย), an API status indicator, and a settings pane to save the Alpha Vantage key, pick a default symbol, toggle the Netlify proxy, and reset the workspace.

## Getting Started

1. Clone or download this repository.
2. Open `index.html` directly in a browser, or serve the folder with any static server (e.g. `npx serve .`).
3. (Optional) Grab a free [Alpha Vantage](https://www.alphavantage.co/support/#api-key) API key and store it under **Settings** → **Alpha Vantage API Key** for live data.
4. Start adding tickers in the Portfolio or Watchlist. The Technicals, Backtest, DCA, and Alerts panes auto-load using the saved default symbol.

Without an API key, the app automatically falls back to deterministic mock market data so every feature remains usable offline (the header badge switches to *API: Mock data*).

### Internationalisation, Currency & Status

- Use the header toggles to switch between **English** and **Thai** or change the display currency (USD, THB, EUR, JPY); the interface updates instantly without a reload.
- The header status badge shows whether live Alpha Vantage data is being used (*API: Live*), mocked (*API: Mock data*), or if there was an error.
- Optional runtime configuration: add an `env.js` file (ignored by git) such as:

  ```js
  window.__ENV__ = {
    ALPHA_VANTAGE_API_KEY: "your-key",
    USE_NETLIFY_PROXY: false
  };
  ```

  This keeps secrets out of source control while letting the app pick them up automatically at runtime.

## Deployment

Because everything runs client-side, you can host the `/` directory on any static hosting provider (GitHub Pages, Netlify, Vercel, etc.).

### Netlify setup

1. `netlify.toml` is preconfigured (`publish = .`) with functions stored in `netlify/functions`.
2. Add `ALPHA_VANTAGE_API_KEY` as an environment variable in the Netlify UI so the proxy can call Alpha Vantage without exposing the key to the browser.
3. Enable **Settings → Use Netlify proxy** inside the app; requests will route through `/.netlify/functions/alphavantage` automatically.
4. For local development with functions, run `netlify dev` (requires `npm install -g netlify-cli`).

## Tech Stack

- HTML5 + modern CSS (no frameworks)
- Vanilla ES modules
- [Chart.js](https://www.chartjs.org/) via CDN for visualization
- LocalStorage for persistent state
- Optional Netlify Functions for API key secrecy

## Notes

- Alpha Vantage enforces rate limits (5 calls/min, 500/day). Heavy usage may trigger the mock fallback; wait a minute if you see repeated mock data when using a real key.
- Technical indicators are calculated locally; signal logic uses a basic SMA crossover and RSI thresholds for illustration purposes.
- All numbers are displayed in the selected currency—adjust or extend the list of currencies as needed.
- Netlify proxy mode requires the `ALPHA_VANTAGE_API_KEY` environment variable; otherwise the app falls back to client-side fetches or mock data when rate-limited.

Enjoy building and testing investment strategies!
