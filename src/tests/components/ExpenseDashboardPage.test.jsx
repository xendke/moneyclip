import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

it('renders ExpenseDashboardPage correctly', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);

	expect(wrapper).toMatchSnapshot();
});
