/*
* Redux Testing
*/

import { addExpense, removeExpense, editExpense, setTextFilter, sortByAmount, setStartDate, setEndDate, sortByDate } from '../redux/actions';
import { createStore } from 'redux';
import expensesReducers from '../redux/reducers';

const store = createStore(
	expensesReducers
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(state);
	console.log(visibleExpenses);
});

const returnAction = store.dispatch(addExpense({
	description: "rent",
	amount: 200000,
	createdAt: 200
}));
store.dispatch(addExpense({
	description: "netflix",
	amount: 1500,
	createdAt: 100
}));
store.dispatch(removeExpense({
	id: returnAction.expense.id
}));

store.dispatch(editExpense({
	id: returnAction.expense.id,
	description: "test",
	note: "s",
	amount: 100
}));

// store.dispatch(setTextFilter("test"));
store.dispatch(sortByAmount());
// store.dispatch(setEndDate({
// 	endDate: 400
// }));