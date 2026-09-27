import TransactionItem from './TransactionItem.jsx'

function TransactionList({ transactions, onDeleteTransaction }) {
  if (transactions.length === 0) {
    return <p className="empty-state">No transactions match this filter yet.</p>
  }

  return (
    <ul className="transaction-list">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          onDeleteTransaction={onDeleteTransaction}
        />
      ))}
    </ul>
  )
}

export default TransactionList
