import { useState, useMemo, useEffect } from 'react'
import Header from './components/Header.jsx'
import Balance from './components/Balance.jsx'
import TransactionForm from './components/TransactionForm.jsx'
import FilterSortBar from './components/FilterSortBar.jsx'
import TransactionList from './components/TransactionList.jsx'
import CategoryChart from './components/CategoryChart.jsx'
import BudgetTracker from './components/BudgetTracker.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import './index.css'

function App() {
  const [transactions, setTransactions] = useLocalStorage('transactions', [])
  const [budget, setBudget] = useLocalStorage('monthlyBudget', null)

useEffect(() => {
  document.title = 'Personal Expense Tracker'
}, [])



  const [categoryFilter, setCategoryFilter] = useState('All')
  const [sortBy, setSortBy] = useState('date-desc')

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      { id: crypto.randomUUID(), ...newTransaction },
    ])
  }

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }

  const visibleTransactions = useMemo(() => {
    let result = transactions.filter(
      (t) => categoryFilter === 'All' || t.category === categoryFilter,
    )

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'date-asc':
          return new Date(a.date) - new Date(b.date)
        case 'amount-desc':
          return b.amount - a.amount
        case 'amount-asc':
          return a.amount - b.amount
        case 'date-desc':
        default:
          return new Date(b.date) - new Date(a.date)
      }
    })

    return result
  }, [transactions, categoryFilter, sortBy])

  return (
    <div className="app">
      <Header />

      <main>
        <Balance transactions={transactions} />

        <TransactionForm onAddTransaction={addTransaction} />

        <BudgetTracker transactions={transactions} budget={budget} onSetBudget={setBudget} />

        <CategoryChart transactions={transactions} />

        <FilterSortBar
          categoryFilter={categoryFilter}
          onCategoryFilterChange={setCategoryFilter}
          sortBy={sortBy}
          onSortByChange={setSortBy}
        />

        <TransactionList
          transactions={visibleTransactions}
          onDeleteTransaction={deleteTransaction}
        />
      </main>
    </div>
  )
}

export default App
