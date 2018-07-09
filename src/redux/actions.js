import uuid from 'uuid';

/*
* Expenses
*/
export const addExpense = (
	{ description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

export const removeExpense = ({ id }) => ({
	type: 'REMOVE_EXPENSE',
	id
});

export const editExpense = ({ id, description, note, amount }) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates: {
		description,
		note,
		amount
	}
});


/*
* Filters
*/
export const setTextFilter = (text) => ({
	type: 'SET_TEXT_FILTER',
	text
});

export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

export const setStartDate = ({ startDate }) => ({
	type: 'SET_START_DATE',
	startDate
});

export const setEndDate = ({ endDate }) => ({
	type: 'SET_END_DATE',
	endDate
});
