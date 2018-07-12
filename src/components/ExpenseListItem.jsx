import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
	<div>
		<Link to={`/edit/${props.id}`}>
			<h4>{props.description}</h4>
		</Link>
		<p>{props.amount} - {props.createdAt}</p>
	</div>
);

export default ExpenseListItem;