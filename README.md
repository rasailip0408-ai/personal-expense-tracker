# Personal Expense Tracker

A React app for logging income and expenses, seeing your running balance, and understanding where your money goes at a glance.

## Features

- Add transactions with an amount, type (income/expense), category, description, and date
- Live running balance (income − expenses), shown alongside income/expense totals
- List all transactions with the ability to delete individual entries
- Filter by category and sort by date or amount
- Data persists in the browser via `localStorage` — refreshing the page keeps your data
- **Stretch goal:** a simple bar chart of spending by category
- **Stretch goal:** set a monthly budget and get a warning when you go over it

## Technologies Used

- React 18 (functional components + hooks)
- Vite (build tool / dev server)
- Plain CSS (flexbox layout, no external UI library)
- Browser `localStorage` API

## Setup Instructions

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Screenshots


![Expense Tracker](./Screenshot/Screenshot%202026-09-27%20134749.png)
![Budget Warning](./Screenshot/Screenshot%202026-09-27%20134206.png)
![Sorting Transactions](./Screenshot/Screenshot%202026-09-27%20133926.png)

## Known Limitations

- No monthly summary view that groups past months separately (only the current month is tracked against the budget)
- Categories are fixed rather than user-defined
- Data is stored only in the current browser (no account/sync across devices)
