import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/normalize.css/normalize.css';
import './styles/styles.css';

import AppRouter from './router';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { addExpense, setTextFilter } from './redux/actions';
import getVisibleExpenses from './redux/selectors';

const store = configureStore();
store.dispatch(addExpense({
	description: "rent",
	note: "june rent",
	amount: 120000,
	createdAt: 0
}));
store.dispatch(addExpense({
	description: "water bill",
	note: "june water",
	amount: 7330,
	createdAt: 200
}));
store.dispatch(addExpense({
	description: "electricity bill",
	note: "june electricity",
	amount: 20000,
	createdAt: 300
}));
store.dispatch(setTextFilter());
const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);
console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();