System.register([], function (t, e) {
  'use strict';
  return {
    execute: function () {
      var t = document.createElement('style');
      ((t.textContent =
        ':root{color-scheme:dark light;--bg-1: #050c1a;--bg-2: #101d3d;--bg-card: rgba(18, 29, 58, .78);--bg-card-solid: #152447;--primary: #38bdf8;--primary-soft: rgba(56, 189, 248, .28);--accent: #22c55e;--danger: #f87171;--warning: #fbbf24;--text: #f1f5f9;--text-muted: #a5b4fc;--border: rgba(99, 102, 241, .25);--glass-highlight: rgba(255, 255, 255, .28);--glass-shadow: rgba(15, 23, 42, .55);--shadow-1: 0 20px 60px rgba(15, 23, 42, .55);--shadow-2: 0 12px 35px rgba(56, 189, 248, .2);font-family:Inter,Segoe UI,system-ui,-apple-system,sans-serif;background-color:var(--bg-1);color:var(--text)}*{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(circle at top left,rgba(56,189,248,.18),transparent 55%),radial-gradient(circle at bottom,rgba(34,197,94,.12),transparent 45%),linear-gradient(135deg,var(--bg-1),var(--bg-2));display:flex;flex-direction:column;position:relative;overflow-x:hidden}body:before{content:"";position:fixed;top:0;right:0;bottom:0;left:0;backdrop-filter:blur(45px);opacity:.4;pointer-events:none}body:after{content:"";position:fixed;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at 15% 20%,rgba(99,102,241,.2),transparent 55%),radial-gradient(circle at 85% 80%,rgba(14,116,144,.26),transparent 55%),radial-gradient(ellipse at 50% 110%,rgba(56,189,248,.2),transparent 55%);mix-blend-mode:screen;pointer-events:none}.app-header{position:sticky;top:0;z-index:20;padding:1.5rem clamp(1.25rem,4vw,3rem);display:grid;gap:1.1rem;border-bottom:1px solid rgba(148,163,184,.1);background:linear-gradient(145deg,rgba(15,23,42,.92),rgba(15,23,42,.7));backdrop-filter:blur(18px);box-shadow:0 16px 40px rgba(8,16,32,.35)}.brand{display:flex;flex-direction:column;gap:.35rem}.app-header h1{margin:0;font-size:clamp(1.75rem,3vw,2.5rem);font-weight:700;letter-spacing:.02em;display:inline-flex;align-items:center;gap:.6rem}.app-header h1:after{content:"";width:clamp(42px,6vw,64px);height:4px;border-radius:999px;background:linear-gradient(90deg,var(--primary),rgba(34,197,94,.75))}.tagline{margin:0;font-size:.92rem;color:rgba(226,232,240,.72);letter-spacing:.015em}.app-nav{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:.65rem}.nav-btn{border:1px solid rgba(148,163,184,.14);background:rgba(30,41,59,.75);color:var(--text);padding:.65rem 1rem;border-radius:16px;font-weight:600;cursor:pointer;transition:transform .2s ease,border .2s ease,box-shadow .2s ease}.nav-btn:hover,.nav-btn.active{border-color:rgba(56,189,248,.7);box-shadow:var(--shadow-2);transform:translateY(-2px)}.header-tools{display:flex;flex-wrap:wrap;align-items:center;gap:.85rem}.header-control{display:flex;flex-direction:column;gap:.35rem;font-size:.85rem;color:rgba(226,232,240,.75)}.header-control select{min-width:125px;border-radius:14px;border:1px solid rgba(148,163,184,.35);padding:.55rem .85rem;background:rgba(15,23,42,.65);color:var(--text);transition:border .2s ease,box-shadow .2s ease}.header-control select:focus-visible{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px rgba(56,189,248,.35)}.header-status{display:flex;align-items:center;gap:.45rem;font-size:.85rem}.status-label{color:rgba(226,232,240,.7)}.status-badge{padding:.4rem .85rem;border-radius:999px;border:1px solid rgba(148,163,184,.35);background:rgba(15,23,42,.55);color:rgba(226,232,240,.9);font-size:.84rem;box-shadow:inset 0 1px rgba(255,255,255,.05)}.status-badge[data-status=live]{border-color:rgba(34,197,94,.55);background:rgba(34,197,94,.18);color:#86efac}.status-badge[data-status=mock]{border-color:rgba(56,189,248,.45);background:rgba(56,189,248,.22);color:#bae6fd}.status-badge[data-status=error]{border-color:rgba(248,113,113,.6);background:rgba(248,113,113,.2);color:#fecaca}.app-main{flex:1;padding:2.25rem clamp(1.25rem,5vw,3.25rem) 3rem;display:flex;flex-direction:column;gap:2rem}.panel{display:none;flex-direction:column;gap:1.5rem;max-width:1280px;width:min(100%,1280px);margin:0 auto;position:relative;z-index:0}.panel.active{display:flex}.panel-header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}.panel h2{margin:0;font-size:clamp(1.4rem,2.5vw,1.8rem);font-weight:700;letter-spacing:.01em}.panel-actions{display:flex;flex-wrap:wrap;gap:.65rem}.panel:before,.panel:after{content:"";position:absolute;width:clamp(120px,18vw,240px);height:clamp(120px,18vw,240px);border-radius:50%;filter:blur(45px);opacity:.55;pointer-events:none;z-index:-1}.panel:before{top:-40px;right:-60px;background:radial-gradient(circle,rgba(56,189,248,.45),transparent 70%);animation:floatBlob 14s ease-in-out infinite}.panel:after{bottom:-50px;left:-70px;background:radial-gradient(circle,rgba(59,130,246,.38),transparent 70%);animation:floatBlob 16s ease-in-out infinite-reverse}.form-grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));background:var(--bg-card);padding:1.2rem;border-radius:18px;border:1px solid rgba(148,163,184,.2);box-shadow:0 18px 40px rgba(6,12,28,.35);position:relative;overflow:hidden;backdrop-filter:blur(22px) saturate(140%)}.form-grid:before,.form-grid:after{content:"";position:absolute;border-radius:50%;filter:blur(45px);opacity:.55;pointer-events:none}.form-grid:before{width:180px;height:180px;top:-60px;left:-40px;background:radial-gradient(circle,rgba(56,189,248,.35),transparent 65%)}.form-grid:after{width:160px;height:160px;bottom:-50px;right:-40px;background:radial-gradient(circle,rgba(34,197,94,.28),transparent 65%)}.form-grid label{display:flex;flex-direction:column;gap:.45rem;font-size:.92rem;color:var(--text-muted)}input,select,button{font:inherit}input,select{border-radius:14px;border:1px solid rgba(148,163,184,.32);padding:.65rem .9rem;background:rgba(15,23,42,.6);color:var(--text);transition:border .2s ease,box-shadow .2s ease}input:focus-visible,select:focus-visible{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px rgba(56,189,248,.35)}button{border-radius:14px;padding:.7rem 1.15rem;border:none;cursor:pointer;font-weight:600;letter-spacing:.01em;transition:transform .18s ease,box-shadow .18s ease}button.primary{background:linear-gradient(135deg,rgba(56,189,248,.95),rgba(14,116,144,.95));color:#06121f;box-shadow:var(--shadow-2)}button.secondary{background:rgba(94,106,162,.25);border:1px solid rgba(148,163,184,.35);color:var(--text)}button.danger{background:linear-gradient(135deg,rgba(248,113,113,.9),rgba(239,68,68,.95))}button:hover{transform:translateY(-2px);box-shadow:0 18px 32px rgba(15,23,42,.35)}.summary-cards,.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}.summary-card,.card{position:relative;background:var(--bg-card);border-radius:20px;padding:1.1rem;border:1px solid rgba(148,163,184,.18);box-shadow:0 22px 45px rgba(5,12,28,.45);overflow:hidden;backdrop-filter:blur(24px) saturate(145%)}.summary-card h3{margin:0 0 .4rem;font-size:.95rem;color:rgba(199,210,254,.82)}.summary-card p{margin:0;font-size:1.35rem;font-weight:600}.summary-card:before,.card:before{content:"";position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;border:1px solid rgba(255,255,255,.04);pointer-events:none}.summary-card:after,.card:after{content:"";position:absolute;width:120px;height:120px;top:-60px;right:-40px;border-radius:50%;background:radial-gradient(circle,rgba(56,189,248,.35),transparent 65%);opacity:.75;pointer-events:none;animation:floatBlob 18s ease-in-out infinite}.card{display:flex;flex-direction:column;gap:.75rem;transition:transform .2s ease,border .2s ease}.card.active{border-color:rgba(56,189,248,.65);transform:translateY(-4px)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.card-header button{background:rgba(59,130,246,.15);border:1px solid rgba(59,130,246,.4);color:var(--text);width:32px;height:32px;display:grid;place-items:center;border-radius:10px}.card-body{font-size:.95rem;color:rgba(226,232,240,.92)}.positive{color:var(--accent)}.negative{color:var(--danger)}.table-wrapper{overflow-x:auto;border-radius:18px;background:rgba(15,23,42,.45);border:1px solid rgba(148,163,184,.15);box-shadow:0 24px 50px rgba(6,12,28,.45);backdrop-filter:blur(22px) saturate(140%)}.data-table{width:100%;border-collapse:collapse;min-width:720px}.data-table thead{background:rgba(56,189,248,.12);color:rgba(226,232,240,.75);text-transform:uppercase;letter-spacing:.02em}.data-table th,.data-table td{padding:.85rem 1rem;border-bottom:1px solid rgba(148,163,184,.12);text-align:left;font-size:.95rem}.data-table tbody tr:hover{background:rgba(56,189,248,.08)}.chart-container{position:relative;min-height:320px;background:linear-gradient(160deg,rgba(15,23,42,.92),rgba(20,32,61,.78));border-radius:22px;padding:1.25rem;border:1px solid rgba(148,163,184,.18);box-shadow:0 28px 55px rgba(6,12,28,.45);overflow:hidden;backdrop-filter:blur(24px) saturate(145%)}.chart-container canvas{width:100%!important;height:100%!important}.chart-container:before{content:"";position:absolute;top:12px;right:12px;bottom:12px;left:12px;border-radius:inherit;border:1px solid rgba(255,255,255,.05);pointer-events:none}.chart-container:after{content:"";position:absolute;width:160px;height:160px;bottom:-60px;left:-40px;background:radial-gradient(circle,rgba(99,102,241,.28),transparent 70%);opacity:.9;animation:floatBlob 12s ease-in-out infinite alternate;pointer-events:none}.search-input{min-width:min(280px,100%);border-radius:999px;border:1px solid rgba(148,163,184,.3);padding:.6rem 1rem;background:rgba(15,23,42,.6);color:var(--text)}.indicator-toggles{display:flex;flex-wrap:wrap;gap:.6rem 1.1rem;border:1px solid rgba(148,163,184,.2);background:rgba(15,23,42,.6);padding:.85rem 1.1rem;border-radius:16px;font-size:.92rem;box-shadow:inset 0 1px rgba(255,255,255,.04)}.indicator-toggles label{display:flex;align-items:center;gap:.45rem;padding:.35rem .55rem;border-radius:12px;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.25);color:rgba(226,232,240,.8);box-shadow:inset 0 1px rgba(255,255,255,.04)}.indicator-toggles input[type=checkbox]{width:16px;height:16px;accent-color:var(--primary)}.small-text{margin:0;color:rgba(226,232,240,.72);font-size:.85rem}.signals{display:flex;flex-direction:column;gap:.85rem}.signal{background:rgba(34,197,94,.14);border-left:4px solid #22c55e;padding:.8rem 1.1rem;border-radius:14px}.signal.sell{background:rgba(248,113,113,.16);border-left-color:#f87171}.checkbox-row{display:flex;align-items:center;gap:.65rem;padding:.65rem .85rem;border-radius:14px;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.25);color:rgba(226,232,240,.8);box-shadow:inset 0 1px rgba(255,255,255,.04)}.checkbox-row input[type=checkbox]{width:1.1rem;height:1.1rem;accent-color:var(--primary)}.settings-actions{display:flex;flex-wrap:wrap;gap:.65rem}.privacy-note{background:rgba(15,23,42,.65);border:1px solid rgba(148,163,184,.2);border-radius:18px;padding:1.1rem 1.3rem;color:rgba(226,232,240,.78);margin-top:.5rem;box-shadow:inset 0 1px rgba(255,255,255,.04),0 20px 45px rgba(6,12,28,.45);backdrop-filter:blur(22px) saturate(150%)}.privacy-note h3{margin:0 0 .6rem;color:rgba(226,232,240,.92)}.privacy-note a{color:var(--primary)}.app-footer{border-top:1px solid rgba(148,163,184,.1);padding:1.25rem;text-align:center;font-size:.88rem;background:rgba(15,23,42,.82);color:rgba(226,232,240,.65)}button:focus-visible,input:focus-visible,select:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(59,130,246,.35)}@media (max-width: 1024px){.app-header{padding:1.35rem 1.5rem}.app-nav{display:flex;overflow-x:auto;padding-bottom:.45rem;gap:.55rem}.nav-btn{flex:0 0 auto;min-width:120px}.panel{width:min(100%,1160px)}}@media (max-width: 768px){.app-main{padding:1.75rem 1.25rem 2.5rem}.panel-actions{width:100%;justify-content:flex-start}.panel-actions button{flex:1 1 calc(50% - .35rem)}.form-grid,.summary-cards,.card-grid{grid-template-columns:1fr}.table-wrapper{min-width:unset}.indicator-toggles{flex-direction:column;align-items:flex-start}}@media (max-width: 480px){.app-header{padding:1.25rem 1.1rem;gap:.9rem}.app-header h1:after{display:none}.header-tools{align-items:stretch;gap:.6rem}.panel-actions button{flex:1 1 100%}.chart-container{min-height:260px;padding:.9rem}}@keyframes floatBlob{0%{transform:translateZ(0) scale(1);opacity:.6}50%{transform:translate3d(15px,-10px,0) scale(1.08);opacity:.75}to{transform:translate3d(-12px,14px,0) scale(.95);opacity:.55}}\n/*$vite$:1*/'),
        document.head.appendChild(t),
        (window.__ENV__ = { ALPHA_VANTAGE_API_KEY: 'IXBF3GIIZ3VILTJ9', USE_NETLIFY_PROXY: !1 }));
      const e = 'investment-toolkit-state-v2',
        i = {
          settings: {
            apiKey: '',
            defaultSymbol: 'AAPL',
            currency: 'USD',
            language: 'en',
            useNetlifyProxy: !1,
          },
          portfolio: [],
          watchlist: [],
          alerts: [],
        };
      function s(t) {
        return 'undefined' != typeof window && 'function' == typeof window.structuredClone
          ? window.structuredClone(t)
          : JSON.parse(JSON.stringify(t));
      }
      function n(t) {
        localStorage.setItem(e, JSON.stringify(t));
      }
      function o() {
        const t = (function () {
            try {
              const t = localStorage.getItem(e);
              if (!t) return s(i);
              const n = JSON.parse(t);
              return {
                settings: { ...i.settings, ...n.settings },
                portfolio: n.portfolio ?? [],
                watchlist: n.watchlist ?? [],
                alerts: n.alerts ?? [],
              };
            } catch (t) {
              return (console.error('Failed to load state', t), s(i));
            }
          })(),
          o = new Map();
        function a(t, e) {
          const i = o.get(t);
          i &&
            i.forEach((t) => {
              try {
                t(e);
              } catch (i) {
                console.error('Event handler error', i);
              }
            });
        }
        return {
          state: t,
          defaultState: i,
          persist() {
            n(t);
          },
          reset() {
            (Object.assign(t, s(i)), n(t), a('store:reset', t));
          },
          on(t, e) {
            const i = o.get(t) ?? new Set();
            return (
              i.add(e),
              o.set(t, i),
              () => {
                i.delete(e);
              }
            );
          },
          emit: a,
        };
      }
      const a = {
          en: {
            label: 'English',
            locale: 'en-US',
            htmlLang: 'en',
            messages: {
              app: { title: 'Investment Toolkit' },
              nav: {
                portfolio: 'Portfolio',
                quotes: 'Quotes',
                technicals: 'Technicals',
                backtest: 'Backtest',
                dca: 'DCA',
                alerts: 'Alerts',
                settings: 'Settings',
              },
              header: {
                controls: { language: 'Language', currency: 'Currency', apiStatus: 'API Status' },
              },
              placeholders: { symbol: 'e.g. AAPL', apiKey: 'Enter API key' },
              portfolio: {
                heading: 'Portfolio Tracker',
                form: {
                  symbol: 'Ticker',
                  shares: 'Shares',
                  price: 'Price',
                  submit: 'Add Position',
                  importCsv: 'Import CSV',
                  importJson: 'Import JSON',
                  exportCsv: 'Export CSV',
                  exportJson: 'Export JSON',
                  invalid: 'Enter valid symbol, shares, and price',
                },
                table: {
                  symbol: 'Symbol',
                  shares: 'Shares',
                  avgCost: 'Avg Cost',
                  lastPrice: 'Last Price',
                  value: 'Value',
                  pl: 'P/L',
                },
                empty: 'No holdings yet. Add a position to get started.',
                summary: {
                  value: 'Portfolio Value',
                  cost: 'Total Cost Basis',
                  pl: 'Unrealized P/L',
                },
              },
              quotes: {
                heading: 'Quotes & Watchlist',
                form: { symbol: 'Symbol', submit: 'Add to Watchlist' },
                search: { placeholder: 'Filter symbols...' },
                hint: 'Uses Alpha Vantage if API key is saved, otherwise falls back to mock data.',
                empty: 'No symbols yet. Add one to start tracking quotes.',
                card: { last: 'Last', change: 'Change' },
                chart: { close: '{symbol} Close', sma20: 'SMA 20', sma50: 'SMA 50' },
              },
              technicals: {
                heading: 'Technical Analysis',
                form: {
                  symbol: 'Symbol',
                  interval: 'Interval',
                  daily: 'Daily',
                  weekly: 'Weekly',
                  submit: 'Calculate',
                },
                toggles: {
                  heading: 'Indicators',
                  price: 'Price',
                  sma20: 'SMA 20',
                  sma50: 'SMA 50',
                  ema12: 'EMA 12',
                  ema26: 'EMA 26',
                  rsi: 'RSI',
                  macd: 'MACD',
                },
                zoom: { reset: 'Reset Zoom' },
                summary: { price: 'Last Price', rsi: 'RSI (14)', macd: 'MACD', bias: 'Bias' },
                bias: {
                  neutral: 'Neutral',
                  bullish: 'Bullish (signal {bars} bars ago)',
                  bearish: 'Bearish (signal {bars} bars ago)',
                },
                signals: { title: 'Recent Signals', empty: 'No crossover signals yet.' },
                chart: { close: '{symbol} Close', sma20: 'SMA 20', sma50: 'SMA 50' },
              },
              backtest: {
                heading: 'Backtesting',
                form: {
                  symbol: 'Symbol',
                  short: 'Short MA',
                  long: 'Long MA',
                  submit: 'Run Backtest',
                  invalid: 'Enter valid symbol and ensure Short MA < Long MA',
                },
                summary: {
                  strategyReturn: 'Strategy Return',
                  strategyCagr: 'Strategy CAGR',
                  buyHoldReturn: 'Buy & Hold Return',
                  buyHoldCagr: 'Buy & Hold CAGR',
                  completedTrades: 'Completed Trades',
                  tradeStats: '{count} ({winRate})',
                  maxDrawdown: 'Max Drawdown',
                },
                chart: { strategy: 'Strategy Equity', buyHold: 'Buy & Hold' },
                export: { csv: 'Export Equity CSV' },
              },
              dca: {
                heading: 'DCA Simulator',
                form: {
                  symbol: 'Symbol',
                  amount: 'Monthly Amount',
                  months: 'Months',
                  submit: 'Simulate',
                  invalid: 'Enter valid symbol, monthly amount, and months',
                },
                empty: 'Not enough data for DCA simulation.',
                summary: {
                  invested: 'Total Invested',
                  shares: 'Total Shares',
                  value: 'Current Value',
                  gain: 'Net Gain',
                },
                chart: { invested: 'Invested', value: 'Value' },
                export: { csv: 'Export DCA CSV' },
              },
              alerts: {
                heading: 'Alerts',
                form: {
                  symbol: 'Symbol',
                  rsiLow: 'RSI Low',
                  rsiHigh: 'RSI High',
                  submit: 'Save Alert',
                  invalid: 'Enter valid symbol and RSI thresholds',
                },
                empty: 'No alerts configured. Add one to monitor RSI triggers.',
                status: { neutral: 'Neutral', oversold: 'Oversold', overbought: 'Overbought' },
                card: {
                  rsi: 'RSI: {value}',
                  thresholds: 'Low: {low} / High: {high}',
                  status: 'Status: {status}',
                },
              },
              settings: {
                heading: 'Settings',
                form: {
                  apiKey: 'Alpha Vantage API Key',
                  defaultSymbol: 'Default Symbol',
                  useNetlify: 'Use Netlify proxy (serverless API key)',
                  submit: 'Save Settings',
                  reset: 'Reset App',
                },
                saveSuccess: 'Settings saved.',
                resetConfirm: 'Reset all data?',
                resetDone: 'Application reset.',
              },
              footer: { disclaimer: 'Educational use only. Not financial advice.' },
              status: {
                api: {
                  live: 'API: Live',
                  mock: 'API: Mock data',
                  error: 'API: Error',
                  unknown: 'API: Unknown',
                },
              },
              common: {
                remove: 'Remove',
                price: 'Price',
                download: 'Download',
                restore: 'Restore',
                browse: 'Browse…',
                cancel: 'Cancel',
                signal: { buy: 'BUY', sell: 'SELL' },
              },
            },
          },
          th: {
            label: 'ไทย',
            locale: 'th-TH',
            htmlLang: 'th',
            messages: {
              app: { title: 'ชุดเครื่องมือการลงทุน' },
              nav: {
                portfolio: 'พอร์ต',
                quotes: 'ราคาหุ้น',
                technicals: 'เทคนิคอล',
                backtest: 'ทดสอบย้อนหลัง',
                dca: 'DCA',
                alerts: 'แจ้งเตือน',
                settings: 'ตั้งค่า',
              },
              header: {
                controls: { language: 'ภาษา', currency: 'สกุลเงิน', apiStatus: 'สถานะ API' },
              },
              placeholders: { symbol: 'เช่น AAPL', apiKey: 'กรอก API key' },
              portfolio: {
                heading: 'ตัวติดตามพอร์ต',
                form: {
                  symbol: 'สัญลักษณ์',
                  shares: 'จำนวนหุ้น',
                  price: 'ราคาซื้อ',
                  submit: 'เพิ่มสถานะ',
                  importCsv: 'นำเข้า CSV',
                  importJson: 'นำเข้า JSON',
                  exportCsv: 'ส่งออก CSV',
                  exportJson: 'ส่งออก JSON',
                  invalid: 'กรุณากรอกสัญลักษณ์ จำนวนหุ้น และราคาให้ถูกต้อง',
                },
                table: {
                  symbol: 'สัญลักษณ์',
                  shares: 'จำนวนหุ้น',
                  avgCost: 'ต้นทุนเฉลี่ย',
                  lastPrice: 'ราคาล่าสุด',
                  value: 'มูลค่า',
                  pl: 'กำไร/ขาดทุน',
                },
                empty: 'ยังไม่มีการถือครอง เพิ่มรายการเพื่อเริ่มต้น',
                summary: {
                  value: 'มูลค่าพอร์ต',
                  cost: 'เงินลงทุนรวม',
                  pl: 'กำไร/ขาดทุนที่ยังไม่รับรู้',
                },
              },
              quotes: {
                heading: 'ราคาและวอทช์ลิสต์',
                form: { symbol: 'สัญลักษณ์', submit: 'เพิ่มเข้าวอทช์ลิสต์' },
                search: { placeholder: 'ค้นหาสัญลักษณ์...' },
                hint: 'ใช้ข้อมูล Alpha Vantage เมื่อบันทึก API key หากไม่มีก็จะใช้ข้อมูลจำลอง',
                empty: 'ยังไม่มีวอทช์ลิสต์ เพิ่มสัญลักษณ์เพื่อเริ่มติดตาม',
                card: { last: 'ราคาล่าสุด', change: 'การเปลี่ยนแปลง' },
                chart: { close: 'ราคาปิด {symbol}', sma20: 'SMA 20', sma50: 'SMA 50' },
              },
              technicals: {
                heading: 'วิเคราะห์เชิงเทคนิค',
                form: {
                  symbol: 'สัญลักษณ์',
                  interval: 'ช่วงเวลา',
                  daily: 'รายวัน',
                  weekly: 'รายสัปดาห์',
                  submit: 'คำนวณ',
                },
                toggles: {
                  heading: 'ตัวชี้วัด',
                  price: 'ราคา',
                  sma20: 'SMA 20',
                  sma50: 'SMA 50',
                  ema12: 'EMA 12',
                  ema26: 'EMA 26',
                  rsi: 'RSI',
                  macd: 'MACD',
                },
                zoom: { reset: 'รีเซ็ตการซูม' },
                summary: { price: 'ราคาล่าสุด', rsi: 'RSI (14)', macd: 'MACD', bias: 'มุมมอง' },
                bias: {
                  neutral: 'เป็นกลาง',
                  bullish: 'แนวโน้มขาขึ้น (สัญญาณ {bars} แท่งก่อน)',
                  bearish: 'แนวโน้มขาลง (สัญญาณ {bars} แท่งก่อน)',
                },
                signals: { title: 'สัญญาณล่าสุด', empty: 'ยังไม่มีสัญญาณตัดกันของเส้นค่าเฉลี่ย' },
                chart: { close: 'ราคาปิด {symbol}', sma20: 'SMA 20', sma50: 'SMA 50' },
              },
              backtest: {
                heading: 'ทดสอบย้อนหลัง',
                form: {
                  symbol: 'สัญลักษณ์',
                  short: 'เส้นสั้น',
                  long: 'เส้นยาว',
                  submit: 'รันทดสอบ',
                  invalid: 'กรุณากรอกสัญลักษณ์ และให้เส้นสั้น < เส้นยาว',
                },
                summary: {
                  strategyReturn: 'ผลตอบแทนกลยุทธ์',
                  strategyCagr: 'CAGR กลยุทธ์',
                  buyHoldReturn: 'ผลตอบแทนซื้อถือ',
                  buyHoldCagr: 'CAGR ซื้อถือ',
                  completedTrades: 'จำนวนเทรด',
                  tradeStats: '{count} ({winRate})',
                  maxDrawdown: 'ดรอว์ดาวน์สูงสุด',
                },
                chart: { strategy: 'มูลค่ากลยุทธ์', buyHold: 'ซื้อถือ' },
                export: { csv: 'ส่งออกข้อมูล CSV' },
              },
              dca: {
                heading: 'ตัวจำลอง DCA',
                form: {
                  symbol: 'สัญลักษณ์',
                  amount: 'เงินต่อเดือน',
                  months: 'จำนวนเดือน',
                  submit: 'จำลอง',
                  invalid: 'กรุณากรอกสัญลักษณ์ จำนวนเงินต่อเดือน และจำนวนเดือนให้ถูกต้อง',
                },
                empty: 'ข้อมูลไม่เพียงพอสำหรับการจำลอง DCA',
                summary: {
                  invested: 'เงินลงทุนรวม',
                  shares: 'จำนวนหน่วยสะสม',
                  value: 'มูลค่าปัจจุบัน',
                  gain: 'กำไร/ขาดทุนสุทธิ',
                },
                chart: { invested: 'เงินลงทุน', value: 'มูลค่า' },
                export: { csv: 'ส่งออก CSV' },
              },
              alerts: {
                heading: 'แจ้งเตือน',
                form: {
                  symbol: 'สัญลักษณ์',
                  rsiLow: 'RSI ต่ำ',
                  rsiHigh: 'RSI สูง',
                  submit: 'บันทึกแจ้งเตือน',
                  invalid: 'กรุณากรอกสัญลักษณ์ และค่าช่วง RSI ให้ถูกต้อง',
                },
                empty: 'ยังไม่มีการตั้งแจ้งเตือน เพิ่มเพื่อเฝ้าดู RSI',
                status: { neutral: 'ปกติ', oversold: 'ขายมาก', overbought: 'ซื้อมาก' },
                card: {
                  rsi: 'RSI: {value}',
                  thresholds: 'ต่ำ: {low} / สูง: {high}',
                  status: 'สถานะ: {status}',
                },
              },
              settings: {
                heading: 'ตั้งค่า',
                form: {
                  apiKey: 'Alpha Vantage API Key',
                  defaultSymbol: 'สัญลักษณ์เริ่มต้น',
                  useNetlify: 'ใช้ Netlify proxy (เก็บ API key บนเซิร์ฟเวอร์)',
                  submit: 'บันทึกการตั้งค่า',
                  reset: 'รีเซ็ตแอป',
                },
                saveSuccess: 'บันทึกการตั้งค่าแล้ว',
                resetConfirm: 'ต้องการรีเซ็ตข้อมูลทั้งหมดหรือไม่?',
                resetDone: 'รีเซ็ตแอปแล้ว',
              },
              footer: { disclaimer: 'เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำการลงทุน' },
              status: {
                api: {
                  live: 'API: ใช้งานได้',
                  mock: 'API: ข้อมูลจำลอง',
                  error: 'API: ขัดข้อง',
                  unknown: 'API: ไม่ทราบ',
                },
              },
              common: {
                remove: 'ลบ',
                price: 'ราคา',
                download: 'ดาวน์โหลด',
                restore: 'กู้คืน',
                browse: 'เลือกไฟล์…',
                cancel: 'ยกเลิก',
                signal: { buy: 'ซื้อ', sell: 'ขาย' },
              },
            },
          },
        },
        r = 'en';
      function l(t, e) {
        return t.split('.').reduce((t, e) => (t && void 0 !== t[e] ? t[e] : void 0), e);
      }
      class c {
        constructor() {
          ((this.localeKey = r), (this.listeners = new Set()));
        }
        get locale() {
          return a[this.localeKey];
        }
        setLocale(t) {
          (a[t]
            ? (this.localeKey = t)
            : (console.warn(`Locale ${t} not found, falling back to default`),
              (this.localeKey = r)),
            this.listeners.forEach((t) => t()));
        }
        onChange(t) {
          return (this.listeners.add(t), () => this.listeners.delete(t));
        }
        t(t, e = {}) {
          let i = l(t, this.locale.messages) ?? l(t, a[r].messages);
          return void 0 === i
            ? t
            : 'string' != typeof i
              ? i
              : i.replace(/\{(\w+)}/g, (t, i) => (void 0 !== e[i] ? e[i] : t));
        }
        applyTranslations(t = document) {
          (t.querySelectorAll('[data-i18n]').forEach((t) => {
            const e = t.dataset.i18n;
            e && (t.textContent = this.t(e));
          }),
            t.querySelectorAll('[data-i18n-placeholder]').forEach((t) => {
              const e = t.dataset.i18nPlaceholder;
              e && t.setAttribute('placeholder', this.t(e));
            }),
            (document.title = this.t('app.title')),
            (document.documentElement.lang = this.locale.htmlLang));
        }
      }
      const h = [
        { code: 'USD', label: 'USD — US Dollar' },
        { code: 'THB', label: 'THB — Thai Baht' },
        { code: 'EUR', label: 'EUR — Euro' },
        { code: 'JPY', label: 'JPY — Japanese Yen' },
      ];
      function d(t, e) {
        const i = t.locale;
        let s;
        try {
          s = new Intl.NumberFormat(i, {
            style: 'currency',
            currency: e,
            maximumFractionDigits: 2,
          });
        } catch (a) {
          (console.warn('Falling back to USD currency formatter', a),
            (s = new Intl.NumberFormat(i, {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 2,
            })));
        }
        const n = new Intl.NumberFormat(i, { maximumFractionDigits: 4 }),
          o = new Intl.NumberFormat(i, {
            style: 'percent',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        return {
          locale: i,
          currency: (t) => (Number.isFinite(t) ? s.format(t) : 'N/A'),
          number: (t) => (Number.isFinite(t) ? n.format(t) : 'N/A'),
          percent: (t) => (Number.isFinite(t) ? o.format(t) : 'N/A'),
        };
      }
      const u = 'investment-toolkit-cache-v1';
      let p = (function () {
        try {
          const t = localStorage.getItem(u);
          return t ? JSON.parse(t) : {};
        } catch (t) {
          return (console.warn('Failed to load cache', t), {});
        }
      })();
      function f() {
        try {
          localStorage.setItem(u, JSON.stringify(p));
        } catch (t) {
          console.warn('Failed to persist cache', t);
        }
      }
      function g(t) {
        const e = p[t];
        return e
          ? e.expireAt && e.expireAt < Date.now()
            ? (delete p[t], f(), null)
            : e.value
          : null;
      }
      function m(t, e, i) {
        ((p[t] = { value: e, expireAt: i ? Date.now() + i : null }), f());
      }
      class b {
        constructor({ initialDelay: t = 0, maxDelay: e = 6e4 } = {}) {
          ((this.queue = Promise.resolve()), (this.delay = t), (this.maxDelay = e));
        }
        enqueue(t) {
          return (
            (this.queue = this.queue.then(async () => {
              var e;
              return (
                this.delay > 0 && (await ((e = this.delay), new Promise((t) => setTimeout(t, e)))),
                t()
              );
            })),
            this.queue
          );
        }
        backoff(t = 2e3) {
          this.delay = Math.min(this.delay + t, this.maxDelay);
        }
        reset() {
          this.delay = 0;
        }
      }
      const x = ['frequency', 'Thank you for using Alpha Vantage'];
      class y extends Error {
        constructor(t) {
          (super(t), (this.name = 'RateLimitError'));
        }
      }
      class v {
        constructor({ getSettings: t, updateStatus: e }) {
          ((this.getSettings = t),
            (this.updateStatus = e),
            (this.queue = new b({ initialDelay: 0, maxDelay: 6e4 })));
        }
        async getQuote(t) {
          return this.queue.enqueue(() => this.#t(t));
        }
        async getSeries(t, e) {
          return this.queue.enqueue(() => this.#e(t, e));
        }
        async #t(t) {
          const { apiKey: e, useNetlifyProxy: i } = this.getSettings();
          if (!e && !i) throw new Error('Missing API credentials');
          const s = new URLSearchParams({ function: 'GLOBAL_QUOTE', symbol: t.toUpperCase() }),
            n = (await this.#i(s))['Global Quote'] || {},
            o = Number.parseFloat(n['05. price']),
            a = Number.parseFloat(n['08. previous close']) || Number.parseFloat(n['02. open']),
            r = Number.parseFloat(n['09. change']),
            l = n['10. change percent'],
            c = l ? Number.parseFloat(l.replace('%', '')) : a ? ((o - a) / a) * 100 : 0;
          if (!Number.isFinite(o)) throw new Error('Invalid quote response');
          return (
            this.queue.reset(),
            this.updateStatus('live'),
            {
              status: 'live',
              data: {
                symbol: t.toUpperCase(),
                price: o,
                previousClose: a || o,
                change: Number.isFinite(r) ? r : o - (a || o),
                changePercent: c,
              },
            }
          );
        }
        async #e(t, e) {
          const { apiKey: i, useNetlifyProxy: s } = this.getSettings();
          if (!i && !s) throw new Error('Missing API credentials');
          const n = new URLSearchParams({
              function:
                'weekly' === e ? 'TIME_SERIES_WEEKLY_ADJUSTED' : 'TIME_SERIES_DAILY_ADJUSTED',
              symbol: t.toUpperCase(),
              outputsize: 'full',
            }),
            o = (await this.#i(n))[
              'weekly' === e ? 'Weekly Adjusted Time Series' : 'Time Series (Daily)'
            ];
          if (!o) throw new Error('Missing time series data');
          const a = Object.entries(o)
            .map(([t, e]) => ({
              date: t,
              open: Number.parseFloat(e['1. open']),
              high: Number.parseFloat(e['2. high']),
              low: Number.parseFloat(e['3. low']),
              close: Number.parseFloat(e['4. close']),
              adjustedClose:
                Number.parseFloat(e['5. adjusted close']) || Number.parseFloat(e['4. close']),
              volume: Number.parseFloat(e['6. volume']),
            }))
            .filter((t) => Number.isFinite(t.close))
            .sort((t, e) => new Date(t.date) - new Date(e.date));
          return (this.queue.reset(), this.updateStatus('live'), { status: 'live', data: a });
        }
        async #i(t) {
          const { apiKey: e, useNetlifyProxy: i } = this.getSettings();
          let s;
          if (i) {
            if (((s = await fetch(`/.netlify/functions/alphavantage?${t.toString()}`)), !s.ok)) {
              if (429 === s.status)
                throw (this.queue.backoff(), new y('Alpha Vantage proxy rate limit'));
              throw new Error(`Proxy HTTP ${s.status}`);
            }
            const e = await s.json(),
              i = this.#s(e);
            if (i) throw (this.queue.backoff(), new y(i));
            return e;
          }
          if (
            (t.set('apikey', e),
            (s = await fetch(`https://www.alphavantage.co/query?${t.toString()}`)),
            !s.ok)
          ) {
            if (429 === s.status) throw (this.queue.backoff(), new y('Alpha Vantage rate limit'));
            throw new Error(`HTTP ${s.status}`);
          }
          const n = await s.json(),
            o = this.#s(n);
          if (o) throw (this.queue.backoff(), new y(o));
          return n;
        }
        #s(t) {
          const e = t?.Note || t?.['Error Message'];
          if (!e) return null;
          const i = e.toLowerCase();
          return x.some((t) => i.includes(t)) ? e : null;
        }
      }
      function _(t) {
        return `${t.getFullYear()}-${`${t.getMonth() + 1}`.padStart(2, '0')}-${`${t.getDate()}`.padStart(2, '0')}`;
      }
      const w = new Map();
      function M(t, e) {
        const i = `${t.toUpperCase()}-${e}`;
        if (w.has(i)) return w.get(i);
        const s = (function (t) {
            let e = t % 2147483647;
            return (
              e <= 0 && (e += 2147483646),
              () => ((e = (16807 * e) % 2147483647), (e - 1) / 2147483646)
            );
          })(
            (function (t) {
              return t
                .toUpperCase()
                .split('')
                .reduce((t, e) => t + e.charCodeAt(0), 0);
            })(t + e)
          ),
          n = new Date(),
          o = 'weekly' === e ? 260 : 520;
        let a = 30 + 200 * s();
        const r = [];
        let l = new Date(n);
        for (let c = 0; c < o; c++) {
          if ('weekly' === e) l.setDate(l.getDate() - 7);
          else
            do {
              l.setDate(l.getDate() - 1);
            } while (0 === l.getDay() || 6 === l.getDay());
          const t = 0.015 + 0.025 * s(),
            i = s() - 0.5;
          a = Math.max(5, a * (1 + i * t));
          const n = a * (1 + 0.02 * s()),
            o = a * (1 - 0.02 * s()),
            c = (n + o) / 2,
            h = a,
            d = 'weekly' === e ? 75e5 : 15e5,
            u = Math.round(d * (0.7 + 0.6 * s()));
          (r.push({ date: _(l), open: c, high: n, low: o, close: h, adjustedClose: h, volume: u }),
            (l = new Date(l)));
        }
        return (r.sort((t, e) => new Date(t.date) - new Date(e.date)), w.set(i, r), r);
      }
      class k {
        async getQuote(t) {
          const e = M(t, 'daily'),
            i = e.at(-1),
            s = e.at(-2) ?? i,
            n = i.close - s.close,
            o = (n / s.close) * 100;
          return {
            status: 'mock',
            data: {
              symbol: t.toUpperCase(),
              price: i.close,
              previousClose: s.close,
              change: n,
              changePercent: o,
            },
          };
        }
        async getSeries(t, e) {
          return { status: 'mock', data: M(t, e) };
        }
      }
      const S = 6e4,
        P = 3e5;
      function A(t, e) {
        const i = () => t.state.settings,
          s = new v({ getSettings: i, updateStatus: e }),
          n = new k();
        function o() {
          const t = i();
          return Boolean(t.apiKey || t.useNetlifyProxy);
        }
        return {
          getQuote: async function (t) {
            const i = `quote:${t.toUpperCase()}`,
              a = g(i);
            if (a) return a;
            if (o())
              try {
                const e = await s.getQuote(t);
                return (m(i, e.data, S), e.data);
              } catch (l) {
                l instanceof y
                  ? (console.warn('Alpha Vantage rate limit reached. Falling back to mock data.'),
                    e('error', l.message))
                  : (console.warn('Alpha Vantage quote error', l), e('error', l.message));
              }
            const r = await n.getQuote(t);
            return (e('mock'), m(i, r.data, S), r.data);
          },
          getSeries: async function (t, i = 'daily') {
            const a = `series:${t.toUpperCase()}:${i}`,
              r = g(a);
            if (r) return r;
            if (o())
              try {
                const e = await s.getSeries(t, i);
                return (m(a, e.data, P), e.data);
              } catch (c) {
                c instanceof y
                  ? (console.warn(
                      'Alpha Vantage rate limit reached for series. Falling back to mock data.'
                    ),
                    e('error', c.message))
                  : (console.warn('Alpha Vantage series error', c), e('error', c.message));
              }
            const l = await n.getSeries(t, i);
            return (e('mock'), m(a, l.data, P), l.data);
          },
          clearCache: function () {
            ((p = {}), f());
          },
        };
      }
      function D(t, e, i = 'text/plain') {
        const s = new Blob([e], { type: i }),
          n = URL.createObjectURL(s),
          o = document.createElement('a');
        ((o.href = n),
          (o.download = t),
          document.body.appendChild(o),
          o.click(),
          document.body.removeChild(o),
          URL.revokeObjectURL(n));
      }
      function C({ store: t, dataProvider: e, translator: i, formatters: s }) {
        const n = document.getElementById('portfolio-form'),
          o = document.getElementById('portfolio-symbol'),
          a = document.getElementById('portfolio-shares'),
          r = document.getElementById('portfolio-price'),
          l = document.querySelector('#portfolio-table tbody'),
          c = document.getElementById('portfolio-summary'),
          h = document.getElementById('portfolio-export-csv'),
          d = document.getElementById('portfolio-export-json'),
          u = document.getElementById('portfolio-import-csv'),
          p = document.getElementById('portfolio-import-json'),
          f = document.getElementById('portfolio-import-file');
        let g = s;
        async function m() {
          const s = t.state.portfolio;
          if (!s.length)
            return (
              (l.innerHTML = `<tr><td colspan="7">${i.t('portfolio.empty')}</td></tr>`),
              (c.innerHTML = ''),
              void t.emit('portfolio:changed', [])
            );
          const n = await Promise.all(
            s.map(async (t) => {
              const i = (await e.getQuote(t.symbol)).price,
                s = t.shares * i,
                n = t.shares * t.avgCost,
                o = s - n,
                a = 0 === n ? 0 : o / n;
              return { ...t, lastPrice: i, value: s, cost: n, pl: o, plPercent: a };
            })
          );
          l.innerHTML = n
            .map((t) => {
              const e = t.pl >= 0 ? 'positive' : 'negative';
              return `<tr>\n          <td>${t.symbol}</td>\n          <td>${g.number(t.shares)}</td>\n          <td>${g.currency(t.avgCost)}</td>\n          <td>${g.currency(t.lastPrice)}</td>\n          <td>${g.currency(t.value)}</td>\n          <td class="${e}">${g.currency(t.pl)} (${g.percent(t.plPercent)})</td>\n          <td><button data-action="remove" data-symbol="${t.symbol}" aria-label="${i.t('common.remove')} ${t.symbol}">✕</button></td>\n        </tr>`;
            })
            .join('');
          const o = n.reduce((t, e) => t + e.cost, 0),
            a = n.reduce((t, e) => t + e.value, 0),
            r = a - o,
            h = 0 === o ? 0 : r / o;
          ((c.innerHTML = `\n      <div class="summary-card">\n        <h3>${i.t('portfolio.summary.value')}</h3>\n        <p>${g.currency(a)}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('portfolio.summary.cost')}</h3>\n        <p>${g.currency(o)}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('portfolio.summary.pl')}</h3>\n        <p>${g.currency(r)} (${g.percent(h)})</p>\n      </div>`),
            t.emit('portfolio:changed', n));
        }
        return (
          n.addEventListener('submit', async (e) => {
            e.preventDefault();
            const s = o.value.trim().toUpperCase(),
              l = Number.parseFloat(a.value),
              c = Number.parseFloat(r.value);
            if (!s || !Number.isFinite(l) || !Number.isFinite(c) || l <= 0 || c <= 0)
              return void alert(i.t('portfolio.form.invalid'));
            const h = t.state.portfolio.find((t) => t.symbol === s);
            if (h) {
              const t = h.shares + l,
                e = h.avgCost * h.shares + c * l;
              ((h.shares = Number(t.toFixed(4))), (h.avgCost = Number((e / t).toFixed(4))));
            } else t.state.portfolio.push({ symbol: s, shares: l, avgCost: c });
            (t.persist(), (o.value = s), n.reset(), await m());
          }),
          l.addEventListener('click', async (e) => {
            const i = e.target.closest('button[data-action="remove"]');
            if (!i) return;
            const s = i.dataset.symbol;
            ((t.state.portfolio = t.state.portfolio.filter((t) => t.symbol !== s)),
              t.persist(),
              await m());
          }),
          h.addEventListener('click', () => {
            const e = (function (t) {
              const e = t.map((t) => [t.symbol, t.shares, t.avgCost].join(','));
              return [['Symbol', 'Shares', 'AvgCost'].join(','), ...e].join('\n');
            })(t.state.portfolio);
            D('portfolio.csv', e, 'text/csv');
          }),
          d.addEventListener('click', () => {
            var e;
            D(
              'portfolio.json',
              ((e = t.state.portfolio), JSON.stringify({ portfolio: e }, null, 2)),
              'application/json'
            );
          }),
          u.addEventListener('click', () => {
            ((f.accept = '.csv'), (f.dataset.format = 'csv'), f.click());
          }),
          p.addEventListener('click', () => {
            ((f.accept = '.json'), (f.dataset.format = 'json'), f.click());
          }),
          f.addEventListener('change', async () => {
            if (!f.files?.length) return;
            const [e] = f.files;
            try {
              const i = await (function (t) {
                return new Promise((e, i) => {
                  const s = new FileReader();
                  ((s.onload = () => e(s.result)), (s.onerror = i), s.readAsText(t));
                });
              })(e);
              let s;
              ((s =
                'json' === f.dataset.format
                  ? (function (t) {
                      const e = JSON.parse(t);
                      if (!Array.isArray(e.portfolio))
                        throw new Error('Invalid JSON format. Expected { "portfolio": [...] }');
                      return e.portfolio.map((t) => ({
                        symbol: String(t.symbol || '').toUpperCase(),
                        shares: Number.parseFloat(t.shares),
                        avgCost: Number.parseFloat(t.avgCost),
                      }));
                    })(i)
                  : (function (t) {
                      const e = t.trim().split(/\r?\n/);
                      if (e.length < 2)
                        throw new Error('CSV must include header and at least one row');
                      const [, ...i] = e;
                      return i
                        .map((t) => t.split(',').map((t) => t.trim()))
                        .filter((t) => t.length >= 3)
                        .map(([t, e, i]) => ({
                          symbol: t.toUpperCase(),
                          shares: Number.parseFloat(e),
                          avgCost: Number.parseFloat(i),
                        }))
                        .filter(
                          (t) => t.symbol && Number.isFinite(t.shares) && Number.isFinite(t.avgCost)
                        );
                    })(i)),
                (function (e) {
                  e.forEach((e) => {
                    if (!e.symbol || !Number.isFinite(e.shares) || !Number.isFinite(e.avgCost))
                      return;
                    const i = e.symbol.toUpperCase(),
                      s = t.state.portfolio.find((t) => t.symbol === i);
                    if (s) {
                      const t = s.shares + e.shares,
                        i = s.avgCost * s.shares + e.avgCost * e.shares;
                      ((s.shares = Number(t.toFixed(4))), (s.avgCost = Number((i / t).toFixed(4))));
                    } else
                      t.state.portfolio.push({ symbol: i, shares: e.shares, avgCost: e.avgCost });
                  });
                })(s),
                t.persist(),
                await m());
            } catch (i) {
              alert(`Import failed: ${i.message}`);
            } finally {
              f.value = '';
            }
          }),
          {
            render: m,
            setFormatters: async function (t) {
              ((g = t), await m());
            },
            populateDefaults(t) {
              o.value = t;
            },
          }
        );
      }
      /*!
       * @kurkle/color v0.3.4
       * https://github.com/kurkle/color#readme
       * (c) 2024 Jukka Kurkela
       * Released under the MIT License
       */ function E(t) {
        return (t + 0.5) | 0;
      }
      const T = (t, e, i) => Math.max(Math.min(t, i), e);
      function I(t) {
        return T(E(2.55 * t), 0, 255);
      }
      function L(t) {
        return T(E(255 * t), 0, 255);
      }
      function O(t) {
        return T(E(t / 2.55) / 100, 0, 1);
      }
      function R(t) {
        return T(E(100 * t), 0, 100);
      }
      const F = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        z = [...'0123456789ABCDEF'],
        N = (t) => z[15 & t],
        B = (t) => z[(240 & t) >> 4] + z[15 & t],
        V = (t) => (240 & t) >> 4 == (15 & t);
      function H(t) {
        var e = ((t) => V(t.r) && V(t.g) && V(t.b) && V(t.a))(t) ? N : B;
        return t
          ? '#' + e(t.r) + e(t.g) + e(t.b) + ((t, e) => (t < 255 ? e(t) : ''))(t.a, e)
          : void 0;
      }
      const $ =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function W(t, e, i) {
        const s = e * Math.min(i, 1 - i),
          n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
        return [n(0), n(8), n(4)];
      }
      function j(t, e, i) {
        const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
        return [s(5), s(3), s(1)];
      }
      function Y(t, e, i) {
        const s = W(t, 1, 0.5);
        let n;
        for (e + i > 1 && ((n = 1 / (e + i)), (e *= n), (i *= n)), n = 0; n < 3; n++)
          ((s[n] *= 1 - e - i), (s[n] += e));
        return s;
      }
      function U(t) {
        const e = t.r / 255,
          i = t.g / 255,
          s = t.b / 255,
          n = Math.max(e, i, s),
          o = Math.min(e, i, s),
          a = (n + o) / 2;
        let r, l, c;
        return (
          n !== o &&
            ((c = n - o),
            (l = a > 0.5 ? c / (2 - n - o) : c / (n + o)),
            (r = (function (t, e, i, s, n) {
              return t === n
                ? (e - i) / s + (e < i ? 6 : 0)
                : e === n
                  ? (i - t) / s + 2
                  : (t - e) / s + 4;
            })(e, i, s, c, n)),
            (r = 60 * r + 0.5)),
          [0 | r, l || 0, a]
        );
      }
      function q(t, e, i, s) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(L);
      }
      function X(t, e, i) {
        return q(W, t, e, i);
      }
      function K(t) {
        return ((t % 360) + 360) % 360;
      }
      function Z(t) {
        const e = $.exec(t);
        let i,
          s = 255;
        if (!e) return;
        e[5] !== i && (s = e[6] ? I(+e[5]) : L(+e[5]));
        const n = K(+e[2]),
          o = +e[3] / 100,
          a = +e[4] / 100;
        return (
          (i =
            'hwb' === e[1]
              ? (function (t, e, i) {
                  return q(Y, t, e, i);
                })(n, o, a)
              : 'hsv' === e[1]
                ? (function (t, e, i) {
                    return q(j, t, e, i);
                  })(n, o, a)
                : X(n, o, a)),
          { r: i[0], g: i[1], b: i[2], a: s }
        );
      }
      const J = {
          x: 'dark',
          Z: 'light',
          Y: 're',
          X: 'blu',
          W: 'gr',
          V: 'medium',
          U: 'slate',
          A: 'ee',
          T: 'ol',
          S: 'or',
          B: 'ra',
          C: 'lateg',
          D: 'ights',
          R: 'in',
          Q: 'turquois',
          E: 'hi',
          P: 'ro',
          O: 'al',
          N: 'le',
          M: 'de',
          L: 'yello',
          F: 'en',
          K: 'ch',
          G: 'arks',
          H: 'ea',
          I: 'ightg',
          J: 'wh',
        },
        G = {
          OiceXe: 'f0f8ff',
          antiquewEte: 'faebd7',
          aqua: 'ffff',
          aquamarRe: '7fffd4',
          azuY: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '0',
          blanKedOmond: 'ffebcd',
          Xe: 'ff',
          XeviTet: '8a2be2',
          bPwn: 'a52a2a',
          burlywood: 'deb887',
          caMtXe: '5f9ea0',
          KartYuse: '7fff00',
          KocTate: 'd2691e',
          cSO: 'ff7f50',
          cSnflowerXe: '6495ed',
          cSnsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: 'ffff',
          xXe: '8b',
          xcyan: '8b8b',
          xgTMnPd: 'b8860b',
          xWay: 'a9a9a9',
          xgYF: '6400',
          xgYy: 'a9a9a9',
          xkhaki: 'bdb76b',
          xmagFta: '8b008b',
          xTivegYF: '556b2f',
          xSange: 'ff8c00',
          xScEd: '9932cc',
          xYd: '8b0000',
          xsOmon: 'e9967a',
          xsHgYF: '8fbc8f',
          xUXe: '483d8b',
          xUWay: '2f4f4f',
          xUgYy: '2f4f4f',
          xQe: 'ced1',
          xviTet: '9400d3',
          dAppRk: 'ff1493',
          dApskyXe: 'bfff',
          dimWay: '696969',
          dimgYy: '696969',
          dodgerXe: '1e90ff',
          fiYbrick: 'b22222',
          flSOwEte: 'fffaf0',
          foYstWAn: '228b22',
          fuKsia: 'ff00ff',
          gaRsbSo: 'dcdcdc',
          ghostwEte: 'f8f8ff',
          gTd: 'ffd700',
          gTMnPd: 'daa520',
          Way: '808080',
          gYF: '8000',
          gYFLw: 'adff2f',
          gYy: '808080',
          honeyMw: 'f0fff0',
          hotpRk: 'ff69b4',
          RdianYd: 'cd5c5c',
          Rdigo: '4b0082',
          ivSy: 'fffff0',
          khaki: 'f0e68c',
          lavFMr: 'e6e6fa',
          lavFMrXsh: 'fff0f5',
          lawngYF: '7cfc00',
          NmoncEffon: 'fffacd',
          ZXe: 'add8e6',
          ZcSO: 'f08080',
          Zcyan: 'e0ffff',
          ZgTMnPdLw: 'fafad2',
          ZWay: 'd3d3d3',
          ZgYF: '90ee90',
          ZgYy: 'd3d3d3',
          ZpRk: 'ffb6c1',
          ZsOmon: 'ffa07a',
          ZsHgYF: '20b2aa',
          ZskyXe: '87cefa',
          ZUWay: '778899',
          ZUgYy: '778899',
          ZstAlXe: 'b0c4de',
          ZLw: 'ffffe0',
          lime: 'ff00',
          limegYF: '32cd32',
          lRF: 'faf0e6',
          magFta: 'ff00ff',
          maPon: '800000',
          VaquamarRe: '66cdaa',
          VXe: 'cd',
          VScEd: 'ba55d3',
          VpurpN: '9370db',
          VsHgYF: '3cb371',
          VUXe: '7b68ee',
          VsprRggYF: 'fa9a',
          VQe: '48d1cc',
          VviTetYd: 'c71585',
          midnightXe: '191970',
          mRtcYam: 'f5fffa',
          mistyPse: 'ffe4e1',
          moccasR: 'ffe4b5',
          navajowEte: 'ffdead',
          navy: '80',
          Tdlace: 'fdf5e6',
          Tive: '808000',
          TivedBb: '6b8e23',
          Sange: 'ffa500',
          SangeYd: 'ff4500',
          ScEd: 'da70d6',
          pOegTMnPd: 'eee8aa',
          pOegYF: '98fb98',
          pOeQe: 'afeeee',
          pOeviTetYd: 'db7093',
          papayawEp: 'ffefd5',
          pHKpuff: 'ffdab9',
          peru: 'cd853f',
          pRk: 'ffc0cb',
          plum: 'dda0dd',
          powMrXe: 'b0e0e6',
          purpN: '800080',
          YbeccapurpN: '663399',
          Yd: 'ff0000',
          Psybrown: 'bc8f8f',
          PyOXe: '4169e1',
          saddNbPwn: '8b4513',
          sOmon: 'fa8072',
          sandybPwn: 'f4a460',
          sHgYF: '2e8b57',
          sHshell: 'fff5ee',
          siFna: 'a0522d',
          silver: 'c0c0c0',
          skyXe: '87ceeb',
          UXe: '6a5acd',
          UWay: '708090',
          UgYy: '708090',
          snow: 'fffafa',
          sprRggYF: 'ff7f',
          stAlXe: '4682b4',
          tan: 'd2b48c',
          teO: '8080',
          tEstN: 'd8bfd8',
          tomato: 'ff6347',
          Qe: '40e0d0',
          viTet: 'ee82ee',
          JHt: 'f5deb3',
          wEte: 'ffffff',
          wEtesmoke: 'f5f5f5',
          Lw: 'ffff00',
          LwgYF: '9acd32',
        };
      let Q;
      function tt(t) {
        Q ||
          ((Q = (function () {
            const t = {},
              e = Object.keys(G),
              i = Object.keys(J);
            let s, n, o, a, r;
            for (s = 0; s < e.length; s++) {
              for (a = r = e[s], n = 0; n < i.length; n++) ((o = i[n]), (r = r.replace(o, J[o])));
              ((o = parseInt(G[a], 16)), (t[r] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]));
            }
            return t;
          })()),
          (Q.transparent = [0, 0, 0, 0]));
        const e = Q[t.toLowerCase()];
        return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
      }
      const et =
          /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        it = (t) => (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055),
        st = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
      function nt(t, e, i) {
        if (t) {
          let s = U(t);
          ((s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1))),
            (s = X(s)),
            (t.r = s[0]),
            (t.g = s[1]),
            (t.b = s[2]));
        }
      }
      function ot(t, e) {
        return t ? Object.assign(e || {}, t) : t;
      }
      function at(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = L(t[3])))
            : ((e = ot(t, { r: 0, g: 0, b: 0, a: 1 })).a = L(e.a)),
          e
        );
      }
      function rt(t) {
        return 'r' === t.charAt(0)
          ? (function (t) {
              const e = et.exec(t);
              let i,
                s,
                n,
                o = 255;
              if (e) {
                if (e[7] !== i) {
                  const t = +e[7];
                  o = e[8] ? I(t) : T(255 * t, 0, 255);
                }
                return (
                  (i = +e[1]),
                  (s = +e[3]),
                  (n = +e[5]),
                  (i = 255 & (e[2] ? I(i) : T(i, 0, 255))),
                  (s = 255 & (e[4] ? I(s) : T(s, 0, 255))),
                  (n = 255 & (e[6] ? I(n) : T(n, 0, 255))),
                  { r: i, g: s, b: n, a: o }
                );
              }
            })(t)
          : Z(t);
      }
      class lt {
        constructor(t) {
          if (t instanceof lt) return t;
          const e = typeof t;
          let i;
          var s, n, o;
          ('object' === e
            ? (i = at(t))
            : 'string' === e &&
              ((o = (s = t).length),
              '#' === s[0] &&
                (4 === o || 5 === o
                  ? (n = {
                      r: 255 & (17 * F[s[1]]),
                      g: 255 & (17 * F[s[2]]),
                      b: 255 & (17 * F[s[3]]),
                      a: 5 === o ? 17 * F[s[4]] : 255,
                    })
                  : (7 !== o && 9 !== o) ||
                    (n = {
                      r: (F[s[1]] << 4) | F[s[2]],
                      g: (F[s[3]] << 4) | F[s[4]],
                      b: (F[s[5]] << 4) | F[s[6]],
                      a: 9 === o ? (F[s[7]] << 4) | F[s[8]] : 255,
                    })),
              (i = n || tt(t) || rt(t))),
            (this._rgb = i),
            (this._valid = !!i));
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var t = ot(this._rgb);
          return (t && (t.a = O(t.a)), t);
        }
        set rgb(t) {
          this._rgb = at(t);
        }
        rgbString() {
          return this._valid
            ? (t = this._rgb) &&
                (t.a < 255
                  ? `rgba(${t.r}, ${t.g}, ${t.b}, ${O(t.a)})`
                  : `rgb(${t.r}, ${t.g}, ${t.b})`)
            : void 0;
          var t;
        }
        hexString() {
          return this._valid ? H(this._rgb) : void 0;
        }
        hslString() {
          return this._valid
            ? (function (t) {
                if (!t) return;
                const e = U(t),
                  i = e[0],
                  s = R(e[1]),
                  n = R(e[2]);
                return t.a < 255
                  ? `hsla(${i}, ${s}%, ${n}%, ${O(t.a)})`
                  : `hsl(${i}, ${s}%, ${n}%)`;
              })(this._rgb)
            : void 0;
        }
        mix(t, e) {
          if (t) {
            const i = this.rgb,
              s = t.rgb;
            let n;
            const o = e === n ? 0.5 : e,
              a = 2 * o - 1,
              r = i.a - s.a,
              l = ((a * r === -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
            ((n = 1 - l),
              (i.r = 255 & (l * i.r + n * s.r + 0.5)),
              (i.g = 255 & (l * i.g + n * s.g + 0.5)),
              (i.b = 255 & (l * i.b + n * s.b + 0.5)),
              (i.a = o * i.a + (1 - o) * s.a),
              (this.rgb = i));
          }
          return this;
        }
        interpolate(t, e) {
          return (
            t &&
              (this._rgb = (function (t, e, i) {
                const s = st(O(t.r)),
                  n = st(O(t.g)),
                  o = st(O(t.b));
                return {
                  r: L(it(s + i * (st(O(e.r)) - s))),
                  g: L(it(n + i * (st(O(e.g)) - n))),
                  b: L(it(o + i * (st(O(e.b)) - o))),
                  a: t.a + i * (e.a - t.a),
                };
              })(this._rgb, t._rgb, e)),
            this
          );
        }
        clone() {
          return new lt(this.rgb);
        }
        alpha(t) {
          return ((this._rgb.a = L(t)), this);
        }
        clearer(t) {
          return ((this._rgb.a *= 1 - t), this);
        }
        greyscale() {
          const t = this._rgb,
            e = E(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
          return ((t.r = t.g = t.b = e), this);
        }
        opaquer(t) {
          return ((this._rgb.a *= 1 + t), this);
        }
        negate() {
          const t = this._rgb;
          return ((t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this);
        }
        lighten(t) {
          return (nt(this._rgb, 2, t), this);
        }
        darken(t) {
          return (nt(this._rgb, 2, -t), this);
        }
        saturate(t) {
          return (nt(this._rgb, 1, t), this);
        }
        desaturate(t) {
          return (nt(this._rgb, 1, -t), this);
        }
        rotate(t) {
          return (
            (function (t, e) {
              var i = U(t);
              ((i[0] = K(i[0] + e)), (i = X(i)), (t.r = i[0]), (t.g = i[1]), (t.b = i[2]));
            })(this._rgb, t),
            this
          );
        }
      }
      /*!
       * Chart.js v4.5.0
       * https://www.chartjs.org
       * (c) 2025 Chart.js Contributors
       * Released under the MIT License
       */ function ct() {}
      const ht = (() => {
        let t = 0;
        return () => t++;
      })();
      function dt(t) {
        return null == t;
      }
      function ut(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
      }
      function pt(t) {
        return null !== t && '[object Object]' === Object.prototype.toString.call(t);
      }
      function ft(t) {
        return ('number' == typeof t || t instanceof Number) && isFinite(+t);
      }
      function gt(t, e) {
        return ft(t) ? t : e;
      }
      function mt(t, e) {
        return void 0 === t ? e : t;
      }
      const bt = (t, e) =>
        'string' == typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t;
      function xt(t, e, i) {
        if (t && 'function' == typeof t.call) return t.apply(i, e);
      }
      function yt(t, e, i, s) {
        let n, o, a;
        if (ut(t)) for (o = t.length, n = 0; n < o; n++) e.call(i, t[n], n);
        else if (pt(t))
          for (a = Object.keys(t), o = a.length, n = 0; n < o; n++) e.call(i, t[a[n]], a[n]);
      }
      function vt(t, e) {
        let i, s, n, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (i = 0, s = t.length; i < s; ++i)
          if (((n = t[i]), (o = e[i]), n.datasetIndex !== o.datasetIndex || n.index !== o.index))
            return !1;
        return !0;
      }
      function _t(t) {
        if (ut(t)) return t.map(_t);
        if (pt(t)) {
          const e = Object.create(null),
            i = Object.keys(t),
            s = i.length;
          let n = 0;
          for (; n < s; ++n) e[i[n]] = _t(t[i[n]]);
          return e;
        }
        return t;
      }
      function wt(t) {
        return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
      }
      function Mt(t, e, i, s) {
        if (!wt(t)) return;
        const n = e[t],
          o = i[t];
        pt(n) && pt(o) ? kt(n, o, s) : (e[t] = _t(o));
      }
      function kt(t, e, i) {
        const s = ut(e) ? e : [e],
          n = s.length;
        if (!pt(t)) return t;
        const o = (i = i || {}).merger || Mt;
        let a;
        for (let r = 0; r < n; ++r) {
          if (((a = s[r]), !pt(a))) continue;
          const e = Object.keys(a);
          for (let s = 0, n = e.length; s < n; ++s) o(e[s], t, a, i);
        }
        return t;
      }
      function St(t, e) {
        return kt(t, e, { merger: Pt });
      }
      function Pt(t, e, i) {
        if (!wt(t)) return;
        const s = e[t],
          n = i[t];
        pt(s) && pt(n) ? St(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = _t(n));
      }
      const At = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
      function Dt(t, e) {
        const i =
          At[e] ||
          (At[e] = (function (t) {
            const e = (function (t) {
              const e = t.split('.'),
                i = [];
              let s = '';
              for (const n of e)
                ((s += n), s.endsWith('\\') ? (s = s.slice(0, -1) + '.') : (i.push(s), (s = '')));
              return i;
            })(t);
            return (t) => {
              for (const i of e) {
                if ('' === i) break;
                t = t && t[i];
              }
              return t;
            };
          })(e));
        return i(t);
      }
      function Ct(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      const Et = (t) => void 0 !== t,
        Tt = (t) => 'function' == typeof t,
        It = (t, e) => {
          if (t.size !== e.size) return !1;
          for (const i of t) if (!e.has(i)) return !1;
          return !0;
        },
        Lt = Math.PI,
        Ot = 2 * Lt,
        Rt = Ot + Lt,
        Ft = Number.POSITIVE_INFINITY,
        zt = Lt / 180,
        Nt = Lt / 2,
        Bt = Lt / 4,
        Vt = (2 * Lt) / 3,
        Ht = Math.log10,
        $t = Math.sign;
      function Wt(t, e, i) {
        return Math.abs(t - e) < i;
      }
      function jt(t) {
        const e = Math.round(t);
        t = Wt(t, e, t / 1e3) ? e : t;
        const i = Math.pow(10, Math.floor(Ht(t))),
          s = t / i;
        return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
      }
      function Yt(t) {
        return (
          !(function (t) {
            return (
              'symbol' == typeof t ||
              ('object' == typeof t &&
                null !== t &&
                !(Symbol.toPrimitive in t || 'toString' in t || 'valueOf' in t))
            );
          })(t) &&
          !isNaN(parseFloat(t)) &&
          isFinite(t)
        );
      }
      function Ut(t, e, i) {
        let s, n, o;
        for (s = 0, n = t.length; s < n; s++)
          ((o = t[s][i]), isNaN(o) || ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o))));
      }
      function qt(t) {
        return t * (Lt / 180);
      }
      function Xt(t) {
        return t * (180 / Lt);
      }
      function Kt(t) {
        if (!ft(t)) return;
        let e = 1,
          i = 0;
        for (; Math.round(t * e) / e !== t; ) ((e *= 10), i++);
        return i;
      }
      function Zt(t, e) {
        const i = e.x - t.x,
          s = e.y - t.y,
          n = Math.sqrt(i * i + s * s);
        let o = Math.atan2(s, i);
        return (o < -0.5 * Lt && (o += Ot), { angle: o, distance: n });
      }
      function Jt(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function Gt(t, e) {
        return ((t - e + Rt) % Ot) - Lt;
      }
      function Qt(t) {
        return ((t % Ot) + Ot) % Ot;
      }
      function te(t, e, i, s) {
        const n = Qt(t),
          o = Qt(e),
          a = Qt(i),
          r = Qt(o - n),
          l = Qt(a - n),
          c = Qt(n - o),
          h = Qt(n - a);
        return n === o || n === a || (s && o === a) || (r > l && c < h);
      }
      function ee(t, e, i) {
        return Math.max(e, Math.min(i, t));
      }
      function ie(t, e, i, s = 1e-6) {
        return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
      }
      function se(t, e, i) {
        i = i || ((i) => t[i] < e);
        let s,
          n = t.length - 1,
          o = 0;
        for (; n - o > 1; ) ((s = (o + n) >> 1), i(s) ? (o = s) : (n = s));
        return { lo: o, hi: n };
      }
      const ne = (t, e, i, s) =>
          se(
            t,
            i,
            s
              ? (s) => {
                  const n = t[s][e];
                  return n < i || (n === i && t[s + 1][e] === i);
                }
              : (s) => t[s][e] < i
          ),
        oe = (t, e, i) => se(t, i, (s) => t[s][e] >= i),
        ae = ['push', 'pop', 'shift', 'splice', 'unshift'];
      function re(t, e) {
        const i = t._chartjs;
        if (!i) return;
        const s = i.listeners,
          n = s.indexOf(e);
        (-1 !== n && s.splice(n, 1),
          s.length > 0 ||
            (ae.forEach((e) => {
              delete t[e];
            }),
            delete t._chartjs));
      }
      function le(t) {
        const e = new Set(t);
        return e.size === t.length ? t : Array.from(e);
      }
      const ce =
        'undefined' == typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      function he(t, e) {
        let i = [],
          s = !1;
        return function (...n) {
          ((i = n),
            s ||
              ((s = !0),
              ce.call(window, () => {
                ((s = !1), t.apply(e, i));
              })));
        };
      }
      const de = (t) => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
        ue = (t, e, i) => ('start' === t ? e : 'end' === t ? i : (e + i) / 2);
      function pe(t, e, i) {
        const s = e.length;
        let n = 0,
          o = s;
        if (t._sorted) {
          const { iScale: a, vScale: r, _parsed: l } = t,
            c = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null,
            h = a.axis,
            { min: d, max: u, minDefined: p, maxDefined: f } = a.getUserBounds();
          if (p) {
            if (((n = Math.min(ne(l, h, d).lo, i ? s : ne(e, h, a.getPixelForValue(d)).lo)), c)) {
              const t = l
                .slice(0, n + 1)
                .reverse()
                .findIndex((t) => !dt(t[r.axis]));
              n -= Math.max(0, t);
            }
            n = ee(n, 0, s - 1);
          }
          if (f) {
            let t = Math.max(
              ne(l, a.axis, u, !0).hi + 1,
              i ? 0 : ne(e, h, a.getPixelForValue(u), !0).hi + 1
            );
            if (c) {
              const e = l.slice(t - 1).findIndex((t) => !dt(t[r.axis]));
              t += Math.max(0, e);
            }
            o = ee(t, n, s) - n;
          } else o = s - n;
        }
        return { start: n, count: o };
      }
      function fe(t) {
        const { xScale: e, yScale: i, _scaleRanges: s } = t,
          n = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
        if (!s) return ((t._scaleRanges = n), !0);
        const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
        return (Object.assign(s, n), o);
      }
      const ge = (t) => 0 === t || 1 === t,
        me = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * Ot) / i),
        be = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * Ot) / i) + 1,
        xe = {
          linear: (t) => t,
          easeInQuad: (t) => t * t,
          easeOutQuad: (t) => -t * (t - 2),
          easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
          easeInCubic: (t) => t * t * t,
          easeOutCubic: (t) => (t -= 1) * t * t + 1,
          easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
          easeInQuart: (t) => t * t * t * t,
          easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: (t) => t * t * t * t * t,
          easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: (t) => 1 - Math.cos(t * Nt),
          easeOutSine: (t) => Math.sin(t * Nt),
          easeInOutSine: (t) => -0.5 * (Math.cos(Lt * t) - 1),
          easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
          easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
          easeInOutExpo: (t) =>
            ge(t)
              ? t
              : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
          easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: (t) =>
            (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: (t) => (ge(t) ? t : me(t, 0.075, 0.3)),
          easeOutElastic: (t) => (ge(t) ? t : be(t, 0.075, 0.3)),
          easeInOutElastic(t) {
            const e = 0.1125;
            return ge(t)
              ? t
              : t < 0.5
                ? 0.5 * me(2 * t, e, 0.45)
                : 0.5 + 0.5 * be(2 * t - 1, e, 0.45);
          },
          easeInBack(t) {
            const e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack(t) {
            const e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: (t) => 1 - xe.easeOutBounce(1 - t),
          easeOutBounce(t) {
            const e = 7.5625,
              i = 2.75;
            return t < 1 / i
              ? e * t * t
              : t < 2 / i
                ? e * (t -= 1.5 / i) * t + 0.75
                : t < 2.5 / i
                  ? e * (t -= 2.25 / i) * t + 0.9375
                  : e * (t -= 2.625 / i) * t + 0.984375;
          },
          easeInOutBounce: (t) =>
            t < 0.5 ? 0.5 * xe.easeInBounce(2 * t) : 0.5 * xe.easeOutBounce(2 * t - 1) + 0.5,
        };
      function ye(t) {
        if (t && 'object' == typeof t) {
          const e = t.toString();
          return '[object CanvasPattern]' === e || '[object CanvasGradient]' === e;
        }
        return !1;
      }
      function ve(t) {
        return ye(t) ? t : new lt(t);
      }
      function _e(t) {
        return ye(t) ? t : new lt(t).saturate(0.5).darken(0.1).hexString();
      }
      const we = ['x', 'y', 'borderWidth', 'radius', 'tension'],
        Me = ['color', 'borderColor', 'backgroundColor'],
        ke = new Map();
      function Se(t, e, i) {
        return (function (t, e) {
          e = e || {};
          const i = t + JSON.stringify(e);
          let s = ke.get(i);
          return (s || ((s = new Intl.NumberFormat(t, e)), ke.set(i, s)), s);
        })(e, i).format(t);
      }
      const Pe = {
        values: (t) => (ut(t) ? t : '' + t),
        numeric(t, e, i) {
          if (0 === t) return '0';
          const s = this.chart.options.locale;
          let n,
            o = t;
          if (i.length > 1) {
            const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
            ((e < 1e-4 || e > 1e15) && (n = 'scientific'),
              (o = (function (t, e) {
                let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                return (Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)), i);
              })(t, i)));
          }
          const a = Ht(Math.abs(o)),
            r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
            l = { notation: n, minimumFractionDigits: r, maximumFractionDigits: r };
          return (Object.assign(l, this.options.ticks.format), Se(t, s, l));
        },
        logarithmic(t, e, i) {
          if (0 === t) return '0';
          const s = i[e].significand || t / Math.pow(10, Math.floor(Ht(t)));
          return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length
            ? Pe.numeric.call(this, t, e, i)
            : '';
        },
      };
      var Ae = { formatters: Pe };
      const De = Object.create(null),
        Ce = Object.create(null);
      function Ee(t, e) {
        if (!e) return t;
        const i = e.split('.');
        for (let s = 0, n = i.length; s < n; ++s) {
          const e = i[s];
          t = t[e] || (t[e] = Object.create(null));
        }
        return t;
      }
      function Te(t, e, i) {
        return 'string' == typeof e ? kt(Ee(t, e), i) : kt(Ee(t, ''), e);
      }
      class Ie {
        constructor(t, e) {
          ((this.animation = void 0),
            (this.backgroundColor = 'rgba(0,0,0,0.1)'),
            (this.borderColor = 'rgba(0,0,0,0.1)'),
            (this.color = '#666'),
            (this.datasets = {}),
            (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: 'normal',
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (t, e) => _e(e.backgroundColor)),
            (this.hoverBorderColor = (t, e) => _e(e.borderColor)),
            (this.hoverColor = (t, e) => _e(e.color)),
            (this.indexAxis = 'x'),
            (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t),
            this.apply(e));
        }
        set(t, e) {
          return Te(this, t, e);
        }
        get(t) {
          return Ee(this, t);
        }
        describe(t, e) {
          return Te(Ce, t, e);
        }
        override(t, e) {
          return Te(De, t, e);
        }
        route(t, e, i, s) {
          const n = Ee(this, t),
            o = Ee(this, i),
            a = '_' + e;
          Object.defineProperties(n, {
            [a]: { value: n[e], writable: !0 },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[a],
                  e = o[s];
                return pt(t) ? Object.assign({}, e, t) : mt(t, e);
              },
              set(t) {
                this[a] = t;
              },
            },
          });
        }
        apply(t) {
          t.forEach((t) => t(this));
        }
      }
      var Le = new Ie(
        {
          _scriptable: (t) => !t.startsWith('on'),
          _indexable: (t) => 'events' !== t,
          hover: { _fallback: 'interaction' },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function (t) {
            (t.set('animation', {
              delay: void 0,
              duration: 1e3,
              easing: 'easeOutQuart',
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              t.describe('animation', {
                _fallback: !1,
                _indexable: !1,
                _scriptable: (t) => 'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
              }),
              t.set('animations', {
                colors: { type: 'color', properties: Me },
                numbers: { type: 'number', properties: we },
              }),
              t.describe('animations', { _fallback: 'animation' }),
              t.set('transitions', {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: 'transparent' },
                    visible: { type: 'boolean', duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: 'transparent' },
                    visible: { type: 'boolean', easing: 'linear', fn: (t) => 0 | t },
                  },
                },
              }));
          },
          function (t) {
            t.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
          },
          function (t) {
            (t.set('scale', {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: 'ticks',
              clip: !0,
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: '',
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: Ae.formatters.values,
                minor: {},
                major: {},
                align: 'center',
                crossAlign: 'near',
                showLabelBackdrop: !1,
                backdropColor: 'rgba(255, 255, 255, 0.75)',
                backdropPadding: 2,
              },
            }),
              t.route('scale.ticks', 'color', '', 'color'),
              t.route('scale.grid', 'color', '', 'borderColor'),
              t.route('scale.border', 'color', '', 'borderColor'),
              t.route('scale.title', 'color', '', 'color'),
              t.describe('scale', {
                _fallback: !1,
                _scriptable: (t) =>
                  !t.startsWith('before') &&
                  !t.startsWith('after') &&
                  'callback' !== t &&
                  'parser' !== t,
                _indexable: (t) => 'borderDash' !== t && 'tickBorderDash' !== t && 'dash' !== t,
              }),
              t.describe('scales', { _fallback: 'scale' }),
              t.describe('scale.ticks', {
                _scriptable: (t) => 'backdropPadding' !== t && 'callback' !== t,
                _indexable: (t) => 'backdropPadding' !== t,
              }));
          },
        ]
      );
      function Oe(t, e, i, s, n) {
        let o = e[n];
        return (o || ((o = e[n] = t.measureText(n).width), i.push(n)), o > s && (s = o), s);
      }
      function Re(t, e, i, s) {
        let n = ((s = s || {}).data = s.data || {}),
          o = (s.garbageCollect = s.garbageCollect || []);
        (s.font !== e && ((n = s.data = {}), (o = s.garbageCollect = []), (s.font = e)),
          t.save(),
          (t.font = e));
        let a = 0;
        const r = i.length;
        let l, c, h, d, u;
        for (l = 0; l < r; l++)
          if (((d = i[l]), null == d || ut(d))) {
            if (ut(d))
              for (c = 0, h = d.length; c < h; c++)
                ((u = d[c]), null == u || ut(u) || (a = Oe(t, n, o, a, u)));
          } else a = Oe(t, n, o, a, d);
        t.restore();
        const p = o.length / 2;
        if (p > i.length) {
          for (l = 0; l < p; l++) delete n[o[l]];
          o.splice(0, p);
        }
        return a;
      }
      function Fe(t, e, i) {
        const s = t.currentDevicePixelRatio,
          n = 0 !== i ? Math.max(i / 2, 0.5) : 0;
        return Math.round((e - n) * s) / s + n;
      }
      function ze(t, e) {
        (e || t) &&
          ((e = e || t.getContext('2d')).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore());
      }
      function Ne(t, e, i, s) {
        Be(t, e, i, s, null);
      }
      function Be(t, e, i, s, n) {
        let o, a, r, l, c, h, d, u;
        const p = e.pointStyle,
          f = e.rotation,
          g = e.radius;
        let m = (f || 0) * zt;
        if (
          p &&
          'object' == typeof p &&
          ((o = p.toString()),
          '[object HTMLImageElement]' === o || '[object HTMLCanvasElement]' === o)
        )
          return (
            t.save(),
            t.translate(i, s),
            t.rotate(m),
            t.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
            void t.restore()
          );
        if (!(isNaN(g) || g <= 0)) {
          switch ((t.beginPath(), p)) {
            default:
              (n ? t.ellipse(i, s, n / 2, g, 0, 0, Ot) : t.arc(i, s, g, 0, Ot), t.closePath());
              break;
            case 'triangle':
              ((h = n ? n / 2 : g),
                t.moveTo(i + Math.sin(m) * h, s - Math.cos(m) * g),
                (m += Vt),
                t.lineTo(i + Math.sin(m) * h, s - Math.cos(m) * g),
                (m += Vt),
                t.lineTo(i + Math.sin(m) * h, s - Math.cos(m) * g),
                t.closePath());
              break;
            case 'rectRounded':
              ((c = 0.516 * g),
                (l = g - c),
                (a = Math.cos(m + Bt) * l),
                (d = Math.cos(m + Bt) * (n ? n / 2 - c : l)),
                (r = Math.sin(m + Bt) * l),
                (u = Math.sin(m + Bt) * (n ? n / 2 - c : l)),
                t.arc(i - d, s - r, c, m - Lt, m - Nt),
                t.arc(i + u, s - a, c, m - Nt, m),
                t.arc(i + d, s + r, c, m, m + Nt),
                t.arc(i - u, s + a, c, m + Nt, m + Lt),
                t.closePath());
              break;
            case 'rect':
              if (!f) {
                ((l = Math.SQRT1_2 * g), (h = n ? n / 2 : l), t.rect(i - h, s - l, 2 * h, 2 * l));
                break;
              }
              m += Bt;
            case 'rectRot':
              ((d = Math.cos(m) * (n ? n / 2 : g)),
                (a = Math.cos(m) * g),
                (r = Math.sin(m) * g),
                (u = Math.sin(m) * (n ? n / 2 : g)),
                t.moveTo(i - d, s - r),
                t.lineTo(i + u, s - a),
                t.lineTo(i + d, s + r),
                t.lineTo(i - u, s + a),
                t.closePath());
              break;
            case 'crossRot':
              m += Bt;
            case 'cross':
              ((d = Math.cos(m) * (n ? n / 2 : g)),
                (a = Math.cos(m) * g),
                (r = Math.sin(m) * g),
                (u = Math.sin(m) * (n ? n / 2 : g)),
                t.moveTo(i - d, s - r),
                t.lineTo(i + d, s + r),
                t.moveTo(i + u, s - a),
                t.lineTo(i - u, s + a));
              break;
            case 'star':
              ((d = Math.cos(m) * (n ? n / 2 : g)),
                (a = Math.cos(m) * g),
                (r = Math.sin(m) * g),
                (u = Math.sin(m) * (n ? n / 2 : g)),
                t.moveTo(i - d, s - r),
                t.lineTo(i + d, s + r),
                t.moveTo(i + u, s - a),
                t.lineTo(i - u, s + a),
                (m += Bt),
                (d = Math.cos(m) * (n ? n / 2 : g)),
                (a = Math.cos(m) * g),
                (r = Math.sin(m) * g),
                (u = Math.sin(m) * (n ? n / 2 : g)),
                t.moveTo(i - d, s - r),
                t.lineTo(i + d, s + r),
                t.moveTo(i + u, s - a),
                t.lineTo(i - u, s + a));
              break;
            case 'line':
              ((a = n ? n / 2 : Math.cos(m) * g),
                (r = Math.sin(m) * g),
                t.moveTo(i - a, s - r),
                t.lineTo(i + a, s + r));
              break;
            case 'dash':
              (t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (n ? n / 2 : g), s + Math.sin(m) * g));
              break;
            case !1:
              t.closePath();
          }
          (t.fill(), e.borderWidth > 0 && t.stroke());
        }
      }
      function Ve(t, e, i) {
        return (
          (i = i || 0.5),
          !e ||
            (t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i)
        );
      }
      function He(t, e) {
        (t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip());
      }
      function $e(t) {
        t.restore();
      }
      function We(t, e, i, s, n) {
        if (!e) return t.lineTo(i.x, i.y);
        if ('middle' === n) {
          const s = (e.x + i.x) / 2;
          (t.lineTo(s, e.y), t.lineTo(s, i.y));
        } else ('after' === n) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
        t.lineTo(i.x, i.y);
      }
      function je(t, e, i, s) {
        if (!e) return t.lineTo(i.x, i.y);
        t.bezierCurveTo(
          s ? e.cp1x : e.cp2x,
          s ? e.cp1y : e.cp2y,
          s ? i.cp2x : i.cp1x,
          s ? i.cp2y : i.cp1y,
          i.x,
          i.y
        );
      }
      function Ye(t, e, i, s, n) {
        if (n.strikethrough || n.underline) {
          const o = t.measureText(s),
            a = e - o.actualBoundingBoxLeft,
            r = e + o.actualBoundingBoxRight,
            l = i - o.actualBoundingBoxAscent,
            c = i + o.actualBoundingBoxDescent,
            h = n.strikethrough ? (l + c) / 2 : c;
          ((t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = n.decorationWidth || 2),
            t.moveTo(a, h),
            t.lineTo(r, h),
            t.stroke());
        }
      }
      function Ue(t, e) {
        const i = t.fillStyle;
        ((t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = i));
      }
      function qe(t, e, i, s, n, o = {}) {
        const a = ut(e) ? e : [e],
          r = o.strokeWidth > 0 && '' !== o.strokeColor;
        let l, c;
        for (
          t.save(),
            t.font = n.string,
            (function (t, e) {
              (e.translation && t.translate(e.translation[0], e.translation[1]),
                dt(e.rotation) || t.rotate(e.rotation),
                e.color && (t.fillStyle = e.color),
                e.textAlign && (t.textAlign = e.textAlign),
                e.textBaseline && (t.textBaseline = e.textBaseline));
            })(t, o),
            l = 0;
          l < a.length;
          ++l
        )
          ((c = a[l]),
            o.backdrop && Ue(t, o.backdrop),
            r &&
              (o.strokeColor && (t.strokeStyle = o.strokeColor),
              dt(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
              t.strokeText(c, i, s, o.maxWidth)),
            t.fillText(c, i, s, o.maxWidth),
            Ye(t, i, s, c, o),
            (s += Number(n.lineHeight)));
        t.restore();
      }
      function Xe(t, e) {
        const { x: i, y: s, w: n, h: o, radius: a } = e;
        (t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * Lt, Lt, !0),
          t.lineTo(i, s + o - a.bottomLeft),
          t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, Lt, Nt, !0),
          t.lineTo(i + n - a.bottomRight, s + o),
          t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, Nt, 0, !0),
          t.lineTo(i + n, s + a.topRight),
          t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -Nt, !0),
          t.lineTo(i + a.topLeft, s));
      }
      const Ke = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        Ze = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
      function Je(t, e) {
        const i = ('' + t).match(Ke);
        if (!i || 'normal' === i[1]) return 1.2 * e;
        switch (((t = +i[2]), i[3])) {
          case 'px':
            return t;
          case '%':
            t /= 100;
        }
        return e * t;
      }
      const Ge = (t) => +t || 0;
      function Qe(t, e) {
        const i = {},
          s = pt(e),
          n = s ? Object.keys(e) : e,
          o = pt(t) ? (s ? (i) => mt(t[i], t[e[i]]) : (e) => t[e]) : () => t;
        for (const a of n) i[a] = Ge(o(a));
        return i;
      }
      function ti(t) {
        return Qe(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
      }
      function ei(t) {
        return Qe(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
      }
      function ii(t) {
        const e = ti(t);
        return ((e.width = e.left + e.right), (e.height = e.top + e.bottom), e);
      }
      function si(t, e) {
        ((t = t || {}), (e = e || Le.font));
        let i = mt(t.size, e.size);
        'string' == typeof i && (i = parseInt(i, 10));
        let s = mt(t.style, e.style);
        s &&
          !('' + s).match(Ze) &&
          (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
        const n = {
          family: mt(t.family, e.family),
          lineHeight: Je(mt(t.lineHeight, e.lineHeight), i),
          size: i,
          style: s,
          weight: mt(t.weight, e.weight),
          string: '',
        };
        return (
          (n.string = (function (t) {
            return !t || dt(t.size) || dt(t.family)
              ? null
              : (t.style ? t.style + ' ' : '') +
                  (t.weight ? t.weight + ' ' : '') +
                  t.size +
                  'px ' +
                  t.family;
          })(n)),
          n
        );
      }
      function ni(t, e, i, s) {
        let n, o, a;
        for (n = 0, o = t.length; n < o; ++n)
          if (((a = t[n]), void 0 !== a && void 0 !== a)) return a;
      }
      function oi(t, e) {
        return Object.assign(Object.create(t), e);
      }
      function ai(t, e = [''], i, s, n = () => t[0]) {
        const o = i || t;
        void 0 === s && (s = bi('_fallback', t));
        const a = {
          [Symbol.toStringTag]: 'Object',
          _cacheable: !0,
          _scopes: t,
          _rootScopes: o,
          _fallback: s,
          _getTarget: n,
          override: (i) => ai([i, ...t], e, o, s),
        };
        return new Proxy(a, {
          deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
          get: (i, s) =>
            di(i, s, () =>
              (function (t, e, i, s) {
                let n;
                for (const o of e)
                  if (((n = bi(ci(o, t), i)), void 0 !== n)) return hi(t, n) ? gi(i, s, t, n) : n;
              })(s, e, t, i)
            ),
          getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, e) => xi(t).includes(e),
          ownKeys: (t) => xi(t),
          set(t, e, i) {
            const s = t._storage || (t._storage = n());
            return ((t[e] = s[e] = i), delete t._keys, !0);
          },
        });
      }
      function ri(t, e, i, s) {
        const n = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: i,
          _stack: new Set(),
          _descriptors: li(t, s),
          setContext: (e) => ri(t, e, i, s),
          override: (n) => ri(t.override(n), e, i, s),
        };
        return new Proxy(n, {
          deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
          get: (t, e, i) =>
            di(t, e, () =>
              (function (t, e, i) {
                const { _proxy: s, _context: n, _subProxy: o, _descriptors: a } = t;
                let r = s[e];
                return (
                  Tt(r) &&
                    a.isScriptable(e) &&
                    (r = (function (t, e, i, s) {
                      const { _proxy: n, _context: o, _subProxy: a, _stack: r } = i;
                      if (r.has(t))
                        throw new Error(
                          'Recursion detected: ' + Array.from(r).join('->') + '->' + t
                        );
                      r.add(t);
                      let l = e(o, a || s);
                      return (r.delete(t), hi(t, l) && (l = gi(n._scopes, n, t, l)), l);
                    })(e, r, t, i)),
                  ut(r) &&
                    r.length &&
                    (r = (function (t, e, i, s) {
                      const { _proxy: n, _context: o, _subProxy: a, _descriptors: r } = i;
                      if (void 0 !== o.index && s(t)) return e[o.index % e.length];
                      if (pt(e[0])) {
                        const i = e,
                          s = n._scopes.filter((t) => t !== i);
                        e = [];
                        for (const l of i) {
                          const i = gi(s, n, t, l);
                          e.push(ri(i, o, a && a[t], r));
                        }
                      }
                      return e;
                    })(e, r, t, a.isIndexable)),
                  hi(e, r) && (r = ri(r, n, o && o[e], a)),
                  r
                );
              })(t, e, i)
            ),
          getOwnPropertyDescriptor: (e, i) =>
            e._descriptors.allKeys
              ? Reflect.has(t, i)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, i),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (e, i) => Reflect.has(t, i),
          ownKeys: () => Reflect.ownKeys(t),
          set: (e, i, s) => ((t[i] = s), delete e[i], !0),
        });
      }
      function li(t, e = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: i = e.scriptable,
          _indexable: s = e.indexable,
          _allKeys: n = e.allKeys,
        } = t;
        return {
          allKeys: n,
          scriptable: i,
          indexable: s,
          isScriptable: Tt(i) ? i : () => i,
          isIndexable: Tt(s) ? s : () => s,
        };
      }
      const ci = (t, e) => (t ? t + Ct(e) : e),
        hi = (t, e) =>
          pt(e) &&
          'adapters' !== t &&
          (null === Object.getPrototypeOf(e) || e.constructor === Object);
      function di(t, e, i) {
        if (Object.prototype.hasOwnProperty.call(t, e) || 'constructor' === e) return t[e];
        const s = i();
        return ((t[e] = s), s);
      }
      function ui(t, e, i) {
        return Tt(t) ? t(e, i) : t;
      }
      const pi = (t, e) => (!0 === t ? e : 'string' == typeof t ? Dt(e, t) : void 0);
      function fi(t, e, i, s, n) {
        for (const o of e) {
          const e = pi(i, o);
          if (e) {
            t.add(e);
            const o = ui(e._fallback, i, n);
            if (void 0 !== o && o !== i && o !== s) return o;
          } else if (!1 === e && void 0 !== s && i !== s) return null;
        }
        return !1;
      }
      function gi(t, e, i, s) {
        const n = e._rootScopes,
          o = ui(e._fallback, i, s),
          a = [...t, ...n],
          r = new Set();
        r.add(s);
        let l = mi(r, a, i, o || i, s);
        return (
          null !== l &&
          (void 0 === o || o === i || ((l = mi(r, a, o, l, s)), null !== l)) &&
          ai(Array.from(r), [''], n, o, () =>
            (function (t, e, i) {
              const s = t._getTarget();
              e in s || (s[e] = {});
              const n = s[e];
              return ut(n) && pt(i) ? i : n || {};
            })(e, i, s)
          )
        );
      }
      function mi(t, e, i, s, n) {
        for (; i; ) i = fi(t, e, i, s, n);
        return i;
      }
      function bi(t, e) {
        for (const i of e) {
          if (!i) continue;
          const e = i[t];
          if (void 0 !== e) return e;
        }
      }
      function xi(t) {
        let e = t._keys;
        return (
          e ||
            (e = t._keys =
              (function (t) {
                const e = new Set();
                for (const i of t)
                  for (const t of Object.keys(i).filter((t) => !t.startsWith('_'))) e.add(t);
                return Array.from(e);
              })(t._scopes)),
          e
        );
      }
      function yi(t, e, i, s) {
        const { iScale: n } = t,
          { key: o = 'r' } = this._parsing,
          a = new Array(s);
        let r, l, c, h;
        for (r = 0, l = s; r < l; ++r)
          ((c = r + i), (h = e[c]), (a[r] = { r: n.parse(Dt(h, o), c) }));
        return a;
      }
      const vi = Number.EPSILON || 1e-14,
        _i = (t, e) => e < t.length && !t[e].skip && t[e],
        wi = (t) => ('x' === t ? 'y' : 'x');
      function Mi(t, e, i, s) {
        const n = t.skip ? e : t,
          o = e,
          a = i.skip ? e : i,
          r = Jt(o, n),
          l = Jt(a, o);
        let c = r / (r + l),
          h = l / (r + l);
        ((c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h));
        const d = s * c,
          u = s * h;
        return {
          previous: { x: o.x - d * (a.x - n.x), y: o.y - d * (a.y - n.y) },
          next: { x: o.x + u * (a.x - n.x), y: o.y + u * (a.y - n.y) },
        };
      }
      function ki(t, e = 'x') {
        const i = wi(e),
          s = t.length,
          n = Array(s).fill(0),
          o = Array(s);
        let a,
          r,
          l,
          c = _i(t, 0);
        for (a = 0; a < s; ++a)
          if (((r = l), (l = c), (c = _i(t, a + 1)), l)) {
            if (c) {
              const t = c[e] - l[e];
              n[a] = 0 !== t ? (c[i] - l[i]) / t : 0;
            }
            o[a] = r
              ? c
                ? $t(n[a - 1]) !== $t(n[a])
                  ? 0
                  : (n[a - 1] + n[a]) / 2
                : n[a - 1]
              : n[a];
          }
        (!(function (t, e, i) {
          const s = t.length;
          let n,
            o,
            a,
            r,
            l,
            c = _i(t, 0);
          for (let h = 0; h < s - 1; ++h)
            ((l = c),
              (c = _i(t, h + 1)),
              l &&
                c &&
                (Wt(e[h], 0, vi)
                  ? (i[h] = i[h + 1] = 0)
                  : ((n = i[h] / e[h]),
                    (o = i[h + 1] / e[h]),
                    (r = Math.pow(n, 2) + Math.pow(o, 2)),
                    r <= 9 ||
                      ((a = 3 / Math.sqrt(r)), (i[h] = n * a * e[h]), (i[h + 1] = o * a * e[h])))));
        })(t, n, o),
          (function (t, e, i = 'x') {
            const s = wi(i),
              n = t.length;
            let o,
              a,
              r,
              l = _i(t, 0);
            for (let c = 0; c < n; ++c) {
              if (((a = r), (r = l), (l = _i(t, c + 1)), !r)) continue;
              const n = r[i],
                h = r[s];
              (a && ((o = (n - a[i]) / 3), (r[`cp1${i}`] = n - o), (r[`cp1${s}`] = h - o * e[c])),
                l && ((o = (l[i] - n) / 3), (r[`cp2${i}`] = n + o), (r[`cp2${s}`] = h + o * e[c])));
            }
          })(t, o, e));
      }
      function Si(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }
      function Pi(t, e, i, s, n) {
        let o, a, r, l;
        if ((e.spanGaps && (t = t.filter((t) => !t.skip)), 'monotone' === e.cubicInterpolationMode))
          ki(t, n);
        else {
          let i = s ? t[t.length - 1] : t[0];
          for (o = 0, a = t.length; o < a; ++o)
            ((r = t[o]),
              (l = Mi(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension)),
              (r.cp1x = l.previous.x),
              (r.cp1y = l.previous.y),
              (r.cp2x = l.next.x),
              (r.cp2y = l.next.y),
              (i = r));
        }
        e.capBezierPoints &&
          (function (t, e) {
            let i,
              s,
              n,
              o,
              a,
              r = Ve(t[0], e);
            for (i = 0, s = t.length; i < s; ++i)
              ((a = o),
                (o = r),
                (r = i < s - 1 && Ve(t[i + 1], e)),
                o &&
                  ((n = t[i]),
                  a &&
                    ((n.cp1x = Si(n.cp1x, e.left, e.right)),
                    (n.cp1y = Si(n.cp1y, e.top, e.bottom))),
                  r &&
                    ((n.cp2x = Si(n.cp2x, e.left, e.right)),
                    (n.cp2y = Si(n.cp2y, e.top, e.bottom)))));
          })(t, i);
      }
      function Ai() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
      }
      function Di(t) {
        let e = t.parentNode;
        return (e && '[object ShadowRoot]' === e.toString() && (e = e.host), e);
      }
      function Ci(t, e, i) {
        let s;
        return (
          'string' == typeof t
            ? ((s = parseInt(t, 10)), -1 !== t.indexOf('%') && (s = (s / 100) * e.parentNode[i]))
            : (s = t),
          s
        );
      }
      const Ei = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null),
        Ti = ['top', 'right', 'bottom', 'left'];
      function Ii(t, e, i) {
        const s = {};
        i = i ? '-' + i : '';
        for (let n = 0; n < 4; n++) {
          const o = Ti[n];
          s[o] = parseFloat(t[e + '-' + o + i]) || 0;
        }
        return ((s.width = s.left + s.right), (s.height = s.top + s.bottom), s);
      }
      function Li(t, e) {
        if ('native' in t) return t;
        const { canvas: i, currentDevicePixelRatio: s } = e,
          n = Ei(i),
          o = 'border-box' === n.boxSizing,
          a = Ii(n, 'padding'),
          r = Ii(n, 'border', 'width'),
          {
            x: l,
            y: c,
            box: h,
          } = (function (t, e) {
            const i = t.touches,
              s = i && i.length ? i[0] : t,
              { offsetX: n, offsetY: o } = s;
            let a,
              r,
              l = !1;
            if (((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(n, o, t.target))
              ((a = n), (r = o));
            else {
              const t = e.getBoundingClientRect();
              ((a = s.clientX - t.left), (r = s.clientY - t.top), (l = !0));
            }
            return { x: a, y: r, box: l };
          })(t, i),
          d = a.left + (h && r.left),
          u = a.top + (h && r.top);
        let { width: p, height: f } = e;
        return (
          o && ((p -= a.width + r.width), (f -= a.height + r.height)),
          {
            x: Math.round((((l - d) / p) * i.width) / s),
            y: Math.round((((c - u) / f) * i.height) / s),
          }
        );
      }
      const Oi = (t) => Math.round(10 * t) / 10;
      function Ri(t, e, i, s) {
        const n = Ei(t),
          o = Ii(n, 'margin'),
          a = Ci(n.maxWidth, t, 'clientWidth') || Ft,
          r = Ci(n.maxHeight, t, 'clientHeight') || Ft,
          l = (function (t, e, i) {
            let s, n;
            if (void 0 === e || void 0 === i) {
              const o = t && Di(t);
              if (o) {
                const t = o.getBoundingClientRect(),
                  a = Ei(o),
                  r = Ii(a, 'border', 'width'),
                  l = Ii(a, 'padding');
                ((e = t.width - l.width - r.width),
                  (i = t.height - l.height - r.height),
                  (s = Ci(a.maxWidth, o, 'clientWidth')),
                  (n = Ci(a.maxHeight, o, 'clientHeight')));
              } else ((e = t.clientWidth), (i = t.clientHeight));
            }
            return { width: e, height: i, maxWidth: s || Ft, maxHeight: n || Ft };
          })(t, e, i);
        let { width: c, height: h } = l;
        if ('content-box' === n.boxSizing) {
          const t = Ii(n, 'border', 'width'),
            e = Ii(n, 'padding');
          ((c -= e.width + t.width), (h -= e.height + t.height));
        }
        return (
          (c = Math.max(0, c - o.width)),
          (h = Math.max(0, s ? c / s : h - o.height)),
          (c = Oi(Math.min(c, a, l.maxWidth))),
          (h = Oi(Math.min(h, r, l.maxHeight))),
          c && !h && (h = Oi(c / 2)),
          (void 0 !== e || void 0 !== i) &&
            s &&
            l.height &&
            h > l.height &&
            ((h = l.height), (c = Oi(Math.floor(h * s)))),
          { width: c, height: h }
        );
      }
      function Fi(t, e, i) {
        const s = e || 1,
          n = Math.floor(t.height * s),
          o = Math.floor(t.width * s);
        ((t.height = Math.floor(t.height)), (t.width = Math.floor(t.width)));
        const a = t.canvas;
        return (
          a.style &&
            (i || (!a.style.height && !a.style.width)) &&
            ((a.style.height = `${t.height}px`), (a.style.width = `${t.width}px`)),
          (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) &&
            ((t.currentDevicePixelRatio = s),
            (a.height = n),
            (a.width = o),
            t.ctx.setTransform(s, 0, 0, s, 0, 0),
            !0)
        );
      }
      const zi = (function () {
        let t = !1;
        try {
          const e = {
            get passive() {
              return ((t = !0), !1);
            },
          };
          Ai() &&
            (window.addEventListener('test', null, e), window.removeEventListener('test', null, e));
        } catch (e) {}
        return t;
      })();
      function Ni(t, e) {
        const i = (function (t, e) {
            return Ei(t).getPropertyValue(e);
          })(t, e),
          s = i && i.match(/^(\d+)(\.\d+)?px$/);
        return s ? +s[1] : void 0;
      }
      function Bi(t, e, i, s) {
        return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
      }
      function Vi(t, e, i, s) {
        return {
          x: t.x + i * (e.x - t.x),
          y:
            'middle' === s
              ? i < 0.5
                ? t.y
                : e.y
              : 'after' === s
                ? i < 1
                  ? t.y
                  : e.y
                : i > 0
                  ? e.y
                  : t.y,
        };
      }
      function Hi(t, e, i, s) {
        const n = { x: t.cp2x, y: t.cp2y },
          o = { x: e.cp1x, y: e.cp1y },
          a = Bi(t, n, i),
          r = Bi(n, o, i),
          l = Bi(o, e, i),
          c = Bi(a, r, i),
          h = Bi(r, l, i);
        return Bi(c, h, i);
      }
      function $i(t, e, i) {
        return t
          ? (function (t, e) {
              return {
                x: (i) => t + t + e - i,
                setWidth(t) {
                  e = t;
                },
                textAlign: (t) => ('center' === t ? t : 'right' === t ? 'left' : 'right'),
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e,
              };
            })(e, i)
          : {
              x: (t) => t,
              setWidth(t) {},
              textAlign: (t) => t,
              xPlus: (t, e) => t + e,
              leftForLtr: (t, e) => t,
            };
      }
      function Wi(t, e) {
        let i, s;
        ('ltr' !== e && 'rtl' !== e) ||
          ((i = t.canvas.style),
          (s = [i.getPropertyValue('direction'), i.getPropertyPriority('direction')]),
          i.setProperty('direction', e, 'important'),
          (t.prevTextDirection = s));
      }
      function ji(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]));
      }
      function Yi(t) {
        return 'angle' === t
          ? { between: te, compare: Gt, normalize: Qt }
          : { between: ie, compare: (t, e) => t - e, normalize: (t) => t };
      }
      function Ui({ start: t, end: e, count: i, loop: s, style: n }) {
        return { start: t % i, end: e % i, loop: s && (e - t + 1) % i == 0, style: n };
      }
      function qi(t, e, i) {
        if (!i) return [t];
        const { property: s, start: n, end: o } = i,
          a = e.length,
          { compare: r, between: l, normalize: c } = Yi(s),
          {
            start: h,
            end: d,
            loop: u,
            style: p,
          } = (function (t, e, i) {
            const { property: s, start: n, end: o } = i,
              { between: a, normalize: r } = Yi(s),
              l = e.length;
            let c,
              h,
              { start: d, end: u, loop: p } = t;
            if (p) {
              for (d += l, u += l, c = 0, h = l; c < h && a(r(e[d % l][s]), n, o); ++c) (d--, u--);
              ((d %= l), (u %= l));
            }
            return (u < d && (u += l), { start: d, end: u, loop: p, style: t.style });
          })(t, e, i),
          f = [];
        let g,
          m,
          b,
          x = !1,
          y = null;
        const v = () => x || (l(n, b, g) && 0 !== r(n, b)),
          _ = () => !x || 0 === r(o, g) || l(o, b, g);
        for (let w = h, M = h; w <= d; ++w)
          ((m = e[w % a]),
            m.skip ||
              ((g = c(m[s])),
              g !== b &&
                ((x = l(g, n, o)),
                null === y && v() && (y = 0 === r(g, n) ? w : M),
                null !== y &&
                  _() &&
                  (f.push(Ui({ start: y, end: w, loop: u, count: a, style: p })), (y = null)),
                (M = w),
                (b = g))));
        return (null !== y && f.push(Ui({ start: y, end: d, loop: u, count: a, style: p })), f);
      }
      function Xi(t, e) {
        const i = [],
          s = t.segments;
        for (let n = 0; n < s.length; n++) {
          const o = qi(s[n], t.points, e);
          o.length && i.push(...o);
        }
        return i;
      }
      function Ki(t, e, i, s) {
        return s && s.setContext && i
          ? (function (t, e, i, s) {
              const n = t._chart.getContext(),
                o = Zi(t.options),
                {
                  _datasetIndex: a,
                  options: { spanGaps: r },
                } = t,
                l = i.length,
                c = [];
              let h = o,
                d = e[0].start,
                u = d;
              function p(t, e, s, n) {
                const o = r ? -1 : 1;
                if (t !== e) {
                  for (t += l; i[t % l].skip; ) t -= o;
                  for (; i[e % l].skip; ) e += o;
                  t % l !== e % l &&
                    (c.push({ start: t % l, end: e % l, loop: s, style: n }), (h = n), (d = e % l));
                }
              }
              for (const f of e) {
                d = r ? d : f.start;
                let t,
                  e = i[d % l];
                for (u = d + 1; u <= f.end; u++) {
                  const o = i[u % l];
                  ((t = Zi(
                    s.setContext(
                      oi(n, {
                        type: 'segment',
                        p0: e,
                        p1: o,
                        p0DataIndex: (u - 1) % l,
                        p1DataIndex: u % l,
                        datasetIndex: a,
                      })
                    )
                  )),
                    Ji(t, h) && p(d, u - 1, f.loop, h),
                    (e = o),
                    (h = t));
                }
                d < u - 1 && p(d, u - 1, f.loop, h);
              }
              return c;
            })(t, e, i, s)
          : e;
      }
      function Zi(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function Ji(t, e) {
        if (!e) return !1;
        const i = [],
          s = function (t, e) {
            return ye(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e;
          };
        return JSON.stringify(t, s) !== JSON.stringify(e, s);
      }
      function Gi(t, e, i) {
        return t.options.clip ? t[i] : e[i];
      }
      function Qi(t, e) {
        const i = e._clip;
        if (i.disabled) return !1;
        const s = (function (t, e) {
          const { xScale: i, yScale: s } = t;
          return i && s
            ? {
                left: Gi(i, e, 'left'),
                right: Gi(i, e, 'right'),
                top: Gi(s, e, 'top'),
                bottom: Gi(s, e, 'bottom'),
              }
            : e;
        })(e, t.chartArea);
        return {
          left: !1 === i.left ? 0 : s.left - (!0 === i.left ? 0 : i.left),
          right: !1 === i.right ? t.width : s.right + (!0 === i.right ? 0 : i.right),
          top: !1 === i.top ? 0 : s.top - (!0 === i.top ? 0 : i.top),
          bottom: !1 === i.bottom ? t.height : s.bottom + (!0 === i.bottom ? 0 : i.bottom),
        };
      }
      /*!
       * Chart.js v4.5.0
       * https://www.chartjs.org
       * (c) 2025 Chart.js Contributors
       * Released under the MIT License
       */ class ts {
        constructor() {
          ((this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0));
        }
        _notify(t, e, i, s) {
          const n = e.listeners[s],
            o = e.duration;
          n.forEach((s) =>
            s({ chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(i - e.start, o) })
          );
        }
        _refresh() {
          this._request ||
            ((this._running = !0),
            (this._request = ce.call(window, () => {
              (this._update(), (this._request = null), this._running && this._refresh());
            })));
        }
        _update(t = Date.now()) {
          let e = 0;
          (this._charts.forEach((i, s) => {
            if (!i.running || !i.items.length) return;
            const n = i.items;
            let o,
              a = n.length - 1,
              r = !1;
            for (; a >= 0; --a)
              ((o = n[a]),
                o._active
                  ? (o._total > i.duration && (i.duration = o._total), o.tick(t), (r = !0))
                  : ((n[a] = n[n.length - 1]), n.pop()));
            (r && (s.draw(), this._notify(s, i, t, 'progress')),
              n.length || ((i.running = !1), this._notify(s, i, t, 'complete'), (i.initial = !1)),
              (e += n.length));
          }),
            (this._lastDate = t),
            0 === e && (this._running = !1));
        }
        _getAnims(t) {
          const e = this._charts;
          let i = e.get(t);
          return (
            i ||
              ((i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              e.set(t, i)),
            i
          );
        }
        listen(t, e, i) {
          this._getAnims(t).listeners[e].push(i);
        }
        add(t, e) {
          e && e.length && this._getAnims(t).items.push(...e);
        }
        has(t) {
          return this._getAnims(t).items.length > 0;
        }
        start(t) {
          const e = this._charts.get(t);
          e &&
            ((e.running = !0),
            (e.start = Date.now()),
            (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
            this._refresh());
        }
        running(t) {
          if (!this._running) return !1;
          const e = this._charts.get(t);
          return !!(e && e.running && e.items.length);
        }
        stop(t) {
          const e = this._charts.get(t);
          if (!e || !e.items.length) return;
          const i = e.items;
          let s = i.length - 1;
          for (; s >= 0; --s) i[s].cancel();
          ((e.items = []), this._notify(t, e, Date.now(), 'complete'));
        }
        remove(t) {
          return this._charts.delete(t);
        }
      }
      var es = new ts();
      const is = 'transparent',
        ss = {
          boolean: (t, e, i) => (i > 0.5 ? e : t),
          color(t, e, i) {
            const s = ve(t || is),
              n = s.valid && ve(e || is);
            return n && n.valid ? n.mix(s, i).hexString() : e;
          },
          number: (t, e, i) => t + (e - t) * i,
        };
      class ns {
        constructor(t, e, i, s) {
          const n = e[i];
          s = ni([t.to, s, n, t.from]);
          const o = ni([t.from, n, s]);
          ((this._active = !0),
            (this._fn = t.fn || ss[t.type || typeof o]),
            (this._easing = xe[t.easing] || xe.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = e),
            (this._prop = i),
            (this._from = o),
            (this._to = s),
            (this._promises = void 0));
        }
        active() {
          return this._active;
        }
        update(t, e, i) {
          if (this._active) {
            this._notify(!1);
            const s = this._target[this._prop],
              n = i - this._start,
              o = this._duration - n;
            ((this._start = i),
              (this._duration = Math.floor(Math.max(o, t.duration))),
              (this._total += n),
              (this._loop = !!t.loop),
              (this._to = ni([t.to, e, s, t.from])),
              (this._from = ni([t.from, s, e])));
          }
        }
        cancel() {
          this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(t) {
          const e = t - this._start,
            i = this._duration,
            s = this._prop,
            n = this._from,
            o = this._loop,
            a = this._to;
          let r;
          if (((this._active = n !== a && (o || e < i)), !this._active))
            return ((this._target[s] = a), void this._notify(!0));
          e < 0
            ? (this._target[s] = n)
            : ((r = (e / i) % 2),
              (r = o && r > 1 ? 2 - r : r),
              (r = this._easing(Math.min(1, Math.max(0, r)))),
              (this._target[s] = this._fn(n, a, r)));
        }
        wait() {
          const t = this._promises || (this._promises = []);
          return new Promise((e, i) => {
            t.push({ res: e, rej: i });
          });
        }
        _notify(t) {
          const e = t ? 'res' : 'rej',
            i = this._promises || [];
          for (let s = 0; s < i.length; s++) i[s][e]();
        }
      }
      class os {
        constructor(t, e) {
          ((this._chart = t), (this._properties = new Map()), this.configure(e));
        }
        configure(t) {
          if (!pt(t)) return;
          const e = Object.keys(Le.animation),
            i = this._properties;
          Object.getOwnPropertyNames(t).forEach((s) => {
            const n = t[s];
            if (!pt(n)) return;
            const o = {};
            for (const t of e) o[t] = n[t];
            ((ut(n.properties) && n.properties) || [s]).forEach((t) => {
              (t !== s && i.has(t)) || i.set(t, o);
            });
          });
        }
        _animateOptions(t, e) {
          const i = e.options,
            s = (function (t, e) {
              if (!e) return;
              let i = t.options;
              if (i)
                return (
                  i.$shared &&
                    (t.options = i = Object.assign({}, i, { $shared: !1, $animations: {} })),
                  i
                );
              t.options = e;
            })(t, i);
          if (!s) return [];
          const n = this._createAnimations(s, i);
          return (
            i.$shared &&
              (function (t, e) {
                const i = [],
                  s = Object.keys(e);
                for (let n = 0; n < s.length; n++) {
                  const e = t[s[n]];
                  e && e.active() && i.push(e.wait());
                }
                return Promise.all(i);
              })(t.options.$animations, i).then(
                () => {
                  t.options = i;
                },
                () => {}
              ),
            n
          );
        }
        _createAnimations(t, e) {
          const i = this._properties,
            s = [],
            n = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            a = Date.now();
          let r;
          for (r = o.length - 1; r >= 0; --r) {
            const l = o[r];
            if ('$' === l.charAt(0)) continue;
            if ('options' === l) {
              s.push(...this._animateOptions(t, e));
              continue;
            }
            const c = e[l];
            let h = n[l];
            const d = i.get(l);
            if (h) {
              if (d && h.active()) {
                h.update(d, c, a);
                continue;
              }
              h.cancel();
            }
            d && d.duration ? ((n[l] = h = new ns(d, t, l, c)), s.push(h)) : (t[l] = c);
          }
          return s;
        }
        update(t, e) {
          if (0 === this._properties.size) return void Object.assign(t, e);
          const i = this._createAnimations(t, e);
          return i.length ? (es.add(this._chart, i), !0) : void 0;
        }
      }
      function as(t, e) {
        const i = (t && t.options) || {},
          s = i.reverse,
          n = void 0 === i.min ? e : 0,
          o = void 0 === i.max ? e : 0;
        return { start: s ? o : n, end: s ? n : o };
      }
      function rs(t, e) {
        const i = [],
          s = t._getSortedDatasetMetas(e);
        let n, o;
        for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
        return i;
      }
      function ls(t, e, i, s = {}) {
        const n = t.keys,
          o = 'single' === s.mode;
        let a, r, l, c;
        if (null === e) return;
        let h = !1;
        for (a = 0, r = n.length; a < r; ++a) {
          if (((l = +n[a]), l === i)) {
            if (((h = !0), s.all)) continue;
            break;
          }
          ((c = t.values[l]), ft(c) && (o || 0 === e || $t(e) === $t(c)) && (e += c));
        }
        return h || s.all ? e : 0;
      }
      function cs(t, e) {
        const i = t && t.options.stacked;
        return i || (void 0 === i && void 0 !== e.stack);
      }
      function hs(t, e, i) {
        const s = t[e] || (t[e] = {});
        return s[i] || (s[i] = {});
      }
      function ds(t, e, i, s) {
        for (const n of e.getMatchingVisibleMetas(s).reverse()) {
          const e = t[n.index];
          if ((i && e > 0) || (!i && e < 0)) return n.index;
        }
        return null;
      }
      function us(t, e) {
        const { chart: i, _cachedMeta: s } = t,
          n = i._stacks || (i._stacks = {}),
          { iScale: o, vScale: a, index: r } = s,
          l = o.axis,
          c = a.axis,
          h = (function (t, e, i) {
            return `${t.id}.${e.id}.${i.stack || i.type}`;
          })(o, a, s),
          d = e.length;
        let u;
        for (let p = 0; p < d; ++p) {
          const t = e[p],
            { [l]: i, [c]: o } = t;
          ((u = (t._stacks || (t._stacks = {}))[c] = hs(n, h, i)),
            (u[r] = o),
            (u._top = ds(u, a, !0, s.type)),
            (u._bottom = ds(u, a, !1, s.type)),
            ((u._visualValues || (u._visualValues = {}))[r] = o));
        }
      }
      function ps(t, e) {
        const i = t.scales;
        return Object.keys(i)
          .filter((t) => i[t].axis === e)
          .shift();
      }
      function fs(t, e) {
        const i = t.controller.index,
          s = t.vScale && t.vScale.axis;
        if (s) {
          e = e || t._parsed;
          for (const t of e) {
            const e = t._stacks;
            if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
            (delete e[s][i],
              void 0 !== e[s]._visualValues &&
                void 0 !== e[s]._visualValues[i] &&
                delete e[s]._visualValues[i]);
          }
        }
      }
      const gs = (t) => 'reset' === t || 'none' === t,
        ms = (t, e) => (e ? t : Object.assign({}, t));
      class bs {
        static defaults = {};
        static datasetElementType = null;
        static dataElementType = null;
        constructor(t, e) {
          ((this.chart = t),
            (this._ctx = t.ctx),
            (this.index = e),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = new.target.datasetElementType),
            (this.dataElementType = new.target.dataElementType),
            this.initialize());
        }
        initialize() {
          const t = this._cachedMeta;
          (this.configure(),
            this.linkScales(),
            (t._stacked = cs(t.vScale, t)),
            this.addElements(),
            this.options.fill &&
              !this.chart.isPluginEnabled('filler') &&
              console.warn(
                "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
              ));
        }
        updateIndex(t) {
          (this.index !== t && fs(this._cachedMeta), (this.index = t));
        }
        linkScales() {
          const t = this.chart,
            e = this._cachedMeta,
            i = this.getDataset(),
            s = (t, e, i, s) => ('x' === t ? e : 'r' === t ? s : i),
            n = (e.xAxisID = mt(i.xAxisID, ps(t, 'x'))),
            o = (e.yAxisID = mt(i.yAxisID, ps(t, 'y'))),
            a = (e.rAxisID = mt(i.rAxisID, ps(t, 'r'))),
            r = e.indexAxis,
            l = (e.iAxisID = s(r, n, o, a)),
            c = (e.vAxisID = s(r, o, n, a));
          ((e.xScale = this.getScaleForId(n)),
            (e.yScale = this.getScaleForId(o)),
            (e.rScale = this.getScaleForId(a)),
            (e.iScale = this.getScaleForId(l)),
            (e.vScale = this.getScaleForId(c)));
        }
        getDataset() {
          return this.chart.data.datasets[this.index];
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
          return this.chart.scales[t];
        }
        _getOtherScale(t) {
          const e = this._cachedMeta;
          return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
          this._update('reset');
        }
        _destroy() {
          const t = this._cachedMeta;
          (this._data && re(this._data, this), t._stacked && fs(t));
        }
        _dataCheck() {
          const t = this.getDataset(),
            e = t.data || (t.data = []),
            i = this._data;
          if (pt(e)) {
            const t = this._cachedMeta;
            this._data = (function (t, e) {
              const { iScale: i, vScale: s } = e,
                n = 'x' === i.axis ? 'x' : 'y',
                o = 'x' === s.axis ? 'x' : 'y',
                a = Object.keys(t),
                r = new Array(a.length);
              let l, c, h;
              for (l = 0, c = a.length; l < c; ++l) ((h = a[l]), (r[l] = { [n]: h, [o]: t[h] }));
              return r;
            })(e, t);
          } else if (i !== e) {
            if (i) {
              re(i, this);
              const t = this._cachedMeta;
              (fs(t), (t._parsed = []));
            }
            (e &&
              Object.isExtensible(e) &&
              ((n = this),
              (s = e)._chartjs
                ? s._chartjs.listeners.push(n)
                : (Object.defineProperty(s, '_chartjs', {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [n] },
                  }),
                  ae.forEach((t) => {
                    const e = '_onData' + Ct(t),
                      i = s[t];
                    Object.defineProperty(s, t, {
                      configurable: !0,
                      enumerable: !1,
                      value(...t) {
                        const n = i.apply(this, t);
                        return (
                          s._chartjs.listeners.forEach((i) => {
                            'function' == typeof i[e] && i[e](...t);
                          }),
                          n
                        );
                      },
                    });
                  }))),
              (this._syncList = []),
              (this._data = e));
          }
          var s, n;
        }
        addElements() {
          const t = this._cachedMeta;
          (this._dataCheck(),
            this.datasetElementType && (t.dataset = new this.datasetElementType()));
        }
        buildOrUpdateElements(t) {
          const e = this._cachedMeta,
            i = this.getDataset();
          let s = !1;
          this._dataCheck();
          const n = e._stacked;
          ((e._stacked = cs(e.vScale, e)),
            e.stack !== i.stack && ((s = !0), fs(e), (e.stack = i.stack)),
            this._resyncElements(t),
            (s || n !== e._stacked) && (us(this, e._parsed), (e._stacked = cs(e.vScale, e))));
        }
        configure() {
          const t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            i = t.getOptionScopes(this.getDataset(), e, !0);
          ((this.options = t.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {}));
        }
        parse(t, e) {
          const { _cachedMeta: i, _data: s } = this,
            { iScale: n, _stacked: o } = i,
            a = n.axis;
          let r,
            l,
            c,
            h = (0 === t && e === s.length) || i._sorted,
            d = t > 0 && i._parsed[t - 1];
          if (!1 === this._parsing) ((i._parsed = s), (i._sorted = !0), (c = s));
          else {
            c = ut(s[t])
              ? this.parseArrayData(i, s, t, e)
              : pt(s[t])
                ? this.parseObjectData(i, s, t, e)
                : this.parsePrimitiveData(i, s, t, e);
            const n = () => null === l[a] || (d && l[a] < d[a]);
            for (r = 0; r < e; ++r)
              ((i._parsed[r + t] = l = c[r]), h && (n() && (h = !1), (d = l)));
            i._sorted = h;
          }
          o && us(this, c);
        }
        parsePrimitiveData(t, e, i, s) {
          const { iScale: n, vScale: o } = t,
            a = n.axis,
            r = o.axis,
            l = n.getLabels(),
            c = n === o,
            h = new Array(s);
          let d, u, p;
          for (d = 0, u = s; d < u; ++d)
            ((p = d + i), (h[d] = { [a]: c || n.parse(l[p], p), [r]: o.parse(e[p], p) }));
          return h;
        }
        parseArrayData(t, e, i, s) {
          const { xScale: n, yScale: o } = t,
            a = new Array(s);
          let r, l, c, h;
          for (r = 0, l = s; r < l; ++r)
            ((c = r + i), (h = e[c]), (a[r] = { x: n.parse(h[0], c), y: o.parse(h[1], c) }));
          return a;
        }
        parseObjectData(t, e, i, s) {
          const { xScale: n, yScale: o } = t,
            { xAxisKey: a = 'x', yAxisKey: r = 'y' } = this._parsing,
            l = new Array(s);
          let c, h, d, u;
          for (c = 0, h = s; c < h; ++c)
            ((d = c + i),
              (u = e[d]),
              (l[c] = { x: n.parse(Dt(u, a), d), y: o.parse(Dt(u, r), d) }));
          return l;
        }
        getParsed(t) {
          return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
          return this._cachedMeta.data[t];
        }
        applyStack(t, e, i) {
          const s = this.chart,
            n = this._cachedMeta,
            o = e[t.axis];
          return ls({ keys: rs(s, !0), values: e._stacks[t.axis]._visualValues }, o, n.index, {
            mode: i,
          });
        }
        updateRangeFromParsed(t, e, i, s) {
          const n = i[e.axis];
          let o = null === n ? NaN : n;
          const a = s && i._stacks[e.axis];
          (s && a && ((s.values = a), (o = ls(s, n, this._cachedMeta.index))),
            (t.min = Math.min(t.min, o)),
            (t.max = Math.max(t.max, o)));
        }
        getMinMax(t, e) {
          const i = this._cachedMeta,
            s = i._parsed,
            n = i._sorted && t === i.iScale,
            o = s.length,
            a = this._getOtherScale(t),
            r = ((t, e, i) => t && !e.hidden && e._stacked && { keys: rs(i, !0), values: null })(
              e,
              i,
              this.chart
            ),
            l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
            { min: c, max: h } = (function (t) {
              const { min: e, max: i, minDefined: s, maxDefined: n } = t.getUserBounds();
              return {
                min: s ? e : Number.NEGATIVE_INFINITY,
                max: n ? i : Number.POSITIVE_INFINITY,
              };
            })(a);
          let d, u;
          function p() {
            u = s[d];
            const e = u[a.axis];
            return !ft(u[t.axis]) || c > e || h < e;
          }
          for (d = 0; d < o && (p() || (this.updateRangeFromParsed(l, t, u, r), !n)); ++d);
          if (n)
            for (d = o - 1; d >= 0; --d)
              if (!p()) {
                this.updateRangeFromParsed(l, t, u, r);
                break;
              }
          return l;
        }
        getAllParsedValues(t) {
          const e = this._cachedMeta._parsed,
            i = [];
          let s, n, o;
          for (s = 0, n = e.length; s < n; ++s) ((o = e[s][t.axis]), ft(o) && i.push(o));
          return i;
        }
        getMaxOverflow() {
          return !1;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = e.iScale,
            s = e.vScale,
            n = this.getParsed(t);
          return {
            label: i ? '' + i.getLabelForValue(n[i.axis]) : '',
            value: s ? '' + s.getLabelForValue(n[s.axis]) : '',
          };
        }
        _update(t) {
          const e = this._cachedMeta;
          (this.update(t || 'default'),
            (e._clip = (function (t) {
              let e, i, s, n;
              return (
                pt(t)
                  ? ((e = t.top), (i = t.right), (s = t.bottom), (n = t.left))
                  : (e = i = s = n = t),
                { top: e, right: i, bottom: s, left: n, disabled: !1 === t }
              );
            })(
              mt(
                this.options.clip,
                (function (t, e, i) {
                  if (!1 === i) return !1;
                  const s = as(t, i),
                    n = as(e, i);
                  return { top: n.end, right: s.end, bottom: n.start, left: s.start };
                })(e.xScale, e.yScale, this.getMaxOverflow())
              )
            )));
        }
        update(t) {}
        draw() {
          const t = this._ctx,
            e = this.chart,
            i = this._cachedMeta,
            s = i.data || [],
            n = e.chartArea,
            o = [],
            a = this._drawStart || 0,
            r = this._drawCount || s.length - a,
            l = this.options.drawActiveElementsOnTop;
          let c;
          for (i.dataset && i.dataset.draw(t, n, a, r), c = a; c < a + r; ++c) {
            const e = s[c];
            e.hidden || (e.active && l ? o.push(e) : e.draw(t, n));
          }
          for (c = 0; c < o.length; ++c) o[c].draw(t, n);
        }
        getStyle(t, e) {
          const i = e ? 'active' : 'default';
          return void 0 === t && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(t || 0, i);
        }
        getContext(t, e, i) {
          const s = this.getDataset();
          let n;
          if (t >= 0 && t < this._cachedMeta.data.length) {
            const e = this._cachedMeta.data[t];
            ((n =
              e.$context ||
              (e.$context = (function (t, e, i) {
                return oi(t, {
                  active: !1,
                  dataIndex: e,
                  parsed: void 0,
                  raw: void 0,
                  element: i,
                  index: e,
                  mode: 'default',
                  type: 'data',
                });
              })(this.getContext(), t, e))),
              (n.parsed = this.getParsed(t)),
              (n.raw = s.data[t]),
              (n.index = n.dataIndex = t));
          } else
            ((n =
              this.$context ||
              (this.$context = (function (t, e) {
                return oi(t, {
                  active: !1,
                  dataset: void 0,
                  datasetIndex: e,
                  index: e,
                  mode: 'default',
                  type: 'dataset',
                });
              })(this.chart.getContext(), this.index))),
              (n.dataset = s),
              (n.index = n.datasetIndex = this.index));
          return ((n.active = !!e), (n.mode = i), n);
        }
        resolveDatasetElementOptions(t) {
          return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
          return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = 'default', i) {
          const s = 'active' === e,
            n = this._cachedDataOpts,
            o = t + '-' + e,
            a = n[o],
            r = this.enableOptionSharing && Et(i);
          if (a) return ms(a, r);
          const l = this.chart.config,
            c = l.datasetElementScopeKeys(this._type, t),
            h = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
            d = l.getOptionScopes(this.getDataset(), c),
            u = Object.keys(Le.elements[t]),
            p = l.resolveNamedOptions(d, u, () => this.getContext(i, s, e), h);
          return (p.$shared && ((p.$shared = r), (n[o] = Object.freeze(ms(p, r)))), p);
        }
        _resolveAnimations(t, e, i) {
          const s = this.chart,
            n = this._cachedDataOpts,
            o = `animation-${e}`,
            a = n[o];
          if (a) return a;
          let r;
          if (!1 !== s.options.animation) {
            const s = this.chart.config,
              n = s.datasetAnimationScopeKeys(this._type, e),
              o = s.getOptionScopes(this.getDataset(), n);
            r = s.createResolver(o, this.getContext(t, i, e));
          }
          const l = new os(s, r && r.animations);
          return (r && r._cacheable && (n[o] = Object.freeze(l)), l);
        }
        getSharedOptions(t) {
          if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
        }
        includeOptions(t, e) {
          return !e || gs(t) || this.chart._animationsDisabled;
        }
        _getSharedOptions(t, e) {
          const i = this.resolveDataElementOptions(t, e),
            s = this._sharedOptions,
            n = this.getSharedOptions(i),
            o = this.includeOptions(e, n) || n !== s;
          return (this.updateSharedOptions(n, e, i), { sharedOptions: n, includeOptions: o });
        }
        updateElement(t, e, i, s) {
          gs(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
        }
        updateSharedOptions(t, e, i) {
          t && !gs(e) && this._resolveAnimations(void 0, e).update(t, i);
        }
        _setStyle(t, e, i, s) {
          t.active = s;
          const n = this.getStyle(e, s);
          this._resolveAnimations(e, i, s).update(t, {
            options: (!s && this.getSharedOptions(n)) || n,
          });
        }
        removeHoverStyle(t, e, i) {
          this._setStyle(t, i, 'active', !1);
        }
        setHoverStyle(t, e, i) {
          this._setStyle(t, i, 'active', !0);
        }
        _removeDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, 'active', !1);
        }
        _setDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, 'active', !0);
        }
        _resyncElements(t) {
          const e = this._data,
            i = this._cachedMeta.data;
          for (const [a, r, l] of this._syncList) this[a](r, l);
          this._syncList = [];
          const s = i.length,
            n = e.length,
            o = Math.min(n, s);
          (o && this.parse(0, o),
            n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n));
        }
        _insertElements(t, e, i = !0) {
          const s = this._cachedMeta,
            n = s.data,
            o = t + e;
          let a;
          const r = (t) => {
            for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e];
          };
          for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType();
          (this._parsing && r(s._parsed),
            this.parse(t, e),
            i && this.updateElements(n, t, e, 'reset'));
        }
        updateElements(t, e, i, s) {}
        _removeElements(t, e) {
          const i = this._cachedMeta;
          if (this._parsing) {
            const s = i._parsed.splice(t, e);
            i._stacked && fs(i, s);
          }
          i.data.splice(t, e);
        }
        _sync(t) {
          if (this._parsing) this._syncList.push(t);
          else {
            const [e, i, s] = t;
            this[e](i, s);
          }
          this.chart._dataChanges.push([this.index, ...t]);
        }
        _onDataPush() {
          const t = arguments.length;
          this._sync(['_insertElements', this.getDataset().data.length - t, t]);
        }
        _onDataPop() {
          this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
        }
        _onDataShift() {
          this._sync(['_removeElements', 0, 1]);
        }
        _onDataSplice(t, e) {
          e && this._sync(['_removeElements', t, e]);
          const i = arguments.length - 2;
          i && this._sync(['_insertElements', t, i]);
        }
        _onDataUnshift() {
          this._sync(['_insertElements', 0, arguments.length]);
        }
      }
      function xs(t) {
        const e = t.iScale,
          i = (function (t, e) {
            if (!t._cache.$bar) {
              const i = t.getMatchingVisibleMetas(e);
              let s = [];
              for (let e = 0, n = i.length; e < n; e++)
                s = s.concat(i[e].controller.getAllParsedValues(t));
              t._cache.$bar = le(s.sort((t, e) => t - e));
            }
            return t._cache.$bar;
          })(e, t.type);
        let s,
          n,
          o,
          a,
          r = e._length;
        const l = () => {
          32767 !== o &&
            -32768 !== o &&
            (Et(a) && (r = Math.min(r, Math.abs(o - a) || r)), (a = o));
        };
        for (s = 0, n = i.length; s < n; ++s) ((o = e.getPixelForValue(i[s])), l());
        for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s) ((o = e.getPixelForTick(s)), l());
        return r;
      }
      function ys(t, e, i, s) {
        return (
          ut(t)
            ? (function (t, e, i, s) {
                const n = i.parse(t[0], s),
                  o = i.parse(t[1], s),
                  a = Math.min(n, o),
                  r = Math.max(n, o);
                let l = a,
                  c = r;
                (Math.abs(a) > Math.abs(r) && ((l = r), (c = a)),
                  (e[i.axis] = c),
                  (e._custom = { barStart: l, barEnd: c, start: n, end: o, min: a, max: r }));
              })(t, e, i, s)
            : (e[i.axis] = i.parse(t, s)),
          e
        );
      }
      function vs(t, e, i, s) {
        const n = t.iScale,
          o = t.vScale,
          a = n.getLabels(),
          r = n === o,
          l = [];
        let c, h, d, u;
        for (c = i, h = i + s; c < h; ++c)
          ((u = e[c]), (d = {}), (d[n.axis] = r || n.parse(a[c], c)), l.push(ys(u, d, o, c)));
        return l;
      }
      function _s(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd;
      }
      function ws(t, e, i, s) {
        let n = e.borderSkipped;
        const o = {};
        if (!n) return void (t.borderSkipped = o);
        if (!0 === n) return void (t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 });
        const {
          start: a,
          end: r,
          reverse: l,
          top: c,
          bottom: h,
        } = (function (t) {
          let e, i, s, n, o;
          return (
            t.horizontal
              ? ((e = t.base > t.x), (i = 'left'), (s = 'right'))
              : ((e = t.base < t.y), (i = 'bottom'), (s = 'top')),
            e ? ((n = 'end'), (o = 'start')) : ((n = 'start'), (o = 'end')),
            { start: i, end: s, reverse: e, top: n, bottom: o }
          );
        })(t);
        ('middle' === n &&
          i &&
          ((t.enableBorderRadius = !0),
          (i._top || 0) === s
            ? (n = c)
            : (i._bottom || 0) === s
              ? (n = h)
              : ((o[Ms(h, a, r, l)] = !0), (n = c))),
          (o[Ms(n, a, r, l)] = !0),
          (t.borderSkipped = o));
      }
      function Ms(t, e, i, s) {
        var n, o, a;
        return (
          s
            ? ((a = i), (t = ks((t = (n = t) === (o = e) ? a : n === a ? o : n), i, e)))
            : (t = ks(t, e, i)),
          t
        );
      }
      function ks(t, e, i) {
        return 'start' === t ? e : 'end' === t ? i : t;
      }
      function Ss(t, { inflateAmount: e }, i) {
        t.inflateAmount = 'auto' === e ? (1 === i ? 0.33 : 0) : e;
      }
      class Ps extends bs {
        static id = 'doughnut';
        static defaults = {
          datasetElementType: !1,
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: 'number',
              properties: [
                'circumference',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'startAngle',
                'x',
                'y',
                'offset',
                'borderWidth',
                'spacing',
              ],
            },
          },
          cutout: '50%',
          rotation: 0,
          circumference: 360,
          radius: '100%',
          spacing: 0,
          indexAxis: 'r',
        };
        static descriptors = {
          _scriptable: (t) => 'spacing' !== t,
          _indexable: (t) =>
            'spacing' !== t && !t.startsWith('borderDash') && !t.startsWith('hoverBorderDash'),
        };
        static overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: i, color: s },
                    } = t.legend.options;
                    return e.labels.map((e, n) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: s,
                        lineWidth: o.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick(t, e, i) {
                (i.chart.toggleDataVisibility(e.index), i.chart.update());
              },
            },
          },
        };
        constructor(t, e) {
          (super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0));
        }
        linkScales() {}
        parse(t, e) {
          const i = this.getDataset().data,
            s = this._cachedMeta;
          if (!1 === this._parsing) s._parsed = i;
          else {
            let n,
              o,
              a = (t) => +i[t];
            if (pt(i[t])) {
              const { key: t = 'value' } = this._parsing;
              a = (e) => +Dt(i[e], t);
            }
            for (n = t, o = t + e; n < o; ++n) s._parsed[n] = a(n);
          }
        }
        _getRotation() {
          return qt(this.options.rotation - 90);
        }
        _getCircumference() {
          return qt(this.options.circumference);
        }
        _getRotationExtents() {
          let t = Ot,
            e = -Ot;
          for (let i = 0; i < this.chart.data.datasets.length; ++i)
            if (
              this.chart.isDatasetVisible(i) &&
              this.chart.getDatasetMeta(i).type === this._type
            ) {
              const s = this.chart.getDatasetMeta(i).controller,
                n = s._getRotation(),
                o = s._getCircumference();
              ((t = Math.min(t, n)), (e = Math.max(e, n + o)));
            }
          return { rotation: t, circumference: e - t };
        }
        update(t) {
          const e = this.chart,
            { chartArea: i } = e,
            s = this._cachedMeta,
            n = s.data,
            o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing,
            a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
            r = Math.min(
              ((l = this.options.cutout),
              (c = a),
              'string' == typeof l && l.endsWith('%') ? parseFloat(l) / 100 : +l / c),
              1
            );
          var l, c;
          const h = this._getRingWeight(this.index),
            { circumference: d, rotation: u } = this._getRotationExtents(),
            {
              ratioX: p,
              ratioY: f,
              offsetX: g,
              offsetY: m,
            } = (function (t, e, i) {
              let s = 1,
                n = 1,
                o = 0,
                a = 0;
              if (e < Ot) {
                const r = t,
                  l = r + e,
                  c = Math.cos(r),
                  h = Math.sin(r),
                  d = Math.cos(l),
                  u = Math.sin(l),
                  p = (t, e, s) => (te(t, r, l, !0) ? 1 : Math.max(e, e * i, s, s * i)),
                  f = (t, e, s) => (te(t, r, l, !0) ? -1 : Math.min(e, e * i, s, s * i)),
                  g = p(0, c, d),
                  m = p(Nt, h, u),
                  b = f(Lt, c, d),
                  x = f(Lt + Nt, h, u);
                ((s = (g - b) / 2), (n = (m - x) / 2), (o = -(g + b) / 2), (a = -(m + x) / 2));
              }
              return { ratioX: s, ratioY: n, offsetX: o, offsetY: a };
            })(u, d, r),
            b = (i.width - o) / p,
            x = (i.height - o) / f,
            y = Math.max(Math.min(b, x) / 2, 0),
            v = bt(this.options.radius, y),
            _ = (v - Math.max(v * r, 0)) / this._getVisibleDatasetWeightTotal();
          ((this.offsetX = g * v),
            (this.offsetY = m * v),
            (s.total = this.calculateTotal()),
            (this.outerRadius = v - _ * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - _ * h, 0)),
            this.updateElements(n, 0, n.length, t));
        }
        _circumference(t, e) {
          const i = this.options,
            s = this._cachedMeta,
            n = this._getCircumference();
          return (e && i.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            null === s._parsed[t] ||
            s.data[t].hidden
            ? 0
            : this.calculateCircumference((s._parsed[t] * n) / Ot);
        }
        updateElements(t, e, i, s) {
          const n = 'reset' === s,
            o = this.chart,
            a = o.chartArea,
            r = o.options.animation,
            l = (a.left + a.right) / 2,
            c = (a.top + a.bottom) / 2,
            h = n && r.animateScale,
            d = h ? 0 : this.innerRadius,
            u = h ? 0 : this.outerRadius,
            { sharedOptions: p, includeOptions: f } = this._getSharedOptions(e, s);
          let g,
            m = this._getRotation();
          for (g = 0; g < e; ++g) m += this._circumference(g, n);
          for (g = e; g < e + i; ++g) {
            const e = this._circumference(g, n),
              i = t[g],
              o = {
                x: l + this.offsetX,
                y: c + this.offsetY,
                startAngle: m,
                endAngle: m + e,
                circumference: e,
                outerRadius: u,
                innerRadius: d,
              };
            (f && (o.options = p || this.resolveDataElementOptions(g, i.active ? 'active' : s)),
              (m += e),
              this.updateElement(i, g, o, s));
          }
        }
        calculateTotal() {
          const t = this._cachedMeta,
            e = t.data;
          let i,
            s = 0;
          for (i = 0; i < e.length; i++) {
            const n = t._parsed[i];
            null === n ||
              isNaN(n) ||
              !this.chart.getDataVisibility(i) ||
              e[i].hidden ||
              (s += Math.abs(n));
          }
          return s;
        }
        calculateCircumference(t) {
          const e = this._cachedMeta.total;
          return e > 0 && !isNaN(t) ? Ot * (Math.abs(t) / e) : 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            n = Se(e._parsed[t], i.options.locale);
          return { label: s[t] || '', value: n };
        }
        getMaxBorderWidth(t) {
          let e = 0;
          const i = this.chart;
          let s, n, o, a, r;
          if (!t)
            for (s = 0, n = i.data.datasets.length; s < n; ++s)
              if (i.isDatasetVisible(s)) {
                ((o = i.getDatasetMeta(s)), (t = o.data), (a = o.controller));
                break;
              }
          if (!t) return 0;
          for (s = 0, n = t.length; s < n; ++s)
            ((r = a.resolveDataElementOptions(s)),
              'inner' !== r.borderAlign &&
                (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0)));
          return e;
        }
        getMaxOffset(t) {
          let e = 0;
          for (let i = 0, s = t.length; i < s; ++i) {
            const t = this.resolveDataElementOptions(i);
            e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
          }
          return e;
        }
        _getRingWeightOffset(t) {
          let e = 0;
          for (let i = 0; i < t; ++i)
            this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
          return e;
        }
        _getRingWeight(t) {
          return Math.max(mt(this.chart.data.datasets[t].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
          return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
      }
      class As extends bs {
        static id = 'polarArea';
        static defaults = {
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
            },
          },
          indexAxis: 'r',
          startAngle: 0,
        };
        static overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: i, color: s },
                    } = t.legend.options;
                    return e.labels.map((e, n) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: s,
                        lineWidth: o.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick(t, e, i) {
                (i.chart.toggleDataVisibility(e.index), i.chart.update());
              },
            },
          },
          scales: {
            r: {
              type: 'radialLinear',
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        };
        constructor(t, e) {
          (super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0));
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            n = Se(e._parsed[t].r, i.options.locale);
          return { label: s[t] || '', value: n };
        }
        parseObjectData(t, e, i, s) {
          return yi.bind(this)(t, e, i, s);
        }
        update(t) {
          const e = this._cachedMeta.data;
          (this._updateRadius(), this.updateElements(e, 0, e.length, t));
        }
        getMinMax() {
          const t = this._cachedMeta,
            e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
          return (
            t.data.forEach((t, i) => {
              const s = this.getParsed(i).r;
              !isNaN(s) &&
                this.chart.getDataVisibility(i) &&
                (s < e.min && (e.min = s), s > e.max && (e.max = s));
            }),
            e
          );
        }
        _updateRadius() {
          const t = this.chart,
            e = t.chartArea,
            i = t.options,
            s = Math.min(e.right - e.left, e.bottom - e.top),
            n = Math.max(s / 2, 0),
            o =
              (n - Math.max(i.cutoutPercentage ? (n / 100) * i.cutoutPercentage : 1, 0)) /
              t.getVisibleDatasetCount();
          ((this.outerRadius = n - o * this.index), (this.innerRadius = this.outerRadius - o));
        }
        updateElements(t, e, i, s) {
          const n = 'reset' === s,
            o = this.chart,
            a = o.options.animation,
            r = this._cachedMeta.rScale,
            l = r.xCenter,
            c = r.yCenter,
            h = r.getIndexAngle(0) - 0.5 * Lt;
          let d,
            u = h;
          const p = 360 / this.countVisibleElements();
          for (d = 0; d < e; ++d) u += this._computeAngle(d, s, p);
          for (d = e; d < e + i; d++) {
            const e = t[d];
            let i = u,
              f = u + this._computeAngle(d, s, p),
              g = o.getDataVisibility(d) ? r.getDistanceFromCenterForValue(this.getParsed(d).r) : 0;
            ((u = f), n && (a.animateScale && (g = 0), a.animateRotate && (i = f = h)));
            const m = {
              x: l,
              y: c,
              innerRadius: 0,
              outerRadius: g,
              startAngle: i,
              endAngle: f,
              options: this.resolveDataElementOptions(d, e.active ? 'active' : s),
            };
            this.updateElement(e, d, m, s);
          }
        }
        countVisibleElements() {
          const t = this._cachedMeta;
          let e = 0;
          return (
            t.data.forEach((t, i) => {
              !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++;
            }),
            e
          );
        }
        _computeAngle(t, e, i) {
          return this.chart.getDataVisibility(t)
            ? qt(this.resolveDataElementOptions(t, e).angle || i)
            : 0;
        }
      }
      var Ds = Object.freeze({
        __proto__: null,
        BarController: class extends bs {
          static id = 'bar';
          static defaults = {
            datasetElementType: !1,
            dataElementType: 'bar',
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            grouped: !0,
            animations: {
              numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] },
            },
          };
          static overrides = {
            scales: {
              _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
              _value_: { type: 'linear', beginAtZero: !0 },
            },
          };
          parsePrimitiveData(t, e, i, s) {
            return vs(t, e, i, s);
          }
          parseArrayData(t, e, i, s) {
            return vs(t, e, i, s);
          }
          parseObjectData(t, e, i, s) {
            const { iScale: n, vScale: o } = t,
              { xAxisKey: a = 'x', yAxisKey: r = 'y' } = this._parsing,
              l = 'x' === n.axis ? a : r,
              c = 'x' === o.axis ? a : r,
              h = [];
            let d, u, p, f;
            for (d = i, u = i + s; d < u; ++d)
              ((f = e[d]),
                (p = {}),
                (p[n.axis] = n.parse(Dt(f, l), d)),
                h.push(ys(Dt(f, c), p, o, d)));
            return h;
          }
          updateRangeFromParsed(t, e, i, s) {
            super.updateRangeFromParsed(t, e, i, s);
            const n = i._custom;
            n &&
              e === this._cachedMeta.vScale &&
              ((t.min = Math.min(t.min, n.min)), (t.max = Math.max(t.max, n.max)));
          }
          getMaxOverflow() {
            return 0;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              { iScale: i, vScale: s } = e,
              n = this.getParsed(t),
              o = n._custom,
              a = _s(o) ? '[' + o.start + ', ' + o.end + ']' : '' + s.getLabelForValue(n[s.axis]);
            return { label: '' + i.getLabelForValue(n[i.axis]), value: a };
          }
          initialize() {
            ((this.enableOptionSharing = !0),
              super.initialize(),
              (this._cachedMeta.stack = this.getDataset().stack));
          }
          update(t) {
            const e = this._cachedMeta;
            this.updateElements(e.data, 0, e.data.length, t);
          }
          updateElements(t, e, i, s) {
            const n = 'reset' === s,
              {
                index: o,
                _cachedMeta: { vScale: a },
              } = this,
              r = a.getBasePixel(),
              l = a.isHorizontal(),
              c = this._getRuler(),
              { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, s);
            for (let u = e; u < e + i; u++) {
              const e = this.getParsed(u),
                i = n || dt(e[a.axis]) ? { base: r, head: r } : this._calculateBarValuePixels(u),
                p = this._calculateBarIndexPixels(u, c),
                f = (e._stacks || {})[a.axis],
                g = {
                  horizontal: l,
                  base: i.base,
                  enableBorderRadius: !f || _s(e._custom) || o === f._top || o === f._bottom,
                  x: l ? i.head : p.center,
                  y: l ? p.center : i.head,
                  height: l ? p.size : Math.abs(i.size),
                  width: l ? Math.abs(i.size) : p.size,
                };
              d && (g.options = h || this.resolveDataElementOptions(u, t[u].active ? 'active' : s));
              const m = g.options || t[u].options;
              (ws(g, m, f, o), Ss(g, m, c.ratio), this.updateElement(t[u], u, g, s));
            }
          }
          _getStacks(t, e) {
            const { iScale: i } = this._cachedMeta,
              s = i.getMatchingVisibleMetas(this._type).filter((t) => t.controller.options.grouped),
              n = i.options.stacked,
              o = [],
              a = this._cachedMeta.controller.getParsed(e),
              r = a && a[i.axis],
              l = (t) => {
                const e = t._parsed.find((t) => t[i.axis] === r),
                  s = e && e[t.vScale.axis];
                if (dt(s) || isNaN(s)) return !0;
              };
            for (const c of s)
              if (
                (void 0 === e || !l(c)) &&
                ((!1 === n || -1 === o.indexOf(c.stack) || (void 0 === n && void 0 === c.stack)) &&
                  o.push(c.stack),
                c.index === t)
              )
                break;
            return (o.length || o.push(void 0), o);
          }
          _getStackCount(t) {
            return this._getStacks(void 0, t).length;
          }
          _getAxisCount() {
            return this._getAxis().length;
          }
          getFirstScaleIdForIndexAxis() {
            const t = this.chart.scales,
              e = this.chart.options.indexAxis;
            return Object.keys(t)
              .filter((i) => t[i].axis === e)
              .shift();
          }
          _getAxis() {
            const t = {},
              e = this.getFirstScaleIdForIndexAxis();
            for (const i of this.chart.data.datasets)
              t[mt('x' === this.chart.options.indexAxis ? i.xAxisID : i.yAxisID, e)] = !0;
            return Object.keys(t);
          }
          _getStackIndex(t, e, i) {
            const s = this._getStacks(t, i),
              n = void 0 !== e ? s.indexOf(e) : -1;
            return -1 === n ? s.length - 1 : n;
          }
          _getRuler() {
            const t = this.options,
              e = this._cachedMeta,
              i = e.iScale,
              s = [];
            let n, o;
            for (n = 0, o = e.data.length; n < o; ++n)
              s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
            const a = t.barThickness;
            return {
              min: a || xs(e),
              pixels: s,
              start: i._startPixel,
              end: i._endPixel,
              stackCount: this._getStackCount(),
              scale: i,
              grouped: t.grouped,
              ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
            };
          }
          _calculateBarValuePixels(t) {
            const {
                _cachedMeta: { vScale: e, _stacked: i, index: s },
                options: { base: n, minBarLength: o },
              } = this,
              a = n || 0,
              r = this.getParsed(t),
              l = r._custom,
              c = _s(l);
            let h,
              d,
              u = r[e.axis],
              p = 0,
              f = i ? this.applyStack(e, r, i) : u;
            (f !== u && ((p = f - u), (f = u)),
              c &&
                ((u = l.barStart),
                (f = l.barEnd - l.barStart),
                0 !== u && $t(u) !== $t(l.barEnd) && (p = 0),
                (p += u)));
            const g = dt(n) || c ? p : n;
            let m = e.getPixelForValue(g);
            if (
              ((h = this.chart.getDataVisibility(t) ? e.getPixelForValue(p + f) : m),
              (d = h - m),
              Math.abs(d) < o)
            ) {
              ((d =
                (function (t, e, i) {
                  return 0 !== t ? $t(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
                })(d, e, a) * o),
                u === a && (m -= d / 2));
              const t = e.getPixelForDecimal(0),
                n = e.getPixelForDecimal(1),
                l = Math.min(t, n),
                p = Math.max(t, n);
              ((m = Math.max(Math.min(m, p), l)),
                (h = m + d),
                i &&
                  !c &&
                  (r._stacks[e.axis]._visualValues[s] =
                    e.getValueForPixel(h) - e.getValueForPixel(m)));
            }
            if (m === e.getPixelForValue(a)) {
              const t = ($t(d) * e.getLineWidthForValue(a)) / 2;
              ((m += t), (d -= t));
            }
            return { size: d, base: m, head: h, center: h + d / 2 };
          }
          _calculateBarIndexPixels(t, e) {
            const i = e.scale,
              s = this.options,
              n = s.skipNull,
              o = mt(s.maxBarThickness, 1 / 0);
            let a, r;
            const l = this._getAxisCount();
            if (e.grouped) {
              const i = n ? this._getStackCount(t) : e.stackCount,
                c =
                  'flex' === s.barThickness
                    ? (function (t, e, i, s) {
                        const n = e.pixels,
                          o = n[t];
                        let a = t > 0 ? n[t - 1] : null,
                          r = t < n.length - 1 ? n[t + 1] : null;
                        const l = i.categoryPercentage;
                        (null === a && (a = o - (null === r ? e.end - e.start : r - o)),
                          null === r && (r = o + o - a));
                        const c = o - ((o - Math.min(a, r)) / 2) * l;
                        return {
                          chunk: ((Math.abs(r - a) / 2) * l) / s,
                          ratio: i.barPercentage,
                          start: c,
                        };
                      })(t, e, s, i * l)
                    : (function (t, e, i, s) {
                        const n = i.barThickness;
                        let o, a;
                        return (
                          dt(n)
                            ? ((o = e.min * i.categoryPercentage), (a = i.barPercentage))
                            : ((o = n * s), (a = 1)),
                          { chunk: o / s, ratio: a, start: e.pixels[t] - o / 2 }
                        );
                      })(t, e, s, i * l),
                h =
                  'x' === this.chart.options.indexAxis
                    ? this.getDataset().xAxisID
                    : this.getDataset().yAxisID,
                d = this._getAxis().indexOf(mt(h, this.getFirstScaleIdForIndexAxis())),
                u = this._getStackIndex(this.index, this._cachedMeta.stack, n ? t : void 0) + d;
              ((a = c.start + c.chunk * u + c.chunk / 2), (r = Math.min(o, c.chunk * c.ratio)));
            } else
              ((a = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
                (r = Math.min(o, e.min * e.ratio)));
            return { base: a - r / 2, head: a + r / 2, center: a, size: r };
          }
          draw() {
            const t = this._cachedMeta,
              e = t.vScale,
              i = t.data,
              s = i.length;
            let n = 0;
            for (; n < s; ++n)
              null === this.getParsed(n)[e.axis] || i[n].hidden || i[n].draw(this._ctx);
          }
        },
        BubbleController: class extends bs {
          static id = 'bubble';
          static defaults = {
            datasetElementType: !1,
            dataElementType: 'point',
            animations: {
              numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] },
            },
          };
          static overrides = { scales: { x: { type: 'linear' }, y: { type: 'linear' } } };
          initialize() {
            ((this.enableOptionSharing = !0), super.initialize());
          }
          parsePrimitiveData(t, e, i, s) {
            const n = super.parsePrimitiveData(t, e, i, s);
            for (let o = 0; o < n.length; o++)
              n[o]._custom = this.resolveDataElementOptions(o + i).radius;
            return n;
          }
          parseArrayData(t, e, i, s) {
            const n = super.parseArrayData(t, e, i, s);
            for (let o = 0; o < n.length; o++) {
              const t = e[i + o];
              n[o]._custom = mt(t[2], this.resolveDataElementOptions(o + i).radius);
            }
            return n;
          }
          parseObjectData(t, e, i, s) {
            const n = super.parseObjectData(t, e, i, s);
            for (let o = 0; o < n.length; o++) {
              const t = e[i + o];
              n[o]._custom = mt(t && t.r && +t.r, this.resolveDataElementOptions(o + i).radius);
            }
            return n;
          }
          getMaxOverflow() {
            const t = this._cachedMeta.data;
            let e = 0;
            for (let i = t.length - 1; i >= 0; --i)
              e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
            return e > 0 && e;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              i = this.chart.data.labels || [],
              { xScale: s, yScale: n } = e,
              o = this.getParsed(t),
              a = s.getLabelForValue(o.x),
              r = n.getLabelForValue(o.y),
              l = o._custom;
            return { label: i[t] || '', value: '(' + a + ', ' + r + (l ? ', ' + l : '') + ')' };
          }
          update(t) {
            const e = this._cachedMeta.data;
            this.updateElements(e, 0, e.length, t);
          }
          updateElements(t, e, i, s) {
            const n = 'reset' === s,
              { iScale: o, vScale: a } = this._cachedMeta,
              { sharedOptions: r, includeOptions: l } = this._getSharedOptions(e, s),
              c = o.axis,
              h = a.axis;
            for (let d = e; d < e + i; d++) {
              const e = t[d],
                i = !n && this.getParsed(d),
                u = {},
                p = (u[c] = n ? o.getPixelForDecimal(0.5) : o.getPixelForValue(i[c])),
                f = (u[h] = n ? a.getBasePixel() : a.getPixelForValue(i[h]));
              ((u.skip = isNaN(p) || isNaN(f)),
                l &&
                  ((u.options = r || this.resolveDataElementOptions(d, e.active ? 'active' : s)),
                  n && (u.options.radius = 0)),
                this.updateElement(e, d, u, s));
            }
          }
          resolveDataElementOptions(t, e) {
            const i = this.getParsed(t);
            let s = super.resolveDataElementOptions(t, e);
            s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
            const n = s.radius;
            return ('active' !== e && (s.radius = 0), (s.radius += mt(i && i._custom, n)), s);
          }
        },
        DoughnutController: Ps,
        LineController: class extends bs {
          static id = 'line';
          static defaults = {
            datasetElementType: 'line',
            dataElementType: 'point',
            showLine: !0,
            spanGaps: !1,
          };
          static overrides = {
            scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
          };
          initialize() {
            ((this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize());
          }
          update(t) {
            const e = this._cachedMeta,
              { dataset: i, data: s = [], _dataset: n } = e,
              o = this.chart._animationsDisabled;
            let { start: a, count: r } = pe(e, s, o);
            ((this._drawStart = a),
              (this._drawCount = r),
              fe(e) && ((a = 0), (r = s.length)),
              (i._chart = this.chart),
              (i._datasetIndex = this.index),
              (i._decimated = !!n._decimated),
              (i.points = s));
            const l = this.resolveDatasetElementOptions(t);
            (this.options.showLine || (l.borderWidth = 0),
              (l.segment = this.options.segment),
              this.updateElement(i, void 0, { animated: !o, options: l }, t),
              this.updateElements(s, a, r, t));
          }
          updateElements(t, e, i, s) {
            const n = 'reset' === s,
              { iScale: o, vScale: a, _stacked: r, _dataset: l } = this._cachedMeta,
              { sharedOptions: c, includeOptions: h } = this._getSharedOptions(e, s),
              d = o.axis,
              u = a.axis,
              { spanGaps: p, segment: f } = this.options,
              g = Yt(p) ? p : Number.POSITIVE_INFINITY,
              m = this.chart._animationsDisabled || n || 'none' === s,
              b = e + i,
              x = t.length;
            let y = e > 0 && this.getParsed(e - 1);
            for (let v = 0; v < x; ++v) {
              const i = t[v],
                p = m ? i : {};
              if (v < e || v >= b) {
                p.skip = !0;
                continue;
              }
              const x = this.getParsed(v),
                _ = dt(x[u]),
                w = (p[d] = o.getPixelForValue(x[d], v)),
                M = (p[u] =
                  n || _
                    ? a.getBasePixel()
                    : a.getPixelForValue(r ? this.applyStack(a, x, r) : x[u], v));
              ((p.skip = isNaN(w) || isNaN(M) || _),
                (p.stop = v > 0 && Math.abs(x[d] - y[d]) > g),
                f && ((p.parsed = x), (p.raw = l.data[v])),
                h && (p.options = c || this.resolveDataElementOptions(v, i.active ? 'active' : s)),
                m || this.updateElement(i, v, p, s),
                (y = x));
            }
          }
          getMaxOverflow() {
            const t = this._cachedMeta,
              e = t.dataset,
              i = (e.options && e.options.borderWidth) || 0,
              s = t.data || [];
            if (!s.length) return i;
            const n = s[0].size(this.resolveDataElementOptions(0)),
              o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
            return Math.max(i, n, o) / 2;
          }
          draw() {
            const t = this._cachedMeta;
            (t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw());
          }
        },
        PieController: class extends Ps {
          static id = 'pie';
          static defaults = { cutout: 0, rotation: 0, circumference: 360, radius: '100%' };
        },
        PolarAreaController: As,
        RadarController: class extends bs {
          static id = 'radar';
          static defaults = {
            datasetElementType: 'line',
            dataElementType: 'point',
            indexAxis: 'r',
            showLine: !0,
            elements: { line: { fill: 'start' } },
          };
          static overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } };
          getLabelAndValue(t) {
            const e = this._cachedMeta.vScale,
              i = this.getParsed(t);
            return { label: e.getLabels()[t], value: '' + e.getLabelForValue(i[e.axis]) };
          }
          parseObjectData(t, e, i, s) {
            return yi.bind(this)(t, e, i, s);
          }
          update(t) {
            const e = this._cachedMeta,
              i = e.dataset,
              s = e.data || [],
              n = e.iScale.getLabels();
            if (((i.points = s), 'resize' !== t)) {
              const e = this.resolveDatasetElementOptions(t);
              this.options.showLine || (e.borderWidth = 0);
              const o = { _loop: !0, _fullLoop: n.length === s.length, options: e };
              this.updateElement(i, void 0, o, t);
            }
            this.updateElements(s, 0, s.length, t);
          }
          updateElements(t, e, i, s) {
            const n = this._cachedMeta.rScale,
              o = 'reset' === s;
            for (let a = e; a < e + i; a++) {
              const e = t[a],
                i = this.resolveDataElementOptions(a, e.active ? 'active' : s),
                r = n.getPointPositionForValue(a, this.getParsed(a).r),
                l = o ? n.xCenter : r.x,
                c = o ? n.yCenter : r.y,
                h = { x: l, y: c, angle: r.angle, skip: isNaN(l) || isNaN(c), options: i };
              this.updateElement(e, a, h, s);
            }
          }
        },
        ScatterController: class extends bs {
          static id = 'scatter';
          static defaults = {
            datasetElementType: !1,
            dataElementType: 'point',
            showLine: !1,
            fill: !1,
          };
          static overrides = {
            interaction: { mode: 'point' },
            scales: { x: { type: 'linear' }, y: { type: 'linear' } },
          };
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              i = this.chart.data.labels || [],
              { xScale: s, yScale: n } = e,
              o = this.getParsed(t),
              a = s.getLabelForValue(o.x),
              r = n.getLabelForValue(o.y);
            return { label: i[t] || '', value: '(' + a + ', ' + r + ')' };
          }
          update(t) {
            const e = this._cachedMeta,
              { data: i = [] } = e,
              s = this.chart._animationsDisabled;
            let { start: n, count: o } = pe(e, i, s);
            if (
              ((this._drawStart = n),
              (this._drawCount = o),
              fe(e) && ((n = 0), (o = i.length)),
              this.options.showLine)
            ) {
              this.datasetElementType || this.addElements();
              const { dataset: n, _dataset: o } = e;
              ((n._chart = this.chart),
                (n._datasetIndex = this.index),
                (n._decimated = !!o._decimated),
                (n.points = i));
              const a = this.resolveDatasetElementOptions(t);
              ((a.segment = this.options.segment),
                this.updateElement(n, void 0, { animated: !s, options: a }, t));
            } else this.datasetElementType && (delete e.dataset, (this.datasetElementType = !1));
            this.updateElements(i, n, o, t);
          }
          addElements() {
            const { showLine: t } = this.options;
            (!this.datasetElementType &&
              t &&
              (this.datasetElementType = this.chart.registry.getElement('line')),
              super.addElements());
          }
          updateElements(t, e, i, s) {
            const n = 'reset' === s,
              { iScale: o, vScale: a, _stacked: r, _dataset: l } = this._cachedMeta,
              c = this.resolveDataElementOptions(e, s),
              h = this.getSharedOptions(c),
              d = this.includeOptions(s, h),
              u = o.axis,
              p = a.axis,
              { spanGaps: f, segment: g } = this.options,
              m = Yt(f) ? f : Number.POSITIVE_INFINITY,
              b = this.chart._animationsDisabled || n || 'none' === s;
            let x = e > 0 && this.getParsed(e - 1);
            for (let y = e; y < e + i; ++y) {
              const e = t[y],
                i = this.getParsed(y),
                c = b ? e : {},
                f = dt(i[p]),
                v = (c[u] = o.getPixelForValue(i[u], y)),
                _ = (c[p] =
                  n || f
                    ? a.getBasePixel()
                    : a.getPixelForValue(r ? this.applyStack(a, i, r) : i[p], y));
              ((c.skip = isNaN(v) || isNaN(_) || f),
                (c.stop = y > 0 && Math.abs(i[u] - x[u]) > m),
                g && ((c.parsed = i), (c.raw = l.data[y])),
                d && (c.options = h || this.resolveDataElementOptions(y, e.active ? 'active' : s)),
                b || this.updateElement(e, y, c, s),
                (x = i));
            }
            this.updateSharedOptions(h, s, c);
          }
          getMaxOverflow() {
            const t = this._cachedMeta,
              e = t.data || [];
            if (!this.options.showLine) {
              let t = 0;
              for (let i = e.length - 1; i >= 0; --i)
                t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
              return t > 0 && t;
            }
            const i = t.dataset,
              s = (i.options && i.options.borderWidth) || 0;
            if (!e.length) return s;
            const n = e[0].size(this.resolveDataElementOptions(0)),
              o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
            return Math.max(s, n, o) / 2;
          }
        },
      });
      function Cs() {
        throw new Error(
          'This method is not implemented: Check that a complete date adapter is provided.'
        );
      }
      class Es {
        static override(t) {
          Object.assign(Es.prototype, t);
        }
        options;
        constructor(t) {
          this.options = t || {};
        }
        init() {}
        formats() {
          return Cs();
        }
        parse() {
          return Cs();
        }
        format() {
          return Cs();
        }
        add() {
          return Cs();
        }
        diff() {
          return Cs();
        }
        startOf() {
          return Cs();
        }
        endOf() {
          return Cs();
        }
      }
      var Ts = Es;
      function Is(t, e, i, s) {
        const { controller: n, data: o, _sorted: a } = t,
          r = n._cachedMeta.iScale,
          l = t.dataset && t.dataset.options ? t.dataset.options.spanGaps : null;
        if (r && e === r.axis && 'r' !== e && a && o.length) {
          const a = r._reversePixels ? oe : ne;
          if (!s) {
            const s = a(o, e, i);
            if (l) {
              const { vScale: e } = n._cachedMeta,
                { _parsed: i } = t,
                o = i
                  .slice(0, s.lo + 1)
                  .reverse()
                  .findIndex((t) => !dt(t[e.axis]));
              s.lo -= Math.max(0, o);
              const a = i.slice(s.hi).findIndex((t) => !dt(t[e.axis]));
              s.hi += Math.max(0, a);
            }
            return s;
          }
          if (n._sharedOptions) {
            const t = o[0],
              s = 'function' == typeof t.getRange && t.getRange(e);
            if (s) {
              const t = a(o, e, i - s),
                n = a(o, e, i + s);
              return { lo: t.lo, hi: n.hi };
            }
          }
        }
        return { lo: 0, hi: o.length - 1 };
      }
      function Ls(t, e, i, s, n) {
        const o = t.getSortedVisibleDatasetMetas(),
          a = i[e];
        for (let r = 0, l = o.length; r < l; ++r) {
          const { index: t, data: i } = o[r],
            { lo: l, hi: c } = Is(o[r], e, a, n);
          for (let e = l; e <= c; ++e) {
            const n = i[e];
            n.skip || s(n, t, e);
          }
        }
      }
      function Os(t, e, i, s, n) {
        const o = [];
        return n || t.isPointInArea(e)
          ? (Ls(
              t,
              i,
              e,
              function (i, a, r) {
                (n || Ve(i, t.chartArea, 0)) &&
                  i.inRange(e.x, e.y, s) &&
                  o.push({ element: i, datasetIndex: a, index: r });
              },
              !0
            ),
            o)
          : o;
      }
      function Rs(t, e, i, s, n, o) {
        let a = [];
        const r = (function (t) {
          const e = -1 !== t.indexOf('x'),
            i = -1 !== t.indexOf('y');
          return function (t, s) {
            const n = e ? Math.abs(t.x - s.x) : 0,
              o = i ? Math.abs(t.y - s.y) : 0;
            return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
          };
        })(i);
        let l = Number.POSITIVE_INFINITY;
        return (
          Ls(t, i, e, function (i, c, h) {
            const d = i.inRange(e.x, e.y, n);
            if (s && !d) return;
            const u = i.getCenterPoint(n);
            if (!o && !t.isPointInArea(u) && !d) return;
            const p = r(e, u);
            p < l
              ? ((a = [{ element: i, datasetIndex: c, index: h }]), (l = p))
              : p === l && a.push({ element: i, datasetIndex: c, index: h });
          }),
          a
        );
      }
      function Fs(t, e, i, s, n, o) {
        return o || t.isPointInArea(e)
          ? 'r' !== i || s
            ? Rs(t, e, i, s, n, o)
            : (function (t, e, i, s) {
                let n = [];
                return (
                  Ls(t, i, e, function (t, i, o) {
                    const { startAngle: a, endAngle: r } = t.getProps(
                        ['startAngle', 'endAngle'],
                        s
                      ),
                      { angle: l } = Zt(t, { x: e.x, y: e.y });
                    te(l, a, r) && n.push({ element: t, datasetIndex: i, index: o });
                  }),
                  n
                );
              })(t, e, i, n)
          : [];
      }
      function zs(t, e, i, s, n) {
        const o = [],
          a = 'x' === i ? 'inXRange' : 'inYRange';
        let r = !1;
        return (
          Ls(t, i, e, (t, s, l) => {
            t[a] &&
              t[a](e[i], n) &&
              (o.push({ element: t, datasetIndex: s, index: l }),
              (r = r || t.inRange(e.x, e.y, n)));
          }),
          s && !r ? [] : o
        );
      }
      var Ns = {
        modes: {
          index(t, e, i, s) {
            const n = Li(e, t),
              o = i.axis || 'x',
              a = i.includeInvisible || !1,
              r = i.intersect ? Os(t, n, o, s, a) : Fs(t, n, o, !1, s, a),
              l = [];
            return r.length
              ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                  const e = r[0].index,
                    i = t.data[e];
                  i && !i.skip && l.push({ element: i, datasetIndex: t.index, index: e });
                }),
                l)
              : [];
          },
          dataset(t, e, i, s) {
            const n = Li(e, t),
              o = i.axis || 'xy',
              a = i.includeInvisible || !1;
            let r = i.intersect ? Os(t, n, o, s, a) : Fs(t, n, o, !1, s, a);
            if (r.length > 0) {
              const e = r[0].datasetIndex,
                i = t.getDatasetMeta(e).data;
              r = [];
              for (let t = 0; t < i.length; ++t)
                r.push({ element: i[t], datasetIndex: e, index: t });
            }
            return r;
          },
          point: (t, e, i, s) => Os(t, Li(e, t), i.axis || 'xy', s, i.includeInvisible || !1),
          nearest(t, e, i, s) {
            const n = Li(e, t),
              o = i.axis || 'xy',
              a = i.includeInvisible || !1;
            return Fs(t, n, o, i.intersect, s, a);
          },
          x: (t, e, i, s) => zs(t, Li(e, t), 'x', i.intersect, s),
          y: (t, e, i, s) => zs(t, Li(e, t), 'y', i.intersect, s),
        },
      };
      const Bs = ['left', 'top', 'right', 'bottom'];
      function Vs(t, e) {
        return t.filter((t) => t.pos === e);
      }
      function Hs(t, e) {
        return t.filter((t) => -1 === Bs.indexOf(t.pos) && t.box.axis === e);
      }
      function $s(t, e) {
        return t.sort((t, i) => {
          const s = e ? i : t,
            n = e ? t : i;
          return s.weight === n.weight ? s.index - n.index : s.weight - n.weight;
        });
      }
      function Ws(t, e) {
        const i = (function (t) {
            const e = {};
            for (const i of t) {
              const { stack: t, pos: s, stackWeight: n } = i;
              if (!t || !Bs.includes(s)) continue;
              const o = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
              (o.count++, (o.weight += n));
            }
            return e;
          })(t),
          { vBoxMaxWidth: s, hBoxMaxHeight: n } = e;
        let o, a, r;
        for (o = 0, a = t.length; o < a; ++o) {
          r = t[o];
          const { fullSize: a } = r.box,
            l = i[r.stack],
            c = l && r.stackWeight / l.weight;
          r.horizontal
            ? ((r.width = c ? c * s : a && e.availableWidth), (r.height = n))
            : ((r.width = s), (r.height = c ? c * n : a && e.availableHeight));
        }
        return i;
      }
      function js(t, e, i, s) {
        return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
      }
      function Ys(t, e) {
        ((t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right)));
      }
      function Us(t, e, i, s) {
        const { pos: n, box: o } = i,
          a = t.maxPadding;
        if (!pt(n)) {
          i.size && (t[n] -= i.size);
          const e = s[i.stack] || { size: 0, count: 1 };
          ((e.size = Math.max(e.size, i.horizontal ? o.height : o.width)),
            (i.size = e.size / e.count),
            (t[n] += i.size));
        }
        o.getPadding && Ys(a, o.getPadding());
        const r = Math.max(0, e.outerWidth - js(a, t, 'left', 'right')),
          l = Math.max(0, e.outerHeight - js(a, t, 'top', 'bottom')),
          c = r !== t.w,
          h = l !== t.h;
        return ((t.w = r), (t.h = l), i.horizontal ? { same: c, other: h } : { same: h, other: c });
      }
      function qs(t, e) {
        const i = e.maxPadding;
        function s(t) {
          const s = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach((t) => {
              s[t] = Math.max(e[t], i[t]);
            }),
            s
          );
        }
        return s(t ? ['left', 'right'] : ['top', 'bottom']);
      }
      function Xs(t, e, i, s) {
        const n = [];
        let o, a, r, l, c, h;
        for (o = 0, a = t.length, c = 0; o < a; ++o) {
          ((r = t[o]), (l = r.box), l.update(r.width || e.w, r.height || e.h, qs(r.horizontal, e)));
          const { same: a, other: d } = Us(e, i, r, s);
          ((c |= a && n.length), (h = h || d), l.fullSize || n.push(r));
        }
        return (c && Xs(n, e, i, s)) || h;
      }
      function Ks(t, e, i, s, n) {
        ((t.top = i),
          (t.left = e),
          (t.right = e + s),
          (t.bottom = i + n),
          (t.width = s),
          (t.height = n));
      }
      function Zs(t, e, i, s) {
        const n = i.padding;
        let { x: o, y: a } = e;
        for (const r of t) {
          const t = r.box,
            l = s[r.stack] || { placed: 0, weight: 1 },
            c = r.stackWeight / l.weight || 1;
          if (r.horizontal) {
            const s = e.w * c,
              o = l.size || t.height;
            (Et(l.start) && (a = l.start),
              t.fullSize
                ? Ks(t, n.left, a, i.outerWidth - n.right - n.left, o)
                : Ks(t, e.left + l.placed, a, s, o),
              (l.start = a),
              (l.placed += s),
              (a = t.bottom));
          } else {
            const s = e.h * c,
              a = l.size || t.width;
            (Et(l.start) && (o = l.start),
              t.fullSize
                ? Ks(t, o, n.top, a, i.outerHeight - n.bottom - n.top)
                : Ks(t, o, e.top + l.placed, a, s),
              (l.start = o),
              (l.placed += s),
              (o = t.right));
          }
        }
        ((e.x = o), (e.y = a));
      }
      var Js = {
        addBox(t, e) {
          (t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || 'top'),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            t.boxes.push(e));
        },
        removeBox(t, e) {
          const i = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== i && t.boxes.splice(i, 1);
        },
        configure(t, e, i) {
          ((e.fullSize = i.fullSize), (e.position = i.position), (e.weight = i.weight));
        },
        update(t, e, i, s) {
          if (!t) return;
          const n = ii(t.options.layout.padding),
            o = Math.max(e - n.width, 0),
            a = Math.max(i - n.height, 0),
            r = (function (t) {
              const e = (function (t) {
                  const e = [];
                  let i, s, n, o, a, r;
                  for (i = 0, s = (t || []).length; i < s; ++i)
                    ((n = t[i]),
                      ({
                        position: o,
                        options: { stack: a, stackWeight: r = 1 },
                      } = n),
                      e.push({
                        index: i,
                        box: n,
                        pos: o,
                        horizontal: n.isHorizontal(),
                        weight: n.weight,
                        stack: a && o + a,
                        stackWeight: r,
                      }));
                  return e;
                })(t),
                i = $s(
                  e.filter((t) => t.box.fullSize),
                  !0
                ),
                s = $s(Vs(e, 'left'), !0),
                n = $s(Vs(e, 'right')),
                o = $s(Vs(e, 'top'), !0),
                a = $s(Vs(e, 'bottom')),
                r = Hs(e, 'x'),
                l = Hs(e, 'y');
              return {
                fullSize: i,
                leftAndTop: s.concat(o),
                rightAndBottom: n.concat(l).concat(a).concat(r),
                chartArea: Vs(e, 'chartArea'),
                vertical: s.concat(n).concat(l),
                horizontal: o.concat(a).concat(r),
              };
            })(t.boxes),
            l = r.vertical,
            c = r.horizontal;
          yt(t.boxes, (t) => {
            'function' == typeof t.beforeLayout && t.beforeLayout();
          });
          const h =
              l.reduce((t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1), 0) ||
              1,
            d = Object.freeze({
              outerWidth: e,
              outerHeight: i,
              padding: n,
              availableWidth: o,
              availableHeight: a,
              vBoxMaxWidth: o / 2 / h,
              hBoxMaxHeight: a / 2,
            }),
            u = Object.assign({}, n);
          Ys(u, ii(s));
          const p = Object.assign({ maxPadding: u, w: o, h: a, x: n.left, y: n.top }, n),
            f = Ws(l.concat(c), d);
          (Xs(r.fullSize, p, d, f),
            Xs(l, p, d, f),
            Xs(c, p, d, f) && Xs(l, p, d, f),
            (function (t) {
              const e = t.maxPadding;
              function i(i) {
                const s = Math.max(e[i] - t[i], 0);
                return ((t[i] += s), s);
              }
              ((t.y += i('top')), (t.x += i('left')), i('right'), i('bottom'));
            })(p),
            Zs(r.leftAndTop, p, d, f),
            (p.x += p.w),
            (p.y += p.h),
            Zs(r.rightAndBottom, p, d, f),
            (t.chartArea = {
              left: p.left,
              top: p.top,
              right: p.left + p.w,
              bottom: p.top + p.h,
              height: p.h,
              width: p.w,
            }),
            yt(r.chartArea, (e) => {
              const i = e.box;
              (Object.assign(i, t.chartArea),
                i.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 }));
            }));
        },
      };
      class Gs {
        acquireContext(t, e) {}
        releaseContext(t) {
          return !1;
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(t, e, i, s) {
          return (
            (e = Math.max(0, e || t.width)),
            (i = i || t.height),
            { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
          );
        }
        isAttached(t) {
          return !0;
        }
        updateConfig(t) {}
      }
      class Qs extends Gs {
        acquireContext(t) {
          return (t && t.getContext && t.getContext('2d')) || null;
        }
        updateConfig(t) {
          t.options.animation = !1;
        }
      }
      const tn = '$chartjs',
        en = {
          touchstart: 'mousedown',
          touchmove: 'mousemove',
          touchend: 'mouseup',
          pointerenter: 'mouseenter',
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointerleave: 'mouseout',
          pointerout: 'mouseout',
        },
        sn = (t) => null === t || '' === t,
        nn = !!zi && { passive: !0 };
      function on(t, e, i) {
        t && t.canvas && t.canvas.removeEventListener(e, i, nn);
      }
      function an(t, e) {
        for (const i of t) if (i === e || i.contains(e)) return !0;
      }
      function rn(t, e, i) {
        const s = t.canvas,
          n = new MutationObserver((t) => {
            let e = !1;
            for (const i of t) ((e = e || an(i.addedNodes, s)), (e = e && !an(i.removedNodes, s)));
            e && i();
          });
        return (n.observe(document, { childList: !0, subtree: !0 }), n);
      }
      function ln(t, e, i) {
        const s = t.canvas,
          n = new MutationObserver((t) => {
            let e = !1;
            for (const i of t) ((e = e || an(i.removedNodes, s)), (e = e && !an(i.addedNodes, s)));
            e && i();
          });
        return (n.observe(document, { childList: !0, subtree: !0 }), n);
      }
      const cn = new Map();
      let hn = 0;
      function dn() {
        const t = window.devicePixelRatio;
        t !== hn &&
          ((hn = t),
          cn.forEach((e, i) => {
            i.currentDevicePixelRatio !== t && e();
          }));
      }
      function un(t, e, i) {
        const s = t.canvas,
          n = s && Di(s);
        if (!n) return;
        const o = he((t, e) => {
            const s = n.clientWidth;
            (i(t, e), s < n.clientWidth && i());
          }, window),
          a = new ResizeObserver((t) => {
            const e = t[0],
              i = e.contentRect.width,
              s = e.contentRect.height;
            (0 === i && 0 === s) || o(i, s);
          });
        return (
          a.observe(n),
          (function (t, e) {
            (cn.size || window.addEventListener('resize', dn), cn.set(t, e));
          })(t, o),
          a
        );
      }
      function pn(t, e, i) {
        (i && i.disconnect(),
          'resize' === e &&
            (function (t) {
              (cn.delete(t), cn.size || window.removeEventListener('resize', dn));
            })(t));
      }
      function fn(t, e, i) {
        const s = t.canvas,
          n = he((e) => {
            null !== t.ctx &&
              i(
                (function (t, e) {
                  const i = en[t.type] || t.type,
                    { x: s, y: n } = Li(t, e);
                  return {
                    type: i,
                    chart: e,
                    native: t,
                    x: void 0 !== s ? s : null,
                    y: void 0 !== n ? n : null,
                  };
                })(e, t)
              );
          }, t);
        return (
          (function (t, e, i) {
            t && t.addEventListener(e, i, nn);
          })(s, e, n),
          n
        );
      }
      class gn extends Gs {
        acquireContext(t, e) {
          const i = t && t.getContext && t.getContext('2d');
          return i && i.canvas === t
            ? ((function (t, e) {
                const i = t.style,
                  s = t.getAttribute('height'),
                  n = t.getAttribute('width');
                if (
                  ((t[tn] = {
                    initial: {
                      height: s,
                      width: n,
                      style: { display: i.display, height: i.height, width: i.width },
                    },
                  }),
                  (i.display = i.display || 'block'),
                  (i.boxSizing = i.boxSizing || 'border-box'),
                  sn(n))
                ) {
                  const e = Ni(t, 'width');
                  void 0 !== e && (t.width = e);
                }
                if (sn(s))
                  if ('' === t.style.height) t.height = t.width / (e || 2);
                  else {
                    const e = Ni(t, 'height');
                    void 0 !== e && (t.height = e);
                  }
              })(t, e),
              i)
            : null;
        }
        releaseContext(t) {
          const e = t.canvas;
          if (!e[tn]) return !1;
          const i = e[tn].initial;
          ['height', 'width'].forEach((t) => {
            const s = i[t];
            dt(s) ? e.removeAttribute(t) : e.setAttribute(t, s);
          });
          const s = i.style || {};
          return (
            Object.keys(s).forEach((t) => {
              e.style[t] = s[t];
            }),
            (e.width = e.width),
            delete e[tn],
            !0
          );
        }
        addEventListener(t, e, i) {
          this.removeEventListener(t, e);
          const s = t.$proxies || (t.$proxies = {}),
            n = { attach: rn, detach: ln, resize: un }[e] || fn;
          s[e] = n(t, e, i);
        }
        removeEventListener(t, e) {
          const i = t.$proxies || (t.$proxies = {}),
            s = i[e];
          s && (({ attach: pn, detach: pn, resize: pn }[e] || on)(t, e, s), (i[e] = void 0));
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(t, e, i, s) {
          return Ri(t, e, i, s);
        }
        isAttached(t) {
          const e = t && Di(t);
          return !(!e || !e.isConnected);
        }
      }
      class mn {
        static defaults = {};
        static defaultRoutes = void 0;
        x;
        y;
        active = !1;
        options;
        $animations;
        tooltipPosition(t) {
          const { x: e, y: i } = this.getProps(['x', 'y'], t);
          return { x: e, y: i };
        }
        hasValue() {
          return Yt(this.x) && Yt(this.y);
        }
        getProps(t, e) {
          const i = this.$animations;
          if (!e || !i) return this;
          const s = {};
          return (
            t.forEach((t) => {
              s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
            }),
            s
          );
        }
      }
      function bn(t, e) {
        const i = t.options.ticks,
          s = (function (t) {
            const e = t.options.offset,
              i = t._tickSize(),
              s = t._length / i + (e ? 0 : 1),
              n = t._maxLength / i;
            return Math.floor(Math.min(s, n));
          })(t),
          n = Math.min(i.maxTicksLimit || s, s),
          o = i.major.enabled
            ? (function (t) {
                const e = [];
                let i, s;
                for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
                return e;
              })(e)
            : [],
          a = o.length,
          r = o[0],
          l = o[a - 1],
          c = [];
        if (a > n)
          return (
            (function (t, e, i, s) {
              let n,
                o = 0,
                a = i[0];
              for (s = Math.ceil(s), n = 0; n < t.length; n++)
                n === a && (e.push(t[n]), o++, (a = i[o * s]));
            })(e, c, o, a / n),
            c
          );
        const h = (function (t, e, i) {
          const s = (function (t) {
              const e = t.length;
              let i, s;
              if (e < 2) return !1;
              for (s = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== s) return !1;
              return s;
            })(t),
            n = e.length / i;
          if (!s) return Math.max(n, 1);
          const o = (function (t) {
            const e = [],
              i = Math.sqrt(t);
            let s;
            for (s = 1; s < i; s++) t % s === 0 && (e.push(s), e.push(t / s));
            return (i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e);
          })(s);
          for (let a = 0, r = o.length - 1; a < r; a++) {
            const t = o[a];
            if (t > n) return t;
          }
          return Math.max(n, 1);
        })(o, e, n);
        if (a > 0) {
          let t, i;
          const s = a > 1 ? Math.round((l - r) / (a - 1)) : null;
          for (xn(e, c, h, dt(s) ? 0 : r - s, r), t = 0, i = a - 1; t < i; t++)
            xn(e, c, h, o[t], o[t + 1]);
          return (xn(e, c, h, l, dt(s) ? e.length : l + s), c);
        }
        return (xn(e, c, h), c);
      }
      function xn(t, e, i, s, n) {
        const o = mt(s, 0),
          a = Math.min(mt(n, t.length), t.length);
        let r,
          l,
          c,
          h = 0;
        for (i = Math.ceil(i), n && ((r = n - s), (i = r / Math.floor(r / i))), c = o; c < 0; )
          (h++, (c = Math.round(o + h * i)));
        for (l = Math.max(o, 0); l < a; l++)
          l === c && (e.push(t[l]), h++, (c = Math.round(o + h * i)));
      }
      const yn = (t, e, i) => ('top' === e || 'left' === e ? t[e] + i : t[e] - i),
        vn = (t, e) => Math.min(e || t, t);
      function _n(t, e) {
        const i = [],
          s = t.length / e,
          n = t.length;
        let o = 0;
        for (; o < n; o += s) i.push(t[Math.floor(o)]);
        return i;
      }
      function wn(t, e, i) {
        const s = t.ticks.length,
          n = Math.min(e, s - 1),
          o = t._startPixel,
          a = t._endPixel,
          r = 1e-6;
        let l,
          c = t.getPixelForTick(n);
        if (
          !(
            i &&
            ((l =
              1 === s
                ? Math.max(c - o, a - c)
                : 0 === e
                  ? (t.getPixelForTick(1) - c) / 2
                  : (c - t.getPixelForTick(n - 1)) / 2),
            (c += n < e ? l : -l),
            c < o - r || c > a + r)
          )
        )
          return c;
      }
      function Mn(t) {
        return t.drawTicks ? t.tickLength : 0;
      }
      function kn(t, e) {
        if (!t.display) return 0;
        const i = si(t.font, e),
          s = ii(t.padding);
        return (ut(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
      }
      function Sn(t, e, i) {
        let s = de(t);
        return (
          ((i && 'right' !== e) || (!i && 'right' === e)) &&
            (s = ((t) => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(s)),
          s
        );
      }
      class Pn extends mn {
        constructor(t) {
          (super(),
            (this.id = t.id),
            (this.type = t.type),
            (this.options = void 0),
            (this.ctx = t.ctx),
            (this.chart = t.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0));
        }
        init(t) {
          ((this.options = t.setContext(this.getContext())),
            (this.axis = t.axis),
            (this._userMin = this.parse(t.min)),
            (this._userMax = this.parse(t.max)),
            (this._suggestedMin = this.parse(t.suggestedMin)),
            (this._suggestedMax = this.parse(t.suggestedMax)));
        }
        parse(t, e) {
          return t;
        }
        getUserBounds() {
          let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
          return (
            (t = gt(t, Number.POSITIVE_INFINITY)),
            (e = gt(e, Number.NEGATIVE_INFINITY)),
            (i = gt(i, Number.POSITIVE_INFINITY)),
            (s = gt(s, Number.NEGATIVE_INFINITY)),
            { min: gt(t, i), max: gt(e, s), minDefined: ft(t), maxDefined: ft(e) }
          );
        }
        getMinMax(t) {
          let e,
            { min: i, max: s, minDefined: n, maxDefined: o } = this.getUserBounds();
          if (n && o) return { min: i, max: s };
          const a = this.getMatchingVisibleMetas();
          for (let r = 0, l = a.length; r < l; ++r)
            ((e = a[r].controller.getMinMax(this, t)),
              n || (i = Math.min(i, e.min)),
              o || (s = Math.max(s, e.max)));
          return (
            (i = o && i > s ? s : i),
            (s = n && i > s ? i : s),
            { min: gt(i, gt(s, i)), max: gt(s, gt(i, s)) }
          );
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const t = this.chart.data;
          return (
            this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
          );
        }
        getLabelItems(t = this.chart.chartArea) {
          return this._labelItems || (this._labelItems = this._computeLabelItems(t));
        }
        beforeLayout() {
          ((this._cache = {}), (this._dataLimitsCached = !1));
        }
        beforeUpdate() {
          xt(this.options.beforeUpdate, [this]);
        }
        update(t, e, i) {
          const { beginAtZero: s, grace: n, ticks: o } = this.options,
            a = o.sampleSize;
          (this.beforeUpdate(),
            (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + i.left + i.right
              : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = (function (t, e, i) {
                const { min: s, max: n } = t,
                  o = bt(e, (n - s) / 2),
                  a = (t, e) => (i && 0 === t ? 0 : t + e);
                return { min: a(s, -Math.abs(o)), max: a(n, o) };
              })(this, n, s)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks());
          const r = a < this.ticks.length;
          (this._convertTicksToLabels(r ? _n(this.ticks, a) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
              (o.autoSkip || 'auto' === o.source) &&
              ((this.ticks = bn(this, this.ticks)),
              (this._labelSizes = null),
              this.afterAutoSkip()),
            r && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate());
        }
        configure() {
          let t,
            e,
            i = this.options.reverse;
          (this.isHorizontal()
            ? ((t = this.left), (e = this.right))
            : ((t = this.top), (e = this.bottom), (i = !i)),
            (this._startPixel = t),
            (this._endPixel = e),
            (this._reversePixels = i),
            (this._length = e - t),
            (this._alignToPixels = this.options.alignToPixels));
        }
        afterUpdate() {
          xt(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          xt(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          (this.isHorizontal()
            ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
            : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0));
        }
        afterSetDimensions() {
          xt(this.options.afterSetDimensions, [this]);
        }
        _callHooks(t) {
          (this.chart.notifyPlugins(t, this.getContext()), xt(this.options[t], [this]));
        }
        beforeDataLimits() {
          this._callHooks('beforeDataLimits');
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks('afterDataLimits');
        }
        beforeBuildTicks() {
          this._callHooks('beforeBuildTicks');
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks('afterBuildTicks');
        }
        beforeTickToLabelConversion() {
          xt(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(t) {
          const e = this.options.ticks;
          let i, s, n;
          for (i = 0, s = t.length; i < s; i++)
            ((n = t[i]), (n.label = xt(e.callback, [n.value, i, t], this)));
        }
        afterTickToLabelConversion() {
          xt(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          xt(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const t = this.options,
            e = t.ticks,
            i = vn(this.ticks.length, t.ticks.maxTicksLimit),
            s = e.minRotation || 0,
            n = e.maxRotation;
          let o,
            a,
            r,
            l = s;
          if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal())
            return void (this.labelRotation = s);
          const c = this._getLabelSizes(),
            h = c.widest.width,
            d = c.highest.height,
            u = ee(this.chart.width - h, 0, this.maxWidth);
          ((o = t.offset ? this.maxWidth / i : u / (i - 1)),
            h + 6 > o &&
              ((o = u / (i - (t.offset ? 0.5 : 1))),
              (a = this.maxHeight - Mn(t.grid) - e.padding - kn(t.title, this.chart.options.font)),
              (r = Math.sqrt(h * h + d * d)),
              (l = Xt(
                Math.min(
                  Math.asin(ee((c.highest.height + 6) / o, -1, 1)),
                  Math.asin(ee(a / r, -1, 1)) - Math.asin(ee(d / r, -1, 1))
                )
              )),
              (l = Math.max(s, Math.min(n, l)))),
            (this.labelRotation = l));
        }
        afterCalculateLabelRotation() {
          xt(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
          xt(this.options.beforeFit, [this]);
        }
        fit() {
          const t = { width: 0, height: 0 },
            {
              chart: e,
              options: { ticks: i, title: s, grid: n },
            } = this,
            o = this._isVisible(),
            a = this.isHorizontal();
          if (o) {
            const o = kn(s, e.options.font);
            if (
              (a
                ? ((t.width = this.maxWidth), (t.height = Mn(n) + o))
                : ((t.height = this.maxHeight), (t.width = Mn(n) + o)),
              i.display && this.ticks.length)
            ) {
              const { first: e, last: s, widest: n, highest: o } = this._getLabelSizes(),
                r = 2 * i.padding,
                l = qt(this.labelRotation),
                c = Math.cos(l),
                h = Math.sin(l);
              if (a) {
                const e = i.mirror ? 0 : h * n.width + c * o.height;
                t.height = Math.min(this.maxHeight, t.height + e + r);
              } else {
                const e = i.mirror ? 0 : c * n.width + h * o.height;
                t.width = Math.min(this.maxWidth, t.width + e + r);
              }
              this._calculatePadding(e, s, h, c);
            }
          }
          (this._handleMargins(),
            a
              ? ((this.width = this._length = e.width - this._margins.left - this._margins.right),
                (this.height = t.height))
              : ((this.width = t.width),
                (this.height = this._length =
                  e.height - this._margins.top - this._margins.bottom)));
        }
        _calculatePadding(t, e, i, s) {
          const {
              ticks: { align: n, padding: o },
              position: a,
            } = this.options,
            r = 0 !== this.labelRotation,
            l = 'top' !== a && 'x' === this.axis;
          if (this.isHorizontal()) {
            const a = this.getPixelForTick(0) - this.left,
              c = this.right - this.getPixelForTick(this.ticks.length - 1);
            let h = 0,
              d = 0;
            (r
              ? l
                ? ((h = s * t.width), (d = i * e.height))
                : ((h = i * t.height), (d = s * e.width))
              : 'start' === n
                ? (d = e.width)
                : 'end' === n
                  ? (h = t.width)
                  : 'inner' !== n && ((h = t.width / 2), (d = e.width / 2)),
              (this.paddingLeft = Math.max(((h - a + o) * this.width) / (this.width - a), 0)),
              (this.paddingRight = Math.max(((d - c + o) * this.width) / (this.width - c), 0)));
          } else {
            let i = e.height / 2,
              s = t.height / 2;
            ('start' === n ? ((i = 0), (s = t.height)) : 'end' === n && ((i = e.height), (s = 0)),
              (this.paddingTop = i + o),
              (this.paddingBottom = s + o));
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
            (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
        }
        afterFit() {
          xt(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis: t, position: e } = this.options;
          return 'top' === e || 'bottom' === e || 'x' === t;
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
          let e, i;
          for (
            this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length;
            e < i;
            e++
          )
            dt(t[e].label) && (t.splice(e, 1), i--, e--);
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let t = this._labelSizes;
          if (!t) {
            const e = this.options.ticks.sampleSize;
            let i = this.ticks;
            (e < i.length && (i = _n(i, e)),
              (this._labelSizes = t =
                this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit)));
          }
          return t;
        }
        _computeLabelSizes(t, e, i) {
          const { ctx: s, _longestTextCache: n } = this,
            o = [],
            a = [],
            r = Math.floor(e / vn(e, i));
          let l,
            c,
            h,
            d,
            u,
            p,
            f,
            g,
            m,
            b,
            x,
            y = 0,
            v = 0;
          for (l = 0; l < e; l += r) {
            if (
              ((d = t[l].label),
              (u = this._resolveTickFontOptions(l)),
              (s.font = p = u.string),
              (f = n[p] = n[p] || { data: {}, gc: [] }),
              (g = u.lineHeight),
              (m = b = 0),
              dt(d) || ut(d))
            ) {
              if (ut(d))
                for (c = 0, h = d.length; c < h; ++c)
                  ((x = d[c]), dt(x) || ut(x) || ((m = Oe(s, f.data, f.gc, m, x)), (b += g)));
            } else ((m = Oe(s, f.data, f.gc, m, d)), (b = g));
            (o.push(m), a.push(b), (y = Math.max(m, y)), (v = Math.max(b, v)));
          }
          !(function (t, e) {
            yt(t, (t) => {
              const i = t.gc,
                s = i.length / 2;
              let n;
              if (s > e) {
                for (n = 0; n < s; ++n) delete t.data[i[n]];
                i.splice(0, s);
              }
            });
          })(n, e);
          const _ = o.indexOf(y),
            w = a.indexOf(v),
            M = (t) => ({ width: o[t] || 0, height: a[t] || 0 });
          return {
            first: M(0),
            last: M(e - 1),
            widest: M(_),
            highest: M(w),
            widths: o,
            heights: a,
          };
        }
        getLabelForValue(t) {
          return t;
        }
        getPixelForValue(t, e) {
          return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
          this._reversePixels && (t = 1 - t);
          const e = this._startPixel + t * this._length;
          return ee(this._alignToPixels ? Fe(this.chart, e, 0) : e, -32768, 32767);
        }
        getDecimalForPixel(t) {
          const e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min: t, max: e } = this;
          return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
          const e = this.ticks || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return (
              i.$context ||
              (i.$context = (function (t, e, i) {
                return oi(t, { tick: i, index: e, type: 'tick' });
              })(this.getContext(), t, i))
            );
          }
          return (
            this.$context ||
            (this.$context = oi(this.chart.getContext(), { scale: this, type: 'scale' }))
          );
        }
        _tickSize() {
          const t = this.options.ticks,
            e = qt(this.labelRotation),
            i = Math.abs(Math.cos(e)),
            s = Math.abs(Math.sin(e)),
            n = this._getLabelSizes(),
            o = t.autoSkipPadding || 0,
            a = n ? n.widest.width + o : 0,
            r = n ? n.highest.height + o : 0;
          return this.isHorizontal()
            ? r * i > a * s
              ? a / i
              : r / s
            : r * s < a * i
              ? r / i
              : a / s;
        }
        _isVisible() {
          const t = this.options.display;
          return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
          const e = this.axis,
            i = this.chart,
            s = this.options,
            { grid: n, position: o, border: a } = s,
            r = n.offset,
            l = this.isHorizontal(),
            c = this.ticks.length + (r ? 1 : 0),
            h = Mn(n),
            d = [],
            u = a.setContext(this.getContext()),
            p = u.display ? u.width : 0,
            f = p / 2,
            g = function (t) {
              return Fe(i, t, p);
            };
          let m, b, x, y, v, _, w, M, k, S, P, A;
          if ('top' === o)
            ((m = g(this.bottom)),
              (_ = this.bottom - h),
              (M = m - f),
              (S = g(t.top) + f),
              (A = t.bottom));
          else if ('bottom' === o)
            ((m = g(this.top)),
              (S = t.top),
              (A = g(t.bottom) - f),
              (_ = m + f),
              (M = this.top + h));
          else if ('left' === o)
            ((m = g(this.right)),
              (v = this.right - h),
              (w = m - f),
              (k = g(t.left) + f),
              (P = t.right));
          else if ('right' === o)
            ((m = g(this.left)),
              (k = t.left),
              (P = g(t.right) - f),
              (v = m + f),
              (w = this.left + h));
          else if ('x' === e) {
            if ('center' === o) m = g((t.top + t.bottom) / 2 + 0.5);
            else if (pt(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              m = g(this.chart.scales[t].getPixelForValue(e));
            }
            ((S = t.top), (A = t.bottom), (_ = m + f), (M = _ + h));
          } else if ('y' === e) {
            if ('center' === o) m = g((t.left + t.right) / 2);
            else if (pt(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              m = g(this.chart.scales[t].getPixelForValue(e));
            }
            ((v = m - f), (w = v - h), (k = t.left), (P = t.right));
          }
          const D = mt(s.ticks.maxTicksLimit, c),
            C = Math.max(1, Math.ceil(c / D));
          for (b = 0; b < c; b += C) {
            const t = this.getContext(b),
              e = n.setContext(t),
              s = a.setContext(t),
              o = e.lineWidth,
              c = e.color,
              h = s.dash || [],
              u = s.dashOffset,
              p = e.tickWidth,
              f = e.tickColor,
              g = e.tickBorderDash || [],
              m = e.tickBorderDashOffset;
            ((x = wn(this, b, r)),
              void 0 !== x &&
                ((y = Fe(i, x, o)),
                l ? (v = w = k = P = y) : (_ = M = S = A = y),
                d.push({
                  tx1: v,
                  ty1: _,
                  tx2: w,
                  ty2: M,
                  x1: k,
                  y1: S,
                  x2: P,
                  y2: A,
                  width: o,
                  color: c,
                  borderDash: h,
                  borderDashOffset: u,
                  tickWidth: p,
                  tickColor: f,
                  tickBorderDash: g,
                  tickBorderDashOffset: m,
                })));
          }
          return ((this._ticksLength = c), (this._borderValue = m), d);
        }
        _computeLabelItems(t) {
          const e = this.axis,
            i = this.options,
            { position: s, ticks: n } = i,
            o = this.isHorizontal(),
            a = this.ticks,
            { align: r, crossAlign: l, padding: c, mirror: h } = n,
            d = Mn(i.grid),
            u = d + c,
            p = h ? -c : u,
            f = -qt(this.labelRotation),
            g = [];
          let m,
            b,
            x,
            y,
            v,
            _,
            w,
            M,
            k,
            S,
            P,
            A,
            D = 'middle';
          if ('top' === s) ((_ = this.bottom - p), (w = this._getXAxisLabelAlignment()));
          else if ('bottom' === s) ((_ = this.top + p), (w = this._getXAxisLabelAlignment()));
          else if ('left' === s) {
            const t = this._getYAxisLabelAlignment(d);
            ((w = t.textAlign), (v = t.x));
          } else if ('right' === s) {
            const t = this._getYAxisLabelAlignment(d);
            ((w = t.textAlign), (v = t.x));
          } else if ('x' === e) {
            if ('center' === s) _ = (t.top + t.bottom) / 2 + u;
            else if (pt(s)) {
              const t = Object.keys(s)[0],
                e = s[t];
              _ = this.chart.scales[t].getPixelForValue(e) + u;
            }
            w = this._getXAxisLabelAlignment();
          } else if ('y' === e) {
            if ('center' === s) v = (t.left + t.right) / 2 - u;
            else if (pt(s)) {
              const t = Object.keys(s)[0],
                e = s[t];
              v = this.chart.scales[t].getPixelForValue(e);
            }
            w = this._getYAxisLabelAlignment(d).textAlign;
          }
          'y' === e && ('start' === r ? (D = 'top') : 'end' === r && (D = 'bottom'));
          const C = this._getLabelSizes();
          for (m = 0, b = a.length; m < b; ++m) {
            ((x = a[m]), (y = x.label));
            const t = n.setContext(this.getContext(m));
            ((M = this.getPixelForTick(m) + n.labelOffset),
              (k = this._resolveTickFontOptions(m)),
              (S = k.lineHeight),
              (P = ut(y) ? y.length : 1));
            const e = P / 2,
              i = t.color,
              r = t.textStrokeColor,
              c = t.textStrokeWidth;
            let d,
              u = w;
            if (
              (o
                ? ((v = M),
                  'inner' === w &&
                    (u =
                      m === b - 1
                        ? this.options.reverse
                          ? 'left'
                          : 'right'
                        : 0 === m
                          ? this.options.reverse
                            ? 'right'
                            : 'left'
                          : 'center'),
                  (A =
                    'top' === s
                      ? 'near' === l || 0 !== f
                        ? -P * S + S / 2
                        : 'center' === l
                          ? -C.highest.height / 2 - e * S + S
                          : -C.highest.height + S / 2
                      : 'near' === l || 0 !== f
                        ? S / 2
                        : 'center' === l
                          ? C.highest.height / 2 - e * S
                          : C.highest.height - P * S),
                  h && (A *= -1),
                  0 === f || t.showLabelBackdrop || (v += (S / 2) * Math.sin(f)))
                : ((_ = M), (A = ((1 - P) * S) / 2)),
              t.showLabelBackdrop)
            ) {
              const e = ii(t.backdropPadding),
                i = C.heights[m],
                s = C.widths[m];
              let n = A - e.top,
                o = 0 - e.left;
              switch (D) {
                case 'middle':
                  n -= i / 2;
                  break;
                case 'bottom':
                  n -= i;
              }
              switch (w) {
                case 'center':
                  o -= s / 2;
                  break;
                case 'right':
                  o -= s;
                  break;
                case 'inner':
                  m === b - 1 ? (o -= s) : m > 0 && (o -= s / 2);
              }
              d = {
                left: o,
                top: n,
                width: s + e.width,
                height: i + e.height,
                color: t.backdropColor,
              };
            }
            g.push({
              label: y,
              font: k,
              textOffset: A,
              options: {
                rotation: f,
                color: i,
                strokeColor: r,
                strokeWidth: c,
                textAlign: u,
                textBaseline: D,
                translation: [v, _],
                backdrop: d,
              },
            });
          }
          return g;
        }
        _getXAxisLabelAlignment() {
          const { position: t, ticks: e } = this.options;
          if (-qt(this.labelRotation)) return 'top' === t ? 'left' : 'right';
          let i = 'center';
          return (
            'start' === e.align
              ? (i = 'left')
              : 'end' === e.align
                ? (i = 'right')
                : 'inner' === e.align && (i = 'inner'),
            i
          );
        }
        _getYAxisLabelAlignment(t) {
          const {
              position: e,
              ticks: { crossAlign: i, mirror: s, padding: n },
            } = this.options,
            o = t + n,
            a = this._getLabelSizes().widest.width;
          let r, l;
          return (
            'left' === e
              ? s
                ? ((l = this.right + n),
                  'near' === i
                    ? (r = 'left')
                    : 'center' === i
                      ? ((r = 'center'), (l += a / 2))
                      : ((r = 'right'), (l += a)))
                : ((l = this.right - o),
                  'near' === i
                    ? (r = 'right')
                    : 'center' === i
                      ? ((r = 'center'), (l -= a / 2))
                      : ((r = 'left'), (l = this.left)))
              : 'right' === e
                ? s
                  ? ((l = this.left + n),
                    'near' === i
                      ? (r = 'right')
                      : 'center' === i
                        ? ((r = 'center'), (l -= a / 2))
                        : ((r = 'left'), (l -= a)))
                  : ((l = this.left + o),
                    'near' === i
                      ? (r = 'left')
                      : 'center' === i
                        ? ((r = 'center'), (l += a / 2))
                        : ((r = 'right'), (l = this.right)))
                : (r = 'right'),
            { textAlign: r, x: l }
          );
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return;
          const t = this.chart,
            e = this.options.position;
          return 'left' === e || 'right' === e
            ? { top: 0, left: this.left, bottom: t.height, right: this.right }
            : 'top' === e || 'bottom' === e
              ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
              : void 0;
        }
        drawBackground() {
          const {
            ctx: t,
            options: { backgroundColor: e },
            left: i,
            top: s,
            width: n,
            height: o,
          } = this;
          e && (t.save(), (t.fillStyle = e), t.fillRect(i, s, n, o), t.restore());
        }
        getLineWidthForValue(t) {
          const e = this.options.grid;
          if (!this._isVisible() || !e.display) return 0;
          const i = this.ticks.findIndex((e) => e.value === t);
          return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
        }
        drawGrid(t) {
          const e = this.options.grid,
            i = this.ctx,
            s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
          let n, o;
          const a = (t, e, s) => {
            s.width &&
              s.color &&
              (i.save(),
              (i.lineWidth = s.width),
              (i.strokeStyle = s.color),
              i.setLineDash(s.borderDash || []),
              (i.lineDashOffset = s.borderDashOffset),
              i.beginPath(),
              i.moveTo(t.x, t.y),
              i.lineTo(e.x, e.y),
              i.stroke(),
              i.restore());
          };
          if (e.display)
            for (n = 0, o = s.length; n < o; ++n) {
              const t = s[n];
              (e.drawOnChartArea && a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                e.drawTicks &&
                  a(
                    { x: t.tx1, y: t.ty1 },
                    { x: t.tx2, y: t.ty2 },
                    {
                      color: t.tickColor,
                      width: t.tickWidth,
                      borderDash: t.tickBorderDash,
                      borderDashOffset: t.tickBorderDashOffset,
                    }
                  ));
            }
        }
        drawBorder() {
          const {
              chart: t,
              ctx: e,
              options: { border: i, grid: s },
            } = this,
            n = i.setContext(this.getContext()),
            o = i.display ? n.width : 0;
          if (!o) return;
          const a = s.setContext(this.getContext(0)).lineWidth,
            r = this._borderValue;
          let l, c, h, d;
          (this.isHorizontal()
            ? ((l = Fe(t, this.left, o) - o / 2), (c = Fe(t, this.right, a) + a / 2), (h = d = r))
            : ((h = Fe(t, this.top, o) - o / 2), (d = Fe(t, this.bottom, a) + a / 2), (l = c = r)),
            e.save(),
            (e.lineWidth = n.width),
            (e.strokeStyle = n.color),
            e.beginPath(),
            e.moveTo(l, h),
            e.lineTo(c, d),
            e.stroke(),
            e.restore());
        }
        drawLabels(t) {
          if (!this.options.ticks.display) return;
          const e = this.ctx,
            i = this._computeLabelArea();
          i && He(e, i);
          const s = this.getLabelItems(t);
          for (const n of s) {
            const t = n.options,
              i = n.font;
            qe(e, n.label, 0, n.textOffset, i, t);
          }
          i && $e(e);
        }
        drawTitle() {
          const {
            ctx: t,
            options: { position: e, title: i, reverse: s },
          } = this;
          if (!i.display) return;
          const n = si(i.font),
            o = ii(i.padding),
            a = i.align;
          let r = n.lineHeight / 2;
          'bottom' === e || 'center' === e || pt(e)
            ? ((r += o.bottom), ut(i.text) && (r += n.lineHeight * (i.text.length - 1)))
            : (r += o.top);
          const {
            titleX: l,
            titleY: c,
            maxWidth: h,
            rotation: d,
          } = (function (t, e, i, s) {
            const { top: n, left: o, bottom: a, right: r, chart: l } = t,
              { chartArea: c, scales: h } = l;
            let d,
              u,
              p,
              f = 0;
            const g = a - n,
              m = r - o;
            if (t.isHorizontal()) {
              if (((u = ue(s, o, r)), pt(i))) {
                const t = Object.keys(i)[0],
                  s = i[t];
                p = h[t].getPixelForValue(s) + g - e;
              } else p = 'center' === i ? (c.bottom + c.top) / 2 + g - e : yn(t, i, e);
              d = r - o;
            } else {
              if (pt(i)) {
                const t = Object.keys(i)[0],
                  s = i[t];
                u = h[t].getPixelForValue(s) - m + e;
              } else u = 'center' === i ? (c.left + c.right) / 2 - m + e : yn(t, i, e);
              ((p = ue(s, a, n)), (f = 'left' === i ? -Nt : Nt));
            }
            return { titleX: u, titleY: p, maxWidth: d, rotation: f };
          })(this, r, e, a);
          qe(t, i.text, 0, 0, n, {
            color: i.color,
            maxWidth: h,
            rotation: d,
            textAlign: Sn(a, e, s),
            textBaseline: 'middle',
            translation: [l, c],
          });
        }
        draw(t) {
          this._isVisible() &&
            (this.drawBackground(),
            this.drawGrid(t),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(t));
        }
        _layers() {
          const t = this.options,
            e = (t.ticks && t.ticks.z) || 0,
            i = mt(t.grid && t.grid.z, -1),
            s = mt(t.border && t.border.z, 0);
          return this._isVisible() && this.draw === Pn.prototype.draw
            ? [
                {
                  z: i,
                  draw: (t) => {
                    (this.drawBackground(), this.drawGrid(t), this.drawTitle());
                  },
                },
                {
                  z: s,
                  draw: () => {
                    this.drawBorder();
                  },
                },
                {
                  z: e,
                  draw: (t) => {
                    this.drawLabels(t);
                  },
                },
              ]
            : [
                {
                  z: e,
                  draw: (t) => {
                    this.draw(t);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(t) {
          const e = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + 'AxisID',
            s = [];
          let n, o;
          for (n = 0, o = e.length; n < o; ++n) {
            const o = e[n];
            o[i] !== this.id || (t && o.type !== t) || s.push(o);
          }
          return s;
        }
        _resolveTickFontOptions(t) {
          return si(this.options.ticks.setContext(this.getContext(t)).font);
        }
        _maxDigits() {
          const t = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / t;
        }
      }
      class An {
        constructor(t, e, i) {
          ((this.type = t),
            (this.scope = e),
            (this.override = i),
            (this.items = Object.create(null)));
        }
        isForType(t) {
          return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
        }
        register(t) {
          const e = Object.getPrototypeOf(t);
          let i;
          (function (t) {
            return 'id' in t && 'defaults' in t;
          })(e) && (i = this.register(e));
          const s = this.items,
            n = t.id,
            o = this.scope + '.' + n;
          if (!n) throw new Error('class does not have id: ' + t);
          return (
            n in s ||
              ((s[n] = t),
              (function (t, e, i) {
                const s = kt(Object.create(null), [i ? Le.get(i) : {}, Le.get(e), t.defaults]);
                (Le.set(e, s),
                  t.defaultRoutes &&
                    (function (t, e) {
                      Object.keys(e).forEach((i) => {
                        const s = i.split('.'),
                          n = s.pop(),
                          o = [t].concat(s).join('.'),
                          a = e[i].split('.'),
                          r = a.pop(),
                          l = a.join('.');
                        Le.route(o, n, l, r);
                      });
                    })(e, t.defaultRoutes),
                  t.descriptors && Le.describe(e, t.descriptors));
              })(t, o, i),
              this.override && Le.override(t.id, t.overrides)),
            o
          );
        }
        get(t) {
          return this.items[t];
        }
        unregister(t) {
          const e = this.items,
            i = t.id,
            s = this.scope;
          (i in e && delete e[i],
            s && i in Le[s] && (delete Le[s][i], this.override && delete De[i]));
        }
      }
      class Dn {
        constructor() {
          ((this.controllers = new An(bs, 'datasets', !0)),
            (this.elements = new An(mn, 'elements')),
            (this.plugins = new An(Object, 'plugins')),
            (this.scales = new An(Pn, 'scales')),
            (this._typedRegistries = [this.controllers, this.scales, this.elements]));
        }
        add(...t) {
          this._each('register', t);
        }
        remove(...t) {
          this._each('unregister', t);
        }
        addControllers(...t) {
          this._each('register', t, this.controllers);
        }
        addElements(...t) {
          this._each('register', t, this.elements);
        }
        addPlugins(...t) {
          this._each('register', t, this.plugins);
        }
        addScales(...t) {
          this._each('register', t, this.scales);
        }
        getController(t) {
          return this._get(t, this.controllers, 'controller');
        }
        getElement(t) {
          return this._get(t, this.elements, 'element');
        }
        getPlugin(t) {
          return this._get(t, this.plugins, 'plugin');
        }
        getScale(t) {
          return this._get(t, this.scales, 'scale');
        }
        removeControllers(...t) {
          this._each('unregister', t, this.controllers);
        }
        removeElements(...t) {
          this._each('unregister', t, this.elements);
        }
        removePlugins(...t) {
          this._each('unregister', t, this.plugins);
        }
        removeScales(...t) {
          this._each('unregister', t, this.scales);
        }
        _each(t, e, i) {
          [...e].forEach((e) => {
            const s = i || this._getRegistryForType(e);
            i || s.isForType(e) || (s === this.plugins && e.id)
              ? this._exec(t, s, e)
              : yt(e, (e) => {
                  const s = i || this._getRegistryForType(e);
                  this._exec(t, s, e);
                });
          });
        }
        _exec(t, e, i) {
          const s = Ct(t);
          (xt(i['before' + s], [], i), e[t](i), xt(i['after' + s], [], i));
        }
        _getRegistryForType(t) {
          for (let e = 0; e < this._typedRegistries.length; e++) {
            const i = this._typedRegistries[e];
            if (i.isForType(t)) return i;
          }
          return this.plugins;
        }
        _get(t, e, i) {
          const s = e.get(t);
          if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + '.');
          return s;
        }
      }
      var Cn = new Dn();
      class En {
        constructor() {
          this._init = [];
        }
        notify(t, e, i, s) {
          'beforeInit' === e &&
            ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'));
          const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
            o = this._notify(n, t, e, i);
          return (
            'afterDestroy' === e &&
              (this._notify(n, t, 'stop'), this._notify(this._init, t, 'uninstall')),
            o
          );
        }
        _notify(t, e, i, s) {
          s = s || {};
          for (const n of t) {
            const t = n.plugin;
            if (!1 === xt(t[i], [e, s, n.options], t) && s.cancelable) return !1;
          }
          return !0;
        }
        invalidate() {
          dt(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(t) {
          if (this._cache) return this._cache;
          const e = (this._cache = this._createDescriptors(t));
          return (this._notifyStateChanges(t), e);
        }
        _createDescriptors(t, e) {
          const i = t && t.config,
            s = mt(i.options && i.options.plugins, {}),
            n = (function (t) {
              const e = {},
                i = [],
                s = Object.keys(Cn.plugins.items);
              for (let o = 0; o < s.length; o++) i.push(Cn.getPlugin(s[o]));
              const n = t.plugins || [];
              for (let o = 0; o < n.length; o++) {
                const t = n[o];
                -1 === i.indexOf(t) && (i.push(t), (e[t.id] = !0));
              }
              return { plugins: i, localIds: e };
            })(i);
          return !1 !== s || e
            ? (function (t, { plugins: e, localIds: i }, s, n) {
                const o = [],
                  a = t.getContext();
                for (const r of e) {
                  const e = r.id,
                    l = Tn(s[e], n);
                  null !== l &&
                    o.push({ plugin: r, options: In(t.config, { plugin: r, local: i[e] }, l, a) });
                }
                return o;
              })(t, n, s, e)
            : [];
        }
        _notifyStateChanges(t) {
          const e = this._oldCache || [],
            i = this._cache,
            s = (t, e) => t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
          (this._notify(s(e, i), t, 'stop'), this._notify(s(i, e), t, 'start'));
        }
      }
      function Tn(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null;
      }
      function In(t, { plugin: e, local: i }, s, n) {
        const o = t.pluginScopeKeys(e),
          a = t.getOptionScopes(s, o);
        return (
          i && e.defaults && a.push(e.defaults),
          t.createResolver(a, n, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
        );
      }
      function Ln(t, e) {
        const i = Le.datasets[t] || {};
        return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || 'x';
      }
      function On(t) {
        if ('x' === t || 'y' === t || 'r' === t) return t;
      }
      function Rn(t) {
        return 'top' === t || 'bottom' === t ? 'x' : 'left' === t || 'right' === t ? 'y' : void 0;
      }
      function Fn(t, ...e) {
        if (On(t)) return t;
        for (const i of e) {
          const e = i.axis || Rn(i.position) || (t.length > 1 && On(t[0].toLowerCase()));
          if (e) return e;
        }
        throw new Error(
          `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
        );
      }
      function zn(t, e, i) {
        if (i[e + 'AxisID'] === t) return { axis: e };
      }
      function Nn(t, e) {
        const i = De[t.type] || { scales: {} },
          s = e.scales || {},
          n = Ln(t.type, e),
          o = Object.create(null);
        return (
          Object.keys(s).forEach((e) => {
            const a = s[e];
            if (!pt(a)) return console.error(`Invalid scale configuration for scale: ${e}`);
            if (a._proxy)
              return console.warn(`Ignoring resolver passed as options for scale: ${e}`);
            const r = Fn(
                e,
                a,
                (function (t, e) {
                  if (e.data && e.data.datasets) {
                    const i = e.data.datasets.filter((e) => e.xAxisID === t || e.yAxisID === t);
                    if (i.length) return zn(t, 'x', i[0]) || zn(t, 'y', i[0]);
                  }
                  return {};
                })(e, t),
                Le.scales[a.type]
              ),
              l = (function (t, e) {
                return t === e ? '_index_' : '_value_';
              })(r, n),
              c = i.scales || {};
            o[e] = St(Object.create(null), [{ axis: r }, a, c[r], c[l]]);
          }),
          t.data.datasets.forEach((i) => {
            const n = i.type || t.type,
              a = i.indexAxis || Ln(n, e),
              r = (De[n] || {}).scales || {};
            Object.keys(r).forEach((t) => {
              const e = (function (t, e) {
                  let i = t;
                  return (
                    '_index_' === t ? (i = e) : '_value_' === t && (i = 'x' === e ? 'y' : 'x'),
                    i
                  );
                })(t, a),
                n = i[e + 'AxisID'] || e;
              ((o[n] = o[n] || Object.create(null)), St(o[n], [{ axis: e }, s[n], r[t]]));
            });
          }),
          Object.keys(o).forEach((t) => {
            const e = o[t];
            St(e, [Le.scales[e.type], Le.scale]);
          }),
          o
        );
      }
      function Bn(t) {
        const e = t.options || (t.options = {});
        ((e.plugins = mt(e.plugins, {})), (e.scales = Nn(t, e)));
      }
      function Vn(t) {
        return (((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t);
      }
      const Hn = new Map(),
        $n = new Set();
      function Wn(t, e) {
        let i = Hn.get(t);
        return (i || ((i = e()), Hn.set(t, i), $n.add(i)), i);
      }
      const jn = (t, e, i) => {
        const s = Dt(e, i);
        void 0 !== s && t.add(s);
      };
      class Yn {
        constructor(t) {
          ((this._config = (function (t) {
            return (((t = t || {}).data = Vn(t.data)), Bn(t), t);
          })(t)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map()));
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(t) {
          this._config.type = t;
        }
        get data() {
          return this._config.data;
        }
        set data(t) {
          this._config.data = Vn(t);
        }
        get options() {
          return this._config.options;
        }
        set options(t) {
          this._config.options = t;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const t = this._config;
          (this.clearCache(), Bn(t));
        }
        clearCache() {
          (this._scopeCache.clear(), this._resolverCache.clear());
        }
        datasetScopeKeys(t) {
          return Wn(t, () => [[`datasets.${t}`, '']]);
        }
        datasetAnimationScopeKeys(t, e) {
          return Wn(`${t}.transition.${e}`, () => [
            [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
            [`datasets.${t}`, ''],
          ]);
        }
        datasetElementScopeKeys(t, e) {
          return Wn(`${t}-${e}`, () => [
            [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
          ]);
        }
        pluginScopeKeys(t) {
          const e = t.id;
          return Wn(`${this.type}-plugin-${e}`, () => [
            [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(t, e) {
          const i = this._scopeCache;
          let s = i.get(t);
          return ((s && !e) || ((s = new Map()), i.set(t, s)), s);
        }
        getOptionScopes(t, e, i) {
          const { options: s, type: n } = this,
            o = this._cachedScopes(t, i),
            a = o.get(e);
          if (a) return a;
          const r = new Set();
          e.forEach((e) => {
            (t && (r.add(t), e.forEach((e) => jn(r, t, e))),
              e.forEach((t) => jn(r, s, t)),
              e.forEach((t) => jn(r, De[n] || {}, t)),
              e.forEach((t) => jn(r, Le, t)),
              e.forEach((t) => jn(r, Ce, t)));
          });
          const l = Array.from(r);
          return (0 === l.length && l.push(Object.create(null)), $n.has(e) && o.set(e, l), l);
        }
        chartOptionScopes() {
          const { options: t, type: e } = this;
          return [t, De[e] || {}, Le.datasets[e] || {}, { type: e }, Le, Ce];
        }
        resolveNamedOptions(t, e, i, s = ['']) {
          const n = { $shared: !0 },
            { resolver: o, subPrefixes: a } = Un(this._resolverCache, t, s);
          let r = o;
          (function (t, e) {
            const { isScriptable: i, isIndexable: s } = li(t);
            for (const n of e) {
              const e = i(n),
                o = s(n),
                a = (o || e) && t[n];
              if ((e && (Tt(a) || qn(a))) || (o && ut(a))) return !0;
            }
            return !1;
          })(o, e) &&
            ((n.$shared = !1), (r = ri(o, (i = Tt(i) ? i() : i), this.createResolver(t, i, a))));
          for (const l of e) n[l] = r[l];
          return n;
        }
        createResolver(t, e, i = [''], s) {
          const { resolver: n } = Un(this._resolverCache, t, i);
          return pt(e) ? ri(n, e, void 0, s) : n;
        }
      }
      function Un(t, e, i) {
        let s = t.get(e);
        s || ((s = new Map()), t.set(e, s));
        const n = i.join();
        let o = s.get(n);
        return (
          o ||
            ((o = {
              resolver: ai(e, i),
              subPrefixes: i.filter((t) => !t.toLowerCase().includes('hover')),
            }),
            s.set(n, o)),
          o
        );
      }
      const qn = (t) => pt(t) && Object.getOwnPropertyNames(t).some((e) => Tt(t[e])),
        Xn = ['top', 'bottom', 'left', 'right', 'chartArea'];
      function Kn(t, e) {
        return 'top' === t || 'bottom' === t || (-1 === Xn.indexOf(t) && 'x' === e);
      }
      function Zn(t, e) {
        return function (i, s) {
          return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
        };
      }
      function Jn(t) {
        const e = t.chart,
          i = e.options.animation;
        (e.notifyPlugins('afterRender'), xt(i && i.onComplete, [t], e));
      }
      function Gn(t) {
        const e = t.chart,
          i = e.options.animation;
        xt(i && i.onProgress, [t], e);
      }
      function Qn(t) {
        return (
          Ai() && 'string' == typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        );
      }
      const to = {},
        eo = (t) => {
          const e = Qn(t);
          return Object.values(to)
            .filter((t) => t.canvas === e)
            .pop();
        };
      function io(t, e, i) {
        const s = Object.keys(t);
        for (const n of s) {
          const s = +n;
          if (s >= e) {
            const o = t[n];
            (delete t[n], (i > 0 || s > e) && (t[s + i] = o));
          }
        }
      }
      let so = class {
        static defaults = Le;
        static instances = to;
        static overrides = De;
        static registry = Cn;
        static version = '4.5.0';
        static getChart = eo;
        static register(...t) {
          (Cn.add(...t), no());
        }
        static unregister(...t) {
          (Cn.remove(...t), no());
        }
        constructor(t, e) {
          const i = (this.config = new Yn(e)),
            s = Qn(t),
            n = eo(s);
          if (n)
            throw new Error(
              "Canvas is already in use. Chart with ID '" +
                n.id +
                "' must be destroyed before the canvas with ID '" +
                n.canvas.id +
                "' can be reused."
            );
          const o = i.createResolver(i.chartOptionScopes(), this.getContext());
          ((this.platform = new (i.platform ||
            (function (t) {
              return !Ai() ||
                ('undefined' != typeof OffscreenCanvas && t instanceof OffscreenCanvas)
                ? Qs
                : gn;
            })(s))()),
            this.platform.updateConfig(i));
          const a = this.platform.acquireContext(s, o.aspectRatio),
            r = a && a.canvas,
            l = r && r.height,
            c = r && r.width;
          ((this.id = ht()),
            (this.ctx = a),
            (this.canvas = r),
            (this.width = c),
            (this.height = l),
            (this._options = o),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new En()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = (function (t, e) {
              let i;
              return function (...s) {
                return (e ? (clearTimeout(i), (i = setTimeout(t, e, s))) : t.apply(this, s), e);
              };
            })((t) => this.update(t), o.resizeDelay || 0)),
            (this._dataChanges = []),
            (to[this.id] = this),
            a && r
              ? (es.listen(this, 'complete', Jn),
                es.listen(this, 'progress', Gn),
                this._initialize(),
                this.attached && this.update())
              : console.error("Failed to create chart: can't acquire context from the given item"));
        }
        get aspectRatio() {
          const {
            options: { aspectRatio: t, maintainAspectRatio: e },
            width: i,
            height: s,
            _aspectRatio: n,
          } = this;
          return dt(t) ? (e && n ? n : s ? i / s : null) : t;
        }
        get data() {
          return this.config.data;
        }
        set data(t) {
          this.config.data = t;
        }
        get options() {
          return this._options;
        }
        set options(t) {
          this.config.options = t;
        }
        get registry() {
          return Cn;
        }
        _initialize() {
          return (
            this.notifyPlugins('beforeInit'),
            this.options.responsive ? this.resize() : Fi(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins('afterInit'),
            this
          );
        }
        clear() {
          return (ze(this.canvas, this.ctx), this);
        }
        stop() {
          return (es.stop(this), this);
        }
        resize(t, e) {
          es.running(this)
            ? (this._resizeBeforeDraw = { width: t, height: e })
            : this._resize(t, e);
        }
        _resize(t, e) {
          const i = this.options,
            s = this.canvas,
            n = i.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(s, t, e, n),
            a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            r = this.width ? 'resize' : 'attach';
          ((this.width = o.width),
            (this.height = o.height),
            (this._aspectRatio = this.aspectRatio),
            Fi(this, a, !0) &&
              (this.notifyPlugins('resize', { size: o }),
              xt(i.onResize, [this, o], this),
              this.attached && this._doResize(r) && this.render()));
        }
        ensureScalesHaveIDs() {
          yt(this.options.scales || {}, (t, e) => {
            t.id = e;
          });
        }
        buildOrUpdateScales() {
          const t = this.options,
            e = t.scales,
            i = this.scales,
            s = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
          let n = [];
          (e &&
            (n = n.concat(
              Object.keys(e).map((t) => {
                const i = e[t],
                  s = Fn(t, i),
                  n = 'r' === s,
                  o = 'x' === s;
                return {
                  options: i,
                  dposition: n ? 'chartArea' : o ? 'bottom' : 'left',
                  dtype: n ? 'radialLinear' : o ? 'category' : 'linear',
                };
              })
            )),
            yt(n, (e) => {
              const n = e.options,
                o = n.id,
                a = Fn(o, n),
                r = mt(n.type, e.dtype);
              ((void 0 !== n.position && Kn(n.position, a) === Kn(e.dposition)) ||
                (n.position = e.dposition),
                (s[o] = !0));
              let l = null;
              (o in i && i[o].type === r
                ? (l = i[o])
                : ((l = new (Cn.getScale(r))({ id: o, type: r, ctx: this.ctx, chart: this })),
                  (i[l.id] = l)),
                l.init(n, t));
            }),
            yt(s, (t, e) => {
              t || delete i[e];
            }),
            yt(i, (t) => {
              (Js.configure(this, t, t.options), Js.addBox(this, t));
            }));
        }
        _updateMetasets() {
          const t = this._metasets,
            e = this.data.datasets.length,
            i = t.length;
          if ((t.sort((t, e) => t.index - e.index), i > e)) {
            for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
            t.splice(e, i - e);
          }
          this._sortedMetasets = t.slice(0).sort(Zn('order', 'index'));
        }
        _removeUnreferencedMetasets() {
          const {
            _metasets: t,
            data: { datasets: e },
          } = this;
          (t.length > e.length && delete this._stacks,
            t.forEach((t, i) => {
              0 === e.filter((e) => e === t._dataset).length && this._destroyDatasetMeta(i);
            }));
        }
        buildOrUpdateControllers() {
          const t = [],
            e = this.data.datasets;
          let i, s;
          for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
            const s = e[i];
            let n = this.getDatasetMeta(i);
            const o = s.type || this.config.type;
            if (
              (n.type &&
                n.type !== o &&
                (this._destroyDatasetMeta(i), (n = this.getDatasetMeta(i))),
              (n.type = o),
              (n.indexAxis = s.indexAxis || Ln(o, this.options)),
              (n.order = s.order || 0),
              (n.index = i),
              (n.label = '' + s.label),
              (n.visible = this.isDatasetVisible(i)),
              n.controller)
            )
              (n.controller.updateIndex(i), n.controller.linkScales());
            else {
              const e = Cn.getController(o),
                { datasetElementType: s, dataElementType: a } = Le.datasets[o];
              (Object.assign(e, {
                dataElementType: Cn.getElement(a),
                datasetElementType: s && Cn.getElement(s),
              }),
                (n.controller = new e(this, i)),
                t.push(n.controller));
            }
          }
          return (this._updateMetasets(), t);
        }
        _resetElements() {
          yt(
            this.data.datasets,
            (t, e) => {
              this.getDatasetMeta(e).controller.reset();
            },
            this
          );
        }
        reset() {
          (this._resetElements(), this.notifyPlugins('reset'));
        }
        update(t) {
          const e = this.config;
          e.update();
          const i = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
            s = (this._animationsDisabled = !i.animation);
          if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            !1 === this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
          )
            return;
          const n = this.buildOrUpdateControllers();
          this.notifyPlugins('beforeElementsUpdate');
          let o = 0;
          for (let l = 0, c = this.data.datasets.length; l < c; l++) {
            const { controller: t } = this.getDatasetMeta(l),
              e = !s && -1 === n.indexOf(t);
            (t.buildOrUpdateElements(e), (o = Math.max(+t.getMaxOverflow(), o)));
          }
          ((o = this._minPadding = i.layout.autoPadding ? o : 0),
            this._updateLayout(o),
            s ||
              yt(n, (t) => {
                t.reset();
              }),
            this._updateDatasets(t),
            this.notifyPlugins('afterUpdate', { mode: t }),
            this._layers.sort(Zn('z', '_idx')));
          const { _active: a, _lastEvent: r } = this;
          (r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0),
            this.render());
        }
        _updateScales() {
          (yt(this.scales, (t) => {
            Js.removeBox(this, t);
          }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales());
        }
        _checkEventBindings() {
          const t = this.options,
            e = new Set(Object.keys(this._listeners)),
            i = new Set(t.events);
          (It(e, i) && !!this._responsiveListeners === t.responsive) ||
            (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
          const { _hiddenIndices: t } = this,
            e = this._getUniformDataChanges() || [];
          for (const { method: i, start: s, count: n } of e)
            io(t, s, '_removeElements' === i ? -n : n);
        }
        _getUniformDataChanges() {
          const t = this._dataChanges;
          if (!t || !t.length) return;
          this._dataChanges = [];
          const e = this.data.datasets.length,
            i = (e) =>
              new Set(t.filter((t) => t[0] === e).map((t, e) => e + ',' + t.splice(1).join(','))),
            s = i(0);
          for (let n = 1; n < e; n++) if (!It(s, i(n))) return;
          return Array.from(s)
            .map((t) => t.split(','))
            .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
        }
        _updateLayout(t) {
          if (!1 === this.notifyPlugins('beforeLayout', { cancelable: !0 })) return;
          Js.update(this, this.width, this.height, t);
          const e = this.chartArea,
            i = e.width <= 0 || e.height <= 0;
          ((this._layers = []),
            yt(
              this.boxes,
              (t) => {
                (i && 'chartArea' === t.position) ||
                  (t.configure && t.configure(), this._layers.push(...t._layers()));
              },
              this
            ),
            this._layers.forEach((t, e) => {
              t._idx = e;
            }),
            this.notifyPlugins('afterLayout'));
        }
        _updateDatasets(t) {
          if (!1 !== this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 })) {
            for (let t = 0, e = this.data.datasets.length; t < e; ++t)
              this.getDatasetMeta(t).controller.configure();
            for (let e = 0, i = this.data.datasets.length; e < i; ++e)
              this._updateDataset(e, Tt(t) ? t({ datasetIndex: e }) : t);
            this.notifyPlugins('afterDatasetsUpdate', { mode: t });
          }
        }
        _updateDataset(t, e) {
          const i = this.getDatasetMeta(t),
            s = { meta: i, index: t, mode: e, cancelable: !0 };
          !1 !== this.notifyPlugins('beforeDatasetUpdate', s) &&
            (i.controller._update(e),
            (s.cancelable = !1),
            this.notifyPlugins('afterDatasetUpdate', s));
        }
        render() {
          !1 !== this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
            (es.has(this)
              ? this.attached && !es.running(this) && es.start(this)
              : (this.draw(), Jn({ chart: this })));
        }
        draw() {
          let t;
          if (this._resizeBeforeDraw) {
            const { width: t, height: e } = this._resizeBeforeDraw;
            ((this._resizeBeforeDraw = null), this._resize(t, e));
          }
          if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
          if (!1 === this.notifyPlugins('beforeDraw', { cancelable: !0 })) return;
          const e = this._layers;
          for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
          for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
          this.notifyPlugins('afterDraw');
        }
        _getSortedDatasetMetas(t) {
          const e = this._sortedMetasets,
            i = [];
          let s, n;
          for (s = 0, n = e.length; s < n; ++s) {
            const n = e[s];
            (t && !n.visible) || i.push(n);
          }
          return i;
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
          if (!1 === this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 })) return;
          const t = this.getSortedVisibleDatasetMetas();
          for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
          this.notifyPlugins('afterDatasetsDraw');
        }
        _drawDataset(t) {
          const e = this.ctx,
            i = { meta: t, index: t.index, cancelable: !0 },
            s = Qi(this, t);
          !1 !== this.notifyPlugins('beforeDatasetDraw', i) &&
            (s && He(e, s),
            t.controller.draw(),
            s && $e(e),
            (i.cancelable = !1),
            this.notifyPlugins('afterDatasetDraw', i));
        }
        isPointInArea(t) {
          return Ve(t, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(t, e, i, s) {
          const n = Ns.modes[e];
          return 'function' == typeof n ? n(this, t, i, s) : [];
        }
        getDatasetMeta(t) {
          const e = this.data.datasets[t],
            i = this._metasets;
          let s = i.filter((t) => t && t._dataset === e).pop();
          return (
            s ||
              ((s = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: (e && e.order) || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1,
              }),
              i.push(s)),
            s
          );
        }
        getContext() {
          return this.$context || (this.$context = oi(null, { chart: this, type: 'chart' }));
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
          const e = this.data.datasets[t];
          if (!e) return !1;
          const i = this.getDatasetMeta(t);
          return 'boolean' == typeof i.hidden ? !i.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
          this.getDatasetMeta(t).hidden = !e;
        }
        toggleDataVisibility(t) {
          this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
          return !this._hiddenIndices[t];
        }
        _updateVisibility(t, e, i) {
          const s = i ? 'show' : 'hide',
            n = this.getDatasetMeta(t),
            o = n.controller._resolveAnimations(void 0, s);
          Et(e)
            ? ((n.data[e].hidden = !i), this.update())
            : (this.setDatasetVisibility(t, i),
              o.update(n, { visible: i }),
              this.update((e) => (e.datasetIndex === t ? s : void 0)));
        }
        hide(t, e) {
          this._updateVisibility(t, e, !1);
        }
        show(t, e) {
          this._updateVisibility(t, e, !0);
        }
        _destroyDatasetMeta(t) {
          const e = this._metasets[t];
          (e && e.controller && e.controller._destroy(), delete this._metasets[t]);
        }
        _stop() {
          let t, e;
          for (this.stop(), es.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
            this._destroyDatasetMeta(t);
        }
        destroy() {
          this.notifyPlugins('beforeDestroy');
          const { canvas: t, ctx: e } = this;
          (this._stop(),
            this.config.clearCache(),
            t &&
              (this.unbindEvents(),
              ze(t, e),
              this.platform.releaseContext(e),
              (this.canvas = null),
              (this.ctx = null)),
            delete to[this.id],
            this.notifyPlugins('afterDestroy'));
        }
        toBase64Image(...t) {
          return this.canvas.toDataURL(...t);
        }
        bindEvents() {
          (this.bindUserEvents(),
            this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0));
        }
        bindUserEvents() {
          const t = this._listeners,
            e = this.platform,
            i = (i, s) => {
              (e.addEventListener(this, i, s), (t[i] = s));
            },
            s = (t, e, i) => {
              ((t.offsetX = e), (t.offsetY = i), this._eventHandler(t));
            };
          yt(this.options.events, (t) => i(t, s));
        }
        bindResponsiveEvents() {
          this._responsiveListeners || (this._responsiveListeners = {});
          const t = this._responsiveListeners,
            e = this.platform,
            i = (i, s) => {
              (e.addEventListener(this, i, s), (t[i] = s));
            },
            s = (i, s) => {
              t[i] && (e.removeEventListener(this, i, s), delete t[i]);
            },
            n = (t, e) => {
              this.canvas && this.resize(t, e);
            };
          let o;
          const a = () => {
            (s('attach', a), (this.attached = !0), this.resize(), i('resize', n), i('detach', o));
          };
          ((o = () => {
            ((this.attached = !1),
              s('resize', n),
              this._stop(),
              this._resize(0, 0),
              i('attach', a));
          }),
            e.isAttached(this.canvas) ? a() : o());
        }
        unbindEvents() {
          (yt(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
            (this._listeners = {}),
            yt(this._responsiveListeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
            (this._responsiveListeners = void 0));
        }
        updateHoverStyle(t, e, i) {
          const s = i ? 'set' : 'remove';
          let n, o, a, r;
          for (
            'dataset' === e &&
              ((n = this.getDatasetMeta(t[0].datasetIndex)),
              n.controller['_' + s + 'DatasetHoverStyle']()),
              a = 0,
              r = t.length;
            a < r;
            ++a
          ) {
            o = t[a];
            const e = o && this.getDatasetMeta(o.datasetIndex).controller;
            e && e[s + 'HoverStyle'](o.element, o.datasetIndex, o.index);
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t) {
          const e = this._active || [],
            i = t.map(({ datasetIndex: t, index: e }) => {
              const i = this.getDatasetMeta(t);
              if (!i) throw new Error('No dataset found at index ' + t);
              return { datasetIndex: t, element: i.data[e], index: e };
            });
          !vt(i, e) &&
            ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, e));
        }
        notifyPlugins(t, e, i) {
          return this._plugins.notify(this, t, e, i);
        }
        isPluginEnabled(t) {
          return 1 === this._plugins._cache.filter((e) => e.plugin.id === t).length;
        }
        _updateHoverStyles(t, e, i) {
          const s = this.options.hover,
            n = (t, e) =>
              t.filter(
                (t) => !e.some((e) => t.datasetIndex === e.datasetIndex && t.index === e.index)
              ),
            o = n(e, t),
            a = i ? t : n(t, e);
          (o.length && this.updateHoverStyle(o, s.mode, !1),
            a.length && s.mode && this.updateHoverStyle(a, s.mode, !0));
        }
        _eventHandler(t, e) {
          const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
            s = (e) => (e.options.events || this.options.events).includes(t.native.type);
          if (!1 === this.notifyPlugins('beforeEvent', i, s)) return;
          const n = this._handleEvent(t, e, i.inChartArea);
          return (
            (i.cancelable = !1),
            this.notifyPlugins('afterEvent', i, s),
            (n || i.changed) && this.render(),
            this
          );
        }
        _handleEvent(t, e, i) {
          const { _active: s = [], options: n } = this,
            o = e,
            a = this._getActiveElements(t, s, i, o),
            r = (function (t) {
              return 'mouseup' === t.type || 'click' === t.type || 'contextmenu' === t.type;
            })(t),
            l = (function (t, e, i, s) {
              return i && 'mouseout' !== t.type ? (s ? e : t) : null;
            })(t, this._lastEvent, i, r);
          i &&
            ((this._lastEvent = null),
            xt(n.onHover, [t, a, this], this),
            r && xt(n.onClick, [t, a, this], this));
          const c = !vt(a, s);
          return (
            (c || e) && ((this._active = a), this._updateHoverStyles(a, s, e)),
            (this._lastEvent = l),
            c
          );
        }
        _getActiveElements(t, e, i, s) {
          if ('mouseout' === t.type) return [];
          if (!i) return e;
          const n = this.options.hover;
          return this.getElementsAtEventForMode(t, n.mode, n, s);
        }
      };
      function no() {
        return yt(so.instances, (t) => t._plugins.invalidate());
      }
      function oo(t, e, i, s) {
        const n = Qe(t.options.borderRadius, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']),
          o = (i - e) / 2,
          a = Math.min(o, (s * e) / 2),
          r = (t) => {
            const e = ((i - Math.min(o, t)) * s) / 2;
            return ee(t, 0, Math.min(o, e));
          };
        return {
          outerStart: r(n.outerStart),
          outerEnd: r(n.outerEnd),
          innerStart: ee(n.innerStart, 0, a),
          innerEnd: ee(n.innerEnd, 0, a),
        };
      }
      function ao(t, e, i, s) {
        return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) };
      }
      function ro(t, e, i, s, n, o) {
        const { x: a, y: r, startAngle: l, pixelMargin: c, innerRadius: h } = e,
          d = Math.max(e.outerRadius + s + i - c, 0),
          u = h > 0 ? h + s + i + c : 0;
        let p = 0;
        const f = n - l;
        if (s) {
          const t = ((h > 0 ? h - s : 0) + (d > 0 ? d - s : 0)) / 2;
          p = (f - (0 !== t ? (f * t) / (t + s) : f)) / 2;
        }
        const g = (f - Math.max(0.001, f * d - i / Lt) / d) / 2,
          m = l + g + p,
          b = n - g - p,
          { outerStart: x, outerEnd: y, innerStart: v, innerEnd: _ } = oo(e, u, d, b - m),
          w = d - x,
          M = d - y,
          k = m + x / w,
          S = b - y / M,
          P = u + v,
          A = u + _,
          D = m + v / P,
          C = b - _ / A;
        if ((t.beginPath(), o)) {
          const e = (k + S) / 2;
          if ((t.arc(a, r, d, k, e), t.arc(a, r, d, e, S), y > 0)) {
            const e = ao(M, S, a, r);
            t.arc(e.x, e.y, y, S, b + Nt);
          }
          const i = ao(A, b, a, r);
          if ((t.lineTo(i.x, i.y), _ > 0)) {
            const e = ao(A, C, a, r);
            t.arc(e.x, e.y, _, b + Nt, C + Math.PI);
          }
          const s = (b - _ / u + (m + v / u)) / 2;
          if ((t.arc(a, r, u, b - _ / u, s, !0), t.arc(a, r, u, s, m + v / u, !0), v > 0)) {
            const e = ao(P, D, a, r);
            t.arc(e.x, e.y, v, D + Math.PI, m - Nt);
          }
          const n = ao(w, m, a, r);
          if ((t.lineTo(n.x, n.y), x > 0)) {
            const e = ao(w, k, a, r);
            t.arc(e.x, e.y, x, m - Nt, k);
          }
        } else {
          t.moveTo(a, r);
          const e = Math.cos(k) * d + a,
            i = Math.sin(k) * d + r;
          t.lineTo(e, i);
          const s = Math.cos(S) * d + a,
            n = Math.sin(S) * d + r;
          t.lineTo(s, n);
        }
        t.closePath();
      }
      function lo(t, e, i, s, n) {
        const { fullCircles: o, startAngle: a, circumference: r, options: l } = e,
          {
            borderWidth: c,
            borderJoinStyle: h,
            borderDash: d,
            borderDashOffset: u,
            borderRadius: p,
          } = l,
          f = 'inner' === l.borderAlign;
        if (!c) return;
        (t.setLineDash(d || []),
          (t.lineDashOffset = u),
          f
            ? ((t.lineWidth = 2 * c), (t.lineJoin = h || 'round'))
            : ((t.lineWidth = c), (t.lineJoin = h || 'bevel')));
        let g = e.endAngle;
        if (o) {
          ro(t, e, i, s, g, n);
          for (let e = 0; e < o; ++e) t.stroke();
          isNaN(r) || (g = a + (r % Ot || Ot));
        }
        (f &&
          (function (t, e, i) {
            const { startAngle: s, pixelMargin: n, x: o, y: a, outerRadius: r, innerRadius: l } = e;
            let c = n / r;
            (t.beginPath(),
              t.arc(o, a, r, s - c, i + c),
              l > n
                ? ((c = n / l), t.arc(o, a, l, i + c, s - c, !0))
                : t.arc(o, a, n, i + Nt, s - Nt),
              t.closePath(),
              t.clip());
          })(t, e, g),
          l.selfJoin &&
            g - a >= Lt &&
            0 === p &&
            'miter' !== h &&
            (function (t, e, i) {
              const { startAngle: s, x: n, y: o, outerRadius: a, innerRadius: r, options: l } = e,
                { borderWidth: c, borderJoinStyle: h } = l,
                d = Math.min(c / a, Qt(s - i));
              if ((t.beginPath(), t.arc(n, o, a - c / 2, s + d / 2, i - d / 2), r > 0)) {
                const e = Math.min(c / r, Qt(s - i));
                t.arc(n, o, r + c / 2, i - e / 2, s + e / 2, !0);
              } else {
                const e = Math.min(c / 2, a * Qt(s - i));
                if ('round' === h) t.arc(n, o, e, i - Lt / 2, s + Lt / 2, !0);
                else if ('bevel' === h) {
                  const a = 2 * e * e,
                    r = -a * Math.cos(i + Lt / 2) + n,
                    l = -a * Math.sin(i + Lt / 2) + o,
                    c = a * Math.cos(s + Lt / 2) + n,
                    h = a * Math.sin(s + Lt / 2) + o;
                  (t.lineTo(r, l), t.lineTo(c, h));
                }
              }
              (t.closePath(),
                t.moveTo(0, 0),
                t.rect(0, 0, t.canvas.width, t.canvas.height),
                t.clip('evenodd'));
            })(t, e, g),
          o || (ro(t, e, i, s, g, n), t.stroke()));
      }
      function co(t, e, i = e) {
        ((t.lineCap = mt(i.borderCapStyle, e.borderCapStyle)),
          t.setLineDash(mt(i.borderDash, e.borderDash)),
          (t.lineDashOffset = mt(i.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = mt(i.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = mt(i.borderWidth, e.borderWidth)),
          (t.strokeStyle = mt(i.borderColor, e.borderColor)));
      }
      function ho(t, e, i) {
        t.lineTo(i.x, i.y);
      }
      function uo(t, e, i = {}) {
        const s = t.length,
          { start: n = 0, end: o = s - 1 } = i,
          { start: a, end: r } = e,
          l = Math.max(n, a),
          c = Math.min(o, r),
          h = (n < a && o < a) || (n > r && o > r);
        return { count: s, start: l, loop: e.loop, ilen: c < l && !h ? s + c - l : c - l };
      }
      function po(t, e, i, s) {
        const { points: n, options: o } = e,
          { count: a, start: r, loop: l, ilen: c } = uo(n, i, s),
          h = (function (t) {
            return t.stepped ? We : t.tension || 'monotone' === t.cubicInterpolationMode ? je : ho;
          })(o);
        let d,
          u,
          p,
          { move: f = !0, reverse: g } = s || {};
        for (d = 0; d <= c; ++d)
          ((u = n[(r + (g ? c - d : d)) % a]),
            u.skip || (f ? (t.moveTo(u.x, u.y), (f = !1)) : h(t, p, u, g, o.stepped), (p = u)));
        return (l && ((u = n[(r + (g ? c : 0)) % a]), h(t, p, u, g, o.stepped)), !!l);
      }
      function fo(t, e, i, s) {
        const n = e.points,
          { count: o, start: a, ilen: r } = uo(n, i, s),
          { move: l = !0, reverse: c } = s || {};
        let h,
          d,
          u,
          p,
          f,
          g,
          m = 0,
          b = 0;
        const x = (t) => (a + (c ? r - t : t)) % o,
          y = () => {
            p !== f && (t.lineTo(m, f), t.lineTo(m, p), t.lineTo(m, g));
          };
        for (l && ((d = n[x(0)]), t.moveTo(d.x, d.y)), h = 0; h <= r; ++h) {
          if (((d = n[x(h)]), d.skip)) continue;
          const e = d.x,
            i = d.y,
            s = 0 | e;
          (s === u
            ? (i < p ? (p = i) : i > f && (f = i), (m = (b * m + e) / ++b))
            : (y(), t.lineTo(e, i), (u = s), (b = 0), (p = f = i)),
            (g = i));
        }
        y();
      }
      function go(t) {
        const e = t.options,
          i = e.borderDash && e.borderDash.length;
        return t._decimated ||
          t._loop ||
          e.tension ||
          'monotone' === e.cubicInterpolationMode ||
          e.stepped ||
          i
          ? po
          : fo;
      }
      const mo = 'function' == typeof Path2D;
      function bo(t, e, i, s) {
        mo && !e.options.segment
          ? (function (t, e, i, s) {
              let n = e._path;
              (n || ((n = e._path = new Path2D()), e.path(n, i, s) && n.closePath()),
                co(t, e.options),
                t.stroke(n));
            })(t, e, i, s)
          : (function (t, e, i, s) {
              const { segments: n, options: o } = e,
                a = go(e);
              for (const r of n)
                (co(t, o, r.style),
                  t.beginPath(),
                  a(t, e, r, { start: i, end: i + s - 1 }) && t.closePath(),
                  t.stroke());
            })(t, e, i, s);
      }
      class xo extends mn {
        static id = 'line';
        static defaults = {
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: 'miter',
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: 'default',
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        };
        static defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' };
        static descriptors = {
          _scriptable: !0,
          _indexable: (t) => 'borderDash' !== t && 'fill' !== t,
        };
        constructor(t) {
          (super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t));
        }
        updateControlPoints(t, e) {
          const i = this.options;
          if (
            (i.tension || 'monotone' === i.cubicInterpolationMode) &&
            !i.stepped &&
            !this._pointsUpdated
          ) {
            const s = i.spanGaps ? this._loop : this._fullLoop;
            (Pi(this._points, i, t, s, e), (this._pointsUpdated = !0));
          }
        }
        set points(t) {
          ((this._points = t),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1));
        }
        get points() {
          return this._points;
        }
        get segments() {
          return (
            this._segments ||
            (this._segments = (function (t, e) {
              const i = t.points,
                s = t.options.spanGaps,
                n = i.length;
              if (!n) return [];
              const o = !!t._loop,
                { start: a, end: r } = (function (t, e, i, s) {
                  let n = 0,
                    o = e - 1;
                  if (i && !s) for (; n < e && !t[n].skip; ) n++;
                  for (; n < e && t[n].skip; ) n++;
                  for (n %= e, i && (o += n); o > n && t[o % e].skip; ) o--;
                  return ((o %= e), { start: n, end: o });
                })(i, n, o, s);
              return Ki(
                t,
                !0 === s
                  ? [{ start: a, end: r, loop: o }]
                  : (function (t, e, i, s) {
                      const n = t.length,
                        o = [];
                      let a,
                        r = e,
                        l = t[e];
                      for (a = e + 1; a <= i; ++a) {
                        const i = t[a % n];
                        (i.skip || i.stop
                          ? l.skip ||
                            ((s = !1),
                            o.push({ start: e % n, end: (a - 1) % n, loop: s }),
                            (e = r = i.stop ? a : null))
                          : ((r = a), l.skip && (e = a)),
                          (l = i));
                      }
                      return (null !== r && o.push({ start: e % n, end: r % n, loop: s }), o);
                    })(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1),
                i,
                e
              );
            })(this, this.options.segment))
          );
        }
        first() {
          const t = this.segments,
            e = this.points;
          return t.length && e[t[0].start];
        }
        last() {
          const t = this.segments,
            e = this.points,
            i = t.length;
          return i && e[t[i - 1].end];
        }
        interpolate(t, e) {
          const i = this.options,
            s = t[e],
            n = this.points,
            o = Xi(this, { property: e, start: s, end: s });
          if (!o.length) return;
          const a = [],
            r = (function (t) {
              return t.stepped
                ? Vi
                : t.tension || 'monotone' === t.cubicInterpolationMode
                  ? Hi
                  : Bi;
            })(i);
          let l, c;
          for (l = 0, c = o.length; l < c; ++l) {
            const { start: c, end: h } = o[l],
              d = n[c],
              u = n[h];
            if (d === u) {
              a.push(d);
              continue;
            }
            const p = r(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
            ((p[e] = t[e]), a.push(p));
          }
          return 1 === a.length ? a[0] : a;
        }
        pathSegment(t, e, i) {
          return go(this)(t, this, e, i);
        }
        path(t, e, i) {
          const s = this.segments,
            n = go(this);
          let o = this._loop;
          ((e = e || 0), (i = i || this.points.length - e));
          for (const a of s) o &= n(t, this, a, { start: e, end: e + i - 1 });
          return !!o;
        }
        draw(t, e, i, s) {
          const n = this.options || {};
          ((this.points || []).length &&
            n.borderWidth &&
            (t.save(), bo(t, this, i, s), t.restore()),
            this.animated && ((this._pointsUpdated = !1), (this._path = void 0)));
        }
      }
      function yo(t, e, i, s) {
        const n = t.options,
          { [i]: o } = t.getProps([i], s);
        return Math.abs(e - o) < n.radius + n.hitRadius;
      }
      function vo(t, e) {
        const {
          x: i,
          y: s,
          base: n,
          width: o,
          height: a,
        } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
        let r, l, c, h, d;
        return (
          t.horizontal
            ? ((d = a / 2), (r = Math.min(i, n)), (l = Math.max(i, n)), (c = s - d), (h = s + d))
            : ((d = o / 2), (r = i - d), (l = i + d), (c = Math.min(s, n)), (h = Math.max(s, n))),
          { left: r, top: c, right: l, bottom: h }
        );
      }
      function _o(t, e, i, s) {
        return t ? 0 : ee(e, i, s);
      }
      function wo(t) {
        const e = vo(t),
          i = e.right - e.left,
          s = e.bottom - e.top,
          n = (function (t, e, i) {
            const s = t.options.borderWidth,
              n = t.borderSkipped,
              o = ti(s);
            return {
              t: _o(n.top, o.top, 0, i),
              r: _o(n.right, o.right, 0, e),
              b: _o(n.bottom, o.bottom, 0, i),
              l: _o(n.left, o.left, 0, e),
            };
          })(t, i / 2, s / 2),
          o = (function (t, e, i) {
            const { enableBorderRadius: s } = t.getProps(['enableBorderRadius']),
              n = t.options.borderRadius,
              o = ei(n),
              a = Math.min(e, i),
              r = t.borderSkipped,
              l = s || pt(n);
            return {
              topLeft: _o(!l || r.top || r.left, o.topLeft, 0, a),
              topRight: _o(!l || r.top || r.right, o.topRight, 0, a),
              bottomLeft: _o(!l || r.bottom || r.left, o.bottomLeft, 0, a),
              bottomRight: _o(!l || r.bottom || r.right, o.bottomRight, 0, a),
            };
          })(t, i / 2, s / 2);
        return {
          outer: { x: e.left, y: e.top, w: i, h: s, radius: o },
          inner: {
            x: e.left + n.l,
            y: e.top + n.t,
            w: i - n.l - n.r,
            h: s - n.t - n.b,
            radius: {
              topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
              topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
              bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
              bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r)),
            },
          },
        };
      }
      function Mo(t, e, i, s) {
        const n = null === e,
          o = null === i,
          a = t && !(n && o) && vo(t, s);
        return a && (n || ie(e, a.left, a.right)) && (o || ie(i, a.top, a.bottom));
      }
      function ko(t, e) {
        t.rect(e.x, e.y, e.w, e.h);
      }
      function So(t, e, i = {}) {
        const s = t.x !== i.x ? -e : 0,
          n = t.y !== i.y ? -e : 0,
          o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
          a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
        return { x: t.x + s, y: t.y + n, w: t.w + o, h: t.h + a, radius: t.radius };
      }
      var Po = Object.freeze({
        __proto__: null,
        ArcElement: class extends mn {
          static id = 'arc';
          static defaults = {
            borderAlign: 'center',
            borderColor: '#fff',
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: void 0,
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0,
            circular: !0,
            selfJoin: !1,
          };
          static defaultRoutes = { backgroundColor: 'backgroundColor' };
          static descriptors = { _scriptable: !0, _indexable: (t) => 'borderDash' !== t };
          circumference;
          endAngle;
          fullCircles;
          innerRadius;
          outerRadius;
          pixelMargin;
          startAngle;
          constructor(t) {
            (super(),
              (this.options = void 0),
              (this.circumference = void 0),
              (this.startAngle = void 0),
              (this.endAngle = void 0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.pixelMargin = 0),
              (this.fullCircles = 0),
              t && Object.assign(this, t));
          }
          inRange(t, e, i) {
            const s = this.getProps(['x', 'y'], i),
              { angle: n, distance: o } = Zt(s, { x: t, y: e }),
              {
                startAngle: a,
                endAngle: r,
                innerRadius: l,
                outerRadius: c,
                circumference: h,
              } = this.getProps(
                ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
                i
              ),
              d = (this.options.spacing + this.options.borderWidth) / 2,
              u = mt(h, r - a),
              p = te(n, a, r) && a !== r,
              f = u >= Ot || p,
              g = ie(o, l + d, c + d);
            return f && g;
          }
          getCenterPoint(t) {
            const {
                x: e,
                y: i,
                startAngle: s,
                endAngle: n,
                innerRadius: o,
                outerRadius: a,
              } = this.getProps(
                ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
                t
              ),
              { offset: r, spacing: l } = this.options,
              c = (s + n) / 2,
              h = (o + a + l + r) / 2;
            return { x: e + Math.cos(c) * h, y: i + Math.sin(c) * h };
          }
          tooltipPosition(t) {
            return this.getCenterPoint(t);
          }
          draw(t) {
            const { options: e, circumference: i } = this,
              s = (e.offset || 0) / 4,
              n = (e.spacing || 0) / 2,
              o = e.circular;
            if (
              ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
              (this.fullCircles = i > Ot ? Math.floor(i / Ot) : 0),
              0 === i || this.innerRadius < 0 || this.outerRadius < 0)
            )
              return;
            t.save();
            const a = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(a) * s, Math.sin(a) * s);
            const r = s * (1 - Math.sin(Math.min(Lt, i || 0)));
            ((t.fillStyle = e.backgroundColor),
              (t.strokeStyle = e.borderColor),
              (function (t, e, i, s, n) {
                const { fullCircles: o, startAngle: a, circumference: r } = e;
                let l = e.endAngle;
                if (o) {
                  ro(t, e, i, s, l, n);
                  for (let e = 0; e < o; ++e) t.fill();
                  isNaN(r) || (l = a + (r % Ot || Ot));
                }
                (ro(t, e, i, s, l, n), t.fill());
              })(t, this, r, n, o),
              lo(t, this, r, n, o),
              t.restore());
          }
        },
        BarElement: class extends mn {
          static id = 'bar';
          static defaults = {
            borderSkipped: 'start',
            borderWidth: 0,
            borderRadius: 0,
            inflateAmount: 'auto',
            pointStyle: void 0,
          };
          static defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' };
          constructor(t) {
            (super(),
              (this.options = void 0),
              (this.horizontal = void 0),
              (this.base = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this.inflateAmount = void 0),
              t && Object.assign(this, t));
          }
          draw(t) {
            const {
                inflateAmount: e,
                options: { borderColor: i, backgroundColor: s },
              } = this,
              { inner: n, outer: o } = wo(this),
              a = (r = o.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? Xe : ko;
            var r;
            (t.save(),
              (o.w === n.w && o.h === n.h) ||
                (t.beginPath(),
                a(t, So(o, e, n)),
                t.clip(),
                a(t, So(n, -e, o)),
                (t.fillStyle = i),
                t.fill('evenodd')),
              t.beginPath(),
              a(t, So(n, e)),
              (t.fillStyle = s),
              t.fill(),
              t.restore());
          }
          inRange(t, e, i) {
            return Mo(this, t, e, i);
          }
          inXRange(t, e) {
            return Mo(this, t, null, e);
          }
          inYRange(t, e) {
            return Mo(this, null, t, e);
          }
          getCenterPoint(t) {
            const {
              x: e,
              y: i,
              base: s,
              horizontal: n,
            } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
            return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 };
          }
          getRange(t) {
            return 'x' === t ? this.width / 2 : this.height / 2;
          }
        },
        LineElement: xo,
        PointElement: class extends mn {
          static id = 'point';
          parsed;
          skip;
          stop;
          static defaults = {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: 'circle',
            radius: 3,
            rotation: 0,
          };
          static defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' };
          constructor(t) {
            (super(),
              (this.options = void 0),
              (this.parsed = void 0),
              (this.skip = void 0),
              (this.stop = void 0),
              t && Object.assign(this, t));
          }
          inRange(t, e, i) {
            const s = this.options,
              { x: n, y: o } = this.getProps(['x', 'y'], i);
            return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2);
          }
          inXRange(t, e) {
            return yo(this, t, 'x', e);
          }
          inYRange(t, e) {
            return yo(this, t, 'y', e);
          }
          getCenterPoint(t) {
            const { x: e, y: i } = this.getProps(['x', 'y'], t);
            return { x: e, y: i };
          }
          size(t) {
            let e = (t = t || this.options || {}).radius || 0;
            return (
              (e = Math.max(e, (e && t.hoverRadius) || 0)),
              2 * (e + ((e && t.borderWidth) || 0))
            );
          }
          draw(t, e) {
            const i = this.options;
            this.skip ||
              i.radius < 0.1 ||
              !Ve(this, e, this.size(i) / 2) ||
              ((t.strokeStyle = i.borderColor),
              (t.lineWidth = i.borderWidth),
              (t.fillStyle = i.backgroundColor),
              Ne(t, i, this.x, this.y));
          }
          getRange() {
            const t = this.options || {};
            return t.radius + t.hitRadius;
          }
        },
      });
      const Ao = [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        Do = Ao.map((t) => t.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
      function Co(t) {
        return Ao[t % Ao.length];
      }
      function Eo(t) {
        return Do[t % Do.length];
      }
      function To(t) {
        let e = 0;
        return (i, s) => {
          const n = t.getDatasetMeta(s).controller;
          n instanceof Ps
            ? (e = (function (t, e) {
                return ((t.backgroundColor = t.data.map(() => Co(e++))), e);
              })(i, e))
            : n instanceof As
              ? (e = (function (t, e) {
                  return ((t.backgroundColor = t.data.map(() => Eo(e++))), e);
                })(i, e))
              : n &&
                (e = (function (t, e) {
                  return ((t.borderColor = Co(e)), (t.backgroundColor = Eo(e)), ++e);
                })(i, e));
        };
      }
      function Io(t) {
        let e;
        for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
        return !1;
      }
      var Lo = {
        id: 'colors',
        defaults: { enabled: !0, forceOverride: !1 },
        beforeLayout(t, e, i) {
          if (!i.enabled) return;
          const {
              data: { datasets: s },
              options: n,
            } = t.config,
            { elements: o } = n,
            a =
              Io(s) ||
              ((r = n) && (r.borderColor || r.backgroundColor)) ||
              (o && Io(o)) ||
              'rgba(0,0,0,0.1)' !== Le.borderColor ||
              'rgba(0,0,0,0.1)' !== Le.backgroundColor;
          var r;
          if (!i.forceOverride && a) return;
          const l = To(t);
          s.forEach(l);
        },
      };
      function Oo(t) {
        if (t._decimated) {
          const e = t._data;
          (delete t._decimated,
            delete t._data,
            Object.defineProperty(t, 'data', {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: e,
            }));
        }
      }
      function Ro(t) {
        t.data.datasets.forEach((t) => {
          Oo(t);
        });
      }
      var Fo = {
        id: 'decimation',
        defaults: { algorithm: 'min-max', enabled: !1 },
        beforeElementsUpdate: (t, e, i) => {
          if (!i.enabled) return void Ro(t);
          const s = t.width;
          t.data.datasets.forEach((e, n) => {
            const { _data: o, indexAxis: a } = e,
              r = t.getDatasetMeta(n),
              l = o || e.data;
            if ('y' === ni([a, t.options.indexAxis])) return;
            if (!r.controller.supportsDecimation) return;
            const c = t.scales[r.xAxisID];
            if ('linear' !== c.type && 'time' !== c.type) return;
            if (t.options.parsing) return;
            let h,
              { start: d, count: u } = (function (t, e) {
                const i = e.length;
                let s,
                  n = 0;
                const { iScale: o } = t,
                  { min: a, max: r, minDefined: l, maxDefined: c } = o.getUserBounds();
                return (
                  l && (n = ee(ne(e, o.axis, a).lo, 0, i - 1)),
                  (s = c ? ee(ne(e, o.axis, r).hi + 1, n, i) - n : i - n),
                  { start: n, count: s }
                );
              })(r, l);
            if (u <= (i.threshold || 4 * s)) Oo(e);
            else {
              switch (
                (dt(o) &&
                  ((e._data = l),
                  delete e.data,
                  Object.defineProperty(e, 'data', {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return this._decimated;
                    },
                    set: function (t) {
                      this._data = t;
                    },
                  })),
                i.algorithm)
              ) {
                case 'lttb':
                  h = (function (t, e, i, s, n) {
                    const o = n.samples || s;
                    if (o >= i) return t.slice(e, e + i);
                    const a = [],
                      r = (i - 2) / (o - 2);
                    let l = 0;
                    const c = e + i - 1;
                    let h,
                      d,
                      u,
                      p,
                      f,
                      g = e;
                    for (a[l++] = t[g], h = 0; h < o - 2; h++) {
                      let s,
                        n = 0,
                        o = 0;
                      const c = Math.floor((h + 1) * r) + 1 + e,
                        m = Math.min(Math.floor((h + 2) * r) + 1, i) + e,
                        b = m - c;
                      for (s = c; s < m; s++) ((n += t[s].x), (o += t[s].y));
                      ((n /= b), (o /= b));
                      const x = Math.floor(h * r) + 1 + e,
                        y = Math.min(Math.floor((h + 1) * r) + 1, i) + e,
                        { x: v, y: _ } = t[g];
                      for (u = p = -1, s = x; s < y; s++)
                        ((p = 0.5 * Math.abs((v - n) * (t[s].y - _) - (v - t[s].x) * (o - _))),
                          p > u && ((u = p), (d = t[s]), (f = s)));
                      ((a[l++] = d), (g = f));
                    }
                    return ((a[l++] = t[c]), a);
                  })(l, d, u, s, i);
                  break;
                case 'min-max':
                  h = (function (t, e, i, s) {
                    let n,
                      o,
                      a,
                      r,
                      l,
                      c,
                      h,
                      d,
                      u,
                      p,
                      f = 0,
                      g = 0;
                    const m = [],
                      b = e + i - 1,
                      x = t[e].x,
                      y = t[b].x - x;
                    for (n = e; n < e + i; ++n) {
                      ((o = t[n]), (a = ((o.x - x) / y) * s), (r = o.y));
                      const e = 0 | a;
                      if (e === l)
                        (r < u ? ((u = r), (c = n)) : r > p && ((p = r), (h = n)),
                          (f = (g * f + o.x) / ++g));
                      else {
                        const i = n - 1;
                        if (!dt(c) && !dt(h)) {
                          const e = Math.min(c, h),
                            s = Math.max(c, h);
                          (e !== d && e !== i && m.push({ ...t[e], x: f }),
                            s !== d && s !== i && m.push({ ...t[s], x: f }));
                        }
                        (n > 0 && i !== d && m.push(t[i]),
                          m.push(o),
                          (l = e),
                          (g = 0),
                          (u = p = r),
                          (c = h = d = n));
                      }
                    }
                    return m;
                  })(l, d, u, s);
                  break;
                default:
                  throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`);
              }
              e._decimated = h;
            }
          });
        },
        destroy(t) {
          Ro(t);
        },
      };
      function zo(t, e, i, s) {
        if (s) return;
        let n = e[t],
          o = i[t];
        return ('angle' === t && ((n = Qt(n)), (o = Qt(o))), { property: t, start: n, end: o });
      }
      function No(t, e, i) {
        for (; e > t; e--) {
          const t = i[e];
          if (!isNaN(t.x) && !isNaN(t.y)) break;
        }
        return e;
      }
      function Bo(t, e, i, s) {
        return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
      }
      function Vo(t, e) {
        let i = [],
          s = !1;
        return (
          ut(t)
            ? ((s = !0), (i = t))
            : (i = (function (t, e) {
                const { x: i = null, y: s = null } = t || {},
                  n = e.points,
                  o = [];
                return (
                  e.segments.forEach(({ start: t, end: e }) => {
                    e = No(t, e, n);
                    const a = n[t],
                      r = n[e];
                    null !== s
                      ? (o.push({ x: a.x, y: s }), o.push({ x: r.x, y: s }))
                      : null !== i && (o.push({ x: i, y: a.y }), o.push({ x: i, y: r.y }));
                  }),
                  o
                );
              })(t, e)),
          i.length ? new xo({ points: i, options: { tension: 0 }, _loop: s, _fullLoop: s }) : null
        );
      }
      function Ho(t) {
        return t && !1 !== t.fill;
      }
      function $o(t, e, i) {
        let s = t[e].fill;
        const n = [e];
        let o;
        if (!i) return s;
        for (; !1 !== s && -1 === n.indexOf(s); ) {
          if (!ft(s)) return s;
          if (((o = t[s]), !o)) return !1;
          if (o.visible) return s;
          (n.push(s), (s = o.fill));
        }
        return !1;
      }
      function Wo(t, e, i) {
        const s = (function (t) {
          const e = t.options,
            i = e.fill;
          let s = mt(i && i.target, i);
          return (
            void 0 === s && (s = !!e.backgroundColor),
            !1 !== s && null !== s && (!0 === s ? 'origin' : s)
          );
        })(t);
        if (pt(s)) return !isNaN(s.value) && s;
        let n = parseFloat(s);
        return ft(n) && Math.floor(n) === n
          ? (function (t, e, i, s) {
              return (('-' !== t && '+' !== t) || (i = e + i), !(i === e || i < 0 || i >= s) && i);
            })(s[0], e, n, i)
          : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(s) >= 0 && s;
      }
      function jo(t, e, i) {
        const s = [];
        for (let n = 0; n < i.length; n++) {
          const o = i[n],
            { first: a, last: r, point: l } = Yo(o, e, 'x');
          if (!(!l || (a && r)))
            if (a) s.unshift(l);
            else if ((t.push(l), !r)) break;
        }
        t.push(...s);
      }
      function Yo(t, e, i) {
        const s = t.interpolate(e, i);
        if (!s) return {};
        const n = s[i],
          o = t.segments,
          a = t.points;
        let r = !1,
          l = !1;
        for (let c = 0; c < o.length; c++) {
          const t = o[c],
            e = a[t.start][i],
            s = a[t.end][i];
          if (ie(n, e, s)) {
            ((r = n === e), (l = n === s));
            break;
          }
        }
        return { first: r, last: l, point: s };
      }
      class Uo {
        constructor(t) {
          ((this.x = t.x), (this.y = t.y), (this.radius = t.radius));
        }
        pathSegment(t, e, i) {
          const { x: s, y: n, radius: o } = this;
          return ((e = e || { start: 0, end: Ot }), t.arc(s, n, o, e.end, e.start, !0), !i.bounds);
        }
        interpolate(t) {
          const { x: e, y: i, radius: s } = this,
            n = t.angle;
          return { x: e + Math.cos(n) * s, y: i + Math.sin(n) * s, angle: n };
        }
      }
      function qo(t) {
        const { chart: e, fill: i, line: s } = t;
        if (ft(i))
          return (function (t, e) {
            const i = t.getDatasetMeta(e),
              s = i && t.isDatasetVisible(e);
            return s ? i.dataset : null;
          })(e, i);
        if ('stack' === i)
          return (function (t) {
            const { scale: e, index: i, line: s } = t,
              n = [],
              o = s.segments,
              a = s.points,
              r = (function (t, e) {
                const i = [],
                  s = t.getMatchingVisibleMetas('line');
                for (let n = 0; n < s.length; n++) {
                  const t = s[n];
                  if (t.index === e) break;
                  t.hidden || i.unshift(t.dataset);
                }
                return i;
              })(e, i);
            r.push(Vo({ x: null, y: e.bottom }, s));
            for (let l = 0; l < o.length; l++) {
              const t = o[l];
              for (let e = t.start; e <= t.end; e++) jo(n, a[e], r);
            }
            return new xo({ points: n, options: {} });
          })(t);
        if ('shape' === i) return !0;
        const n = (function (t) {
          const e = t.scale || {};
          return e.getPointPositionForValue
            ? (function (t) {
                const { scale: e, fill: i } = t,
                  s = e.options,
                  n = e.getLabels().length,
                  o = s.reverse ? e.max : e.min,
                  a = (function (t, e, i) {
                    let s;
                    return (
                      (s =
                        'start' === t
                          ? i
                          : 'end' === t
                            ? e.options.reverse
                              ? e.min
                              : e.max
                            : pt(t)
                              ? t.value
                              : e.getBaseValue()),
                      s
                    );
                  })(i, e, o),
                  r = [];
                if (s.grid.circular) {
                  const t = e.getPointPositionForValue(0, o);
                  return new Uo({ x: t.x, y: t.y, radius: e.getDistanceFromCenterForValue(a) });
                }
                for (let l = 0; l < n; ++l) r.push(e.getPointPositionForValue(l, a));
                return r;
              })(t)
            : (function (t) {
                const { scale: e = {}, fill: i } = t,
                  s = (function (t, e) {
                    let i = null;
                    return (
                      'start' === t
                        ? (i = e.bottom)
                        : 'end' === t
                          ? (i = e.top)
                          : pt(t)
                            ? (i = e.getPixelForValue(t.value))
                            : e.getBasePixel && (i = e.getBasePixel()),
                      i
                    );
                  })(i, e);
                if (ft(s)) {
                  const t = e.isHorizontal();
                  return { x: t ? s : null, y: t ? null : s };
                }
                return null;
              })(t);
        })(t);
        return n instanceof Uo ? n : Vo(n, s);
      }
      function Xo(t, e, i) {
        const s = qo(e),
          { chart: n, index: o, line: a, scale: r, axis: l } = e,
          c = a.options,
          h = c.fill,
          d = c.backgroundColor,
          { above: u = d, below: p = d } = h || {},
          f = n.getDatasetMeta(o),
          g = Qi(n, f);
        s &&
          a.points.length &&
          (He(t, i),
          (function (t, e) {
            const { line: i, target: s, above: n, below: o, area: a, scale: r, clip: l } = e,
              c = i._loop ? 'angle' : e.axis;
            t.save();
            let h = o;
            (o !== n &&
              ('x' === c
                ? (Ko(t, s, a.top),
                  Jo(t, { line: i, target: s, color: n, scale: r, property: c, clip: l }),
                  t.restore(),
                  t.save(),
                  Ko(t, s, a.bottom))
                : 'y' === c &&
                  (Zo(t, s, a.left),
                  Jo(t, { line: i, target: s, color: o, scale: r, property: c, clip: l }),
                  t.restore(),
                  t.save(),
                  Zo(t, s, a.right),
                  (h = n))),
              Jo(t, { line: i, target: s, color: h, scale: r, property: c, clip: l }),
              t.restore());
          })(t, { line: a, target: s, above: u, below: p, area: i, scale: r, axis: l, clip: g }),
          $e(t));
      }
      function Ko(t, e, i) {
        const { segments: s, points: n } = e;
        let o = !0,
          a = !1;
        t.beginPath();
        for (const r of s) {
          const { start: s, end: l } = r,
            c = n[s],
            h = n[No(s, l, n)];
          (o ? (t.moveTo(c.x, c.y), (o = !1)) : (t.lineTo(c.x, i), t.lineTo(c.x, c.y)),
            (a = !!e.pathSegment(t, r, { move: a })),
            a ? t.closePath() : t.lineTo(h.x, i));
        }
        (t.lineTo(e.first().x, i), t.closePath(), t.clip());
      }
      function Zo(t, e, i) {
        const { segments: s, points: n } = e;
        let o = !0,
          a = !1;
        t.beginPath();
        for (const r of s) {
          const { start: s, end: l } = r,
            c = n[s],
            h = n[No(s, l, n)];
          (o ? (t.moveTo(c.x, c.y), (o = !1)) : (t.lineTo(i, c.y), t.lineTo(c.x, c.y)),
            (a = !!e.pathSegment(t, r, { move: a })),
            a ? t.closePath() : t.lineTo(i, h.y));
        }
        (t.lineTo(i, e.first().y), t.closePath(), t.clip());
      }
      function Jo(t, e) {
        const { line: i, target: s, property: n, color: o, scale: a, clip: r } = e,
          l = (function (t, e, i) {
            const s = t.segments,
              n = t.points,
              o = e.points,
              a = [];
            for (const r of s) {
              let { start: t, end: s } = r;
              s = No(t, s, n);
              const l = zo(i, n[t], n[s], r.loop);
              if (!e.segments) {
                a.push({ source: r, target: l, start: n[t], end: n[s] });
                continue;
              }
              const c = Xi(e, l);
              for (const e of c) {
                const t = zo(i, o[e.start], o[e.end], e.loop),
                  s = qi(r, n, t);
                for (const n of s)
                  a.push({
                    source: n,
                    target: e,
                    start: { [i]: Bo(l, t, 'start', Math.max) },
                    end: { [i]: Bo(l, t, 'end', Math.min) },
                  });
              }
            }
            return a;
          })(i, s, n);
        for (const { source: c, target: h, start: d, end: u } of l) {
          const { style: { backgroundColor: e = o } = {} } = c,
            l = !0 !== s;
          (t.save(), (t.fillStyle = e), Go(t, a, r, l && zo(n, d, u)), t.beginPath());
          const p = !!i.pathSegment(t, c);
          let f;
          if (l) {
            p ? t.closePath() : Qo(t, s, u, n);
            const e = !!s.pathSegment(t, h, { move: p, reverse: !0 });
            ((f = p && e), f || Qo(t, s, d, n));
          }
          (t.closePath(), t.fill(f ? 'evenodd' : 'nonzero'), t.restore());
        }
      }
      function Go(t, e, i, s) {
        const n = e.chart.chartArea,
          { property: o, start: a, end: r } = s || {};
        if ('x' === o || 'y' === o) {
          let e, s, l, c;
          ('x' === o
            ? ((e = a), (s = n.top), (l = r), (c = n.bottom))
            : ((e = n.left), (s = a), (l = n.right), (c = r)),
            t.beginPath(),
            i &&
              ((e = Math.max(e, i.left)),
              (l = Math.min(l, i.right)),
              (s = Math.max(s, i.top)),
              (c = Math.min(c, i.bottom))),
            t.rect(e, s, l - e, c - s),
            t.clip());
        }
      }
      function Qo(t, e, i, s) {
        const n = e.interpolate(i, s);
        n && t.lineTo(n.x, n.y);
      }
      var ta = {
        id: 'filler',
        afterDatasetsUpdate(t, e, i) {
          const s = (t.data.datasets || []).length,
            n = [];
          let o, a, r, l;
          for (a = 0; a < s; ++a)
            ((o = t.getDatasetMeta(a)),
              (r = o.dataset),
              (l = null),
              r &&
                r.options &&
                r instanceof xo &&
                (l = {
                  visible: t.isDatasetVisible(a),
                  index: a,
                  fill: Wo(r, a, s),
                  chart: t,
                  axis: o.controller.options.indexAxis,
                  scale: o.vScale,
                  line: r,
                }),
              (o.$filler = l),
              n.push(l));
          for (a = 0; a < s; ++a)
            ((l = n[a]), l && !1 !== l.fill && (l.fill = $o(n, a, i.propagate)));
        },
        beforeDraw(t, e, i) {
          const s = 'beforeDraw' === i.drawTime,
            n = t.getSortedVisibleDatasetMetas(),
            o = t.chartArea;
          for (let a = n.length - 1; a >= 0; --a) {
            const e = n[a].$filler;
            e && (e.line.updateControlPoints(o, e.axis), s && e.fill && Xo(t.ctx, e, o));
          }
        },
        beforeDatasetsDraw(t, e, i) {
          if ('beforeDatasetsDraw' !== i.drawTime) return;
          const s = t.getSortedVisibleDatasetMetas();
          for (let n = s.length - 1; n >= 0; --n) {
            const e = s[n].$filler;
            Ho(e) && Xo(t.ctx, e, t.chartArea);
          }
        },
        beforeDatasetDraw(t, e, i) {
          const s = e.meta.$filler;
          Ho(s) && 'beforeDatasetDraw' === i.drawTime && Xo(t.ctx, s, t.chartArea);
        },
        defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
      };
      const ea = (t, e) => {
        let { boxHeight: i = e, boxWidth: s = e } = t;
        return (
          t.usePointStyle && ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
          { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) }
        );
      };
      class ia extends mn {
        constructor(t) {
          (super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0));
        }
        update(t, e, i) {
          ((this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit());
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
        }
        buildLabels() {
          const t = this.options.labels || {};
          let e = xt(t.generateLabels, [this.chart], this) || [];
          (t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
            t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
            this.options.reverse && e.reverse(),
            (this.legendItems = e));
        }
        fit() {
          const { options: t, ctx: e } = this;
          if (!t.display) return void (this.width = this.height = 0);
          const i = t.labels,
            s = si(i.font),
            n = s.size,
            o = this._computeTitleHeight(),
            { boxWidth: a, itemHeight: r } = ea(i, n);
          let l, c;
          ((e.font = s.string),
            this.isHorizontal()
              ? ((l = this.maxWidth), (c = this._fitRows(o, n, a, r) + 10))
              : ((c = this.maxHeight), (l = this._fitCols(o, s, a, r) + 10)),
            (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
            (this.height = Math.min(c, t.maxHeight || this.maxHeight)));
        }
        _fitRows(t, e, i, s) {
          const {
              ctx: n,
              maxWidth: o,
              options: {
                labels: { padding: a },
              },
            } = this,
            r = (this.legendHitBoxes = []),
            l = (this.lineWidths = [0]),
            c = s + a;
          let h = t;
          ((n.textAlign = 'left'), (n.textBaseline = 'middle'));
          let d = -1,
            u = -c;
          return (
            this.legendItems.forEach((t, p) => {
              const f = i + e / 2 + n.measureText(t.text).width;
              ((0 === p || l[l.length - 1] + f + 2 * a > o) &&
                ((h += c), (l[l.length - (p > 0 ? 0 : 1)] = 0), (u += c), d++),
                (r[p] = { left: 0, top: u, row: d, width: f, height: s }),
                (l[l.length - 1] += f + a));
            }),
            h
          );
        }
        _fitCols(t, e, i, s) {
          const {
              ctx: n,
              maxHeight: o,
              options: {
                labels: { padding: a },
              },
            } = this,
            r = (this.legendHitBoxes = []),
            l = (this.columnSizes = []),
            c = o - t;
          let h = a,
            d = 0,
            u = 0,
            p = 0,
            f = 0;
          return (
            this.legendItems.forEach((t, o) => {
              const { itemWidth: g, itemHeight: m } = (function (t, e, i, s, n) {
                const o = (function (t, e, i, s) {
                    let n = t.text;
                    return (
                      n &&
                        'string' != typeof n &&
                        (n = n.reduce((t, e) => (t.length > e.length ? t : e))),
                      e + i.size / 2 + s.measureText(n).width
                    );
                  })(s, t, e, i),
                  a = (function (t, e, i) {
                    let s = t;
                    return ('string' != typeof e.text && (s = sa(e, i)), s);
                  })(n, s, e.lineHeight);
                return { itemWidth: o, itemHeight: a };
              })(i, e, n, t, s);
              (o > 0 &&
                u + m + 2 * a > c &&
                ((h += d + a), l.push({ width: d, height: u }), (p += d + a), f++, (d = u = 0)),
                (r[o] = { left: p, top: u, col: f, width: g, height: m }),
                (d = Math.max(d, g)),
                (u += m + a));
            }),
            (h += d),
            l.push({ width: d, height: u }),
            h
          );
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          const t = this._computeTitleHeight(),
            {
              legendHitBoxes: e,
              options: {
                align: i,
                labels: { padding: s },
                rtl: n,
              },
            } = this,
            o = $i(n, this.left, this.width);
          if (this.isHorizontal()) {
            let n = 0,
              a = ue(i, this.left + s, this.right - this.lineWidths[n]);
            for (const r of e)
              (n !== r.row &&
                ((n = r.row), (a = ue(i, this.left + s, this.right - this.lineWidths[n]))),
                (r.top += this.top + t + s),
                (r.left = o.leftForLtr(o.x(a), r.width)),
                (a += r.width + s));
          } else {
            let n = 0,
              a = ue(i, this.top + t + s, this.bottom - this.columnSizes[n].height);
            for (const r of e)
              (r.col !== n &&
                ((n = r.col),
                (a = ue(i, this.top + t + s, this.bottom - this.columnSizes[n].height))),
                (r.top = a),
                (r.left += this.left + s),
                (r.left = o.leftForLtr(o.x(r.left), r.width)),
                (a += r.height + s));
          }
        }
        isHorizontal() {
          return 'top' === this.options.position || 'bottom' === this.options.position;
        }
        draw() {
          if (this.options.display) {
            const t = this.ctx;
            (He(t, this), this._draw(), $e(t));
          }
        }
        _draw() {
          const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this,
            { align: n, labels: o } = t,
            a = Le.color,
            r = $i(t.rtl, this.left, this.width),
            l = si(o.font),
            { padding: c } = o,
            h = l.size,
            d = h / 2;
          let u;
          (this.drawTitle(),
            (s.textAlign = r.textAlign('left')),
            (s.textBaseline = 'middle'),
            (s.lineWidth = 0.5),
            (s.font = l.string));
          const { boxWidth: p, boxHeight: f, itemHeight: g } = ea(o, h),
            m = this.isHorizontal(),
            b = this._computeTitleHeight();
          ((u = m
            ? { x: ue(n, this.left + c, this.right - i[0]), y: this.top + c + b, line: 0 }
            : { x: this.left + c, y: ue(n, this.top + b + c, this.bottom - e[0].height), line: 0 }),
            Wi(this.ctx, t.textDirection));
          const x = g + c;
          (this.legendItems.forEach((y, v) => {
            ((s.strokeStyle = y.fontColor), (s.fillStyle = y.fontColor));
            const _ = s.measureText(y.text).width,
              w = r.textAlign(y.textAlign || (y.textAlign = o.textAlign)),
              M = p + d + _;
            let k = u.x,
              S = u.y;
            if (
              (r.setWidth(this.width),
              m
                ? v > 0 &&
                  k + M + c > this.right &&
                  ((S = u.y += x),
                  u.line++,
                  (k = u.x = ue(n, this.left + c, this.right - i[u.line])))
                : v > 0 &&
                  S + x > this.bottom &&
                  ((k = u.x = k + e[u.line].width + c),
                  u.line++,
                  (S = u.y = ue(n, this.top + b + c, this.bottom - e[u.line].height))),
              (function (t, e, i) {
                if (isNaN(p) || p <= 0 || isNaN(f) || f < 0) return;
                s.save();
                const n = mt(i.lineWidth, 1);
                if (
                  ((s.fillStyle = mt(i.fillStyle, a)),
                  (s.lineCap = mt(i.lineCap, 'butt')),
                  (s.lineDashOffset = mt(i.lineDashOffset, 0)),
                  (s.lineJoin = mt(i.lineJoin, 'miter')),
                  (s.lineWidth = n),
                  (s.strokeStyle = mt(i.strokeStyle, a)),
                  s.setLineDash(mt(i.lineDash, [])),
                  o.usePointStyle)
                ) {
                  const a = {
                      radius: (f * Math.SQRT2) / 2,
                      pointStyle: i.pointStyle,
                      rotation: i.rotation,
                      borderWidth: n,
                    },
                    l = r.xPlus(t, p / 2);
                  Be(s, a, l, e + d, o.pointStyleWidth && p);
                } else {
                  const o = e + Math.max((h - f) / 2, 0),
                    a = r.leftForLtr(t, p),
                    l = ei(i.borderRadius);
                  (s.beginPath(),
                    Object.values(l).some((t) => 0 !== t)
                      ? Xe(s, { x: a, y: o, w: p, h: f, radius: l })
                      : s.rect(a, o, p, f),
                    s.fill(),
                    0 !== n && s.stroke());
                }
                s.restore();
              })(r.x(k), S, y),
              (k = ((t, e, i, s) =>
                t === (s ? 'left' : 'right') ? i : 'center' === t ? (e + i) / 2 : e)(
                w,
                k + p + d,
                m ? k + M : this.right,
                t.rtl
              )),
              (function (t, e, i) {
                qe(s, i.text, t, e + g / 2, l, {
                  strikethrough: i.hidden,
                  textAlign: r.textAlign(i.textAlign),
                });
              })(r.x(k), S, y),
              m)
            )
              u.x += M + c;
            else if ('string' != typeof y.text) {
              const t = l.lineHeight;
              u.y += sa(y, t) + c;
            } else u.y += x;
          }),
            ji(this.ctx, t.textDirection));
        }
        drawTitle() {
          const t = this.options,
            e = t.title,
            i = si(e.font),
            s = ii(e.padding);
          if (!e.display) return;
          const n = $i(t.rtl, this.left, this.width),
            o = this.ctx,
            a = e.position,
            r = i.size / 2,
            l = s.top + r;
          let c,
            h = this.left,
            d = this.width;
          if (this.isHorizontal())
            ((d = Math.max(...this.lineWidths)),
              (c = this.top + l),
              (h = ue(t.align, h, this.right - d)));
          else {
            const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
            c =
              l +
              ue(
                t.align,
                this.top,
                this.bottom - e - t.labels.padding - this._computeTitleHeight()
              );
          }
          const u = ue(a, h, h + d);
          ((o.textAlign = n.textAlign(de(a))),
            (o.textBaseline = 'middle'),
            (o.strokeStyle = e.color),
            (o.fillStyle = e.color),
            (o.font = i.string),
            qe(o, e.text, u, c, i));
        }
        _computeTitleHeight() {
          const t = this.options.title,
            e = si(t.font),
            i = ii(t.padding);
          return t.display ? e.lineHeight + i.height : 0;
        }
        _getLegendItemAt(t, e) {
          let i, s, n;
          if (ie(t, this.left, this.right) && ie(e, this.top, this.bottom))
            for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
              if (((s = n[i]), ie(t, s.left, s.left + s.width) && ie(e, s.top, s.top + s.height)))
                return this.legendItems[i];
          return null;
        }
        handleEvent(t) {
          const e = this.options;
          if (
            !(function (t, e) {
              return (
                !(('mousemove' !== t && 'mouseout' !== t) || (!e.onHover && !e.onLeave)) ||
                !(!e.onClick || ('click' !== t && 'mouseup' !== t))
              );
            })(t.type, e)
          )
            return;
          const i = this._getLegendItemAt(t.x, t.y);
          if ('mousemove' === t.type || 'mouseout' === t.type) {
            const o = this._hoveredItem,
              a =
                ((n = i),
                null !== (s = o) &&
                  null !== n &&
                  s.datasetIndex === n.datasetIndex &&
                  s.index === n.index);
            (o && !a && xt(e.onLeave, [t, o, this], this),
              (this._hoveredItem = i),
              i && !a && xt(e.onHover, [t, i, this], this));
          } else i && xt(e.onClick, [t, i, this], this);
          var s, n;
        }
      }
      function sa(t, e) {
        return e * (t.text ? t.text.length : 0);
      }
      var na = {
        id: 'legend',
        _element: ia,
        start(t, e, i) {
          const s = (t.legend = new ia({ ctx: t.ctx, options: i, chart: t }));
          (Js.configure(t, s, i), Js.addBox(t, s));
        },
        stop(t) {
          (Js.removeBox(t, t.legend), delete t.legend);
        },
        beforeUpdate(t, e, i) {
          const s = t.legend;
          (Js.configure(t, s, i), (s.options = i));
        },
        afterUpdate(t) {
          const e = t.legend;
          (e.buildLabels(), e.adjustHitBoxes());
        },
        afterEvent(t, e) {
          e.replay || t.legend.handleEvent(e.event);
        },
        defaults: {
          display: !0,
          position: 'top',
          align: 'center',
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(t, e, i) {
            const s = e.datasetIndex,
              n = i.chart;
            n.isDatasetVisible(s) ? (n.hide(s), (e.hidden = !0)) : (n.show(s), (e.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: (t) => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
              const e = t.data.datasets,
                {
                  labels: {
                    usePointStyle: i,
                    pointStyle: s,
                    textAlign: n,
                    color: o,
                    useBorderRadius: a,
                    borderRadius: r,
                  },
                } = t.legend.options;
              return t._getSortedDatasetMetas().map((t) => {
                const l = t.controller.getStyle(i ? 0 : void 0),
                  c = ii(l.borderWidth);
                return {
                  text: e[t.index].label,
                  fillStyle: l.backgroundColor,
                  fontColor: o,
                  hidden: !t.visible,
                  lineCap: l.borderCapStyle,
                  lineDash: l.borderDash,
                  lineDashOffset: l.borderDashOffset,
                  lineJoin: l.borderJoinStyle,
                  lineWidth: (c.width + c.height) / 4,
                  strokeStyle: l.borderColor,
                  pointStyle: s || l.pointStyle,
                  rotation: l.rotation,
                  textAlign: n || l.textAlign,
                  borderRadius: a && (r || l.borderRadius),
                  datasetIndex: t.index,
                };
              }, this);
            },
          },
          title: { color: (t) => t.chart.options.color, display: !1, position: 'center', text: '' },
        },
        descriptors: {
          _scriptable: (t) => !t.startsWith('on'),
          labels: { _scriptable: (t) => !['generateLabels', 'filter', 'sort'].includes(t) },
        },
      };
      class oa extends mn {
        constructor(t) {
          (super(),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0));
        }
        update(t, e) {
          const i = this.options;
          if (((this.left = 0), (this.top = 0), !i.display))
            return void (this.width = this.height = this.right = this.bottom = 0);
          ((this.width = this.right = t), (this.height = this.bottom = e));
          const s = ut(i.text) ? i.text.length : 1;
          this._padding = ii(i.padding);
          const n = s * si(i.font).lineHeight + this._padding.height;
          this.isHorizontal() ? (this.height = n) : (this.width = n);
        }
        isHorizontal() {
          const t = this.options.position;
          return 'top' === t || 'bottom' === t;
        }
        _drawArgs(t) {
          const { top: e, left: i, bottom: s, right: n, options: o } = this,
            a = o.align;
          let r,
            l,
            c,
            h = 0;
          return (
            this.isHorizontal()
              ? ((l = ue(a, i, n)), (c = e + t), (r = n - i))
              : ('left' === o.position
                  ? ((l = i + t), (c = ue(a, s, e)), (h = -0.5 * Lt))
                  : ((l = n - t), (c = ue(a, e, s)), (h = 0.5 * Lt)),
                (r = s - e)),
            { titleX: l, titleY: c, maxWidth: r, rotation: h }
          );
        }
        draw() {
          const t = this.ctx,
            e = this.options;
          if (!e.display) return;
          const i = si(e.font),
            s = i.lineHeight / 2 + this._padding.top,
            { titleX: n, titleY: o, maxWidth: a, rotation: r } = this._drawArgs(s);
          qe(t, e.text, 0, 0, i, {
            color: e.color,
            maxWidth: a,
            rotation: r,
            textAlign: de(e.align),
            textBaseline: 'middle',
            translation: [n, o],
          });
        }
      }
      var aa = {
        id: 'title',
        _element: oa,
        start(t, e, i) {
          !(function (t, e) {
            const i = new oa({ ctx: t.ctx, options: e, chart: t });
            (Js.configure(t, i, e), Js.addBox(t, i), (t.titleBlock = i));
          })(t, i);
        },
        stop(t) {
          const e = t.titleBlock;
          (Js.removeBox(t, e), delete t.titleBlock);
        },
        beforeUpdate(t, e, i) {
          const s = t.titleBlock;
          (Js.configure(t, s, i), (s.options = i));
        },
        defaults: {
          align: 'center',
          display: !1,
          font: { weight: 'bold' },
          fullSize: !0,
          padding: 10,
          position: 'top',
          text: '',
          weight: 2e3,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const ra = new WeakMap();
      var la = {
        id: 'subtitle',
        start(t, e, i) {
          const s = new oa({ ctx: t.ctx, options: i, chart: t });
          (Js.configure(t, s, i), Js.addBox(t, s), ra.set(t, s));
        },
        stop(t) {
          (Js.removeBox(t, ra.get(t)), ra.delete(t));
        },
        beforeUpdate(t, e, i) {
          const s = ra.get(t);
          (Js.configure(t, s, i), (s.options = i));
        },
        defaults: {
          align: 'center',
          display: !1,
          font: { weight: 'normal' },
          fullSize: !0,
          padding: 0,
          position: 'top',
          text: '',
          weight: 1500,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const ca = {
        average(t) {
          if (!t.length) return !1;
          let e,
            i,
            s = new Set(),
            n = 0,
            o = 0;
          for (e = 0, i = t.length; e < i; ++e) {
            const i = t[e].element;
            if (i && i.hasValue()) {
              const t = i.tooltipPosition();
              (s.add(t.x), (n += t.y), ++o);
            }
          }
          return (
            0 !== o && 0 !== s.size && { x: [...s].reduce((t, e) => t + e) / s.size, y: n / o }
          );
        },
        nearest(t, e) {
          if (!t.length) return !1;
          let i,
            s,
            n,
            o = e.x,
            a = e.y,
            r = Number.POSITIVE_INFINITY;
          for (i = 0, s = t.length; i < s; ++i) {
            const s = t[i].element;
            if (s && s.hasValue()) {
              const t = Jt(e, s.getCenterPoint());
              t < r && ((r = t), (n = s));
            }
          }
          if (n) {
            const t = n.tooltipPosition();
            ((o = t.x), (a = t.y));
          }
          return { x: o, y: a };
        },
      };
      function ha(t, e) {
        return (e && (ut(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t);
      }
      function da(t) {
        return ('string' == typeof t || t instanceof String) && t.indexOf('\n') > -1
          ? t.split('\n')
          : t;
      }
      function ua(t, e) {
        const { element: i, datasetIndex: s, index: n } = e,
          o = t.getDatasetMeta(s).controller,
          { label: a, value: r } = o.getLabelAndValue(n);
        return {
          chart: t,
          label: a,
          parsed: o.getParsed(n),
          raw: t.data.datasets[s].data[n],
          formattedValue: r,
          dataset: o.getDataset(),
          dataIndex: n,
          datasetIndex: s,
          element: i,
        };
      }
      function pa(t, e) {
        const i = t.chart.ctx,
          { body: s, footer: n, title: o } = t,
          { boxWidth: a, boxHeight: r } = e,
          l = si(e.bodyFont),
          c = si(e.titleFont),
          h = si(e.footerFont),
          d = o.length,
          u = n.length,
          p = s.length,
          f = ii(e.padding);
        let g = f.height,
          m = 0,
          b = s.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0);
        ((b += t.beforeBody.length + t.afterBody.length),
          d && (g += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
          b &&
            (g +=
              p * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) +
              (b - p) * l.lineHeight +
              (b - 1) * e.bodySpacing),
          u && (g += e.footerMarginTop + u * h.lineHeight + (u - 1) * e.footerSpacing));
        let x = 0;
        const y = function (t) {
          m = Math.max(m, i.measureText(t).width + x);
        };
        return (
          i.save(),
          (i.font = c.string),
          yt(t.title, y),
          (i.font = l.string),
          yt(t.beforeBody.concat(t.afterBody), y),
          (x = e.displayColors ? a + 2 + e.boxPadding : 0),
          yt(s, (t) => {
            (yt(t.before, y), yt(t.lines, y), yt(t.after, y));
          }),
          (x = 0),
          (i.font = h.string),
          yt(t.footer, y),
          i.restore(),
          (m += f.width),
          { width: m, height: g }
        );
      }
      function fa(t, e, i, s) {
        const { x: n, width: o } = i,
          {
            width: a,
            chartArea: { left: r, right: l },
          } = t;
        let c = 'center';
        return (
          'center' === s
            ? (c = n <= (r + l) / 2 ? 'left' : 'right')
            : n <= o / 2
              ? (c = 'left')
              : n >= a - o / 2 && (c = 'right'),
          (function (t, e, i, s) {
            const { x: n, width: o } = s,
              a = i.caretSize + i.caretPadding;
            return (
              ('left' === t && n + o + a > e.width) || ('right' === t && n - o - a < 0) || void 0
            );
          })(c, t, e, i) && (c = 'center'),
          c
        );
      }
      function ga(t, e, i) {
        const s =
          i.yAlign ||
          e.yAlign ||
          (function (t, e) {
            const { y: i, height: s } = e;
            return i < s / 2 ? 'top' : i > t.height - s / 2 ? 'bottom' : 'center';
          })(t, i);
        return { xAlign: i.xAlign || e.xAlign || fa(t, e, i, s), yAlign: s };
      }
      function ma(t, e, i, s) {
        const { caretSize: n, caretPadding: o, cornerRadius: a } = t,
          { xAlign: r, yAlign: l } = i,
          c = n + o,
          { topLeft: h, topRight: d, bottomLeft: u, bottomRight: p } = ei(a);
        let f = (function (t, e) {
          let { x: i, width: s } = t;
          return ('right' === e ? (i -= s) : 'center' === e && (i -= s / 2), i);
        })(e, r);
        const g = (function (t, e, i) {
          let { y: s, height: n } = t;
          return ('top' === e ? (s += i) : (s -= 'bottom' === e ? n + i : n / 2), s);
        })(e, l, c);
        return (
          'center' === l
            ? 'left' === r
              ? (f += c)
              : 'right' === r && (f -= c)
            : 'left' === r
              ? (f -= Math.max(h, u) + n)
              : 'right' === r && (f += Math.max(d, p) + n),
          { x: ee(f, 0, s.width - e.width), y: ee(g, 0, s.height - e.height) }
        );
      }
      function ba(t, e, i) {
        const s = ii(i.padding);
        return 'center' === e
          ? t.x + t.width / 2
          : 'right' === e
            ? t.x + t.width - s.right
            : t.x + s.left;
      }
      function xa(t) {
        return ha([], da(t));
      }
      function ya(t, e) {
        const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return i ? t.override(i) : t;
      }
      const va = {
        beforeTitle: ct,
        title(t) {
          if (t.length > 0) {
            const e = t[0],
              i = e.chart.data.labels,
              s = i ? i.length : 0;
            if (this && this.options && 'dataset' === this.options.mode)
              return e.dataset.label || '';
            if (e.label) return e.label;
            if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
          }
          return '';
        },
        afterTitle: ct,
        beforeBody: ct,
        beforeLabel: ct,
        label(t) {
          if (this && this.options && 'dataset' === this.options.mode)
            return t.label + ': ' + t.formattedValue || t.formattedValue;
          let e = t.dataset.label || '';
          e && (e += ': ');
          const i = t.formattedValue;
          return (dt(i) || (e += i), e);
        },
        labelColor(t) {
          const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0,
          };
        },
        labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle(t) {
          const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return { pointStyle: e.pointStyle, rotation: e.rotation };
        },
        afterLabel: ct,
        afterBody: ct,
        beforeFooter: ct,
        footer: ct,
        afterFooter: ct,
      };
      function _a(t, e, i, s) {
        const n = t[e].call(i, s);
        return void 0 === n ? va[e].call(i, s) : n;
      }
      class wa extends mn {
        static positioners = ca;
        constructor(t) {
          (super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0));
        }
        initialize(t) {
          ((this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0));
        }
        _resolveAnimations() {
          const t = this._cachedAnimations;
          if (t) return t;
          const e = this.chart,
            i = this.options.setContext(this.getContext()),
            s = i.enabled && e.options.animation && i.animations,
            n = new os(this.chart, s);
          return (s._cacheable && (this._cachedAnimations = Object.freeze(n)), n);
        }
        getContext() {
          return (
            this.$context ||
            (this.$context =
              ((t = this.chart.getContext()),
              (e = this),
              (i = this._tooltipItems),
              oi(t, { tooltip: e, tooltipItems: i, type: 'tooltip' })))
          );
          var t, e, i;
        }
        getTitle(t, e) {
          const { callbacks: i } = e,
            s = _a(i, 'beforeTitle', this, t),
            n = _a(i, 'title', this, t),
            o = _a(i, 'afterTitle', this, t);
          let a = [];
          return ((a = ha(a, da(s))), (a = ha(a, da(n))), (a = ha(a, da(o))), a);
        }
        getBeforeBody(t, e) {
          return xa(_a(e.callbacks, 'beforeBody', this, t));
        }
        getBody(t, e) {
          const { callbacks: i } = e,
            s = [];
          return (
            yt(t, (t) => {
              const e = { before: [], lines: [], after: [] },
                n = ya(i, t);
              (ha(e.before, da(_a(n, 'beforeLabel', this, t))),
                ha(e.lines, _a(n, 'label', this, t)),
                ha(e.after, da(_a(n, 'afterLabel', this, t))),
                s.push(e));
            }),
            s
          );
        }
        getAfterBody(t, e) {
          return xa(_a(e.callbacks, 'afterBody', this, t));
        }
        getFooter(t, e) {
          const { callbacks: i } = e,
            s = _a(i, 'beforeFooter', this, t),
            n = _a(i, 'footer', this, t),
            o = _a(i, 'afterFooter', this, t);
          let a = [];
          return ((a = ha(a, da(s))), (a = ha(a, da(n))), (a = ha(a, da(o))), a);
        }
        _createItems(t) {
          const e = this._active,
            i = this.chart.data,
            s = [],
            n = [],
            o = [];
          let a,
            r,
            l = [];
          for (a = 0, r = e.length; a < r; ++a) l.push(ua(this.chart, e[a]));
          return (
            t.filter && (l = l.filter((e, s, n) => t.filter(e, s, n, i))),
            t.itemSort && (l = l.sort((e, s) => t.itemSort(e, s, i))),
            yt(l, (e) => {
              const i = ya(t.callbacks, e);
              (s.push(_a(i, 'labelColor', this, e)),
                n.push(_a(i, 'labelPointStyle', this, e)),
                o.push(_a(i, 'labelTextColor', this, e)));
            }),
            (this.labelColors = s),
            (this.labelPointStyles = n),
            (this.labelTextColors = o),
            (this.dataPoints = l),
            l
          );
        }
        update(t, e) {
          const i = this.options.setContext(this.getContext()),
            s = this._active;
          let n,
            o = [];
          if (s.length) {
            const t = ca[i.position].call(this, s, this._eventPosition);
            ((o = this._createItems(i)),
              (this.title = this.getTitle(o, i)),
              (this.beforeBody = this.getBeforeBody(o, i)),
              (this.body = this.getBody(o, i)),
              (this.afterBody = this.getAfterBody(o, i)),
              (this.footer = this.getFooter(o, i)));
            const e = (this._size = pa(this, i)),
              a = Object.assign({}, t, e),
              r = ga(this.chart, i, a),
              l = ma(i, a, r, this.chart);
            ((this.xAlign = r.xAlign),
              (this.yAlign = r.yAlign),
              (n = {
                opacity: 1,
                x: l.x,
                y: l.y,
                width: e.width,
                height: e.height,
                caretX: t.x,
                caretY: t.y,
              }));
          } else 0 !== this.opacity && (n = { opacity: 0 });
          ((this._tooltipItems = o),
            (this.$context = void 0),
            n && this._resolveAnimations().update(this, n),
            t &&
              i.external &&
              i.external.call(this, { chart: this.chart, tooltip: this, replay: e }));
        }
        drawCaret(t, e, i, s) {
          const n = this.getCaretPosition(t, i, s);
          (e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3));
        }
        getCaretPosition(t, e, i) {
          const { xAlign: s, yAlign: n } = this,
            { caretSize: o, cornerRadius: a } = i,
            { topLeft: r, topRight: l, bottomLeft: c, bottomRight: h } = ei(a),
            { x: d, y: u } = t,
            { width: p, height: f } = e;
          let g, m, b, x, y, v;
          return (
            'center' === n
              ? ((y = u + f / 2),
                'left' === s
                  ? ((g = d), (m = g - o), (x = y + o), (v = y - o))
                  : ((g = d + p), (m = g + o), (x = y - o), (v = y + o)),
                (b = g))
              : ((m =
                  'left' === s
                    ? d + Math.max(r, c) + o
                    : 'right' === s
                      ? d + p - Math.max(l, h) - o
                      : this.caretX),
                'top' === n
                  ? ((x = u), (y = x - o), (g = m - o), (b = m + o))
                  : ((x = u + f), (y = x + o), (g = m + o), (b = m - o)),
                (v = x)),
            { x1: g, x2: m, x3: b, y1: x, y2: y, y3: v }
          );
        }
        drawTitle(t, e, i) {
          const s = this.title,
            n = s.length;
          let o, a, r;
          if (n) {
            const l = $i(i.rtl, this.x, this.width);
            for (
              t.x = ba(this, i.titleAlign, i),
                e.textAlign = l.textAlign(i.titleAlign),
                e.textBaseline = 'middle',
                o = si(i.titleFont),
                a = i.titleSpacing,
                e.fillStyle = i.titleColor,
                e.font = o.string,
                r = 0;
              r < n;
              ++r
            )
              (e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + a),
                r + 1 === n && (t.y += i.titleMarginBottom - a));
          }
        }
        _drawColorBox(t, e, i, s, n) {
          const o = this.labelColors[i],
            a = this.labelPointStyles[i],
            { boxHeight: r, boxWidth: l } = n,
            c = si(n.bodyFont),
            h = ba(this, 'left', n),
            d = s.x(h),
            u = r < c.lineHeight ? (c.lineHeight - r) / 2 : 0,
            p = e.y + u;
          if (n.usePointStyle) {
            const e = {
                radius: Math.min(l, r) / 2,
                pointStyle: a.pointStyle,
                rotation: a.rotation,
                borderWidth: 1,
              },
              i = s.leftForLtr(d, l) + l / 2,
              c = p + r / 2;
            ((t.strokeStyle = n.multiKeyBackground),
              (t.fillStyle = n.multiKeyBackground),
              Ne(t, e, i, c),
              (t.strokeStyle = o.borderColor),
              (t.fillStyle = o.backgroundColor),
              Ne(t, e, i, c));
          } else {
            ((t.lineWidth = pt(o.borderWidth)
              ? Math.max(...Object.values(o.borderWidth))
              : o.borderWidth || 1),
              (t.strokeStyle = o.borderColor),
              t.setLineDash(o.borderDash || []),
              (t.lineDashOffset = o.borderDashOffset || 0));
            const e = s.leftForLtr(d, l),
              i = s.leftForLtr(s.xPlus(d, 1), l - 2),
              a = ei(o.borderRadius);
            Object.values(a).some((t) => 0 !== t)
              ? (t.beginPath(),
                (t.fillStyle = n.multiKeyBackground),
                Xe(t, { x: e, y: p, w: l, h: r, radius: a }),
                t.fill(),
                t.stroke(),
                (t.fillStyle = o.backgroundColor),
                t.beginPath(),
                Xe(t, { x: i, y: p + 1, w: l - 2, h: r - 2, radius: a }),
                t.fill())
              : ((t.fillStyle = n.multiKeyBackground),
                t.fillRect(e, p, l, r),
                t.strokeRect(e, p, l, r),
                (t.fillStyle = o.backgroundColor),
                t.fillRect(i, p + 1, l - 2, r - 2));
          }
          t.fillStyle = this.labelTextColors[i];
        }
        drawBody(t, e, i) {
          const { body: s } = this,
            {
              bodySpacing: n,
              bodyAlign: o,
              displayColors: a,
              boxHeight: r,
              boxWidth: l,
              boxPadding: c,
            } = i,
            h = si(i.bodyFont);
          let d = h.lineHeight,
            u = 0;
          const p = $i(i.rtl, this.x, this.width),
            f = function (i) {
              (e.fillText(i, p.x(t.x + u), t.y + d / 2), (t.y += d + n));
            },
            g = p.textAlign(o);
          let m, b, x, y, v, _, w;
          for (
            e.textAlign = o,
              e.textBaseline = 'middle',
              e.font = h.string,
              t.x = ba(this, g, i),
              e.fillStyle = i.bodyColor,
              yt(this.beforeBody, f),
              u = a && 'right' !== g ? ('center' === o ? l / 2 + c : l + 2 + c) : 0,
              y = 0,
              _ = s.length;
            y < _;
            ++y
          ) {
            for (
              m = s[y],
                b = this.labelTextColors[y],
                e.fillStyle = b,
                yt(m.before, f),
                x = m.lines,
                a &&
                  x.length &&
                  (this._drawColorBox(e, t, y, p, i), (d = Math.max(h.lineHeight, r))),
                v = 0,
                w = x.length;
              v < w;
              ++v
            )
              (f(x[v]), (d = h.lineHeight));
            yt(m.after, f);
          }
          ((u = 0), (d = h.lineHeight), yt(this.afterBody, f), (t.y -= n));
        }
        drawFooter(t, e, i) {
          const s = this.footer,
            n = s.length;
          let o, a;
          if (n) {
            const r = $i(i.rtl, this.x, this.width);
            for (
              t.x = ba(this, i.footerAlign, i),
                t.y += i.footerMarginTop,
                e.textAlign = r.textAlign(i.footerAlign),
                e.textBaseline = 'middle',
                o = si(i.footerFont),
                e.fillStyle = i.footerColor,
                e.font = o.string,
                a = 0;
              a < n;
              ++a
            )
              (e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + i.footerSpacing));
          }
        }
        drawBackground(t, e, i, s) {
          const { xAlign: n, yAlign: o } = this,
            { x: a, y: r } = t,
            { width: l, height: c } = i,
            { topLeft: h, topRight: d, bottomLeft: u, bottomRight: p } = ei(s.cornerRadius);
          ((e.fillStyle = s.backgroundColor),
            (e.strokeStyle = s.borderColor),
            (e.lineWidth = s.borderWidth),
            e.beginPath(),
            e.moveTo(a + h, r),
            'top' === o && this.drawCaret(t, e, i, s),
            e.lineTo(a + l - d, r),
            e.quadraticCurveTo(a + l, r, a + l, r + d),
            'center' === o && 'right' === n && this.drawCaret(t, e, i, s),
            e.lineTo(a + l, r + c - p),
            e.quadraticCurveTo(a + l, r + c, a + l - p, r + c),
            'bottom' === o && this.drawCaret(t, e, i, s),
            e.lineTo(a + u, r + c),
            e.quadraticCurveTo(a, r + c, a, r + c - u),
            'center' === o && 'left' === n && this.drawCaret(t, e, i, s),
            e.lineTo(a, r + h),
            e.quadraticCurveTo(a, r, a + h, r),
            e.closePath(),
            e.fill(),
            s.borderWidth > 0 && e.stroke());
        }
        _updateAnimationTarget(t) {
          const e = this.chart,
            i = this.$animations,
            s = i && i.x,
            n = i && i.y;
          if (s || n) {
            const i = ca[t.position].call(this, this._active, this._eventPosition);
            if (!i) return;
            const o = (this._size = pa(this, t)),
              a = Object.assign({}, i, this._size),
              r = ga(e, t, a),
              l = ma(t, a, r, e);
            (s._to === l.x && n._to === l.y) ||
              ((this.xAlign = r.xAlign),
              (this.yAlign = r.yAlign),
              (this.width = o.width),
              (this.height = o.height),
              (this.caretX = i.x),
              (this.caretY = i.y),
              this._resolveAnimations().update(this, l));
          }
        }
        _willRender() {
          return !!this.opacity;
        }
        draw(t) {
          const e = this.options.setContext(this.getContext());
          let i = this.opacity;
          if (!i) return;
          this._updateAnimationTarget(e);
          const s = { width: this.width, height: this.height },
            n = { x: this.x, y: this.y };
          i = Math.abs(i) < 0.001 ? 0 : i;
          const o = ii(e.padding),
            a =
              this.title.length ||
              this.beforeBody.length ||
              this.body.length ||
              this.afterBody.length ||
              this.footer.length;
          e.enabled &&
            a &&
            (t.save(),
            (t.globalAlpha = i),
            this.drawBackground(n, t, s, e),
            Wi(t, e.textDirection),
            (n.y += o.top),
            this.drawTitle(n, t, e),
            this.drawBody(n, t, e),
            this.drawFooter(n, t, e),
            ji(t, e.textDirection),
            t.restore());
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t, e) {
          const i = this._active,
            s = t.map(({ datasetIndex: t, index: e }) => {
              const i = this.chart.getDatasetMeta(t);
              if (!i) throw new Error('Cannot find a dataset at index ' + t);
              return { datasetIndex: t, element: i.data[e], index: e };
            }),
            n = !vt(i, s),
            o = this._positionChanged(s, e);
          (n || o) &&
            ((this._active = s),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
        }
        handleEvent(t, e, i = !0) {
          if (e && this._ignoreReplayEvents) return !1;
          this._ignoreReplayEvents = !1;
          const s = this.options,
            n = this._active || [],
            o = this._getActiveElements(t, n, e, i),
            a = this._positionChanged(o, t),
            r = e || !vt(o, n) || a;
          return (
            r &&
              ((this._active = o),
              (s.enabled || s.external) &&
                ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
            r
          );
        }
        _getActiveElements(t, e, i, s) {
          const n = this.options;
          if ('mouseout' === t.type) return [];
          if (!s)
            return e.filter(
              (t) =>
                this.chart.data.datasets[t.datasetIndex] &&
                void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index)
            );
          const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
          return (n.reverse && o.reverse(), o);
        }
        _positionChanged(t, e) {
          const { caretX: i, caretY: s, options: n } = this,
            o = ca[n.position].call(this, t, e);
          return !1 !== o && (i !== o.x || s !== o.y);
        }
      }
      var Ma = {
          id: 'tooltip',
          _element: wa,
          positioners: ca,
          afterInit(t, e, i) {
            i && (t.tooltip = new wa({ chart: t, options: i }));
          },
          beforeUpdate(t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
          },
          reset(t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
          },
          afterDraw(t) {
            const e = t.tooltip;
            if (e && e._willRender()) {
              const i = { tooltip: e };
              if (!1 === t.notifyPlugins('beforeTooltipDraw', { ...i, cancelable: !0 })) return;
              (e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', i));
            }
          },
          afterEvent(t, e) {
            if (t.tooltip) {
              const i = e.replay;
              t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0);
            }
          },
          defaults: {
            enabled: !0,
            external: null,
            position: 'average',
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            titleFont: { weight: 'bold' },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: 'left',
            bodyColor: '#fff',
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: 'left',
            footerColor: '#fff',
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: 'bold' },
            footerAlign: 'left',
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: '#fff',
            displayColors: !0,
            boxPadding: 0,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            animation: { duration: 400, easing: 'easeOutQuart' },
            animations: {
              numbers: {
                type: 'number',
                properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
              },
              opacity: { easing: 'linear', duration: 200 },
            },
            callbacks: va,
          },
          defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
          descriptors: {
            _scriptable: (t) => 'filter' !== t && 'itemSort' !== t && 'external' !== t,
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: 'animation' },
          },
          additionalOptionScopes: ['interaction'],
        },
        ka = Object.freeze({
          __proto__: null,
          Colors: Lo,
          Decimation: Fo,
          Filler: ta,
          Legend: na,
          SubTitle: la,
          Title: aa,
          Tooltip: Ma,
        });
      function Sa(t, e, i, s) {
        const n = t.indexOf(e);
        return -1 === n
          ? ((t, e, i, s) => (
              'string' == typeof e
                ? ((i = t.push(e) - 1), s.unshift({ index: i, label: e }))
                : isNaN(e) && (i = null),
              i
            ))(t, e, i, s)
          : n !== t.lastIndexOf(e)
            ? i
            : n;
      }
      function Pa(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t;
      }
      function Aa(t, e) {
        const i = [],
          {
            bounds: s,
            step: n,
            min: o,
            max: a,
            precision: r,
            count: l,
            maxTicks: c,
            maxDigits: h,
            includeBounds: d,
          } = t,
          u = n || 1,
          p = c - 1,
          { min: f, max: g } = e,
          m = !dt(o),
          b = !dt(a),
          x = !dt(l),
          y = (g - f) / (h + 1);
        let v,
          _,
          w,
          M,
          k = jt((g - f) / p / u) * u;
        if (k < 1e-14 && !m && !b) return [{ value: f }, { value: g }];
        ((M = Math.ceil(g / k) - Math.floor(f / k)),
          M > p && (k = jt((M * k) / p / u) * u),
          dt(r) || ((v = Math.pow(10, r)), (k = Math.ceil(k * v) / v)),
          'ticks' === s
            ? ((_ = Math.floor(f / k) * k), (w = Math.ceil(g / k) * k))
            : ((_ = f), (w = g)),
          m &&
          b &&
          n &&
          (function (t, e) {
            const i = Math.round(t);
            return i - e <= t && i + e >= t;
          })((a - o) / n, k / 1e3)
            ? ((M = Math.round(Math.min((a - o) / k, c))), (k = (a - o) / M), (_ = o), (w = a))
            : x
              ? ((_ = m ? o : _), (w = b ? a : w), (M = l - 1), (k = (w - _) / M))
              : ((M = (w - _) / k),
                (M = Wt(M, Math.round(M), k / 1e3) ? Math.round(M) : Math.ceil(M))));
        const S = Math.max(Kt(k), Kt(_));
        ((v = Math.pow(10, dt(r) ? S : r)),
          (_ = Math.round(_ * v) / v),
          (w = Math.round(w * v) / v));
        let P = 0;
        for (
          m &&
          (d && _ !== o
            ? (i.push({ value: o }),
              _ < o && P++,
              Wt(Math.round((_ + P * k) * v) / v, o, Da(o, y, t)) && P++)
            : _ < o && P++);
          P < M;
          ++P
        ) {
          const t = Math.round((_ + P * k) * v) / v;
          if (b && t > a) break;
          i.push({ value: t });
        }
        return (
          b && d && w !== a
            ? i.length && Wt(i[i.length - 1].value, a, Da(a, y, t))
              ? (i[i.length - 1].value = a)
              : i.push({ value: a })
            : (b && w !== a) || i.push({ value: w }),
          i
        );
      }
      function Da(t, e, { horizontal: i, minRotation: s }) {
        const n = qt(s),
          o = (i ? Math.sin(n) : Math.cos(n)) || 0.001,
          a = 0.75 * e * ('' + t).length;
        return Math.min(e / o, a);
      }
      class Ca extends Pn {
        constructor(t) {
          (super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0));
        }
        parse(t, e) {
          return dt(t) || (('number' == typeof t || t instanceof Number) && !isFinite(+t))
            ? null
            : +t;
        }
        handleTickRangeOptions() {
          const { beginAtZero: t } = this.options,
            { minDefined: e, maxDefined: i } = this.getUserBounds();
          let { min: s, max: n } = this;
          const o = (t) => (s = e ? s : t),
            a = (t) => (n = i ? n : t);
          if (t) {
            const t = $t(s),
              e = $t(n);
            t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
          }
          if (s === n) {
            let e = 0 === n ? 1 : Math.abs(0.05 * n);
            (a(n + e), t || o(s - e));
          }
          ((this.min = s), (this.max = n));
        }
        getTickLimit() {
          const t = this.options.ticks;
          let e,
            { maxTicksLimit: i, stepSize: s } = t;
          return (
            s
              ? ((e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
                e > 1e3 &&
                  (console.warn(
                    `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`
                  ),
                  (e = 1e3)))
              : ((e = this.computeTickLimit()), (i = i || 11)),
            i && (e = Math.min(i, e)),
            e
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const t = this.options,
            e = t.ticks;
          let i = this.getTickLimit();
          i = Math.max(2, i);
          const s = Aa(
            {
              maxTicks: i,
              bounds: t.bounds,
              min: t.min,
              max: t.max,
              precision: e.precision,
              step: e.stepSize,
              count: e.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: e.minRotation || 0,
              includeBounds: !1 !== e.includeBounds,
            },
            this._range || this
          );
          return (
            'ticks' === t.bounds && Ut(s, this, 'value'),
            t.reverse
              ? (s.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            s
          );
        }
        configure() {
          const t = this.ticks;
          let e = this.min,
            i = this.max;
          if ((super.configure(), this.options.offset && t.length)) {
            const s = (i - e) / Math.max(t.length - 1, 1) / 2;
            ((e -= s), (i += s));
          }
          ((this._startValue = e), (this._endValue = i), (this._valueRange = i - e));
        }
        getLabelForValue(t) {
          return Se(t, this.chart.options.locale, this.options.ticks.format);
        }
      }
      class Ea extends Ca {
        static id = 'linear';
        static defaults = { ticks: { callback: Ae.formatters.numeric } };
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          ((this.min = ft(t) ? t : 0), (this.max = ft(e) ? e : 1), this.handleTickRangeOptions());
        }
        computeTickLimit() {
          const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            i = qt(this.options.ticks.minRotation),
            s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
            n = this._resolveTickFontOptions(0);
          return Math.ceil(e / Math.min(40, n.lineHeight / s));
        }
        getPixelForValue(t) {
          return null === t
            ? NaN
            : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
        }
        getValueForPixel(t) {
          return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
        }
      }
      const Ta = (t) => Math.floor(Ht(t)),
        Ia = (t, e) => Math.pow(10, Ta(t) + e);
      function La(t) {
        return 1 === t / Math.pow(10, Ta(t));
      }
      function Oa(t, e, i) {
        const s = Math.pow(10, i),
          n = Math.floor(t / s);
        return Math.ceil(e / s) - n;
      }
      function Ra(t, { min: e, max: i }) {
        e = gt(t.min, e);
        const s = [],
          n = Ta(e);
        let o = (function (t, e) {
            let i = Ta(e - t);
            for (; Oa(t, e, i) > 10; ) i++;
            for (; Oa(t, e, i) < 10; ) i--;
            return Math.min(i, Ta(t));
          })(e, i),
          a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
        const r = Math.pow(10, o),
          l = n > o ? Math.pow(10, n) : 0,
          c = Math.round((e - l) * a) / a,
          h = Math.floor((e - l) / r / 10) * r * 10;
        let d = Math.floor((c - h) / Math.pow(10, o)),
          u = gt(t.min, Math.round((l + h + d * Math.pow(10, o)) * a) / a);
        for (; u < i; )
          (s.push({ value: u, major: La(u), significand: d }),
            d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
            d >= 20 && (o++, (d = 2), (a = o >= 0 ? 1 : a)),
            (u = Math.round((l + h + d * Math.pow(10, o)) * a) / a));
        const p = gt(t.max, u);
        return (s.push({ value: p, major: La(p), significand: d }), s);
      }
      class Fa extends Pn {
        static id = 'logarithmic';
        static defaults = {
          ticks: { callback: Ae.formatters.logarithmic, major: { enabled: !0 } },
        };
        constructor(t) {
          (super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0));
        }
        parse(t, e) {
          const i = Ca.prototype.parse.apply(this, [t, e]);
          if (0 !== i) return ft(i) && i > 0 ? i : null;
          this._zero = !0;
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          ((this.min = ft(t) ? Math.max(0, t) : null),
            (this.max = ft(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this._zero &&
              this.min !== this._suggestedMin &&
              !ft(this._userMin) &&
              (this.min = t === Ia(this.min, 0) ? Ia(this.min, -1) : Ia(this.min, 0)),
            this.handleTickRangeOptions());
        }
        handleTickRangeOptions() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let i = this.min,
            s = this.max;
          const n = (e) => (i = t ? i : e),
            o = (t) => (s = e ? s : t);
          (i === s && (i <= 0 ? (n(1), o(10)) : (n(Ia(i, -1)), o(Ia(s, 1)))),
            i <= 0 && n(Ia(s, -1)),
            s <= 0 && o(Ia(i, 1)),
            (this.min = i),
            (this.max = s));
        }
        buildTicks() {
          const t = this.options,
            e = Ra({ min: this._userMin, max: this._userMax }, this);
          return (
            'ticks' === t.bounds && Ut(e, this, 'value'),
            t.reverse
              ? (e.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            e
          );
        }
        getLabelForValue(t) {
          return void 0 === t ? '0' : Se(t, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
          const t = this.min;
          (super.configure(),
            (this._startValue = Ht(t)),
            (this._valueRange = Ht(this.max) - Ht(t)));
        }
        getPixelForValue(t) {
          return (
            (void 0 !== t && 0 !== t) || (t = this.min),
            null === t || isNaN(t)
              ? NaN
              : this.getPixelForDecimal(
                  t === this.min ? 0 : (Ht(t) - this._startValue) / this._valueRange
                )
          );
        }
        getValueForPixel(t) {
          const e = this.getDecimalForPixel(t);
          return Math.pow(10, this._startValue + e * this._valueRange);
        }
      }
      function za(t) {
        const e = t.ticks;
        if (e.display && t.display) {
          const t = ii(e.backdropPadding);
          return mt(e.font && e.font.size, Le.font.size) + t.height;
        }
        return 0;
      }
      function Na(t, e, i) {
        return ((i = ut(i) ? i : [i]), { w: Re(t, e.string, i), h: i.length * e.lineHeight });
      }
      function Ba(t, e, i, s, n) {
        return t === s || t === n
          ? { start: e - i / 2, end: e + i / 2 }
          : t < s || t > n
            ? { start: e - i, end: e }
            : { start: e, end: e + i };
      }
      function Va(t) {
        const e = {
            l: t.left + t._padding.left,
            r: t.right - t._padding.right,
            t: t.top + t._padding.top,
            b: t.bottom - t._padding.bottom,
          },
          i = Object.assign({}, e),
          s = [],
          n = [],
          o = t._pointLabels.length,
          a = t.options.pointLabels,
          r = a.centerPointLabels ? Lt / o : 0;
        for (let l = 0; l < o; l++) {
          const o = a.setContext(t.getPointLabelContext(l));
          n[l] = o.padding;
          const c = t.getPointPosition(l, t.drawingArea + n[l], r),
            h = si(o.font),
            d = Na(t.ctx, h, t._pointLabels[l]);
          s[l] = d;
          const u = Qt(t.getIndexAngle(l) + r),
            p = Math.round(Xt(u));
          Ha(i, e, u, Ba(p, c.x, d.w, 0, 180), Ba(p, c.y, d.h, 90, 270));
        }
        (t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
          (t._pointLabelItems = (function (t, e, i) {
            const s = [],
              n = t._pointLabels.length,
              o = t.options,
              { centerPointLabels: a, display: r } = o.pointLabels,
              l = { extra: za(o) / 2, additionalAngle: a ? Lt / n : 0 };
            let c;
            for (let h = 0; h < n; h++) {
              ((l.padding = i[h]), (l.size = e[h]));
              const n = $a(t, h, l);
              (s.push(n), 'auto' === r && ((n.visible = Wa(n, c)), n.visible && (c = n)));
            }
            return s;
          })(t, s, n)));
      }
      function Ha(t, e, i, s, n) {
        const o = Math.abs(Math.sin(i)),
          a = Math.abs(Math.cos(i));
        let r = 0,
          l = 0;
        (s.start < e.l
          ? ((r = (e.l - s.start) / o), (t.l = Math.min(t.l, e.l - r)))
          : s.end > e.r && ((r = (s.end - e.r) / o), (t.r = Math.max(t.r, e.r + r))),
          n.start < e.t
            ? ((l = (e.t - n.start) / a), (t.t = Math.min(t.t, e.t - l)))
            : n.end > e.b && ((l = (n.end - e.b) / a), (t.b = Math.max(t.b, e.b + l))));
      }
      function $a(t, e, i) {
        const s = t.drawingArea,
          { extra: n, additionalAngle: o, padding: a, size: r } = i,
          l = t.getPointPosition(e, s + n + a, o),
          c = Math.round(Xt(Qt(l.angle + Nt))),
          h = (function (t, e, i) {
            return (90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e), t);
          })(l.y, r.h, c),
          d = (function (t) {
            return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right';
          })(c),
          u =
            ((p = l.x),
            (f = r.w),
            'right' === (g = d) ? (p -= f) : 'center' === g && (p -= f / 2),
            p);
        var p, f, g;
        return {
          visible: !0,
          x: l.x,
          y: h,
          textAlign: d,
          left: u,
          top: h,
          right: u + r.w,
          bottom: h + r.h,
        };
      }
      function Wa(t, e) {
        if (!e) return !0;
        const { left: i, top: s, right: n, bottom: o } = t;
        return !(
          Ve({ x: i, y: s }, e) ||
          Ve({ x: i, y: o }, e) ||
          Ve({ x: n, y: s }, e) ||
          Ve({ x: n, y: o }, e)
        );
      }
      function ja(t, e, i) {
        const { left: s, top: n, right: o, bottom: a } = i,
          { backdropColor: r } = e;
        if (!dt(r)) {
          const i = ei(e.borderRadius),
            l = ii(e.backdropPadding);
          t.fillStyle = r;
          const c = s - l.left,
            h = n - l.top,
            d = o - s + l.width,
            u = a - n + l.height;
          Object.values(i).some((t) => 0 !== t)
            ? (t.beginPath(), Xe(t, { x: c, y: h, w: d, h: u, radius: i }), t.fill())
            : t.fillRect(c, h, d, u);
        }
      }
      function Ya(t, e, i, s) {
        const { ctx: n } = t;
        if (i) n.arc(t.xCenter, t.yCenter, e, 0, Ot);
        else {
          let i = t.getPointPosition(0, e);
          n.moveTo(i.x, i.y);
          for (let o = 1; o < s; o++) ((i = t.getPointPosition(o, e)), n.lineTo(i.x, i.y));
        }
      }
      class Ua extends Ca {
        static id = 'radialLinear';
        static defaults = {
          display: !0,
          animate: !0,
          position: 'chartArea',
          angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: Ae.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: (t) => t,
            padding: 5,
            centerPointLabels: !1,
          },
        };
        static defaultRoutes = {
          'angleLines.color': 'borderColor',
          'pointLabels.color': 'color',
          'ticks.color': 'color',
        };
        static descriptors = { angleLines: { _fallback: 'grid' } };
        constructor(t) {
          (super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []));
        }
        setDimensions() {
          const t = (this._padding = ii(za(this.options) / 2)),
            e = (this.width = this.maxWidth - t.width),
            i = (this.height = this.maxHeight - t.height);
          ((this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, i) / 2)));
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!1);
          ((this.min = ft(t) && !isNaN(t) ? t : 0),
            (this.max = ft(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions());
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / za(this.options));
        }
        generateTickLabels(t) {
          (Ca.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
              .map((t, e) => {
                const i = xt(this.options.pointLabels.callback, [t, e], this);
                return i || 0 === i ? i : '';
              })
              .filter((t, e) => this.chart.getDataVisibility(e))));
        }
        fit() {
          const t = this.options;
          t.display && t.pointLabels.display ? Va(this) : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(t, e, i, s) {
          ((this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((i - s) / 2)),
            (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s))));
        }
        getIndexAngle(t) {
          return Qt(t * (Ot / (this._pointLabels.length || 1)) + qt(this.options.startAngle || 0));
        }
        getDistanceFromCenterForValue(t) {
          if (dt(t)) return NaN;
          const e = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
        }
        getValueForDistanceFromCenter(t) {
          if (dt(t)) return NaN;
          const e = t / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - e : this.min + e;
        }
        getPointLabelContext(t) {
          const e = this._pointLabels || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return (function (t, e, i) {
              return oi(t, { label: i, index: e, type: 'pointLabel' });
            })(this.getContext(), t, i);
          }
        }
        getPointPosition(t, e, i = 0) {
          const s = this.getIndexAngle(t) - Nt + i;
          return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s };
        }
        getPointPositionForValue(t, e) {
          return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
        getPointLabelPosition(t) {
          const { left: e, top: i, right: s, bottom: n } = this._pointLabelItems[t];
          return { left: e, top: i, right: s, bottom: n };
        }
        drawBackground() {
          const {
            backgroundColor: t,
            grid: { circular: e },
          } = this.options;
          if (t) {
            const i = this.ctx;
            (i.save(),
              i.beginPath(),
              Ya(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                e,
                this._pointLabels.length
              ),
              i.closePath(),
              (i.fillStyle = t),
              i.fill(),
              i.restore());
          }
        }
        drawGrid() {
          const t = this.ctx,
            e = this.options,
            { angleLines: i, grid: s, border: n } = e,
            o = this._pointLabels.length;
          let a, r, l;
          if (
            (e.pointLabels.display &&
              (function (t, e) {
                const {
                  ctx: i,
                  options: { pointLabels: s },
                } = t;
                for (let n = e - 1; n >= 0; n--) {
                  const e = t._pointLabelItems[n];
                  if (!e.visible) continue;
                  const o = s.setContext(t.getPointLabelContext(n));
                  ja(i, o, e);
                  const a = si(o.font),
                    { x: r, y: l, textAlign: c } = e;
                  qe(i, t._pointLabels[n], r, l + a.lineHeight / 2, a, {
                    color: o.color,
                    textAlign: c,
                    textBaseline: 'middle',
                  });
                }
              })(this, o),
            s.display &&
              this.ticks.forEach((t, e) => {
                if (0 !== e || (0 === e && this.min < 0)) {
                  r = this.getDistanceFromCenterForValue(t.value);
                  const i = this.getContext(e),
                    a = s.setContext(i),
                    l = n.setContext(i);
                  !(function (t, e, i, s, n) {
                    const o = t.ctx,
                      a = e.circular,
                      { color: r, lineWidth: l } = e;
                    (!a && !s) ||
                      !r ||
                      !l ||
                      i < 0 ||
                      (o.save(),
                      (o.strokeStyle = r),
                      (o.lineWidth = l),
                      o.setLineDash(n.dash || []),
                      (o.lineDashOffset = n.dashOffset),
                      o.beginPath(),
                      Ya(t, i, a, s),
                      o.closePath(),
                      o.stroke(),
                      o.restore());
                  })(this, a, r, o, l);
                }
              }),
            i.display)
          ) {
            for (t.save(), a = o - 1; a >= 0; a--) {
              const s = i.setContext(this.getPointLabelContext(a)),
                { color: n, lineWidth: o } = s;
              o &&
                n &&
                ((t.lineWidth = o),
                (t.strokeStyle = n),
                t.setLineDash(s.borderDash),
                (t.lineDashOffset = s.borderDashOffset),
                (r = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max)),
                (l = this.getPointPosition(a, r)),
                t.beginPath(),
                t.moveTo(this.xCenter, this.yCenter),
                t.lineTo(l.x, l.y),
                t.stroke());
            }
            t.restore();
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this.ctx,
            e = this.options,
            i = e.ticks;
          if (!i.display) return;
          const s = this.getIndexAngle(0);
          let n, o;
          (t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(s),
            (t.textAlign = 'center'),
            (t.textBaseline = 'middle'),
            this.ticks.forEach((s, a) => {
              if (0 === a && this.min >= 0 && !e.reverse) return;
              const r = i.setContext(this.getContext(a)),
                l = si(r.font);
              if (
                ((n = this.getDistanceFromCenterForValue(this.ticks[a].value)), r.showLabelBackdrop)
              ) {
                ((t.font = l.string),
                  (o = t.measureText(s.label).width),
                  (t.fillStyle = r.backdropColor));
                const e = ii(r.backdropPadding);
                t.fillRect(
                  -o / 2 - e.left,
                  -n - l.size / 2 - e.top,
                  o + e.width,
                  l.size + e.height
                );
              }
              qe(t, s.label, 0, -n, l, {
                color: r.color,
                strokeColor: r.textStrokeColor,
                strokeWidth: r.textStrokeWidth,
              });
            }),
            t.restore());
        }
        drawTitle() {}
      }
      const qa = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        Xa = Object.keys(qa);
      function Ka(t, e) {
        return t - e;
      }
      function Za(t, e) {
        if (dt(e)) return null;
        const i = t._adapter,
          { parser: s, round: n, isoWeekday: o } = t._parseOpts;
        let a = e;
        return (
          'function' == typeof s && (a = s(a)),
          ft(a) || (a = 'string' == typeof s ? i.parse(a, s) : i.parse(a)),
          null === a
            ? null
            : (n &&
                (a =
                  'week' !== n || (!Yt(o) && !0 !== o)
                    ? i.startOf(a, n)
                    : i.startOf(a, 'isoWeek', o)),
              +a)
        );
      }
      function Ja(t, e, i, s) {
        const n = Xa.length;
        for (let o = Xa.indexOf(t); o < n - 1; ++o) {
          const t = qa[Xa[o]],
            n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
          if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Xa[o];
        }
        return Xa[n - 1];
      }
      function Ga(t, e, i) {
        if (i) {
          if (i.length) {
            const { lo: s, hi: n } = se(i, e);
            t[i[s] >= e ? i[s] : i[n]] = !0;
          }
        } else t[e] = !0;
      }
      function Qa(t, e, i) {
        const s = [],
          n = {},
          o = e.length;
        let a, r;
        for (a = 0; a < o; ++a) ((r = e[a]), (n[r] = a), s.push({ value: r, major: !1 }));
        return 0 !== o && i
          ? (function (t, e, i, s) {
              const n = t._adapter,
                o = +n.startOf(e[0].value, s),
                a = e[e.length - 1].value;
              let r, l;
              for (r = o; r <= a; r = +n.add(r, 1, s)) ((l = i[r]), l >= 0 && (e[l].major = !0));
              return e;
            })(t, s, n, i)
          : s;
      }
      class tr extends Pn {
        static id = 'time';
        static defaults = {
          bounds: 'data',
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: 'millisecond',
            displayFormats: {},
          },
          ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
        };
        constructor(t) {
          (super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = 'day'),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0));
        }
        init(t, e = {}) {
          const i = t.time || (t.time = {}),
            s = (this._adapter = new Ts(t.adapters.date));
          (s.init(e),
            St(i.displayFormats, s.formats()),
            (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
            super.init(t),
            (this._normalized = e.normalized));
        }
        parse(t, e) {
          return void 0 === t ? null : Za(this, t);
        }
        beforeLayout() {
          (super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] }));
        }
        determineDataLimits() {
          const t = this.options,
            e = this._adapter,
            i = t.time.unit || 'day';
          let { min: s, max: n, minDefined: o, maxDefined: a } = this.getUserBounds();
          function r(t) {
            (o || isNaN(t.min) || (s = Math.min(s, t.min)),
              a || isNaN(t.max) || (n = Math.max(n, t.max)));
          }
          ((o && a) ||
            (r(this._getLabelBounds()),
            ('ticks' === t.bounds && 'labels' === t.ticks.source) || r(this.getMinMax(!1))),
            (s = ft(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
            (n = ft(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1),
            (this.min = Math.min(s, n - 1)),
            (this.max = Math.max(s + 1, n)));
        }
        _getLabelBounds() {
          const t = this.getLabelTimestamps();
          let e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
          return (t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i });
        }
        buildTicks() {
          const t = this.options,
            e = t.time,
            i = t.ticks,
            s = 'labels' === i.source ? this.getLabelTimestamps() : this._generate();
          'ticks' === t.bounds &&
            s.length &&
            ((this.min = this._userMin || s[0]), (this.max = this._userMax || s[s.length - 1]));
          const n = this.min,
            o = (function (t, e, i) {
              let s = 0,
                n = t.length;
              for (; s < n && t[s] < e; ) s++;
              for (; n > s && t[n - 1] > i; ) n--;
              return s > 0 || n < t.length ? t.slice(s, n) : t;
            })(s, n, this.max);
          return (
            (this._unit =
              e.unit ||
              (i.autoSkip
                ? Ja(e.minUnit, this.min, this.max, this._getLabelCapacity(n))
                : (function (t, e, i, s, n) {
                    for (let o = Xa.length - 1; o >= Xa.indexOf(i); o--) {
                      const i = Xa[o];
                      if (qa[i].common && t._adapter.diff(n, s, i) >= e - 1) return i;
                    }
                    return Xa[i ? Xa.indexOf(i) : 0];
                  })(this, o.length, e.minUnit, this.min, this.max))),
            (this._majorUnit =
              i.major.enabled && 'year' !== this._unit
                ? (function (t) {
                    for (let e = Xa.indexOf(t) + 1, i = Xa.length; e < i; ++e)
                      if (qa[Xa[e]].common) return Xa[e];
                  })(this._unit)
                : void 0),
            this.initOffsets(s),
            t.reverse && o.reverse(),
            Qa(this, o, this._majorUnit)
          );
        }
        afterAutoSkip() {
          this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
        }
        initOffsets(t = []) {
          let e,
            i,
            s = 0,
            n = 0;
          this.options.offset &&
            t.length &&
            ((e = this.getDecimalForValue(t[0])),
            (s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
            (i = this.getDecimalForValue(t[t.length - 1])),
            (n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
          const o = t.length < 3 ? 0.5 : 0.25;
          ((s = ee(s, 0, o)),
            (n = ee(n, 0, o)),
            (this._offsets = { start: s, end: n, factor: 1 / (s + 1 + n) }));
        }
        _generate() {
          const t = this._adapter,
            e = this.min,
            i = this.max,
            s = this.options,
            n = s.time,
            o = n.unit || Ja(n.minUnit, e, i, this._getLabelCapacity(e)),
            a = mt(s.ticks.stepSize, 1),
            r = 'week' === o && n.isoWeekday,
            l = Yt(r) || !0 === r,
            c = {};
          let h,
            d,
            u = e;
          if (
            (l && (u = +t.startOf(u, 'isoWeek', r)),
            (u = +t.startOf(u, l ? 'day' : o)),
            t.diff(i, e, o) > 1e5 * a)
          )
            throw new Error(e + ' and ' + i + ' are too far apart with stepSize of ' + a + ' ' + o);
          const p = 'data' === s.ticks.source && this.getDataTimestamps();
          for (h = u, d = 0; h < i; h = +t.add(h, a, o), d++) Ga(c, h, p);
          return (
            (h !== i && 'ticks' !== s.bounds && 1 !== d) || Ga(c, h, p),
            Object.keys(c)
              .sort(Ka)
              .map((t) => +t)
          );
        }
        getLabelForValue(t) {
          const e = this._adapter,
            i = this.options.time;
          return i.tooltipFormat
            ? e.format(t, i.tooltipFormat)
            : e.format(t, i.displayFormats.datetime);
        }
        format(t, e) {
          const i = this.options.time.displayFormats,
            s = this._unit,
            n = e || i[s];
          return this._adapter.format(t, n);
        }
        _tickFormatFunction(t, e, i, s) {
          const n = this.options,
            o = n.ticks.callback;
          if (o) return xt(o, [t, e, i], this);
          const a = n.time.displayFormats,
            r = this._unit,
            l = this._majorUnit,
            c = r && a[r],
            h = l && a[l],
            d = i[e],
            u = l && h && d && d.major;
          return this._adapter.format(t, s || (u ? h : c));
        }
        generateTickLabels(t) {
          let e, i, s;
          for (e = 0, i = t.length; e < i; ++e)
            ((s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t)));
        }
        getDecimalForValue(t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min);
        }
        getPixelForValue(t) {
          const e = this._offsets,
            i = this.getDecimalForValue(t);
          return this.getPixelForDecimal((e.start + i) * e.factor);
        }
        getValueForPixel(t) {
          const e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
          return this.min + i * (this.max - this.min);
        }
        _getLabelSize(t) {
          const e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            s = qt(this.isHorizontal() ? e.maxRotation : e.minRotation),
            n = Math.cos(s),
            o = Math.sin(s),
            a = this._resolveTickFontOptions(0).size;
          return { w: i * n + a * o, h: i * o + a * n };
        }
        _getLabelCapacity(t) {
          const e = this.options.time,
            i = e.displayFormats,
            s = i[e.unit] || i.millisecond,
            n = this._tickFormatFunction(t, 0, Qa(this, [t], this._majorUnit), s),
            o = this._getLabelSize(n),
            a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
          return a > 0 ? a : 1;
        }
        getDataTimestamps() {
          let t,
            e,
            i = this._cache.data || [];
          if (i.length) return i;
          const s = this.getMatchingVisibleMetas();
          if (this._normalized && s.length)
            return (this._cache.data = s[0].controller.getAllParsedValues(this));
          for (t = 0, e = s.length; t < e; ++t)
            i = i.concat(s[t].controller.getAllParsedValues(this));
          return (this._cache.data = this.normalize(i));
        }
        getLabelTimestamps() {
          const t = this._cache.labels || [];
          let e, i;
          if (t.length) return t;
          const s = this.getLabels();
          for (e = 0, i = s.length; e < i; ++e) t.push(Za(this, s[e]));
          return (this._cache.labels = this._normalized ? t : this.normalize(t));
        }
        normalize(t) {
          return le(t.sort(Ka));
        }
      }
      function er(t, e, i) {
        let s,
          n,
          o,
          a,
          r = 0,
          l = t.length - 1;
        i
          ? (e >= t[r].pos && e <= t[l].pos && ({ lo: r, hi: l } = ne(t, 'pos', e)),
            ({ pos: s, time: o } = t[r]),
            ({ pos: n, time: a } = t[l]))
          : (e >= t[r].time && e <= t[l].time && ({ lo: r, hi: l } = ne(t, 'time', e)),
            ({ time: s, pos: o } = t[r]),
            ({ time: n, pos: a } = t[l]));
        const c = n - s;
        return c ? o + ((a - o) * (e - s)) / c : o;
      }
      var ir = Object.freeze({
        __proto__: null,
        CategoryScale: class extends Pn {
          static id = 'category';
          static defaults = { ticks: { callback: Pa } };
          constructor(t) {
            (super(t),
              (this._startValue = void 0),
              (this._valueRange = 0),
              (this._addedLabels = []));
          }
          init(t) {
            const e = this._addedLabels;
            if (e.length) {
              const t = this.getLabels();
              for (const { index: i, label: s } of e) t[i] === s && t.splice(i, 1);
              this._addedLabels = [];
            }
            super.init(t);
          }
          parse(t, e) {
            if (dt(t)) return null;
            const i = this.getLabels();
            return ((t, e) => (null === t ? null : ee(Math.round(t), 0, e)))(
              (e = isFinite(e) && i[e] === t ? e : Sa(i, t, mt(e, t), this._addedLabels)),
              i.length - 1
            );
          }
          determineDataLimits() {
            const { minDefined: t, maxDefined: e } = this.getUserBounds();
            let { min: i, max: s } = this.getMinMax(!0);
            ('ticks' === this.options.bounds &&
              (t || (i = 0), e || (s = this.getLabels().length - 1)),
              (this.min = i),
              (this.max = s));
          }
          buildTicks() {
            const t = this.min,
              e = this.max,
              i = this.options.offset,
              s = [];
            let n = this.getLabels();
            ((n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1)),
              (this._valueRange = Math.max(n.length - (i ? 0 : 1), 1)),
              (this._startValue = this.min - (i ? 0.5 : 0)));
            for (let o = t; o <= e; o++) s.push({ value: o });
            return s;
          }
          getLabelForValue(t) {
            return Pa.call(this, t);
          }
          configure() {
            (super.configure(),
              this.isHorizontal() || (this._reversePixels = !this._reversePixels));
          }
          getPixelForValue(t) {
            return (
              'number' != typeof t && (t = this.parse(t)),
              null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            );
          }
          getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
          }
          getValueForPixel(t) {
            return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
          }
          getBasePixel() {
            return this.bottom;
          }
        },
        LinearScale: Ea,
        LogarithmicScale: Fa,
        RadialLinearScale: Ua,
        TimeScale: tr,
        TimeSeriesScale: class extends tr {
          static id = 'timeseries';
          static defaults = tr.defaults;
          constructor(t) {
            (super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0));
          }
          initOffsets() {
            const t = this._getTimestampsForTable(),
              e = (this._table = this.buildLookupTable(t));
            ((this._minPos = er(e, this.min)),
              (this._tableRange = er(e, this.max) - this._minPos),
              super.initOffsets(t));
          }
          buildLookupTable(t) {
            const { min: e, max: i } = this,
              s = [],
              n = [];
            let o, a, r, l, c;
            for (o = 0, a = t.length; o < a; ++o) ((l = t[o]), l >= e && l <= i && s.push(l));
            if (s.length < 2)
              return [
                { time: e, pos: 0 },
                { time: i, pos: 1 },
              ];
            for (o = 0, a = s.length; o < a; ++o)
              ((c = s[o + 1]),
                (r = s[o - 1]),
                (l = s[o]),
                Math.round((c + r) / 2) !== l && n.push({ time: l, pos: o / (a - 1) }));
            return n;
          }
          _generate() {
            const t = this.min,
              e = this.max;
            let i = super.getDataTimestamps();
            return (
              (i.includes(t) && i.length) || i.splice(0, 0, t),
              (i.includes(e) && 1 !== i.length) || i.push(e),
              i.sort((t, e) => t - e)
            );
          }
          _getTimestampsForTable() {
            let t = this._cache.all || [];
            if (t.length) return t;
            const e = this.getDataTimestamps(),
              i = this.getLabelTimestamps();
            return (
              (t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i),
              (t = this._cache.all = t),
              t
            );
          }
          getDecimalForValue(t) {
            return (er(this._table, t) - this._minPos) / this._tableRange;
          }
          getValueForPixel(t) {
            const e = this._offsets,
              i = this.getDecimalForPixel(t) / e.factor - e.end;
            return er(this._table, i * this._tableRange + this._minPos, !0);
          }
        },
      });
      const sr = [Ds, Po, ka, ir];
      function nr(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
          ? t.default
          : t;
      }
      so.register(...sr);
      var or,
        ar = { exports: {} },
        rr =
          (or ||
            ((or = 1),
            (function (t) {
              !(function (e, i, s, n) {
                var o,
                  a = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'],
                  r = i.createElement('div'),
                  l = Math.round,
                  c = Math.abs,
                  h = Date.now;
                function d(t, e, i) {
                  return setTimeout(x(t, i), e);
                }
                function u(t, e, i) {
                  return !!Array.isArray(t) && (p(t, i[e], i), !0);
                }
                function p(t, e, i) {
                  var s;
                  if (t)
                    if (t.forEach) t.forEach(e, i);
                    else if (t.length !== n)
                      for (s = 0; s < t.length; ) (e.call(i, t[s], s, t), s++);
                    else for (s in t) t.hasOwnProperty(s) && e.call(i, t[s], s, t);
                }
                function f(t, i, s) {
                  var n = 'DEPRECATED METHOD: ' + i + '\n' + s + ' AT \n';
                  return function () {
                    var i = new Error('get-stack-trace'),
                      s =
                        i && i.stack
                          ? i.stack
                              .replace(/^[^\(]+?[\n$]/gm, '')
                              .replace(/^\s+at\s+/gm, '')
                              .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                          : 'Unknown Stack Trace',
                      o = e.console && (e.console.warn || e.console.log);
                    return (o && o.call(e.console, n, s), t.apply(this, arguments));
                  };
                }
                o =
                  'function' != typeof Object.assign
                    ? function (t) {
                        if (t === n || null === t)
                          throw new TypeError('Cannot convert undefined or null to object');
                        for (var e = Object(t), i = 1; i < arguments.length; i++) {
                          var s = arguments[i];
                          if (s !== n && null !== s)
                            for (var o in s) s.hasOwnProperty(o) && (e[o] = s[o]);
                        }
                        return e;
                      }
                    : Object.assign;
                var g = f(
                    function (t, e, i) {
                      for (var s = Object.keys(e), o = 0; o < s.length; )
                        ((!i || (i && t[s[o]] === n)) && (t[s[o]] = e[s[o]]), o++);
                      return t;
                    },
                    'extend',
                    'Use `assign`.'
                  ),
                  m = f(
                    function (t, e) {
                      return g(t, e, !0);
                    },
                    'merge',
                    'Use `assign`.'
                  );
                function b(t, e, i) {
                  var s,
                    n = e.prototype;
                  (((s = t.prototype = Object.create(n)).constructor = t),
                    (s._super = n),
                    i && o(s, i));
                }
                function x(t, e) {
                  return function () {
                    return t.apply(e, arguments);
                  };
                }
                function y(t, e) {
                  return 'function' == typeof t ? t.apply((e && e[0]) || n, e) : t;
                }
                function v(t, e) {
                  return t === n ? e : t;
                }
                function _(t, e, i) {
                  p(S(e), function (e) {
                    t.addEventListener(e, i, !1);
                  });
                }
                function w(t, e, i) {
                  p(S(e), function (e) {
                    t.removeEventListener(e, i, !1);
                  });
                }
                function M(t, e) {
                  for (; t; ) {
                    if (t == e) return !0;
                    t = t.parentNode;
                  }
                  return !1;
                }
                function k(t, e) {
                  return t.indexOf(e) > -1;
                }
                function S(t) {
                  return t.trim().split(/\s+/g);
                }
                function P(t, e, i) {
                  if (t.indexOf && !i) return t.indexOf(e);
                  for (var s = 0; s < t.length; ) {
                    if ((i && t[s][i] == e) || (!i && t[s] === e)) return s;
                    s++;
                  }
                  return -1;
                }
                function A(t) {
                  return Array.prototype.slice.call(t, 0);
                }
                function D(t, e, i) {
                  for (var s = [], n = [], o = 0; o < t.length; ) {
                    var a = t[o][e];
                    (P(n, a) < 0 && s.push(t[o]), (n[o] = a), o++);
                  }
                  return (s = s.sort(function (t, i) {
                    return t[e] > i[e];
                  }));
                }
                function C(t, e) {
                  for (var i, s, o = e[0].toUpperCase() + e.slice(1), r = 0; r < a.length; ) {
                    if ((s = (i = a[r]) ? i + o : e) in t) return s;
                    r++;
                  }
                  return n;
                }
                var E = 1;
                function T(t) {
                  var i = t.ownerDocument || t;
                  return i.defaultView || i.parentWindow || e;
                }
                var I = 'ontouchstart' in e,
                  L = C(e, 'PointerEvent') !== n,
                  O = I && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                  R = 'touch',
                  F = 'mouse',
                  z = 24,
                  N = ['x', 'y'],
                  B = ['clientX', 'clientY'];
                function V(t, e) {
                  var i = this;
                  ((this.manager = t),
                    (this.callback = e),
                    (this.element = t.element),
                    (this.target = t.options.inputTarget),
                    (this.domHandler = function (e) {
                      y(t.options.enable, [t]) && i.handler(e);
                    }),
                    this.init());
                }
                function H(t, e, i) {
                  var s = i.pointers.length,
                    o = i.changedPointers.length,
                    a = 1 & e && s - o === 0,
                    r = 12 & e && s - o === 0;
                  ((i.isFirst = !!a),
                    (i.isFinal = !!r),
                    a && (t.session = {}),
                    (i.eventType = e),
                    (function (t, e) {
                      var i = t.session,
                        s = e.pointers,
                        o = s.length;
                      (i.firstInput || (i.firstInput = $(e)),
                        o > 1 && !i.firstMultiple
                          ? (i.firstMultiple = $(e))
                          : 1 === o && (i.firstMultiple = !1));
                      var a = i.firstInput,
                        r = i.firstMultiple,
                        l = r ? r.center : a.center,
                        d = (e.center = W(s));
                      ((e.timeStamp = h()),
                        (e.deltaTime = e.timeStamp - a.timeStamp),
                        (e.angle = q(l, d)),
                        (e.distance = U(l, d)),
                        (function (t, e) {
                          var i = e.center,
                            s = t.offsetDelta || {},
                            n = t.prevDelta || {},
                            o = t.prevInput || {};
                          ((1 !== e.eventType && 4 !== o.eventType) ||
                            ((n = t.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
                            (s = t.offsetDelta = { x: i.x, y: i.y })),
                            (e.deltaX = n.x + (i.x - s.x)),
                            (e.deltaY = n.y + (i.y - s.y)));
                        })(i, e),
                        (e.offsetDirection = Y(e.deltaX, e.deltaY)));
                      var u,
                        p,
                        f = j(e.deltaTime, e.deltaX, e.deltaY);
                      ((e.overallVelocityX = f.x),
                        (e.overallVelocityY = f.y),
                        (e.overallVelocity = c(f.x) > c(f.y) ? f.x : f.y),
                        (e.scale = r
                          ? ((u = r.pointers), U((p = s)[0], p[1], B) / U(u[0], u[1], B))
                          : 1),
                        (e.rotation = r
                          ? (function (t, e) {
                              return q(e[1], e[0], B) + q(t[1], t[0], B);
                            })(r.pointers, s)
                          : 0),
                        (e.maxPointers = i.prevInput
                          ? e.pointers.length > i.prevInput.maxPointers
                            ? e.pointers.length
                            : i.prevInput.maxPointers
                          : e.pointers.length),
                        (function (t, e) {
                          var i,
                            s,
                            o,
                            a,
                            r = t.lastInterval || e,
                            l = e.timeStamp - r.timeStamp;
                          if (8 != e.eventType && (l > 25 || r.velocity === n)) {
                            var h = e.deltaX - r.deltaX,
                              d = e.deltaY - r.deltaY,
                              u = j(l, h, d);
                            ((s = u.x),
                              (o = u.y),
                              (i = c(u.x) > c(u.y) ? u.x : u.y),
                              (a = Y(h, d)),
                              (t.lastInterval = e));
                          } else
                            ((i = r.velocity),
                              (s = r.velocityX),
                              (o = r.velocityY),
                              (a = r.direction));
                          ((e.velocity = i),
                            (e.velocityX = s),
                            (e.velocityY = o),
                            (e.direction = a));
                        })(i, e));
                      var g = t.element;
                      (M(e.srcEvent.target, g) && (g = e.srcEvent.target), (e.target = g));
                    })(t, i),
                    t.emit('hammer.input', i),
                    t.recognize(i),
                    (t.session.prevInput = i));
                }
                function $(t) {
                  for (var e = [], i = 0; i < t.pointers.length; )
                    ((e[i] = {
                      clientX: l(t.pointers[i].clientX),
                      clientY: l(t.pointers[i].clientY),
                    }),
                      i++);
                  return {
                    timeStamp: h(),
                    pointers: e,
                    center: W(e),
                    deltaX: t.deltaX,
                    deltaY: t.deltaY,
                  };
                }
                function W(t) {
                  var e = t.length;
                  if (1 === e) return { x: l(t[0].clientX), y: l(t[0].clientY) };
                  for (var i = 0, s = 0, n = 0; n < e; )
                    ((i += t[n].clientX), (s += t[n].clientY), n++);
                  return { x: l(i / e), y: l(s / e) };
                }
                function j(t, e, i) {
                  return { x: e / t || 0, y: i / t || 0 };
                }
                function Y(t, e) {
                  return t === e ? 1 : c(t) >= c(e) ? (t < 0 ? 2 : 4) : e < 0 ? 8 : 16;
                }
                function U(t, e, i) {
                  i || (i = N);
                  var s = e[i[0]] - t[i[0]],
                    n = e[i[1]] - t[i[1]];
                  return Math.sqrt(s * s + n * n);
                }
                function q(t, e, i) {
                  i || (i = N);
                  var s = e[i[0]] - t[i[0]],
                    n = e[i[1]] - t[i[1]];
                  return (180 * Math.atan2(n, s)) / Math.PI;
                }
                V.prototype = {
                  handler: function () {},
                  init: function () {
                    (this.evEl && _(this.element, this.evEl, this.domHandler),
                      this.evTarget && _(this.target, this.evTarget, this.domHandler),
                      this.evWin && _(T(this.element), this.evWin, this.domHandler));
                  },
                  destroy: function () {
                    (this.evEl && w(this.element, this.evEl, this.domHandler),
                      this.evTarget && w(this.target, this.evTarget, this.domHandler),
                      this.evWin && w(T(this.element), this.evWin, this.domHandler));
                  },
                };
                var X = { mousedown: 1, mousemove: 2, mouseup: 4 },
                  K = 'mousedown',
                  Z = 'mousemove mouseup';
                function J() {
                  ((this.evEl = K),
                    (this.evWin = Z),
                    (this.pressed = !1),
                    V.apply(this, arguments));
                }
                b(J, V, {
                  handler: function (t) {
                    var e = X[t.type];
                    (1 & e && 0 === t.button && (this.pressed = !0),
                      2 & e && 1 !== t.which && (e = 4),
                      this.pressed &&
                        (4 & e && (this.pressed = !1),
                        this.callback(this.manager, e, {
                          pointers: [t],
                          changedPointers: [t],
                          pointerType: F,
                          srcEvent: t,
                        })));
                  },
                });
                var G = {
                    pointerdown: 1,
                    pointermove: 2,
                    pointerup: 4,
                    pointercancel: 8,
                    pointerout: 8,
                  },
                  Q = { 2: R, 3: 'pen', 4: F, 5: 'kinect' },
                  tt = 'pointerdown',
                  et = 'pointermove pointerup pointercancel';
                function it() {
                  ((this.evEl = tt),
                    (this.evWin = et),
                    V.apply(this, arguments),
                    (this.store = this.manager.session.pointerEvents = []));
                }
                (e.MSPointerEvent &&
                  !e.PointerEvent &&
                  ((tt = 'MSPointerDown'), (et = 'MSPointerMove MSPointerUp MSPointerCancel')),
                  b(it, V, {
                    handler: function (t) {
                      var e = this.store,
                        i = !1,
                        s = t.type.toLowerCase().replace('ms', ''),
                        n = G[s],
                        o = Q[t.pointerType] || t.pointerType,
                        a = o == R,
                        r = P(e, t.pointerId, 'pointerId');
                      (1 & n && (0 === t.button || a)
                        ? r < 0 && (e.push(t), (r = e.length - 1))
                        : 12 & n && (i = !0),
                        r < 0 ||
                          ((e[r] = t),
                          this.callback(this.manager, n, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: o,
                            srcEvent: t,
                          }),
                          i && e.splice(r, 1)));
                    },
                  }));
                var st = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
                function nt() {
                  ((this.evTarget = 'touchstart'),
                    (this.evWin = 'touchstart touchmove touchend touchcancel'),
                    (this.started = !1),
                    V.apply(this, arguments));
                }
                function ot(t, e) {
                  var i = A(t.touches),
                    s = A(t.changedTouches);
                  return (12 & e && (i = D(i.concat(s), 'identifier')), [i, s]);
                }
                b(nt, V, {
                  handler: function (t) {
                    var e = st[t.type];
                    if ((1 === e && (this.started = !0), this.started)) {
                      var i = ot.call(this, t, e);
                      (12 & e && i[0].length - i[1].length === 0 && (this.started = !1),
                        this.callback(this.manager, e, {
                          pointers: i[0],
                          changedPointers: i[1],
                          pointerType: R,
                          srcEvent: t,
                        }));
                    }
                  },
                });
                var at = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 },
                  rt = 'touchstart touchmove touchend touchcancel';
                function lt() {
                  ((this.evTarget = rt), (this.targetIds = {}), V.apply(this, arguments));
                }
                function ct(t, e) {
                  var i = A(t.touches),
                    s = this.targetIds;
                  if (3 & e && 1 === i.length) return ((s[i[0].identifier] = !0), [i, i]);
                  var n,
                    o,
                    a = A(t.changedTouches),
                    r = [],
                    l = this.target;
                  if (
                    ((o = i.filter(function (t) {
                      return M(t.target, l);
                    })),
                    1 === e)
                  )
                    for (n = 0; n < o.length; ) ((s[o[n].identifier] = !0), n++);
                  for (n = 0; n < a.length; )
                    (s[a[n].identifier] && r.push(a[n]), 12 & e && delete s[a[n].identifier], n++);
                  return r.length ? [D(o.concat(r), 'identifier'), r] : void 0;
                }
                function ht() {
                  V.apply(this, arguments);
                  var t = x(this.handler, this);
                  ((this.touch = new lt(this.manager, t)),
                    (this.mouse = new J(this.manager, t)),
                    (this.primaryTouch = null),
                    (this.lastTouches = []));
                }
                function dt(t, e) {
                  1 & t
                    ? ((this.primaryTouch = e.changedPointers[0].identifier), ut.call(this, e))
                    : 12 & t && ut.call(this, e);
                }
                function ut(t) {
                  var e = t.changedPointers[0];
                  if (e.identifier === this.primaryTouch) {
                    var i = { x: e.clientX, y: e.clientY };
                    this.lastTouches.push(i);
                    var s = this.lastTouches;
                    setTimeout(function () {
                      var t = s.indexOf(i);
                      t > -1 && s.splice(t, 1);
                    }, 2500);
                  }
                }
                function pt(t) {
                  for (
                    var e = t.srcEvent.clientX, i = t.srcEvent.clientY, s = 0;
                    s < this.lastTouches.length;
                    s++
                  ) {
                    var n = this.lastTouches[s],
                      o = Math.abs(e - n.x),
                      a = Math.abs(i - n.y);
                    if (o <= 25 && a <= 25) return !0;
                  }
                  return !1;
                }
                (b(lt, V, {
                  handler: function (t) {
                    var e = at[t.type],
                      i = ct.call(this, t, e);
                    i &&
                      this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: R,
                        srcEvent: t,
                      });
                  },
                }),
                  b(ht, V, {
                    handler: function (t, e, i) {
                      var s = i.pointerType == R,
                        n = i.pointerType == F;
                      if (!(n && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                        if (s) dt.call(this, e, i);
                        else if (n && pt.call(this, i)) return;
                        this.callback(t, e, i);
                      }
                    },
                    destroy: function () {
                      (this.touch.destroy(), this.mouse.destroy());
                    },
                  }));
                var ft = C(r.style, 'touchAction'),
                  gt = ft !== n,
                  mt = 'compute',
                  bt = 'auto',
                  xt = 'manipulation',
                  yt = 'none',
                  vt = 'pan-x',
                  _t = 'pan-y',
                  wt = (function () {
                    if (!gt) return !1;
                    var t = {},
                      i = e.CSS && e.CSS.supports;
                    return (
                      ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(
                        function (s) {
                          t[s] = !i || e.CSS.supports('touch-action', s);
                        }
                      ),
                      t
                    );
                  })();
                function Mt(t, e) {
                  ((this.manager = t), this.set(e));
                }
                Mt.prototype = {
                  set: function (t) {
                    (t == mt && (t = this.compute()),
                      gt &&
                        this.manager.element.style &&
                        wt[t] &&
                        (this.manager.element.style[ft] = t),
                      (this.actions = t.toLowerCase().trim()));
                  },
                  update: function () {
                    this.set(this.manager.options.touchAction);
                  },
                  compute: function () {
                    var t = [];
                    return (
                      p(this.manager.recognizers, function (e) {
                        y(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
                      }),
                      (function (t) {
                        if (k(t, yt)) return yt;
                        var e = k(t, vt),
                          i = k(t, _t);
                        return e && i ? yt : e || i ? (e ? vt : _t) : k(t, xt) ? xt : bt;
                      })(t.join(' '))
                    );
                  },
                  preventDefaults: function (t) {
                    var e = t.srcEvent,
                      i = t.offsetDirection;
                    if (this.manager.session.prevented) e.preventDefault();
                    else {
                      var s = this.actions,
                        n = k(s, yt) && !wt[yt],
                        o = k(s, _t) && !wt[_t],
                        a = k(s, vt) && !wt[vt];
                      if (n) {
                        var r = 1 === t.pointers.length,
                          l = t.distance < 2,
                          c = t.deltaTime < 250;
                        if (r && l && c) return;
                      }
                      if (!a || !o)
                        return n || (o && 6 & i) || (a && i & z) ? this.preventSrc(e) : void 0;
                    }
                  },
                  preventSrc: function (t) {
                    ((this.manager.session.prevented = !0), t.preventDefault());
                  },
                };
                var kt = 32;
                function St(t) {
                  ((this.options = o({}, this.defaults, t || {})),
                    (this.id = E++),
                    (this.manager = null),
                    (this.options.enable = v(this.options.enable, !0)),
                    (this.state = 1),
                    (this.simultaneous = {}),
                    (this.requireFail = []));
                }
                function Pt(t) {
                  return 16 & t ? 'cancel' : 8 & t ? 'end' : 4 & t ? 'move' : 2 & t ? 'start' : '';
                }
                function At(t) {
                  return 16 == t ? 'down' : 8 == t ? 'up' : 2 == t ? 'left' : 4 == t ? 'right' : '';
                }
                function Dt(t, e) {
                  var i = e.manager;
                  return i ? i.get(t) : t;
                }
                function Ct() {
                  St.apply(this, arguments);
                }
                function Et() {
                  (Ct.apply(this, arguments), (this.pX = null), (this.pY = null));
                }
                function Tt() {
                  Ct.apply(this, arguments);
                }
                function It() {
                  (St.apply(this, arguments), (this._timer = null), (this._input = null));
                }
                function Lt() {
                  Ct.apply(this, arguments);
                }
                function Ot() {
                  Ct.apply(this, arguments);
                }
                function Rt() {
                  (St.apply(this, arguments),
                    (this.pTime = !1),
                    (this.pCenter = !1),
                    (this._timer = null),
                    (this._input = null),
                    (this.count = 0));
                }
                function Ft(t, e) {
                  return (
                    ((e = e || {}).recognizers = v(e.recognizers, Ft.defaults.preset)),
                    new zt(t, e)
                  );
                }
                function zt(t, e) {
                  var i;
                  ((this.options = o({}, Ft.defaults, e || {})),
                    (this.options.inputTarget = this.options.inputTarget || t),
                    (this.handlers = {}),
                    (this.session = {}),
                    (this.recognizers = []),
                    (this.oldCssProps = {}),
                    (this.element = t),
                    (this.input = new ((i = this).options.inputClass ||
                      (L ? it : O ? lt : I ? ht : J))(i, H)),
                    (this.touchAction = new Mt(this, this.options.touchAction)),
                    Nt(this, !0),
                    p(
                      this.options.recognizers,
                      function (t) {
                        var e = this.add(new t[0](t[1]));
                        (t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]));
                      },
                      this
                    ));
                }
                function Nt(t, e) {
                  var i,
                    s = t.element;
                  s.style &&
                    (p(t.options.cssProps, function (n, o) {
                      ((i = C(s.style, o)),
                        e
                          ? ((t.oldCssProps[i] = s.style[i]), (s.style[i] = n))
                          : (s.style[i] = t.oldCssProps[i] || ''));
                    }),
                    e || (t.oldCssProps = {}));
                }
                ((St.prototype = {
                  defaults: {},
                  set: function (t) {
                    return (
                      o(this.options, t),
                      this.manager && this.manager.touchAction.update(),
                      this
                    );
                  },
                  recognizeWith: function (t) {
                    if (u(t, 'recognizeWith', this)) return this;
                    var e = this.simultaneous;
                    return (
                      e[(t = Dt(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)),
                      this
                    );
                  },
                  dropRecognizeWith: function (t) {
                    return (
                      u(t, 'dropRecognizeWith', this) ||
                        ((t = Dt(t, this)), delete this.simultaneous[t.id]),
                      this
                    );
                  },
                  requireFailure: function (t) {
                    if (u(t, 'requireFailure', this)) return this;
                    var e = this.requireFail;
                    return (
                      -1 === P(e, (t = Dt(t, this))) && (e.push(t), t.requireFailure(this)),
                      this
                    );
                  },
                  dropRequireFailure: function (t) {
                    if (u(t, 'dropRequireFailure', this)) return this;
                    t = Dt(t, this);
                    var e = P(this.requireFail, t);
                    return (e > -1 && this.requireFail.splice(e, 1), this);
                  },
                  hasRequireFailures: function () {
                    return this.requireFail.length > 0;
                  },
                  canRecognizeWith: function (t) {
                    return !!this.simultaneous[t.id];
                  },
                  emit: function (t) {
                    var e = this,
                      i = this.state;
                    function s(i) {
                      e.manager.emit(i, t);
                    }
                    (i < 8 && s(e.options.event + Pt(i)),
                      s(e.options.event),
                      t.additionalEvent && s(t.additionalEvent),
                      i >= 8 && s(e.options.event + Pt(i)));
                  },
                  tryEmit: function (t) {
                    if (this.canEmit()) return this.emit(t);
                    this.state = kt;
                  },
                  canEmit: function () {
                    for (var t = 0; t < this.requireFail.length; ) {
                      if (!(33 & this.requireFail[t].state)) return !1;
                      t++;
                    }
                    return !0;
                  },
                  recognize: function (t) {
                    var e = o({}, t);
                    if (!y(this.options.enable, [this, e]))
                      return (this.reset(), void (this.state = kt));
                    (56 & this.state && (this.state = 1),
                      (this.state = this.process(e)),
                      30 & this.state && this.tryEmit(e));
                  },
                  process: function (t) {},
                  getTouchAction: function () {},
                  reset: function () {},
                }),
                  b(Ct, St, {
                    defaults: { pointers: 1 },
                    attrTest: function (t) {
                      var e = this.options.pointers;
                      return 0 === e || t.pointers.length === e;
                    },
                    process: function (t) {
                      var e = this.state,
                        i = t.eventType,
                        s = 6 & e,
                        n = this.attrTest(t);
                      return s && (8 & i || !n)
                        ? 16 | e
                        : s || n
                          ? 4 & i
                            ? 8 | e
                            : 2 & e
                              ? 4 | e
                              : 2
                          : kt;
                    },
                  }),
                  b(Et, Ct, {
                    defaults: { event: 'pan', threshold: 10, pointers: 1, direction: 30 },
                    getTouchAction: function () {
                      var t = this.options.direction,
                        e = [];
                      return (6 & t && e.push(_t), t & z && e.push(vt), e);
                    },
                    directionTest: function (t) {
                      var e = this.options,
                        i = !0,
                        s = t.distance,
                        n = t.direction,
                        o = t.deltaX,
                        a = t.deltaY;
                      return (
                        n & e.direction ||
                          (6 & e.direction
                            ? ((n = 0 === o ? 1 : o < 0 ? 2 : 4),
                              (i = o != this.pX),
                              (s = Math.abs(t.deltaX)))
                            : ((n = 0 === a ? 1 : a < 0 ? 8 : 16),
                              (i = a != this.pY),
                              (s = Math.abs(t.deltaY)))),
                        (t.direction = n),
                        i && s > e.threshold && n & e.direction
                      );
                    },
                    attrTest: function (t) {
                      return (
                        Ct.prototype.attrTest.call(this, t) &&
                        (2 & this.state || (!(2 & this.state) && this.directionTest(t)))
                      );
                    },
                    emit: function (t) {
                      ((this.pX = t.deltaX), (this.pY = t.deltaY));
                      var e = At(t.direction);
                      (e && (t.additionalEvent = this.options.event + e),
                        this._super.emit.call(this, t));
                    },
                  }),
                  b(Tt, Ct, {
                    defaults: { event: 'pinch', threshold: 0, pointers: 2 },
                    getTouchAction: function () {
                      return [yt];
                    },
                    attrTest: function (t) {
                      return (
                        this._super.attrTest.call(this, t) &&
                        (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
                      );
                    },
                    emit: function (t) {
                      if (1 !== t.scale) {
                        var e = t.scale < 1 ? 'in' : 'out';
                        t.additionalEvent = this.options.event + e;
                      }
                      this._super.emit.call(this, t);
                    },
                  }),
                  b(It, St, {
                    defaults: { event: 'press', pointers: 1, time: 251, threshold: 9 },
                    getTouchAction: function () {
                      return [bt];
                    },
                    process: function (t) {
                      var e = this.options,
                        i = t.pointers.length === e.pointers,
                        s = t.distance < e.threshold,
                        n = t.deltaTime > e.time;
                      if (((this._input = t), !s || !i || (12 & t.eventType && !n))) this.reset();
                      else if (1 & t.eventType)
                        (this.reset(),
                          (this._timer = d(
                            function () {
                              ((this.state = 8), this.tryEmit());
                            },
                            e.time,
                            this
                          )));
                      else if (4 & t.eventType) return 8;
                      return kt;
                    },
                    reset: function () {
                      clearTimeout(this._timer);
                    },
                    emit: function (t) {
                      8 === this.state &&
                        (t && 4 & t.eventType
                          ? this.manager.emit(this.options.event + 'up', t)
                          : ((this._input.timeStamp = h()),
                            this.manager.emit(this.options.event, this._input)));
                    },
                  }),
                  b(Lt, Ct, {
                    defaults: { event: 'rotate', threshold: 0, pointers: 2 },
                    getTouchAction: function () {
                      return [yt];
                    },
                    attrTest: function (t) {
                      return (
                        this._super.attrTest.call(this, t) &&
                        (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
                      );
                    },
                  }),
                  b(Ot, Ct, {
                    defaults: {
                      event: 'swipe',
                      threshold: 10,
                      velocity: 0.3,
                      direction: 30,
                      pointers: 1,
                    },
                    getTouchAction: function () {
                      return Et.prototype.getTouchAction.call(this);
                    },
                    attrTest: function (t) {
                      var e,
                        i = this.options.direction;
                      return (
                        30 & i
                          ? (e = t.overallVelocity)
                          : 6 & i
                            ? (e = t.overallVelocityX)
                            : i & z && (e = t.overallVelocityY),
                        this._super.attrTest.call(this, t) &&
                          i & t.offsetDirection &&
                          t.distance > this.options.threshold &&
                          t.maxPointers == this.options.pointers &&
                          c(e) > this.options.velocity &&
                          4 & t.eventType
                      );
                    },
                    emit: function (t) {
                      var e = At(t.offsetDirection);
                      (e && this.manager.emit(this.options.event + e, t),
                        this.manager.emit(this.options.event, t));
                    },
                  }),
                  b(Rt, St, {
                    defaults: {
                      event: 'tap',
                      pointers: 1,
                      taps: 1,
                      interval: 300,
                      time: 250,
                      threshold: 9,
                      posThreshold: 10,
                    },
                    getTouchAction: function () {
                      return [xt];
                    },
                    process: function (t) {
                      var e = this.options,
                        i = t.pointers.length === e.pointers,
                        s = t.distance < e.threshold,
                        n = t.deltaTime < e.time;
                      if ((this.reset(), 1 & t.eventType && 0 === this.count))
                        return this.failTimeout();
                      if (s && n && i) {
                        if (4 != t.eventType) return this.failTimeout();
                        var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                          a = !this.pCenter || U(this.pCenter, t.center) < e.posThreshold;
                        if (
                          ((this.pTime = t.timeStamp),
                          (this.pCenter = t.center),
                          a && o ? (this.count += 1) : (this.count = 1),
                          (this._input = t),
                          0 === this.count % e.taps)
                        )
                          return this.hasRequireFailures()
                            ? ((this._timer = d(
                                function () {
                                  ((this.state = 8), this.tryEmit());
                                },
                                e.interval,
                                this
                              )),
                              2)
                            : 8;
                      }
                      return kt;
                    },
                    failTimeout: function () {
                      return (
                        (this._timer = d(
                          function () {
                            this.state = kt;
                          },
                          this.options.interval,
                          this
                        )),
                        kt
                      );
                    },
                    reset: function () {
                      clearTimeout(this._timer);
                    },
                    emit: function () {
                      8 == this.state &&
                        ((this._input.tapCount = this.count),
                        this.manager.emit(this.options.event, this._input));
                    },
                  }),
                  (Ft.VERSION = '2.0.7'),
                  (Ft.defaults = {
                    domEvents: !1,
                    touchAction: mt,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                      [Lt, { enable: !1 }],
                      [Tt, { enable: !1 }, ['rotate']],
                      [Ot, { direction: 6 }],
                      [Et, { direction: 6 }, ['swipe']],
                      [Rt],
                      [Rt, { event: 'doubletap', taps: 2 }, ['tap']],
                      [It],
                    ],
                    cssProps: {
                      userSelect: 'none',
                      touchSelect: 'none',
                      touchCallout: 'none',
                      contentZooming: 'none',
                      userDrag: 'none',
                      tapHighlightColor: 'rgba(0,0,0,0)',
                    },
                  }),
                  (zt.prototype = {
                    set: function (t) {
                      return (
                        o(this.options, t),
                        t.touchAction && this.touchAction.update(),
                        t.inputTarget &&
                          (this.input.destroy(),
                          (this.input.target = t.inputTarget),
                          this.input.init()),
                        this
                      );
                    },
                    stop: function (t) {
                      this.session.stopped = t ? 2 : 1;
                    },
                    recognize: function (t) {
                      var e = this.session;
                      if (!e.stopped) {
                        var i;
                        this.touchAction.preventDefaults(t);
                        var s = this.recognizers,
                          n = e.curRecognizer;
                        (!n || (n && 8 & n.state)) && (n = e.curRecognizer = null);
                        for (var o = 0; o < s.length; )
                          ((i = s[o]),
                            2 === e.stopped || (n && i != n && !i.canRecognizeWith(n))
                              ? i.reset()
                              : i.recognize(t),
                            !n && 14 & i.state && (n = e.curRecognizer = i),
                            o++);
                      }
                    },
                    get: function (t) {
                      if (t instanceof St) return t;
                      for (var e = this.recognizers, i = 0; i < e.length; i++)
                        if (e[i].options.event == t) return e[i];
                      return null;
                    },
                    add: function (t) {
                      if (u(t, 'add', this)) return this;
                      var e = this.get(t.options.event);
                      return (
                        e && this.remove(e),
                        this.recognizers.push(t),
                        (t.manager = this),
                        this.touchAction.update(),
                        t
                      );
                    },
                    remove: function (t) {
                      if (u(t, 'remove', this)) return this;
                      if ((t = this.get(t))) {
                        var e = this.recognizers,
                          i = P(e, t);
                        -1 !== i && (e.splice(i, 1), this.touchAction.update());
                      }
                      return this;
                    },
                    on: function (t, e) {
                      if (t !== n && e !== n) {
                        var i = this.handlers;
                        return (
                          p(S(t), function (t) {
                            ((i[t] = i[t] || []), i[t].push(e));
                          }),
                          this
                        );
                      }
                    },
                    off: function (t, e) {
                      if (t !== n) {
                        var i = this.handlers;
                        return (
                          p(S(t), function (t) {
                            e ? i[t] && i[t].splice(P(i[t], e), 1) : delete i[t];
                          }),
                          this
                        );
                      }
                    },
                    emit: function (t, e) {
                      this.options.domEvents &&
                        (function (t, e) {
                          var s = i.createEvent('Event');
                          (s.initEvent(t, !0, !0), (s.gesture = e), e.target.dispatchEvent(s));
                        })(t, e);
                      var s = this.handlers[t] && this.handlers[t].slice();
                      if (s && s.length) {
                        ((e.type = t),
                          (e.preventDefault = function () {
                            e.srcEvent.preventDefault();
                          }));
                        for (var n = 0; n < s.length; ) (s[n](e), n++);
                      }
                    },
                    destroy: function () {
                      (this.element && Nt(this, !1),
                        (this.handlers = {}),
                        (this.session = {}),
                        this.input.destroy(),
                        (this.element = null));
                    },
                  }),
                  o(Ft, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: 16,
                    STATE_FAILED: kt,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: z,
                    DIRECTION_ALL: 30,
                    Manager: zt,
                    Input: V,
                    TouchAction: Mt,
                    TouchInput: lt,
                    MouseInput: J,
                    PointerEventInput: it,
                    TouchMouseInput: ht,
                    SingleTouchInput: nt,
                    Recognizer: St,
                    AttrRecognizer: Ct,
                    Tap: Rt,
                    Pan: Et,
                    Swipe: Ot,
                    Pinch: Tt,
                    Rotate: Lt,
                    Press: It,
                    on: _,
                    off: w,
                    each: p,
                    merge: m,
                    extend: g,
                    assign: o,
                    inherit: b,
                    bindFn: x,
                    prefixed: C,
                  }),
                  ((void 0 !== e ? e : 'undefined' != typeof self ? self : {}).Hammer = Ft),
                  t.exports ? (t.exports = Ft) : (e.Hammer = Ft));
              })(window, document);
            })(ar)),
          ar.exports);
      /*! Hammer.JS - v2.0.7 - 2016-04-22
       * http://hammerjs.github.io/
       *
       * Copyright (c) 2016 Jorik Tangelder;
       * Licensed under the MIT license */ const lr = nr(rr),
        cr = (t) => t && t.enabled && t.modifierKey,
        hr = (t, e) => t && e[t + 'Key'],
        dr = (t, e) => t && !e[t + 'Key'];
      /*!
       * chartjs-plugin-zoom v2.2.0
       * https://www.chartjs.org/chartjs-plugin-zoom/2.2.0/
       * (c) 2016-2024 chartjs-plugin-zoom Contributors
       * Released under the MIT License
       */ function ur(t, e, i) {
        return (
          void 0 === t ||
          ('string' == typeof t
            ? -1 !== t.indexOf(e)
            : 'function' == typeof t && -1 !== t({ chart: i }).indexOf(e))
        );
      }
      function pr(t, e) {
        return (
          'function' == typeof t && (t = t({ chart: e })),
          'string' == typeof t
            ? { x: -1 !== t.indexOf('x'), y: -1 !== t.indexOf('y') }
            : { x: !1, y: !1 }
        );
      }
      function fr(t, e, i) {
        const { mode: s = 'xy', scaleMode: n, overScaleMode: o } = t || {},
          a = (function ({ x: t, y: e }, i) {
            const s = i.scales,
              n = Object.keys(s);
            for (let o = 0; o < n.length; o++) {
              const i = s[n[o]];
              if (e >= i.top && e <= i.bottom && t >= i.left && t <= i.right) return i;
            }
            return null;
          })(e, i),
          r = pr(s, i),
          l = pr(n, i);
        if (o) {
          const t = pr(o, i);
          for (const e of ['x', 'y']) t[e] && ((l[e] = r[e]), (r[e] = !1));
        }
        if (a && l[a.axis]) return [a];
        const c = [];
        return (
          yt(i.scales, function (t) {
            r[t.axis] && c.push(t);
          }),
          c
        );
      }
      const gr = new WeakMap();
      function mr(t) {
        let e = gr.get(t);
        return (
          e ||
            ((e = {
              originalScaleLimits: {},
              updatedScaleLimits: {},
              handlers: {},
              panDelta: {},
              dragging: !1,
              panning: !1,
            }),
            gr.set(t, e)),
          e
        );
      }
      function br(t, e, i, s) {
        const n = Math.max(0, Math.min(1, (t - e) / i || 0));
        return { min: s * n, max: s * (1 - n) };
      }
      function xr(t, e) {
        const i = t.isHorizontal() ? e.x : e.y;
        return t.getValueForPixel(i);
      }
      function yr(t, e, i) {
        const s = t.max - t.min,
          n = s * (e - 1);
        return br(xr(t, i), t.min, s, n);
      }
      function vr(t, e, i, s, n) {
        let o = i[s];
        if ('original' === o) {
          const i = t.originalScaleLimits[e.id][s];
          o = mt(i.options, i.scale);
        }
        return mt(o, n);
      }
      function _r(t, { min: e, max: i }, s, n = !1) {
        const o = mr(t.chart),
          { options: a } = t,
          r = (function (t, e) {
            return (e && (e[t.id] || e[t.axis])) || {};
          })(t, s),
          { minRange: l = 0 } = r,
          c = vr(o, t, r, 'min', -1 / 0),
          h = vr(o, t, r, 'max', 1 / 0);
        if ('pan' === n && (e < c || i > h)) return !0;
        const d = t.max - t.min,
          u = n ? Math.max(i - e, l) : d;
        if (n && u === l && d <= l) return !0;
        const p = (function (t, { min: e, max: i, minLimit: s, maxLimit: n }, o) {
          const a = (t - i + e) / 2;
          ((e -= a), (i += a));
          const r = o.min.options ?? o.min.scale,
            l = o.max.options ?? o.max.scale,
            c = t / 1e6;
          return (
            Wt(e, r, c) && (e = r),
            Wt(i, l, c) && (i = l),
            e < s
              ? ((e = s), (i = Math.min(s + t, n)))
              : i > n && ((i = n), (e = Math.max(n - t, s))),
            { min: e, max: i }
          );
        })(u, { min: e, max: i, minLimit: c, maxLimit: h }, o.originalScaleLimits[t.id]);
        return (
          (a.min = p.min),
          (a.max = p.max),
          (o.updatedScaleLimits[t.id] = p),
          t.parse(p.min) !== t.min || t.parse(p.max) !== t.max
        );
      }
      const wr = (t) =>
          0 === t || isNaN(t)
            ? 0
            : t < 0
              ? Math.min(Math.round(t), -1)
              : Math.max(Math.round(t), 1),
        Mr = {
          second: 500,
          minute: 3e4,
          hour: 18e5,
          day: 432e5,
          week: 3024e5,
          month: 1296e6,
          quarter: 5184e6,
          year: 157248e5,
        };
      function kr(t, e, i, s = !1) {
        const { min: n, max: o, options: a } = t,
          r = a.time && a.time.round,
          l = Mr[r] || 0,
          c = t.getValueForPixel(t.getPixelForValue(n + l) - e),
          h = t.getValueForPixel(t.getPixelForValue(o + l) - e);
        return !(!isNaN(c) && !isNaN(h)) || _r(t, { min: c, max: h }, i, !!s && 'pan');
      }
      function Sr(t, e, i) {
        return kr(t, e, i, !0);
      }
      const Pr = {
          category: function (t, e, i, s) {
            const n = yr(t, e, i);
            return (
              t.min === t.max &&
                e < 1 &&
                (function (t) {
                  const e = t.getLabels().length - 1;
                  (t.min > 0 && (t.min -= 1), t.max < e && (t.max += 1));
                })(t),
              _r(t, { min: t.min + wr(n.min), max: t.max - wr(n.max) }, s, !0)
            );
          },
          default: function (t, e, i, s) {
            const n = yr(t, e, i);
            return _r(t, { min: t.min + n.min, max: t.max - n.max }, s, !0);
          },
          logarithmic: function (t, e, i, s) {
            const n = (function (t, e, i) {
              const s = xr(t, i);
              if (void 0 === s) return { min: t.min, max: t.max };
              const n = Math.log10(t.min),
                o = Math.log10(t.max),
                a = o - n,
                r = br(Math.log10(s), n, a, a * (e - 1));
              return { min: Math.pow(10, n + r.min), max: Math.pow(10, o - r.max) };
            })(t, e, i);
            return _r(t, n, s, !0);
          },
        },
        Ar = {
          default: function (t, e, i, s) {
            _r(
              t,
              (function (t, e, i) {
                const s = t.getValueForPixel(e),
                  n = t.getValueForPixel(i);
                return { min: Math.min(s, n), max: Math.max(s, n) };
              })(t, e, i),
              s,
              !0
            );
          },
        },
        Dr = {
          category: function (t, e, i) {
            const s = t.getLabels().length - 1;
            let { min: n, max: o } = t;
            const a = Math.max(o - n, 1),
              r = Math.round(
                (function (t) {
                  return t.isHorizontal() ? t.width : t.height;
                })(t) / Math.max(a, 10)
              ),
              l = Math.round(Math.abs(e / r));
            let c;
            return (
              e < -r
                ? ((o = Math.min(o + l, s)), (n = 1 === a ? o : o - a), (c = o === s))
                : e > r && ((n = Math.max(0, n - l)), (o = 1 === a ? n : n + a), (c = 0 === n)),
              _r(t, { min: n, max: o }, i) || c
            );
          },
          default: kr,
          logarithmic: Sr,
          timeseries: Sr,
        };
      function Cr(t, e) {
        yt(t, (i, s) => {
          e[s] || delete t[s];
        });
      }
      function Er(t, e) {
        const { scales: i } = t,
          { originalScaleLimits: s, updatedScaleLimits: n } = e;
        return (
          yt(i, function (t) {
            (function (t, e, i) {
              const {
                id: s,
                options: { min: n, max: o },
              } = t;
              if (!e[s] || !i[s]) return !0;
              const a = i[s];
              return a.min !== n || a.max !== o;
            })(t, s, n) &&
              (s[t.id] = {
                min: { scale: t.min, options: t.options.min },
                max: { scale: t.max, options: t.options.max },
              });
          }),
          Cr(s, i),
          Cr(n, i),
          s
        );
      }
      function Tr(t, e, i, s) {
        xt(Pr[t.type] || Pr.default, [t, e, i, s]);
      }
      function Ir(t, e, i, s) {
        xt(Ar[t.type] || Ar.default, [t, e, i, s]);
      }
      function Lr(t) {
        const e = t.chartArea;
        return { x: (e.left + e.right) / 2, y: (e.top + e.bottom) / 2 };
      }
      function Or(t, e, i = 'none', s = 'api') {
        const {
            x: n = 1,
            y: o = 1,
            focalPoint: a = Lr(t),
          } = 'number' == typeof e ? { x: e, y: e } : e,
          r = mr(t),
          {
            options: { limits: l, zoom: c },
          } = r;
        Er(t, r);
        const h = 1 !== n,
          d = 1 !== o;
        (yt(fr(c, a, t) || t.scales, function (t) {
          t.isHorizontal() && h ? Tr(t, n, a, l) : !t.isHorizontal() && d && Tr(t, o, a, l);
        }),
          t.update(i),
          xt(c.onZoom, [{ chart: t, trigger: s }]));
      }
      function Rr(t, e, i, s = 'none', n = 'api') {
        const o = mr(t),
          {
            options: { limits: a, zoom: r },
          } = o,
          { mode: l = 'xy' } = r;
        Er(t, o);
        const c = ur(l, 'x', t),
          h = ur(l, 'y', t);
        (yt(t.scales, function (t) {
          t.isHorizontal() && c ? Ir(t, e.x, i.x, a) : !t.isHorizontal() && h && Ir(t, e.y, i.y, a);
        }),
          t.update(s),
          xt(r.onZoom, [{ chart: t, trigger: n }]));
      }
      function Fr(t) {
        const e = mr(t);
        let i = 1,
          s = 1;
        return (
          yt(t.scales, function (t) {
            const n = (function (t, e) {
              const i = t.originalScaleLimits[e];
              if (!i) return;
              const { min: s, max: n } = i;
              return mt(n.options, n.scale) - mt(s.options, s.scale);
            })(e, t.id);
            if (n) {
              const e = Math.round((n / (t.max - t.min)) * 100) / 100;
              ((i = Math.min(i, e)), (s = Math.max(s, e)));
            }
          }),
          i < 1 ? i : s
        );
      }
      function zr(t, e, i, s) {
        const { panDelta: n } = s,
          o = n[t.id] || 0;
        ($t(o) === $t(e) && (e += o),
          xt(Dr[t.type] || Dr.default, [t, e, i]) ? (n[t.id] = 0) : (n[t.id] = e));
      }
      function Nr(t, e, i, s = 'none') {
        const { x: n = 0, y: o = 0 } = 'number' == typeof e ? { x: e, y: e } : e,
          a = mr(t),
          {
            options: { pan: r, limits: l },
          } = a,
          { onPan: c } = r || {};
        Er(t, a);
        const h = 0 !== n,
          d = 0 !== o;
        (yt(i || t.scales, function (t) {
          t.isHorizontal() && h ? zr(t, n, l, a) : !t.isHorizontal() && d && zr(t, o, l, a);
        }),
          t.update(s),
          xt(c, [{ chart: t }]));
      }
      function Br(t) {
        const e = mr(t);
        Er(t, e);
        const i = {};
        for (const s of Object.keys(t.scales)) {
          const { min: t, max: n } = e.originalScaleLimits[s] || { min: {}, max: {} };
          i[s] = { min: t.scale, max: n.scale };
        }
        return i;
      }
      function Vr(t) {
        const e = mr(t);
        return e.panning || e.dragging;
      }
      const Hr = (t, e, i) => Math.min(i, Math.max(e, t));
      function $r(t, e) {
        const { handlers: i } = mr(t),
          s = i[e];
        s && s.target && (s.target.removeEventListener(e, s), delete i[e]);
      }
      function Wr(t, e, i, s) {
        const { handlers: n, options: o } = mr(t),
          a = n[i];
        if (a && a.target === e) return;
        ($r(t, i), (n[i] = (e) => s(t, e, o)), (n[i].target = e));
        const r = 'wheel' !== i && void 0;
        e.addEventListener(i, n[i], { passive: r });
      }
      function jr(t, e) {
        const i = mr(t);
        i.dragStart && ((i.dragging = !0), (i.dragEnd = e), t.update('none'));
      }
      function Yr(t, e) {
        const i = mr(t);
        i.dragStart &&
          'Escape' === e.key &&
          ($r(t, 'keydown'), (i.dragging = !1), (i.dragStart = i.dragEnd = null), t.update('none'));
      }
      function Ur(t, e) {
        if (t.target !== e.canvas) {
          const i = e.canvas.getBoundingClientRect();
          return { x: t.clientX - i.left, y: t.clientY - i.top };
        }
        return Li(t, e);
      }
      function qr(t, e, i) {
        const { onZoomStart: s, onZoomRejected: n } = i;
        if (s && !1 === xt(s, [{ chart: t, event: e, point: Ur(e, t) }]))
          return (xt(n, [{ chart: t, event: e }]), !1);
      }
      function Xr(t, e) {
        if (t.legend && Ve(Li(e, t), t.legend)) return;
        const i = mr(t),
          { pan: s, zoom: n = {} } = i.options;
        if (0 !== e.button || hr(cr(s), e) || dr(cr(n.drag), e))
          return xt(n.onZoomRejected, [{ chart: t, event: e }]);
        !1 !== qr(t, e, n) &&
          ((i.dragStart = e),
          Wr(t, t.canvas.ownerDocument, 'mousemove', jr),
          Wr(t, window.document, 'keydown', Yr));
      }
      function Kr(t, e, i, { min: s, max: n, prop: o }) {
        ((t[s] = Hr(Math.min(i.begin[o], i.end[o]), e[s], e[n])),
          (t[n] = Hr(Math.max(i.begin[o], i.end[o]), e[s], e[n])));
      }
      function Zr(t, e, i) {
        const s = { begin: Ur(e.dragStart, t), end: Ur(e.dragEnd, t) };
        return (
          i &&
            (function ({ begin: t, end: e }, i) {
              let s = e.x - t.x,
                n = e.y - t.y;
              const o = Math.abs(s / n);
              (o > i
                ? (s = Math.sign(s) * Math.abs(n * i))
                : o < i && (n = Math.sign(n) * Math.abs(s / i)),
                (e.x = t.x + s),
                (e.y = t.y + n));
            })(s, t.chartArea.width / t.chartArea.height),
          s
        );
      }
      function Jr(t, e, i, s) {
        const n = ur(e, 'x', t),
          o = ur(e, 'y', t),
          { top: a, left: r, right: l, bottom: c, width: h, height: d } = t.chartArea,
          u = { top: a, left: r, right: l, bottom: c },
          p = Zr(t, i, s && n && o);
        (n && Kr(u, t.chartArea, p, { min: 'left', max: 'right', prop: 'x' }),
          o && Kr(u, t.chartArea, p, { min: 'top', max: 'bottom', prop: 'y' }));
        const f = u.right - u.left,
          g = u.bottom - u.top;
        return {
          ...u,
          width: f,
          height: g,
          zoomX: n && f ? 1 + (h - f) / h : 1,
          zoomY: o && g ? 1 + (d - g) / d : 1,
        };
      }
      function Gr(t, e) {
        const i = mr(t);
        if (!i.dragStart) return;
        $r(t, 'mousemove');
        const {
            mode: s,
            onZoomComplete: n,
            drag: { threshold: o = 0, maintainAspectRatio: a },
          } = i.options.zoom,
          r = Jr(t, s, { dragStart: i.dragStart, dragEnd: e }, a),
          l = ur(s, 'x', t) ? r.width : 0,
          c = ur(s, 'y', t) ? r.height : 0,
          h = Math.sqrt(l * l + c * c);
        if (((i.dragStart = i.dragEnd = null), h <= o))
          return ((i.dragging = !1), void t.update('none'));
        (Rr(t, { x: r.left, y: r.top }, { x: r.right, y: r.bottom }, 'zoom', 'drag'),
          (i.dragging = !1),
          (i.filterNextClick = !0),
          xt(n, [{ chart: t }]));
      }
      function Qr(t, e) {
        const {
          handlers: { onZoomComplete: i },
          options: { zoom: s },
        } = mr(t);
        if (
          !(function (t, e, i) {
            if (dr(cr(i.wheel), e)) xt(i.onZoomRejected, [{ chart: t, event: e }]);
            else if (
              !1 !== qr(t, e, i) &&
              (e.cancelable && e.preventDefault(), void 0 !== e.deltaY)
            )
              return !0;
          })(t, e, s)
        )
          return;
        const n = e.target.getBoundingClientRect(),
          o = s.wheel.speed,
          a = e.deltaY >= 0 ? 2 - 1 / (1 - o) : 1 + o;
        (Or(
          t,
          { x: a, y: a, focalPoint: { x: e.clientX - n.left, y: e.clientY - n.top } },
          'zoom',
          'wheel'
        ),
          xt(i, [{ chart: t }]));
      }
      function tl(t, e, i, s) {
        i &&
          (mr(t).handlers[e] = (function (t, e) {
            let i;
            return function () {
              return (clearTimeout(i), (i = setTimeout(t, e)), e);
            };
          })(() => xt(i, [{ chart: t }]), s));
      }
      function el(t, e) {
        return function (i, s) {
          const { pan: n, zoom: o = {} } = e.options;
          if (!n || !n.enabled) return !1;
          const a = s && s.srcEvent;
          return !(
            a &&
            !e.panning &&
            'mouse' === s.pointerType &&
            (dr(cr(n), a) || hr(cr(o.drag), a)) &&
            (xt(n.onPanRejected, [{ chart: t, event: s }]), 1)
          );
        };
      }
      function il(t, e, i) {
        if (e.scale) {
          const { center: s, pointers: n } = i,
            o = (1 / e.scale) * i.scale,
            a = i.target.getBoundingClientRect(),
            r = (function (t, e) {
              const i = Math.abs(t.clientX - e.clientX),
                s = Math.abs(t.clientY - e.clientY),
                n = i / s;
              let o, a;
              return (
                n > 0.3 && n < 1.7 ? (o = a = !0) : i > s ? (o = !0) : (a = !0),
                { x: o, y: a }
              );
            })(n[0], n[1]),
            l = e.options.zoom.mode;
          (Or(
            t,
            {
              x: r.x && ur(l, 'x', t) ? o : 1,
              y: r.y && ur(l, 'y', t) ? o : 1,
              focalPoint: { x: s.x - a.left, y: s.y - a.top },
            },
            'zoom',
            'pinch'
          ),
            (e.scale = i.scale));
        }
      }
      function sl(t, e, i) {
        const s = e.delta;
        s &&
          ((e.panning = !0),
          Nr(t, { x: i.deltaX - s.x, y: i.deltaY - s.y }, e.panScales),
          (e.delta = { x: i.deltaX, y: i.deltaY }));
      }
      const nl = new WeakMap();
      function ol(t, e) {
        const i = mr(t),
          s = t.canvas,
          { pan: n, zoom: o } = e,
          a = new lr.Manager(s);
        (o &&
          o.pinch.enabled &&
          (a.add(new lr.Pinch()),
          a.on('pinchstart', (e) =>
            (function (t, e, i) {
              if (e.options.zoom.pinch.enabled) {
                const s = Li(i, t);
                !1 === xt(e.options.zoom.onZoomStart, [{ chart: t, event: i, point: s }])
                  ? ((e.scale = null), xt(e.options.zoom.onZoomRejected, [{ chart: t, event: i }]))
                  : (e.scale = 1);
              }
            })(t, i, e)
          ),
          a.on('pinch', (e) => il(t, i, e)),
          a.on('pinchend', (e) =>
            (function (t, e, i) {
              e.scale &&
                (il(t, e, i), (e.scale = null), xt(e.options.zoom.onZoomComplete, [{ chart: t }]));
            })(t, i, e)
          )),
          n &&
            n.enabled &&
            (a.add(new lr.Pan({ threshold: n.threshold, enable: el(t, i) })),
            a.on('panstart', (e) =>
              (function (t, e, i) {
                const { enabled: s, onPanStart: n, onPanRejected: o } = e.options.pan;
                if (!s) return;
                const a = i.target.getBoundingClientRect(),
                  r = { x: i.center.x - a.left, y: i.center.y - a.top };
                if (!1 === xt(n, [{ chart: t, event: i, point: r }]))
                  return xt(o, [{ chart: t, event: i }]);
                ((e.panScales = fr(e.options.pan, r, t)), (e.delta = { x: 0, y: 0 }), sl(t, e, i));
              })(t, i, e)
            ),
            a.on('panmove', (e) => sl(t, i, e)),
            a.on('panend', () =>
              (function (t, e) {
                ((e.delta = null),
                  e.panning &&
                    ((e.panning = !1),
                    (e.filterNextClick = !0),
                    xt(e.options.pan.onPanComplete, [{ chart: t }])));
              })(t, i)
            )),
          nl.set(t, a));
      }
      function al(t) {
        const e = nl.get(t);
        e &&
          (e.remove('pinchstart'),
          e.remove('pinch'),
          e.remove('pinchend'),
          e.remove('panstart'),
          e.remove('pan'),
          e.remove('panend'),
          e.destroy(),
          nl.delete(t));
      }
      function rl(t, e, i) {
        const s = i.zoom.drag,
          { dragStart: n, dragEnd: o } = mr(t);
        if (s.drawTime !== e || !o) return;
        const {
            left: a,
            top: r,
            width: l,
            height: c,
          } = Jr(t, i.zoom.mode, { dragStart: n, dragEnd: o }, s.maintainAspectRatio),
          h = t.ctx;
        (h.save(),
          h.beginPath(),
          (h.fillStyle = s.backgroundColor || 'rgba(225,225,225,0.3)'),
          h.fillRect(a, r, l, c),
          s.borderWidth > 0 &&
            ((h.lineWidth = s.borderWidth),
            (h.strokeStyle = s.borderColor || 'rgba(225,225,225)'),
            h.strokeRect(a, r, l, c)),
          h.restore());
      }
      var ll = {
        id: 'zoom',
        version: '2.2.0',
        defaults: {
          pan: { enabled: !1, mode: 'xy', threshold: 10, modifierKey: null },
          zoom: {
            wheel: { enabled: !1, speed: 0.1, modifierKey: null },
            drag: { enabled: !1, drawTime: 'beforeDatasetsDraw', modifierKey: null },
            pinch: { enabled: !1 },
            mode: 'xy',
          },
        },
        start: function (t, e, i) {
          ((mr(t).options = i),
            Object.prototype.hasOwnProperty.call(i.zoom, 'enabled') &&
              console.warn(
                'The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`.'
              ),
            (Object.prototype.hasOwnProperty.call(i.zoom, 'overScaleMode') ||
              Object.prototype.hasOwnProperty.call(i.pan, 'overScaleMode')) &&
              console.warn(
                'The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired).'
              ),
            lr && ol(t, i),
            (t.pan = (e, i, s) => Nr(t, e, i, s)),
            (t.zoom = (e, i) => Or(t, e, i)),
            (t.zoomRect = (e, i, s) => Rr(t, e, i, s)),
            (t.zoomScale = (e, i, s) =>
              (function (t, e, i, s = 'none', n = 'api') {
                const o = mr(t);
                (Er(t, o),
                  _r(t.scales[e], i, void 0, !0),
                  t.update(s),
                  xt(o.options.zoom?.onZoom, [{ chart: t, trigger: n }]));
              })(t, e, i, s)),
            (t.resetZoom = (e) =>
              (function (t, e = 'default') {
                const i = mr(t),
                  s = Er(t, i);
                (yt(t.scales, function (t) {
                  const e = t.options;
                  (s[t.id]
                    ? ((e.min = s[t.id].min.options), (e.max = s[t.id].max.options))
                    : (delete e.min, delete e.max),
                    delete i.updatedScaleLimits[t.id]);
                }),
                  t.update(e),
                  xt(i.options.zoom.onZoomComplete, [{ chart: t }]));
              })(t, e)),
            (t.getZoomLevel = () => Fr(t)),
            (t.getInitialScaleBounds = () => Br(t)),
            (t.getZoomedScaleBounds = () =>
              (function (t) {
                const e = mr(t),
                  i = {};
                for (const s of Object.keys(t.scales)) i[s] = e.updatedScaleLimits[s];
                return i;
              })(t)),
            (t.isZoomedOrPanned = () =>
              (function (t) {
                const e = Br(t);
                for (const i of Object.keys(t.scales)) {
                  const { min: s, max: n } = e[i];
                  if (void 0 !== s && t.scales[i].min !== s) return !0;
                  if (void 0 !== n && t.scales[i].max !== n) return !0;
                }
                return !1;
              })(t)),
            (t.isZoomingOrPanning = () => Vr(t)));
        },
        beforeEvent(t, { event: e }) {
          if (Vr(t)) return !1;
          if ('click' === e.type || 'mouseup' === e.type) {
            const e = mr(t);
            if (e.filterNextClick) return ((e.filterNextClick = !1), !1);
          }
        },
        beforeUpdate: function (t, e, i) {
          const s = mr(t),
            n = s.options;
          ((s.options = i),
            (function (t, e) {
              const { pan: i, zoom: s } = t,
                { pan: n, zoom: o } = e;
              return (
                s?.zoom?.pinch?.enabled !== o?.zoom?.pinch?.enabled ||
                i?.enabled !== n?.enabled ||
                i?.threshold !== n?.threshold
              );
            })(n, i) && (al(t), ol(t, i)),
            (function (t, e) {
              const i = t.canvas,
                { wheel: s, drag: n, onZoomComplete: o } = e.zoom;
              (s.enabled
                ? (Wr(t, i, 'wheel', Qr), tl(t, 'onZoomComplete', o, 250))
                : $r(t, 'wheel'),
                n.enabled
                  ? (Wr(t, i, 'mousedown', Xr), Wr(t, i.ownerDocument, 'mouseup', Gr))
                  : ($r(t, 'mousedown'), $r(t, 'mousemove'), $r(t, 'mouseup'), $r(t, 'keydown')));
            })(t, i));
        },
        beforeDatasetsDraw(t, e, i) {
          rl(t, 'beforeDatasetsDraw', i);
        },
        afterDatasetsDraw(t, e, i) {
          rl(t, 'afterDatasetsDraw', i);
        },
        beforeDraw(t, e, i) {
          rl(t, 'beforeDraw', i);
        },
        afterDraw(t, e, i) {
          rl(t, 'afterDraw', i);
        },
        stop: function (t) {
          (!(function (t) {
            ($r(t, 'mousedown'),
              $r(t, 'mousemove'),
              $r(t, 'mouseup'),
              $r(t, 'wheel'),
              $r(t, 'click'),
              $r(t, 'keydown'));
          })(t),
            lr && al(t),
            (function (t) {
              gr.delete(t);
            })(t));
        },
        panFunctions: Dr,
        zoomFunctions: Pr,
        zoomRectFunctions: Ar,
      };
      so.register(ll);
      const cl = so;
      function hl(t, e) {
        const i = [],
          s = [];
        let n = 0;
        return (
          t.forEach((t) => {
            (s.push(t),
              (n += t),
              s.length > e && (n -= s.shift()),
              i.push(s.length === e ? n / e : null));
          }),
          i
        );
      }
      function dl(t, e) {
        const i = new Array(t.length).fill(null),
          s = [];
        let n = 0;
        return (
          t.forEach((t, o) => {
            Number.isFinite(t) &&
              (s.push(t),
              (n += t),
              s.length > e && (n -= s.shift()),
              s.length === e && (i[o] = n / e));
          }),
          i
        );
      }
      function ul(t, e) {
        const i = new Array(t.length).fill(null),
          s = 2 / (e + 1);
        let n;
        return (
          t.forEach((t, o) => {
            Number.isFinite(t) &&
              ((n = void 0 === n ? t : t * s + n * (1 - s)), o >= e - 1 && (i[o] = n));
          }),
          i
        );
      }
      function pl(t, e = 14) {
        const i = new Array(t.length).fill(null);
        let s = 0,
          n = 0;
        for (let o = 1; o < t.length; o++) {
          const a = t[o] - t[o - 1],
            r = Math.max(0, a),
            l = Math.max(0, -a);
          if (o <= e) {
            if (((s += r), (n += l), o === e)) {
              const t = n / e,
                a = 0 === t ? 100 : s / e / t;
              i[o] = 100 - 100 / (1 + a);
            }
          } else {
            ((s = (s * (e - 1) + r) / e), (n = (n * (e - 1) + l) / e));
            const t = 0 === n ? 100 : s / n;
            i[o] = 100 - 100 / (1 + t);
          }
        }
        return i;
      }
      function fl(t, e, i) {
        const s = t.map((t) => t.close),
          n = dl(s, e),
          o = dl(s, i),
          a = [];
        for (let r = 1; r < t.length; r++) {
          const e = n[r - 1],
            i = o[r - 1],
            s = n[r],
            l = o[r];
          [e, i, s, l].some((t) => null === t) ||
            (e <= i &&
              s > l &&
              a.push({ type: 'buy', index: r, date: t[r].date, price: t[r].close }),
            e >= i &&
              s < l &&
              a.push({ type: 'sell', index: r, date: t[r].date, price: t[r].close }));
        }
        return { shortMA: n, longMA: o, signals: a };
      }
      function gl({ store: t, dataProvider: e, translator: i, formatters: s }) {
        const n = document.getElementById('technicals-form'),
          o = document.getElementById('technicals-symbol'),
          a = document.getElementById('technicals-interval'),
          r = document.getElementById('technicals-chart'),
          l = document.getElementById('technicals-signals'),
          c = document.getElementById('technicals-reset-zoom'),
          h = document.querySelector('.indicator-toggles');
        let d,
          u = null,
          p = { price: !0, sma20: !0, sma50: !0, ema12: !1, ema26: !1, rsi: !0, macd: !0 };
        async function f() {
          const n = (o.value || t.state.settings.defaultSymbol || 'AAPL').toUpperCase(),
            l = a.value;
          o.value = n;
          const c = await e.getSeries(n, l);
          if (!c.length) return;
          const h = c.map((t) => t.close),
            p = dl(h, 20),
            f = dl(h, 50),
            b = ul(h, 12),
            x = ul(h, 26),
            y = pl(h, 14),
            v = (function (t, e = 12, i = 26, s = 9) {
              const n = ul(t, e),
                o = ul(t, i),
                a = t.map((t, e) => (null === n[e] || null === o[e] ? null : n[e] - o[e])),
                r = ul(
                  a.map((t) => (null === t ? 0 : t)),
                  s
                ).map((t, e) => (null === a[e] ? null : t)),
                l = a.map((t, e) => (null === t || null === r[e] ? null : t - r[e]));
              return { macdLine: a, signalLine: r, histogram: l };
            })(h),
            _ = fl(c, 20, 50);
          ((u = { series: c, closes: h, rsi14: y, macdResult: v, signals: _.signals }),
            (function (t, e, n) {
              const o = e.map((t) => t.date),
                a = e.map((t) => t.close);
              (d && d.destroy(),
                (d = new cl(r, {
                  type: 'line',
                  data: {
                    labels: o,
                    datasets: [
                      {
                        label: i.t('technicals.chart.close', { symbol: t }),
                        data: a,
                        borderColor: '#38bdf8',
                        backgroundColor: 'rgba(56, 189, 248, 0.2)',
                        tension: 0.15,
                        yAxisID: 'price',
                      },
                      {
                        label: i.t('technicals.toggles.sma20'),
                        data: n.sma20,
                        borderColor: '#22c55e',
                        borderDash: [5, 3],
                        tension: 0.15,
                        yAxisID: 'price',
                      },
                      {
                        label: i.t('technicals.toggles.sma50'),
                        data: n.sma50,
                        borderColor: '#f97316',
                        borderDash: [6, 4],
                        tension: 0.15,
                        yAxisID: 'price',
                      },
                      {
                        label: i.t('technicals.toggles.ema12'),
                        data: n.ema12,
                        borderColor: '#c084fc',
                        borderDash: [3, 3],
                        tension: 0.15,
                        yAxisID: 'price',
                      },
                      {
                        label: i.t('technicals.toggles.ema26'),
                        data: n.ema26,
                        borderColor: '#facc15',
                        borderDash: [3, 6],
                        tension: 0.15,
                        yAxisID: 'price',
                      },
                      {
                        label: 'RSI (14)',
                        data: n.rsi14,
                        borderColor: '#34d399',
                        borderDash: [2, 2],
                        yAxisID: 'rsi',
                      },
                      {
                        label: 'MACD',
                        data: n.macdResult.macdLine,
                        borderColor: '#60a5fa',
                        yAxisID: 'macd',
                      },
                      {
                        label: 'MACD Signal',
                        data: n.macdResult.signalLine,
                        borderColor: '#fb7185',
                        borderDash: [4, 2],
                        yAxisID: 'macd',
                      },
                      {
                        label: 'MACD Hist',
                        type: 'bar',
                        data: n.macdResult.histogram,
                        backgroundColor: n.macdResult.histogram.map((t) =>
                          t >= 0 ? 'rgba(34, 197, 94, 0.5)' : 'rgba(248, 113, 113, 0.5)'
                        ),
                        yAxisID: 'macd',
                      },
                    ],
                  },
                  options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    interaction: { mode: 'index', intersect: !1 },
                    plugins: {
                      legend: { labels: { color: '#e2e8f0' } },
                      tooltip: {
                        callbacks: {
                          label(t) {
                            const e = t.parsed.y;
                            return 'rsi' === t.dataset.yAxisID
                              ? `RSI: ${s.number(e)}`
                              : 'macd' === t.dataset.yAxisID
                                ? `${t.dataset.label}: ${s.number(e)}`
                                : `${t.dataset.label}: ${s.currency(e)}`;
                          },
                        },
                      },
                      zoom: {
                        pan: { enabled: !0, mode: 'xy' },
                        zoom: {
                          wheel: { enabled: !0 },
                          pinch: { enabled: !0 },
                          drag: { enabled: !1 },
                          mode: 'xy',
                        },
                      },
                    },
                    scales: {
                      price: {
                        position: 'left',
                        ticks: { color: '#94a3b8' },
                        grid: { color: 'rgba(148, 163, 184, 0.1)' },
                      },
                      rsi: {
                        position: 'right',
                        min: 0,
                        max: 100,
                        ticks: { color: '#94a3b8' },
                        grid: { color: 'rgba(148, 163, 184, 0.05)' },
                      },
                      macd: {
                        position: 'right',
                        ticks: { color: '#94a3b8' },
                        grid: { display: !1 },
                      },
                      x: {
                        ticks: { color: '#94a3b8' },
                        grid: { color: 'rgba(148, 163, 184, 0.1)' },
                      },
                    },
                  },
                })),
                g());
            })(n, c, { sma20: p, sma50: f, ema12: b, ema26: x, rsi14: y, macdResult: v }),
            m());
        }
        function g() {
          d &&
            (d.data.datasets.forEach((t) => {
              const e = (i = t.label).includes('Price')
                ? 'price'
                : i.includes('SMA 20')
                  ? 'sma20'
                  : i.includes('SMA 50')
                    ? 'sma50'
                    : i.includes('EMA 12')
                      ? 'ema12'
                      : i.includes('EMA 26')
                        ? 'ema26'
                        : i.includes('RSI')
                          ? 'rsi'
                          : i.includes('MACD Hist') ||
                              i.includes('MACD Signal') ||
                              i.includes('MACD')
                            ? 'macd'
                            : null;
              var i;
              e && (t.hidden = !p[e]);
            }),
            d.update('none'));
        }
        function m() {
          if (!u) return void (l.innerHTML = '');
          const { closes: t, rsi14: e, macdResult: n, signals: o } = u,
            a = t.length - 1,
            r = t[a],
            c = e[a],
            h = n.macdLine[a],
            d = n.signalLine[a],
            f = o.at(-1),
            g = f ? a - f.index : null,
            m = f ? ('buy' === f.type ? 'bullish' : 'bearish') : 'neutral',
            b = f ? i.t(`technicals.bias.${m}`, { bars: g }) : i.t('technicals.bias.neutral'),
            x = p.rsi,
            y = p.macd;
          l.innerHTML = `\n      <div class="summary-card">\n        <h3>${i.t('technicals.summary.price')}</h3>\n        <p>${s.currency(r)}</p>\n      </div>\n      ${x ? `<div class="summary-card">\n              <h3>${i.t('technicals.summary.rsi')}</h3>\n              <p>${s.number(c)}</p>\n            </div>` : ''}\n      ${y ? `<div class="summary-card">\n              <h3>${i.t('technicals.summary.macd')}</h3>\n              <p>${s.number(h)} / ${s.number(d)}</p>\n            </div>` : ''}\n      <div class="summary-card">\n        <h3>${i.t('technicals.summary.bias')}</h3>\n        <p>${b}</p>\n      </div>\n      <div class="signals">\n        <h3>${i.t('technicals.signals.title')}</h3>\n        ${(function (
            t
          ) {
            return t.length
              ? t
                  .slice(-5)
                  .reverse()
                  .map(
                    (t) =>
                      `<div class="${'buy' === t.type ? 'signal' : 'signal sell'}">\n          <strong>${i.t(`common.signal.${t.type}`)} • ${t.date}</strong>\n          <div>${i.t('common.price')}: ${s.currency(t.price)}</div>\n        </div>`
                  )
                  .join('')
              : `<p class="small-text">${i.t('technicals.signals.empty')}</p>`;
          })(o)}\n      </div>`;
        }
        return (
          n.addEventListener('submit', async (t) => {
            (t.preventDefault(), await f());
          }),
          c.addEventListener('click', () => {
            d?.resetZoom && d.resetZoom();
          }),
          h.addEventListener('change', (t) => {
            const e = t.target.closest('input[type="checkbox"][data-indicator]');
            if (!e) return;
            const i = e.dataset.indicator;
            ((p[i] = e.checked), g(), m());
          }),
          {
            render: f,
            setFormatters: function (t) {
              return ((s = t), f());
            },
            populateDefaults: function (t) {
              o.value = t;
            },
          }
        );
      }
      function ml({ store: t, dataProvider: e, translator: i, formatters: s }) {
        const n = document.getElementById('backtest-form'),
          o = document.getElementById('backtest-symbol'),
          a = document.getElementById('backtest-short'),
          r = document.getElementById('backtest-long'),
          l = document.getElementById('backtest-results'),
          c = document.getElementById('backtest-chart'),
          h = document.getElementById('backtest-export-csv');
        let d,
          u = null,
          p = s;
        async function f() {
          const s = (o.value || t.state.settings.defaultSymbol || 'AAPL').toUpperCase(),
            n = Number.parseInt(a.value, 10) || 50,
            l = Number.parseInt(r.value, 10) || 200;
          if (n >= l) return void alert(i.t('backtest.form.invalid'));
          const c = (function (t, { shortPeriod: e, longPeriod: i, capital: s = 1e4 }) {
            if (!Array.isArray(t) || 0 === t.length) throw new Error('Series data required');
            if (e >= i) throw new Error('Short period must be less than long period');
            const { signals: n } = fl(t, e, i);
            let o = s,
              a = 0;
            const r = [],
              l = [];
            if (
              (t.forEach((t, e) => {
                const i = n.find((t) => t.index === e);
                i && 'buy' === i.type && 0 === a
                  ? ((a = o / t.close),
                    (o = 0),
                    l.push({ type: 'buy', date: t.date, price: t.close }))
                  : i &&
                    'sell' === i.type &&
                    a > 0 &&
                    ((o += a * t.close),
                    l.push({ type: 'sell', date: t.date, price: t.close }),
                    (a = 0));
                const s = o + a * t.close;
                r.push({ date: t.date, value: s });
              }),
              a > 0)
            ) {
              const e = t.at(-1);
              ((o += a * e.close), l.push({ type: 'sell', date: e.date, price: e.close }), (a = 0));
            }
            const c = o,
              h = s / t[0].close,
              d = t.map((t) => ({ date: t.date, value: h * t.close })),
              u = d.at(-1).value,
              p = (c - s) / s,
              f = (u - s) / s,
              g = new Date(t[0].date),
              m = new Date(t.at(-1).date),
              b = Math.max(1 / 365, (m - g) / 31536e6),
              x = Math.pow(c / s, 1 / b) - 1,
              y = Math.pow(u / s, 1 / b) - 1,
              v = l.filter((t) => 'sell' === t.type).length,
              _ = l.filter((t, e) => {
                if ('sell' !== t.type) return !1;
                const i = l
                  .slice(0, e)
                  .reverse()
                  .find((t) => 'buy' === t.type);
                return !!i && t.price > i.price;
              }).length,
              w = v > 0 ? _ / v : 0,
              M = (function (t) {
                let e = -1 / 0,
                  i = 0;
                return (
                  t.forEach(({ value: t }) => {
                    t > e && (e = t);
                    const s = (e - t) / e;
                    s > i && (i = s);
                  }),
                  i
                );
              })(r);
            return {
              equityCurve: r,
              buyHoldCurve: d,
              trades: l,
              stats: {
                totalReturn: p,
                buyHoldReturn: f,
                cagr: x,
                buyHoldCagr: y,
                completedTrades: v,
                winRate: w,
                maxDrawdown: M,
              },
            };
          })(await e.getSeries(s, 'daily'), { shortPeriod: n, longPeriod: l, capital: 1e4 });
          ((u = c), g(c.stats), m(0, c));
        }
        function g(t) {
          l.innerHTML = `\n      <div class="summary-card">\n        <h3>${i.t('backtest.summary.strategyReturn')}</h3>\n        <p>${p.percent(t.totalReturn)}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('backtest.summary.strategyCagr')}</h3>\n        <p>${p.percent(t.cagr)}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('backtest.summary.buyHoldReturn')}</h3>\n        <p>${p.percent(t.buyHoldReturn)}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('backtest.summary.buyHoldCagr')}</h3>\n        <p>${p.percent(t.buyHoldCagr)}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('backtest.summary.completedTrades')}</h3>\n        <p>${i.t('backtest.summary.tradeStats', { count: t.completedTrades, winRate: p.percent(t.winRate) })}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('backtest.summary.maxDrawdown')}</h3>\n        <p>${p.percent(t.maxDrawdown)}</p>\n      </div>`;
        }
        function m(t, e) {
          const s = e.equityCurve.map((t) => t.date),
            n = e.equityCurve.map((t) => t.value),
            o = e.buyHoldCurve.map((t) => t.value);
          (d && d.destroy(),
            (d = new cl(c, {
              type: 'line',
              data: {
                labels: s,
                datasets: [
                  {
                    label: i.t('backtest.chart.strategy'),
                    data: n,
                    borderColor: '#38bdf8',
                    fill: !1,
                    tension: 0.1,
                  },
                  {
                    label: i.t('backtest.chart.buyHold'),
                    data: o,
                    borderColor: '#22c55e',
                    fill: !1,
                    tension: 0.1,
                  },
                ],
              },
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                plugins: {
                  legend: { labels: { color: '#e2e8f0' } },
                  tooltip: {
                    callbacks: { label: (t) => `${t.dataset.label}: ${p.currency(t.parsed.y)}` },
                  },
                  zoom: {
                    pan: { enabled: !0, mode: 'xy' },
                    zoom: {
                      wheel: { enabled: !0 },
                      pinch: { enabled: !0 },
                      drag: { enabled: !1 },
                      mode: 'xy',
                    },
                  },
                },
                scales: {
                  x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
                  y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
                },
              },
            })));
        }
        return (
          n.addEventListener('submit', async (t) => {
            (t.preventDefault(), await f());
          }),
          h.addEventListener('click', () => {
            if (!u) return;
            const t = ['Date,Strategy,BuyHold'];
            (u.equityCurve.forEach((e, i) => {
              const s = u.buyHoldCurve[i];
              t.push(`${e.date},${e.value},${s.value}`);
            }),
              D('backtest-equity.csv', t.join('\n'), 'text/csv'));
          }),
          {
            render: f,
            setFormatters: function (t) {
              return ((p = t), u && (g(u.stats), m(o.value.toUpperCase(), u)), Promise.resolve());
            },
            populateDefaults: function (t) {
              o.value = t;
            },
          }
        );
      }
      function bl({ store: t, dataProvider: e, translator: i, formatters: s }) {
        const n = document.getElementById('dca-form'),
          o = document.getElementById('dca-symbol'),
          a = document.getElementById('dca-amount'),
          r = document.getElementById('dca-months'),
          l = document.getElementById('dca-results'),
          c = document.getElementById('dca-chart'),
          h = document.getElementById('dca-export-csv');
        let d,
          u = null,
          p = null,
          f = s;
        async function g() {
          const s = (o.value || t.state.settings.defaultSymbol || 'AAPL').toUpperCase(),
            n = Number.parseFloat(a.value),
            c = Number.parseInt(r.value, 10);
          if (!s || !Number.isFinite(n) || n <= 0 || !Number.isFinite(c) || c <= 0)
            return void alert(i.t('dca.form.invalid'));
          const h = await e.getSeries(s, 'daily'),
            f = (function (t, e) {
              const i = new Map();
              for (let s = t.length - 1; s >= 0 && i.size < e; s--) {
                const e = t[s],
                  n = e.date.slice(0, 7);
                i.has(n) || i.set(n, { date: e.date, price: e.close });
              }
              return Array.from(i.values()).sort((t, e) => new Date(t.date) - new Date(e.date));
            })(h, c);
          if (!f.length)
            return (
              (l.innerHTML = `<p class="small-text">${i.t('dca.empty')}</p>`),
              void (d && (d.destroy(), (d = null)))
            );
          let g = 0,
            x = 0;
          const y = f.map((t) => {
              g += n;
              const e = n / t.price;
              return ((x += e), { date: t.date, invested: g, shares: x, value: x * t.price });
            }),
            v = h.at(-1).close,
            _ = x * v,
            w = _ - g;
          ((u = y),
            (p = {
              invested: g,
              shares: x,
              currentValue: _,
              gain: w,
              gainPercent: 0 === g ? 0 : w / g,
            }),
            m(),
            b(y));
        }
        function m() {
          if (!p) return;
          const { invested: t, shares: e, currentValue: s, gain: n, gainPercent: o } = p;
          l.innerHTML = `\n      <div class="summary-card">\n        <h3>${i.t('dca.summary.invested')}</h3>\n        <p>${f.currency(t)}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('dca.summary.shares')}</h3>\n        <p>${f.number(e)}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('dca.summary.value')}</h3>\n        <p>${f.currency(s)}</p>\n      </div>\n      <div class="summary-card">\n        <h3>${i.t('dca.summary.gain')}</h3>\n        <p>${f.currency(n)} (${f.percent(o)})</p>\n      </div>`;
        }
        function b(t) {
          const e = t.map((t) => t.date),
            s = t.map((t) => t.invested),
            n = t.map((t) => t.value);
          (d && d.destroy(),
            (d = new cl(c, {
              type: 'line',
              data: {
                labels: e,
                datasets: [
                  {
                    label: i.t('dca.chart.invested'),
                    data: s,
                    borderColor: '#94a3b8',
                    tension: 0.1,
                    fill: !1,
                  },
                  {
                    label: i.t('dca.chart.value'),
                    data: n,
                    borderColor: '#38bdf8',
                    tension: 0.1,
                    fill: !1,
                  },
                ],
              },
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                plugins: {
                  legend: { labels: { color: '#e2e8f0' } },
                  tooltip: {
                    callbacks: { label: (t) => `${t.dataset.label}: ${f.currency(t.parsed.y)}` },
                  },
                  zoom: {
                    pan: { enabled: !0, mode: 'xy' },
                    zoom: {
                      wheel: { enabled: !0 },
                      pinch: { enabled: !0 },
                      drag: { enabled: !1 },
                      mode: 'xy',
                    },
                  },
                },
                scales: {
                  x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
                  y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
                },
              },
            })));
        }
        return (
          n.addEventListener('submit', async (t) => {
            (t.preventDefault(), await g());
          }),
          h.addEventListener('click', () => {
            u &&
              D(
                'dca-progress.csv',
                [
                  'Date,Invested,Shares,Value',
                  ...u.map((t) => `${t.date},${t.invested},${t.shares},${t.value}`),
                ].join('\n'),
                'text/csv'
              );
          }),
          {
            render: g,
            setFormatters: function (t) {
              return ((f = t), m(), u && b(u), Promise.resolve());
            },
            populateDefaults: function (t) {
              o.value = t;
            },
          }
        );
      }
      const xl = window.__ENV__ || window.env || {};
      function yl(t) {
        const e = (t.state.settings.defaultSymbol || 'AAPL').toUpperCase(),
          i = t.state.watchlist;
        (i.includes(e) || i.unshift(e), 0 === i.length && i.push(e), t.persist());
      }
      function vl(t) {
        const { apiKey: e, useNetlifyProxy: i } = t.state.settings;
        return Boolean(e || i);
      }
      !(async function () {
        const t = o();
        (!(function (t, e) {
          (e.ALPHA_VANTAGE_API_KEY && (t.state.settings.apiKey = e.ALPHA_VANTAGE_API_KEY),
            'boolean' == typeof e.USE_NETLIFY_PROXY &&
              (t.state.settings.useNetlifyProxy = e.USE_NETLIFY_PROXY),
            e.DEFAULT_SYMBOL &&
              (t.state.settings.defaultSymbol = String(e.DEFAULT_SYMBOL).toUpperCase()),
            t.persist());
        })(t, xl),
          yl(t));
        const e = new c();
        e.setLocale(t.state.settings.language);
        const i = (function (t) {
          const e = document.getElementById('api-status');
          return (
            t.onChange(() => {
              if (!e) return;
              const i = e.dataset.status || 'unknown';
              e.textContent = t.t(`status.api.${i}`);
            }),
            {
              update: function (i, s = '') {
                e &&
                  ((e.dataset.status = i),
                  (e.textContent = t.t(`status.api.${i}`)),
                  s ? (e.title = s) : e.removeAttribute('title'));
              },
            }
          );
        })(e);
        let s = { status: vl(t) ? 'unknown' : 'mock', message: '' };
        i.update(s.status, s.message);
        const n = A(t, (t, e = '') => {
          ((s = { status: t, message: e }), i.update(t, e));
        });
        let r = d(a[t.state.settings.language], t.state.settings.currency);
        (!(function () {
          const t = Array.from(document.querySelectorAll('.panel')),
            e = Array.from(document.querySelectorAll('.nav-btn'));
          e.forEach((i) => {
            i.addEventListener('click', () => {
              const s = i.dataset.target;
              (e.forEach((t) => t.classList.toggle('active', t === i)),
                t.forEach((t) => t.classList.toggle('active', t.id === s)));
              const n = t.find((t) => t.id === s);
              n && n.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
          });
        })(),
          e.applyTranslations());
        const l = (function ({ store: t, dataProvider: e, translator: i, formatters: s }) {
          const n = {},
            o = C({ store: t, dataProvider: e, translator: i, formatters: s }),
            a = (function ({ store: t, dataProvider: e, translator: i, formatters: s }) {
              const n = document.getElementById('quotes-form'),
                o = document.getElementById('quotes-symbol'),
                a = document.getElementById('quotes-list'),
                r = document.getElementById('quotes-filter'),
                l = document.getElementById('price-chart');
              let c,
                h = t.state.watchlist[0] || t.state.settings.defaultSymbol || 'AAPL',
                d = s;
              async function u() {
                (t.state.watchlist.includes(h) ||
                  (h = t.state.watchlist[0] || t.state.settings.defaultSymbol || 'AAPL'),
                  await p(),
                  await f(h));
              }
              async function p() {
                if (!t.state.watchlist.length)
                  return (
                    (a.innerHTML = `<p class="small-text">${i.t('quotes.empty')}</p>`),
                    void (c && (c.destroy(), (c = null)))
                  );
                const s = r.value.trim().toUpperCase(),
                  n = s
                    ? t.state.watchlist.filter((t) => t.toUpperCase().includes(s))
                    : [...t.state.watchlist],
                  o = await Promise.all(
                    n.map(async (t) => ({ symbol: t, quote: await e.getQuote(t) }))
                  );
                a.innerHTML = o
                  .map(({ symbol: t, quote: e }) => {
                    const s = e.change >= 0 ? 'positive' : 'negative';
                    return `<div class="card ${t === h ? 'active' : ''}" data-symbol="${t}">\n          <div class="card-header">\n            <div>\n              <strong>${t}</strong>\n              <div class="small-text">${i.t('quotes.card.last')}: ${d.currency(e.price)}</div>\n            </div>\n            <button data-action="remove" data-symbol="${t}" aria-label="${i.t('common.remove')} ${t}">✕</button>\n          </div>\n          <div class="card-body ${s}">\n            ${d.currency(e.change)} (${d.percent(e.changePercent / 100)})\n          </div>\n        </div>`;
                  })
                  .join('');
              }
              async function f(t) {
                const s = (await e.getSeries(t, 'daily')).slice(-180),
                  n = s.map((t) => t.date),
                  o = s.map((t) => t.close);
                c && c.destroy();
                const a = hl(o, 20),
                  r = hl(o, 50);
                c = new cl(l, {
                  type: 'line',
                  data: {
                    labels: n,
                    datasets: [
                      {
                        label: i.t('quotes.chart.close', { symbol: t }),
                        data: o,
                        borderColor: '#38bdf8',
                        backgroundColor: 'rgba(56, 189, 248, 0.2)',
                        tension: 0.15,
                        fill: !1,
                      },
                      {
                        label: i.t('quotes.chart.sma20'),
                        data: a,
                        borderColor: '#22c55e',
                        borderDash: [4, 4],
                        tension: 0.15,
                        fill: !1,
                      },
                      {
                        label: i.t('quotes.chart.sma50'),
                        data: r,
                        borderColor: '#f97316',
                        borderDash: [6, 6],
                        tension: 0.15,
                        fill: !1,
                      },
                    ],
                  },
                  options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    plugins: {
                      legend: { labels: { color: '#e2e8f0' } },
                      tooltip: {
                        callbacks: {
                          label: (t) => `${t.dataset.label}: ${d.currency(t.parsed.y)}`,
                        },
                      },
                      zoom: {
                        pan: { enabled: !0, mode: 'xy' },
                        zoom: {
                          wheel: { enabled: !0 },
                          pinch: { enabled: !0 },
                          drag: { enabled: !1 },
                          mode: 'xy',
                        },
                      },
                    },
                    scales: {
                      x: {
                        ticks: { color: '#94a3b8' },
                        grid: { color: 'rgba(148, 163, 184, 0.1)' },
                      },
                      y: {
                        ticks: { color: '#94a3b8' },
                        grid: { color: 'rgba(148, 163, 184, 0.1)' },
                      },
                    },
                  },
                });
              }
              return (
                n.addEventListener('submit', async (e) => {
                  e.preventDefault();
                  const i = o.value.trim().toUpperCase();
                  i &&
                    (t.state.watchlist.includes(i) || (t.state.watchlist.push(i), t.persist()),
                    (h = i),
                    n.reset(),
                    await u());
                }),
                r.addEventListener('input', () => p()),
                a.addEventListener('click', async (e) => {
                  const i = e.target.closest('button[data-action="remove"]'),
                    s = e.target.closest('.card[data-symbol]');
                  if (i) {
                    const e = i.dataset.symbol;
                    return (
                      (t.state.watchlist = t.state.watchlist.filter((t) => t !== e)),
                      t.persist(),
                      h === e &&
                        (h = t.state.watchlist[0] || t.state.settings.defaultSymbol || 'AAPL'),
                      void (await u())
                    );
                  }
                  s && ((h = s.dataset.symbol), p(), await f(h));
                }),
                {
                  render: u,
                  setFormatters: async function (t) {
                    ((d = t), await u());
                  },
                  setActiveSymbol: function (t) {
                    h = t.toUpperCase();
                  },
                }
              );
            })({ store: t, dataProvider: e, translator: i, formatters: s }),
            r = gl({ store: t, dataProvider: e, translator: i, formatters: s }),
            l = ml({ store: t, dataProvider: e, translator: i, formatters: s }),
            c = bl({ store: t, dataProvider: e, translator: i, formatters: s }),
            h = (function ({ store: t, dataProvider: e, translator: i, formatters: s }) {
              const n = document.getElementById('alerts-form'),
                o = document.getElementById('alerts-symbol'),
                a = document.getElementById('alerts-rsi-low'),
                r = document.getElementById('alerts-rsi-high'),
                l = document.getElementById('alerts-list');
              async function c() {
                if (!t.state.alerts.length)
                  return void (l.innerHTML = `<p class="small-text">${i.t('alerts.empty')}</p>`);
                const n = await Promise.all(
                  t.state.alerts.map(async (t) => {
                    const i = (await e.getSeries(t.symbol, 'daily')).map((t) => t.close),
                      s = pl(i, 14).at(-1),
                      n = i.at(-1);
                    let o = 'neutral';
                    return (
                      s <= t.rsiLow ? (o = 'oversold') : s >= t.rsiHigh && (o = 'overbought'),
                      { alert: t, lastPrice: n, latestRsi: s, statusKey: o }
                    );
                  })
                );
                l.innerHTML = n
                  .map((t) => {
                    const e =
                        'oversold' === t.statusKey
                          ? 'card signal'
                          : 'overbought' === t.statusKey
                            ? 'card signal sell'
                            : 'card',
                      n = i.t(`alerts.status.${t.statusKey}`);
                    return `<div class="${e}" data-id="${t.alert.id}">\n          <div class="card-header">\n            <div>\n              <strong>${t.alert.symbol}</strong>\n              <div class="small-text">${i.t('quotes.card.last')}: ${s.currency(t.lastPrice)}</div>\n            </div>\n            <button data-action="remove" data-id="${t.alert.id}" aria-label="${i.t('common.remove')} ${t.alert.symbol}">✕</button>\n          </div>\n          <div class="card-body">\n            ${i.t('alerts.card.rsi', { value: s.number(t.latestRsi) })}<br />\n            ${i.t('alerts.card.thresholds', { low: s.number(t.alert.rsiLow), high: s.number(t.alert.rsiHigh) })}<br />\n            ${i.t('alerts.card.status', { status: n })}\n          </div>\n        </div>`;
                  })
                  .join('');
              }
              return (
                n.addEventListener('submit', async (e) => {
                  e.preventDefault();
                  const s = o.value.trim().toUpperCase(),
                    l = Number.parseFloat(a.value),
                    h = Number.parseFloat(r.value);
                  s && Number.isFinite(l) && Number.isFinite(h) && !(l >= h)
                    ? (t.state.alerts.push({
                        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                        symbol: s,
                        rsiLow: l,
                        rsiHigh: h,
                      }),
                      t.persist(),
                      n.reset(),
                      (o.value = s),
                      await c())
                    : alert(i.t('alerts.form.invalid'));
                }),
                l.addEventListener('click', async (e) => {
                  const i = e.target.closest('button[data-action="remove"]');
                  if (!i) return;
                  const s = i.dataset.id;
                  ((t.state.alerts = t.state.alerts.filter((t) => t.id !== s)),
                    t.persist(),
                    await c());
                }),
                {
                  render: c,
                  populateDefaults: function (t) {
                    o.value = t;
                  },
                  setFormatters: function (t) {
                    ((s = t), c());
                  },
                }
              );
            })({ store: t, dataProvider: e, translator: i, formatters: s });
          return (
            (n.renderAll = async () => {
              (await o.render(),
                await a.render(),
                await r.render(),
                await l.render(),
                await c.render(),
                await h.render());
            }),
            (n.setFormatters = (t) =>
              Promise.all([
                o.setFormatters(t),
                a.setFormatters?.(t),
                r.setFormatters(t),
                l.setFormatters(t),
                c.setFormatters(t),
                h.setFormatters?.(t),
              ])),
            (n.populateDefaults = (t) => {
              (o.populateDefaults(t),
                a.setActiveSymbol(t),
                r.populateDefaults(t),
                l.populateDefaults(t),
                c.populateDefaults(t),
                h.populateDefaults(t));
            }),
            n
          );
        })({ store: t, dataProvider: n, translator: e, formatters: r });
        (!(function (t, e, { onLanguageChange: i, onCurrencyChange: s }) {
          const n = document.getElementById('global-language'),
            o = document.getElementById('global-currency');
          (Object.entries(a).forEach(([t, e]) => {
            const i = document.createElement('option');
            ((i.value = t), (i.textContent = e.label), n.appendChild(i));
          }),
            h.forEach((t) => {
              const e = document.createElement('option');
              ((e.value = t.code), (e.textContent = t.label), o.appendChild(e));
            }),
            (n.value = t.state.settings.language),
            (o.value = t.state.settings.currency),
            n.addEventListener('change', async (t) => {
              await i(t.target.value);
            }),
            o.addEventListener('change', async (t) => {
              await s(t.target.value);
            }));
        })(t, 0, {
          onLanguageChange: async (n) => {
            ((t.state.settings.language = n),
              t.persist(),
              e.setLocale(n),
              e.applyTranslations(),
              (r = d(a[n], t.state.settings.currency)),
              await l.setFormatters(r),
              i.update(s.status, s.message));
          },
          onCurrencyChange: async (e) => {
            ((t.state.settings.currency = e),
              t.persist(),
              (r = d(a[t.state.settings.language], e)),
              await l.setFormatters(r));
          },
        }),
          (function ({
            store: t,
            translator: e,
            dataProvider: i,
            onSettingsChanged: s,
            onReset: n,
          }) {
            const o = document.getElementById('settings-form'),
              a = document.getElementById('settings-api-key'),
              r = document.getElementById('settings-default-symbol'),
              l = document.getElementById('settings-netlify-proxy'),
              c = document.getElementById('settings-reset');
            function h() {
              const { settings: e } = t.state;
              ((a.value = e.apiKey || ''),
                (r.value = e.defaultSymbol || 'AAPL'),
                (l.checked = Boolean(e.useNetlifyProxy)));
            }
            (h(),
              o.addEventListener('submit', (n) => {
                n.preventDefault();
                const o = t.state.settings;
                ((o.apiKey = a.value.trim()),
                  (o.defaultSymbol = (r.value || 'AAPL').toUpperCase()),
                  (o.useNetlifyProxy = l.checked),
                  t.persist(),
                  i.clearCache(),
                  s(),
                  alert(e.t('settings.saveSuccess')));
              }),
              c.addEventListener('click', () => {
                confirm(e.t('settings.resetConfirm')) &&
                  (t.reset(), i.clearCache(), h(), n(), alert(e.t('settings.resetDone')));
              }));
          })({
            store: t,
            translator: e,
            dataProvider: n,
            onSettingsChanged: async () => {
              (yl(t),
                l.populateDefaults(t.state.settings.defaultSymbol),
                await l.renderAll(),
                (s = { status: vl(t) ? 'unknown' : 'mock', message: '' }),
                i.update(s.status, s.message));
            },
            onReset: async () => {
              (e.setLocale(t.state.settings.language),
                e.applyTranslations(),
                (r = d(a[t.state.settings.language], t.state.settings.currency)),
                await l.setFormatters(r),
                yl(t),
                l.populateDefaults(t.state.settings.defaultSymbol),
                await l.renderAll(),
                (s = { status: vl(t) ? 'unknown' : 'mock', message: '' }),
                i.update(s.status, s.message));
            },
          }),
          l.populateDefaults(t.state.settings.defaultSymbol),
          await l.renderAll(),
          e.applyTranslations());
      })();
    },
  };
});
//# sourceMappingURL=index-legacy-QcGxnyeX.js.map
