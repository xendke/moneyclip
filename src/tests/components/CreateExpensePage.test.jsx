import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpensePage } from '../../components/CreateExpensePage';
import expenses from '../fixtures/expenses';

let addExpenseSpy, mockHistory, wrapper;
beforeEach(() => {
	addExpenseSpy = jest.fn();
	mockHistory = { push: jest.fn() };
	wrapper = shallow(<CreateExpensePage addExpense={addExpenseSpy} history={mockHistory} />);
});

it('renders CreateExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

it('handles onSubmit correctly', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(addExpenseSpy).toHaveBeenCalledWith(expenses[0]);
	expect(mockHistory.push).toHaveBeenCalledWith('/');
});
