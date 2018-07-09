import { createStore } from 'redux';
import expensesReducers from './reducers';


export default () => {
	const store = createStore(
		expensesReducers
	);
	return store;
};