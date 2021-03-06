import { getVisibleExpenses, getTotalFromExpenses } from '../../redux/selectors';
import moment from 'moment';
import expenses from '../fixtures/expenses';

/*
* getVisibleExpenses
*/

it('matches text (one word)', () => {
	const filters = {
		text: "the",
		sortBy: "amount",
		startDate: undefined,
		endDate: undefined
	};
	const visibleExpenses = getVisibleExpenses(expenses, filters);
	const expected = [expenses[1], expenses[0]];

	expect(visibleExpenses).toMatchObject(expected);
});
it('matches text (capitalized)', () => {
	const filters = {
		text: "The",
		sortBy: "amount",
		startDate: undefined,
		endDate: undefined
	};
	const visibleExpenses = getVisibleExpenses(expenses, filters);
	const expected = [expenses[1], expenses[0]];

	expect(visibleExpenses).toMatchObject(expected);
});

it('sorts by date', () => {
	const filters = {
		text: "",
		sortBy: "date",
		startDate: undefined,
		endDate: undefined
	};
	const expected = [expenses[2], expenses[0], expenses[1]];
	const visibleExpenses = getVisibleExpenses(expenses, filters);

	expect(visibleExpenses).toMatchObject(expected);
});

it('sorts by amount', () => {
	const filters = {
		text: "",
		sortBy: "amount",
		startDate: undefined,
		endDate: undefined
	};
	const expected = [expenses[1], expenses[2], expenses[0]];
	const visibleExpenses = getVisibleExpenses(expenses, filters);

	expect(visibleExpenses).toEqual(expected);
});

it('filters by startDate', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined
	}
	const expected = [expenses[2], expenses[0]];
	const visibleExpenses = getVisibleExpenses(expenses, filters);

	expect(visibleExpenses).toEqual(expected);
});

it('filters by endDate', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: moment(0)
	}
	const expected = [expenses[0], expenses[1]];
	const visibleExpenses = getVisibleExpenses(expenses, filters);

	expect(visibleExpenses).toEqual(expected);
});


/*
* getTotalFromExpenses
*/

it('returns correct total for multiple expenses', () => {
	const total = getTotalFromExpenses(expenses);
	expect(total).toBe(1900);
});
it('returns correct total for single expense', () => {
	const total = getTotalFromExpenses([expenses[0]]);
	expect(total).toBe(100);
});

it('returns correct total no expenses', () => {
	const total = getTotalFromExpenses([]);
	expect(total).toBe(0);
});