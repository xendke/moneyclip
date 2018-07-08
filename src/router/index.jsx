import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelpPage from '../components/HelpPage';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

import { addExpense, removeExpense, editExpense, setTextFilter, sortByAmount, setStartDate, setEndDate } from '../redux/actions';
import { createStore } from 'redux';
import expensesReducers from '../redux/reducers';


const store = createStore(
	expensesReducers
);
store.subscribe(() => {
	console.log(store.getState());
});
const returnAction = store.dispatch(addExpense({
	description: "rent",
	amount: 200000
}));
// store.dispatch(removeExpense({
// 	id: returnAction.expense.id
// }));
store.dispatch(editExpense({
	id: returnAction.expense.id,
	description: "test",
	note: "s",
	amount: 100
}));
// store.dispatch(setTextFilter("helo"));
// store.dispatch(setEndDate({
// 	endDate: 400
// }));

const routes = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={ExpenseDashboardPage} />
				<Route exact path="/create" component={CreateExpensePage} />
				<Route exact path="/edit/:id" component={EditExpensePage} />
				<Route exact path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)
export default routes;