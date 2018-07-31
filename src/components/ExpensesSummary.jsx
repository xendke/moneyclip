import React from 'react';
import { connect } from 'react-redux';
import { getVisibleExpenses, getTotalFromExpenses } from '../redux/selectors';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
	const total = numeral(expensesTotal / 100).format('$0,0.00');

	return (
		<p>
			{!expenseCount || expenseCount <= 0 ?
				<span>Viewing no expenses. Try clearing the filters.</span>
				:
				<span >Viewing {expenseCount} {expenseWord} for a total of {total}.</span>
			}
		</p>
	);
};

const mapStateToProps = (state) => {
	return {
		expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
		expensesTotal: getTotalFromExpenses(getVisibleExpenses(state.expenses, state.filters))
	};
}

const ConnectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary);

export default ConnectedExpensesSummary;