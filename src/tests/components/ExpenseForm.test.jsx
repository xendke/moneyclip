import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

it('renders ExpenseForm in add mode', () => {
	const wrapper = shallow(<ExpenseForm />);

	expect(wrapper).toMatchSnapshot();
});

it('renders ExpenseForm in edit mode', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

	expect(wrapper).toMatchSnapshot();
});

it('renders error for invalid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);

	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', { preventDefault: () => { } });
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

it('sets description on input change', () => {
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('input').at(0).simulate('change', { target: { value: 'test' } });
	expect(wrapper.state('description')).toBe('test');
});

it('sets note on textarea change', () => {
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('textarea').simulate('change', { target: { value: 'test' } });
	expect(wrapper.state('note')).toBe('test');
});

it('sets amount on valid input change', () => {
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('input').at(1).simulate('change', { target: { value: '20.1' } });
	expect(wrapper.state('amount')).toBe('20.1');
});

it('does not set amount on invalid input change', () => {
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('input').at(1).simulate('change', { target: { value: '12.122' } });
	expect(wrapper.state('amount')).toBe('');
});

it('calls onSubmit prop given valid input', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
	wrapper.find('form').simulate('submit', { preventDefault: () => { } });

	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenCalledWith({ ...expenses[0] });
});

it('sets new date on date change', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find(SingleDatePicker).prop('onDateChange')(now);

	expect(wrapper.state('date')).toEqual(now);
});

it('sets focus correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: true });

	expect(wrapper.state('calendarFocused')).toBe(true);
});