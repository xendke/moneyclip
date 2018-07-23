import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

it('renders ExpenseListItem given an expense', () => {
	const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />);

	expect(wrapper).toMatchSnapshot();
});

it('renders ExpenseListItem given no expense', () => {
	const wrapper = shallow(<ExpenseListItem />);

	expect(wrapper).toMatchSnapshot();
});