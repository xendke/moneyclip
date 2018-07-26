import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../redux/actions';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null // because there are two date pickers, value is not just true/false
	}
	onFocusChange = (focus) => {
		this.setState(() => ({ calendarFocused: focus }));
	}
	render() {
		const { filters, onTextChange, onSortChange, onDatesChange } = this.props;
		return (
			<div>
				<input type="text" value={filters.text} onChange={onTextChange} />
				Sort By:
				<select value={filters.sortBy} onChange={onSortChange}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					onDatesChange={onDatesChange}
					startDate={filters.startDate ? filters.startDate : undefined}
					endDate={filters.endDate ? filters.endDate : undefined}
					startDateId="ExpenseListFilters__DateRangePicker__StartDate"
					endDateId="ExpenseListFilters__DateRangePicker__EndDate"
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					isOutsideRange={() => (false)}
					numberOfMonths={1}
					showClearDates={true}
				/>
			</div>
		);
	}
}

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
		},
		onDatesChange: ({ startDate, endDate }) => {
			dispatch(setStartDate({ startDate }));
			dispatch(setEndDate({ endDate }));
		}
	}
}

const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);


export default ConnectedExpenseListFilters;