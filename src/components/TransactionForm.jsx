import { useState } from 'react'

const EXPENSE_CATEGORIES = ['Food', 'Transport', 'Bills', 'Shopping', 'Entertainment', 'Other']
const INCOME_CATEGORIES = ['Salary', 'Freelance', 'Gift', 'Other']

// Fully controlled form: type, amount, category, description, and date
// are all held in this component's own state via useState.
function TransactionForm({ onAddTransaction }) {
  const [type, setType] = useState('expense')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(EXPENSE_CATEGORIES[0])
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [error, setError] = useState('')

  const categories = type === 'expense' ? EXPENSE_CATEGORIES : INCOME_CATEGORIES

  const handleTypeChange = (newType) => {
    setType(newType)
    setCategory(newType === 'expense' ? EXPENSE_CATEGORIES[0] : INCOME_CATEGORIES[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const numericAmount = parseFloat(amount)
    if (!numericAmount || numericAmount <= 0) {
      setError('Enter an amount greater than 0.')
      return
    }

    onAddTransaction({
      type,
      amount: numericAmount,
      category,
      description: description.trim() || category,
      date,
    })

    setAmount('')
    setDescription('')
    setError('')
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="type-toggle">
        <button
          type="button"
          className={type === 'expense' ? 'active expense' : ''}
          onClick={() => handleTypeChange('expense')}
        >
          Expense
        </button>
        <button
          type="button"
          className={type === 'income' ? 'active income' : ''}
          onClick={() => handleTypeChange('income')}
        >
          Income
        </button>
      </div>

      <div className="form-row">
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          aria-label="Amount"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Category"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          aria-label="Date"
        />
      </div>

      <div className="form-row">
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          aria-label="Description"
        />
        <button type="submit">Add {type === 'expense' ? 'Expense' : 'Income'}</button>
      </div>

      {error && <p className="form-error">{error}</p>}
    </form>
  )
}

export default TransactionForm
