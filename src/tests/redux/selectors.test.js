import getVisibleExpenses from '../../redux/selectors';
import moment from 'moment';

const expenses = [{
	id: '1',
	description: "the quick brown fox jumped over",
	note: '',
	amount: 100,
	createdAt: moment(0).valueOf()
}, {
	id: '2',
	description: "the lazy dog",
	note: '',
	amount: 1000,
	createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
	id: '3',
	description: "expense here",
	note: '',
	amount: 800,
	createdAt: moment(0).add(5, 'days').valueOf()
}];

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