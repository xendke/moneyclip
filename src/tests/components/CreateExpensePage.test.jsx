import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpensePage } from '../../components/CreateExpensePage';
import expenses from '../fixtures/expenses';

let onSubmitSpy, mockHistory, wrapper;
beforeEach(() => {
	onSubmitSpy = jest.fn();
	mockHistory = { push: jest.fn() };
	wrapper = shallow(<CreateExpensePage onFormSubmit={onSubmitSpy} history={mockHistory} />);
});

it('renders CreateExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

it('handles onSubmit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(onSubmitSpy).toHaveBeenCalledWith(expenses[0]);
	expect(mockHistory.push).toHaveBeenCalledWith('/');
});
