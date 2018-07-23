import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../redux/selectors';

export const ExpenseList = (props) => (
	<div>
		{
			props.expenses.length === 0 ? (
				<p>No expenses yet!</p>
			) : (
					props.expenses.map((expense) => (
						<ExpenseListItem key={expense.id} {...expense} />
					))
				)
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: visibleExpenses(state.expenses, state.filters)
	};
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
export default ConnectedExpenseList;