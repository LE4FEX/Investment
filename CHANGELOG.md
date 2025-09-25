# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-11-24

### Added

- Rebuilt the toolkit as a modular Vite application with dedicated `core/`, `services/`, `state/`, `ui/`, and `i18n/` layers.
- Introduced locale-aware formatting, multi-currency toggles, and live API status badges.
- Added CSV/JSON import-export for portfolios, equity/DCA exports, and Chart.js zoom with indicator toggles.
- Implemented Alpha Vantage/Mock adapters with caching, TTL, and exponential backoff handling.
- Added MIT license, linting/formatting toolchain (ESLint, Prettier, Husky), Vitest unit tests (indicators/backtest), and GitHub Actions CI workflow.
- Documented privacy and non-advice notices, setup instructions (npm scripts, screenshots placeholders), and changelog.

[0.1.0]: https://github.com/your-org-or-user/Investment/releases/tag/v0.1.0
