import moment from 'moment';

export const getVisibleExpenses = (expenses, { text = '', startDate, endDate, sortBy }) => {
	// Filter and sort expenses.
	const t = expenses.filter((expense) => {
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
		const momentCreated = moment(expense.createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(momentCreated, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(momentCreated, 'day') : true;

		return textMatch && startDateMatch && endDateMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		} else {
			throw new Error(`sorting by: '${sortBy}' not supported`);
		}
	})
	return t;
};

export const getTotalFromExpenses = (expenses) => {
	return expenses.map(expense => (expense.amount)).reduce((acc, curr) => (acc + curr), 0);
};