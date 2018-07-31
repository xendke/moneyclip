import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


it('renders correctly given data', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1200} />);
	expect(wrapper).toMatchSnapshot();
});

it('renders correctly given no data', () => {
	const wrapper = shallow(<ExpensesSummary />);
	expect(wrapper).toMatchSnapshot();
});