import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
	props.id ?
		(<div>
			<Link to={`/edit/${props.id}`}>
				<h4>{props.description}</h4>
			</Link>
			<p>
				{numeral(props.amount / 100).format('$0,0.00')}
				-
				{moment(props.createdAt).format("MMMM Do YYYY")}
			</p>
		</div>
		) : (
			<p>Invalid Expense</p>
		)

);

export default ExpenseListItem;