import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../redux/actions';

const ExpenseListFilters = (props) => (
	<div>
		<input type="text" value={props.filters.text} onChange={props.onChange} />
	</div>
);

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (e) => {
			dispatch(setTextFilter(e.target.value));
		}
	}
}

const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);


export default ConnectedExpenseListFilters;