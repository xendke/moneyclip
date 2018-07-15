import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = (props) => (
	<div>
		<Link to={`/edit/${props.id}`}>
			<h4>{props.description}</h4>
		</Link>
		<p>${(props.amount / 100).toFixed(2)} - {moment(props.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
	</div>
);

export default ExpenseListItem;