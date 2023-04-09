## Файловая структура

```
structure
├── public
├── src
│   ├── app
│   │    ├── App.css
│   │    ├── App.tsx
│   │    ├── appReducer.ts
│   │    ├── appReducer.test.ts
│   │    └── store.ts
│   ├── common
│   │    ├── components
│   │    │    ├── ErrorSnackbar
│   │    │    └── Header
│   │    └── instance
│   ├── feature
│   │    └── stock
│   │         ├── StockPagination
│   │         ├── StockTable
│   │         ├── Stock.tsx
│   │         ├── stock.module.css
│   │         ├── stockAPI.ts
│   │         ├── stockReducer.ts
│   │         └── stockReducer.test.ts
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .gitignore
├── tsconfig.json
├── package.json
├── yarn.lock
└── README.md