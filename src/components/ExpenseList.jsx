import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../redux/selectors';

export const ExpenseList = (props) => (
	<div>
		{
			props.expenses.length === 0 ? (
				<p>Nothing here.</p>
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
		expenses: getVisibleExpenses(state.expenses, state.filters)
	};
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
export default ConnectedExpenseList;