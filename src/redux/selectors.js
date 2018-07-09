const getVisibleExpenses = (expenses, { text = '', startDate, endDate, sortBy }) => {
	// Filter and sort expenses.
	return expenses.filter((expense) => {
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= startDate;

		return textMatch && startDateMatch && endDateMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		} else {
			throw new Error(`sorting by: '${sortBy}' not supported`);
		}
	});
};
export default getVisibleExpenses;