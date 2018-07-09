import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
	<div>
		<h4>Expense List</h4>
		{props.expenses.map((expense) => (
			<div key={expense.id} >
				<p>{expense.description}</p>
			</div>
		))}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: state.expenses
	};
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
export default ConnectedExpenseList;