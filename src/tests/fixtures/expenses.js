import moment from 'moment';

export default [{
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