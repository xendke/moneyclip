import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions';

const ExpenseListItem = (props) => (
	<div>
		<h4>{props.description}</h4>
		<p>{props.amount} - {props.createdAt}</p>
		<button onClick={props.onRemoveClick}>remove</button>
	</div>
);

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onRemoveClick: () => { dispatch(removeExpense({ id: ownProps.id })) }
	}
}

const ConnectedExpenseListItem = connect(undefined, mapDispatchToProps)(ExpenseListItem);

export default ConnectedExpenseListItem;