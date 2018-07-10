import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
	<div>
		{/* <header>
			<h3>Dashboard</h3>
		</header> */}
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export default ExpenseDashboardPage;
