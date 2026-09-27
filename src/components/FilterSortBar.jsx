const ALL_CATEGORIES = [
  'All',
  'Food',
  'Transport',
  'Bills',
  'Shopping',
  'Entertainment',
  'Salary',
  'Freelance',
  'Gift',
  'Other',
]

function FilterSortBar({ categoryFilter, onCategoryFilterChange, sortBy, onSortByChange }) {
  return (
    <div className="filter-sort-bar">
      <select
        value={categoryFilter}
        onChange={(event) => onCategoryFilterChange(event.target.value)}
        aria-label="Filter by category"
      >
        {ALL_CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat === 'All' ? 'All Categories' : cat}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(event) => onSortByChange(event.target.value)}
        aria-label="Sort transactions"
      >
        <option value="date-desc">Newest First</option>
        <option value="date-asc">Oldest First</option>
        <option value="amount-desc">Amount: High to Low</option>
        <option value="amount-asc">Amount: Low to High</option>
      </select>
    </div>
  )
}

export default FilterSortBar
