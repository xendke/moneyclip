import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpenseSpy, removeExpenseSpy, mockHistory, mockMatch;
beforeEach(() => {
	editExpenseSpy = jest.fn();
	removeExpenseSpy = jest.fn();
	mockHistory = {
		push: jest.fn()
	};
	mockMatch = {
		params: { id: expenses[1].id }
	}
	wrapper = shallow(
		<EditExpensePage
			expense={expenses[1]}
			editExpense={editExpenseSpy}
			removeExpense={removeExpenseSpy}
			history={mockHistory}
			match={mockMatch}
		/>
	);
});

it('renders correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

it('handles editExpense submit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(editExpenseSpy).toHaveBeenCalledWith(expenses[1]);
	expect(mockHistory.push).toHaveBeenCalledWith('/');
});

it('handles removeExpense submit', () => {
	const e = { preventDefault: () => { } };
	wrapper.find('ExpenseForm').prop('onRemoveClick')(e);
	expect(removeExpenseSpy).toHaveBeenCalledWith(expenses[1].id);
	expect(mockHistory.push).toHaveBeenCalledWith('/');
});