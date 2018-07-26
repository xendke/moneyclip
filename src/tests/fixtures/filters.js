import moment from 'moment';


const filters = {
	text: '',
	sortBy: 'amount',
	startDate: undefined,
	endDate: undefined
};

const altFilters = {
	text: 'bill',
	sortBy: 'date',
	startDate: moment(),
	endDate: moment().add(10, 'days')
};

export { filters, altFilters };