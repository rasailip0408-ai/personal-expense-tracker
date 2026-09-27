import { useState } from 'react'

// Stretch goal: lets the user set a monthly budget limit and shows a
// warning once expenses for the current month exceed it.
function BudgetTracker({ transactions, budget, onSetBudget }) {
  const [draft, setDraft] = useState(budget || '')

  const now = new Date()
  const currentMonthExpenses = transactions
    .filter((t) => {
      const d = new Date(t.date)
      return t.type === 'expense' && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    })
    .reduce((sum, t) => sum + t.amount, 0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = parseFloat(draft)
    onSetBudget(value > 0 ? value : null)
  }

  const overBudget = budget && currentMonthExpenses > budget

  return (
    <div className="budget-tracker">
      <form onSubmit={handleSubmit} className="budget-form">
        <label htmlFor="budget-input">Monthly budget</label>
        <input
          id="budget-input"
          type="number"
          min="0"
          step="0.01"
          placeholder="e.g. 500"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        <button type="submit">Set</button>
      </form>

      {budget && (
        <p className={`budget-status ${overBudget ? 'over' : ''}`}>
          Spent {currentMonthExpenses.toFixed(2)} of {budget.toFixed(2)} this month
          {overBudget && ' — you are over budget!'}
        </p>
      )}
    </div>
  )
}

export default BudgetTracker
