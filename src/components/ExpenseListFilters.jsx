import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../redux/actions';

const ExpenseListFilters = ({ filters, onTextChange, onSortChange }) => (
	<div>
		<input type="text" value={filters.text} onChange={onTextChange} />
		Sort By:
		<select value={filters.sortBy} onChange={onSortChange}>
			<option value="date">Date</option>
			<option value="amount">Amount</option>
		</select>
	</div>
);

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onTextChange: (e) => {
			dispatch(setTextFilter(e.target.value));
		},
		onSortChange: (e) => {
			if (e.target.value === 'date') {
				dispatch(sortByDate());
			} else {
				dispatch(sortByAmount());
			}
		}
	}
}

const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);


export default ConnectedExpenseListFilters;