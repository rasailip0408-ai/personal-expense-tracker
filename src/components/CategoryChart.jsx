// Stretch goal: a simple bar chart showing expense totals per category.
// Built with plain divs sized by percentage rather than a charting library,
// which keeps the design consistent with the rest of the app.
function CategoryChart({ transactions }) {
  const expenses = transactions.filter((t) => t.type === 'expense')

  if (expenses.length === 0) {
    return null
  }

  const totalsByCategory = expenses.reduce((totals, t) => {
    totals[t.category] = (totals[t.category] || 0) + t.amount
    return totals
  }, {})

  const entries = Object.entries(totalsByCategory).sort((a, b) => b[1] - a[1])
  const maxValue = Math.max(...entries.map(([, value]) => value))

  return (
    <div className="category-chart">
      <h2>Spending by Category</h2>
      {entries.map(([category, value]) => (
        <div className="chart-row" key={category}>
          <span className="chart-label">{category}</span>
          <div className="chart-bar-track">
            <div
              className="chart-bar-fill"
              style={{ width: `${(value / maxValue) * 100}%` }}
            />
          </div>
          <span className="chart-value">{value.toFixed(2)}</span>
        </div>
      ))}
    </div>
  )
}

export default CategoryChart
