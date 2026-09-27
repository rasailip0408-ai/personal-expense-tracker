function formatMoney(amount) {
  return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function Balance({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpense

  return (
    <div className="balance-card">
      <div className="balance-main">
        <span className="balance-label">Current Balance</span>
        <span className={`balance-amount ${balance < 0 ? 'negative' : ''}`}>
          {formatMoney(balance)}
        </span>
      </div>
      <div className="balance-split">
        <div>
          <span className="split-label">Income</span>
          <span className="split-amount income">+{formatMoney(totalIncome)}</span>
        </div>
        <div>
          <span className="split-label">Expenses</span>
          <span className="split-amount expense">-{formatMoney(totalExpense)}</span>
        </div>
      </div>
    </div>
  )
}

export default Balance
