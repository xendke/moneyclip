import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../redux/actions';

export class CreateExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.onFormSubmit(expense);
		this.props.history.push('/');
	}
	render() {
		return (
			<div>
				<header>
					<h3>Create</h3>
				</header>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFormSubmit: (expense) => {
			dispatch(addExpense(expense));
		}
	}
}

const ConnectedCreateExpensePage = connect(undefined, mapDispatchToProps)(CreateExpensePage);

export default ConnectedCreateExpensePage;
