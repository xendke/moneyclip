import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { DateRangePicker } from 'react-dates';
import { filters, altFilters } from '../fixtures/filters';

let wrapper, onTextChangeSpy, onSortChangeSpy, onDatesChangeSpy;
beforeEach(() => {
	onTextChangeSpy = jest.fn();
	onSortChangeSpy = jest.fn();
	onDatesChangeSpy = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters}
			onDatesChange={onDatesChangeSpy}
			onTextChange={onTextChangeSpy}
			onSortChange={onSortChangeSpy}
		/>
	);
});

it('renders correctly', () => {
	expect(wrapper).toMatchSnapshot();
});
it('renders correctly given alt data', () => {
	wrapper.setProps({ filters: altFilters });
	expect(wrapper).toMatchSnapshot();
});

it('handles calendar date change', () => {
	wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate: altFilters.startDate, endDate: altFilters.endDate });
	expect(onDatesChangeSpy).toHaveBeenLastCalledWith({ startDate: altFilters.startDate, endDate: altFilters.endDate });
});

it('handles calendar clear', () => {
	wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate: null, endDate: filters.endDate });
	expect(onDatesChangeSpy).toHaveBeenLastCalledWith({ startDate: null, endDate: filters.endDate });
});

it('handles calendar focus change', () => {
	wrapper.find(DateRangePicker).prop('onFocusChange')("endDate");
	expect(wrapper.state('calendarFocused')).toBe("endDate");
});

it('handles filter text change', () => {
	const e = { target: { value: 'test text' } };
	wrapper.find('input').simulate('change', e);
	expect(onTextChangeSpy).toHaveBeenLastCalledWith(e);
});

it('handles sortBy change', () => {
	const e = { target: { value: 'date' } };
	expect(filters.sortBy).toBe('amount');
	wrapper.find('select').simulate('change', e);
	expect(onSortChangeSpy).toHaveBeenLastCalledWith(e);
});