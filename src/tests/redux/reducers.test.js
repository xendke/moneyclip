import { filtersReducer, expensesReducer } from '../../redux/reducers';
import moment from 'moment';
import expenses from '../fixtures/expenses';

/*
 * Filters Reducer
 */
it('returns valid default filters state', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	const defaultState = {
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	};
	expect(state).toEqual(defaultState);
});

it('sets sortBy to date', () => {
	const stateAsAmount = {
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	};
	const state = filtersReducer(stateAsAmount, { type: 'SORT_BY_DATE' });

	expect(state.sortBy).toEqual('date');
});

it('sets sortBy to amount', () => {
	const stateAsDate = {
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	};
	const state = filtersReducer(stateAsDate, { type: 'SORT_BY_AMOUNT' });

	expect(state.sortBy).toEqual('amount');
});

it('sets text filter', () => {
	const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'testing' });

	expect(state.text).toEqual('testing');
});

it('sets startDate filter', () => {
	const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) });

	expect(state.startDate).toEqual(moment(0));
});

it('sets endDate filter', () => {
	const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0) });

	expect(state.endDate).toEqual(moment(0));
});

/*
 * Expenses Reducer
 */

it('sets default expenses state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });

	expect(state).toEqual([]);
});

it('adds new expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			id: '123',
			description: 'de',
			note: '21',
			amount: 123,
			createdAt: 100
		}
	};
	const state = expensesReducer(expenses, action);

	expect(state.length).toBe(expenses.length + 1);
	expect(state).toEqual([...expenses, action.expense]);
});

it('edits expense given valid id', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: { description: 'test edit' }
	};
	const state = expensesReducer(expenses, action);

	expect(state[1]).toEqual({ ...expenses[1], ...action.updates });
});

it('does not edit expense given invalid id', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1 invalid id',
		updates: { description: 'test edit' }
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});

it('removse expense given valid id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual([expenses[0], expenses[2]]);
});

it('does not remove expense given invalid id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: 'invalid id 123'
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});