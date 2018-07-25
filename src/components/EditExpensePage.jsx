import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../redux/actions';

export class EditExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.editExpense(expense);
		this.props.history.push('/');
	}
	onRemoveClick = (e) => {
		e.preventDefault();
		this.props.removeExpense(this.props.match.params.id);
		this.props.history.push('/');
	}
	render() {
		return (
			<div>
				<header>
					<h3>Edit</h3>
				</header>
				<ExpenseForm
					expense={this.props.expense}
					onSubmit={this.onSubmit}
					onRemoveClick={this.onRemoveClick}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		expense: state.expenses.find((expense) => {
			return expense.id === ownProps.match.params.id;
		})
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		editExpense: (expense) => {
			dispatch(editExpense(expense));
		},
		removeExpense: (id) => {
			dispatch(removeExpense({ id }));
		}
	}
}
const ConnectedEditExpensePage = connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
export default ConnectedEditExpensePage;
