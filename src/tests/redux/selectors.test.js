import getVisibleExpenses from '../../redux/selectors';
import moment from 'moment';

it('matches text (one word)', () => {
	const creationMoment = moment().valueOf();
	const expenses = [{
		description: "the quick jumped Expected quick brown fox",
		createdAt: creationMoment
	}];
	const filters = {
		text: "exPected",
		sortBy: "date",
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	};
	const visibleExpenses = getVisibleExpenses(expenses, filters);
	expect(visibleExpenses).toMatchObject(expenses);
});

it('sorts by date', () => {
	const expenses = [{
		description: "1",
		createdAt: moment(100).valueOf()
	}, {
		description: "2",
		createdAt: moment(200).valueOf()
	}, {
		description: "3",
		createdAt: moment(300).valueOf()
	}];

	const expected = [{
		description: "3",
		createdAt: moment(300).valueOf()
	}, {
		description: "2",
		createdAt: moment(200).valueOf()
	},
	{
		description: "1",
		createdAt: moment(100).valueOf()
	}]
	const filters = {
		text: "",
		sortBy: "date",
		startDate: undefined,
		endDate: undefined
	};
	const visibleExpenses = getVisibleExpenses(expenses, filters);
	expect(visibleExpenses).toMatchObject(expected);
});

it('sorts by amount', () => {
	const creationMoment = moment().valueOf();
	const expenses = [
		{
			description: "1",
			amount: 100,
			createdAt: creationMoment
		}, {
			description: "3",
			amount: 300,
			createdAt: creationMoment
		}, {
			description: "2",
			amount: 200,
			createdAt: creationMoment
		},
	];

	const expected = [
		{
			description: "3",
			amount: 300,
			createdAt: creationMoment
		}, {
			description: "2",
			amount: 200,
			createdAt: creationMoment
		},
		{
			description: "1",
			amount: 100,
			createdAt: creationMoment
		}
	];

	const filters = {
		text: "",
		sortBy: "amount",
		startDate: undefined,
		endDate: undefined
	};
	const visibleExpenses = getVisibleExpenses(expenses, filters);
	expect(visibleExpenses).toEqual(expected);
});