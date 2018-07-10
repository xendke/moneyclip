import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../redux/selectors';

const ExpenseList = (props) => (
	<div>
		<h4>Expense List</h4>
		{props.expenses.map((expense) => (
			<ExpenseListItem key={expense.id} {...expense} />
		))}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: visibleExpenses(state.expenses, state.filters)
	};
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
export default ConnectedExpenseList;