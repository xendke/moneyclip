import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

it('renders ExpenseForm in add mode', () => {
	const wrapper = shallow(<ExpenseForm />);

	expect(wrapper).toMatchSnapshot();
});

it('renders ExpenseForm in edit mode', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

	expect(wrapper).toMatchSnapshot();
});