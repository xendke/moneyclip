import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			note: props.expense ? props.expense.note : '',
			date: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: ''
		}
	}
	onDescriptionChange = (e) => {
		const value = e.target.value;
		this.setState(() => ({ description: value }));
	}
	onAmountChange = (e) => {
		const value = e.target.value;
		if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) { // update only if in format 0000.00
			this.setState(() => ({ amount: value }));
		}
	}
	onNoteChange = (e) => {
		const value = e.target.value;
		this.setState(() => ({ note: value }));
	}
	onDateChange = (moment) => {
		if (!moment) return
		this.setState(() => ({ date: moment }));
	}
	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	}
	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.amount || !this.state.description) {
			this.setState(() => ({ error: 'amount and description cannot be empty' }));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				id: this.props.expense.id,
				description: this.state.description,
				amount: parseFloat(this.state.amount) * 100,
				note: this.state.note,
				createdAt: this.state.date.valueOf()
			});
		}
	}
	render() {
		return (
			<div>
				{this.state.error ? <p>{this.state.error}</p> : null}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						autoFocus
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<textarea
						placeholder="More notes (Optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					/>
					<SingleDatePicker
						date={this.state.date}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						id="ExpenseForm__Calendar"
						numberOfMonths={1}
						isOutsideRange={(day) => (false)}
					/>
					<button>Add Expense</button>
					<button onClick={this.props.onRemoveClick}>remove</button>
				</form>
			</div>
		);
	}
}

export default ExpenseForm;