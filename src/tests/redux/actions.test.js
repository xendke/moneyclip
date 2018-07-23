import * as actions from '../../redux/actions';
import moment from 'moment';

/*
* Expenses
*/
it('returns valid addExpense action from given input', () => {
	const addExpenseAction = actions.addExpense(
		{
			description: "testing",
			amount: 10,
			createdAt: 1000,
			note: ''
		}
	);

	const expected = {
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: "testing",
			amount: 10,
			createdAt: expect.any(Number),
			note: ''
		}
	};

	expect(addExpenseAction).toEqual(expected);
});
it('returns valid addExpense action (default values)', () => {
	const addExpenseAction = actions.addExpense();
	const expected = {
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			amount: 0,
			createdAt: 0,
			note: ''
		}
	};
	expect(addExpenseAction).toEqual(expected);
});

it('returns valid removeExense action', () => {
	const action = actions.removeExpense({ id: 1 });
	const expected = {
		type: 'REMOVE_EXPENSE',
		id: 1
	};
	expect(action).toEqual(expected);
});

it('returns valid editExpense action', () => {
	const action = actions.editExpense({
		id: '123abc',
		description: 'testing',
		note: '',
		amount: 300,
		createdAt: 0
	});
	const expected = {
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			description: 'testing',
			note: '',
			amount: 300,
			createdAt: expect.any(Number)
		}
	};
	expect(action).toEqual(expected);
});

/*
* Filters
*/
it('returns valid setTextFilter action', () => {
	// default value
	let action = actions.setTextFilter();
	let expected = {
		type: 'SET_TEXT_FILTER',
		text: undefined
	};

	expect(action).toEqual(expected);

	// with value
	action = actions.setTextFilter('something');
	expected = {
		type: 'SET_TEXT_FILTER',
		text: expect.any(String)
	};

	expect(action).toEqual(expected);
});

it('returns valid sortByDate action', () => {
	const action = actions.sortByDate();
	const expected = {
		type: 'SORT_BY_DATE'
	};

	expect(action).toEqual(expected);
});

it('returns valid sortByAmount action', () => {
	const action = actions.sortByAmount();
	const expected = {
		type: 'SORT_BY_AMOUNT'
	}

	expect(action).toEqual(expected);
});

it('returns valid setStartDate action', () => {
	const action = actions.setStartDate({ startDate: moment(0) });
	const expected = {
		type: 'SET_START_DATE',
		startDate: moment(0)
	};

	expect(action).toEqual(expected);
});

it('returns valid setEndDate action', () => {
	const action = actions.setEndDate({ endDate: moment(0) });
	const expected = {
		type: 'SET_END_DATE',
		endDate: moment(0)
	};

	expect(action).toEqual(expected);
});