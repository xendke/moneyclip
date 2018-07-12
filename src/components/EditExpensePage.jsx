import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../redux/actions';

const EditExpensePage = (props) => {

	return (<div>
		<header>
			<h3>Edit</h3>
		</header>
		<ExpenseForm
			expense={props.expense}
			onSubmit={props.onEditSubmit}
			onRemoveClick={props.onRemoveClick}
		/>
	</div>)
}

const mapStateToProps = (state, ownProps) => {
	return {
		expense: state.expenses.find((expense) => {
			return expense.id === ownProps.match.params.id;
		})
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onEditSubmit: (expense) => {
			dispatch(editExpense(expense));
			ownProps.history.push('/');
		},
		onRemoveClick: () => {
			dispatch(removeExpense({ id: ownProps.match.params.id }));
			ownProps.history.push('/');
		}
	}
}
const ConnectedEditExpensePage = connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
export default ConnectedEditExpensePage;
