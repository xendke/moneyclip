import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={ExpenseDashboardPage} />
				<Route exact path="/create" component={CreateExpensePage} />
				<Route exact path="/edit/:id" component={EditExpensePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)
export default AppRouter;