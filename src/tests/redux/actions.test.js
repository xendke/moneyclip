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
			createdAt: moment().valueOf(),
			note: ''
		}
	);

	const expected = {
		type: 'ADD_EXPENSE',
		expense: {
			id: addExpenseAction.expense.id,
			description: "testing",
			amount: 10,
			createdAt: addExpenseAction.expense.createdAt,
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
			id: addExpenseAction.expense.id, // use expect.any(String) for more dynamic data
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
	const createdAt = moment().valueOf()
	const action = actions.editExpense({
		id: '123abc',
		description: 'testing',
		note: '',
		amount: 300,
		createdAt
	});
	const expected = {
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			description: 'testing',
			note: '',
			amount: 300,
			createdAt
		}
	};
	expect(action).toEqual(expected);
});

/*
* Filters
*/
