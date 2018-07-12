import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../redux/actions';

const CreateExpensePage = (props) => (
	<div>
		<header>
			<h3>Create</h3>
		</header>
		<ExpenseForm onSubmit={props.onFormSubmit} />
	</div>
);

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onFormSubmit: (expense) => {
			dispatch(addExpense(expense));
			ownProps.history.push('/');
		}
	}
}

const ConnectedCreateExpensePage = connect(undefined, mapDispatchToProps)(CreateExpensePage);

export default ConnectedCreateExpensePage;
