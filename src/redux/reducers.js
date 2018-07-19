import { combineReducers } from 'redux';
import moment from 'moment';

/*
* Expenses Reducer
*/
const expensesDefaultState = [];
export const expensesReducer = (state = expensesDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter((expense) => {
				return expense.id !== action.id;
			});
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return { ...expense, ...action.updates }
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

/*
* Filters Reducer
*/
const filtersDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
};
export const filtersReducer = (state = filtersDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return { ...state, text: action.text };
		case 'SORT_BY_DATE':
			return { ...state, sortBy: "date" };
		case 'SORT_BY_AMOUNT':
			return { ...state, sortBy: "amount" };
		case 'SET_START_DATE':
			return { ...state, startDate: action.startDate };
		case 'SET_END_DATE':
			return { ...state, endDate: action.endDate };
		default:
			return state;
	}
};

// const demoState = {
// 	expenses: [{
// 		id: 'sar21tr3trta',
// 		description: 'Jan Rent',
// 		note: 'this was the final payment for that address',
// 		amount: 120000, // in pennies
// 		createdAt: 0 // timestamp
// 	}],
// 	filters: {
// 		text: 'rent',
// 		sortBy: 'date', // or "amount"
// 		startDate: undefined,
// 		endDate: undefined
// 	}
// };

export default combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
});