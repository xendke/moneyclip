import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

it('renders ExpenseList given some expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={expenses} />);

	expect(wrapper).toMatchSnapshot();
});

it('renders ExpenseList given empty expense list', () => {
	const wrapper = shallow(<ExpenseList expenses={[]} />);

	expect(wrapper).toMatchSnapshot();
});