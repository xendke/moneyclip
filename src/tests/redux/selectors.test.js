import getVisibleExpenses from '../../redux/selectors';
import moment from 'moment';

const expenses = [{
	id: '1',
	description: "the quick brown fox jumped over",
	note: '',
	amount: 100,
	createdAt: -100
}, {
	id: '2',
	description: "the lazy dog",
	note: '',
	amount: 300,
	createdAt: 5
}, {
	id: '3',
	description: "expense here",
	note: '',
	amount: 800,
	createdAt: 100
}];

it('matches text (one word)', () => {
	const filters = {
		text: "tHe",
		sortBy: "date",
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
	const expected = [expenses[2], expenses[1], expenses[0]];
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
	const expected = [expenses[2], expenses[1], expenses[0]];
	const visibleExpenses = getVisibleExpenses(expenses, filters);

	expect(visibleExpenses).toEqual(expected);
});