# Hindcast

## Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
src/
├─ app/          routes only, kept thin (pages + api/)
├─ features/     one folder per feature: what-if, portfolio, projections, ask
├─ domain/       pure math + types, tests next to the code
├─ server/       secrets and outside APIs: market-data/, ai/
├─ components/   shared UI pieces
└─ lib/          small helpers: number formatting, dates
```
