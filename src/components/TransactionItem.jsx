function formatMoney(amount) {
  return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function TransactionItem({ transaction, onDeleteTransaction }) {
  const isExpense = transaction.type === 'expense'

  return (
    <li className={`transaction-item ${transaction.type}`}>
      <div className="transaction-main">
        <span className="transaction-description">{transaction.description}</span>
        <div className="transaction-meta">
          <span className="badge">{transaction.category}</span>
          <span className="transaction-date">{transaction.date}</span>
        </div>
      </div>

      <span className={`transaction-amount ${isExpense ? 'expense' : 'income'}`}>
        {isExpense ? '-' : '+'}
        {formatMoney(transaction.amount)}
      </span>

      <button
        className="delete-btn"
        onClick={() => onDeleteTransaction(transaction.id)}
        aria-label={`Delete transaction: ${transaction.description}`}
      >
        🗑️
      </button>
    </li>
  )
}

export default TransactionItem
