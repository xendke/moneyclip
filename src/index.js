import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/normalize.css/normalize.css';
import './styles/styles.css';

import AppRouter from './router';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { addExpense } from './redux/actions';

const store = configureStore();

/*
* Test data
*/
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
	description: "new pool",
	note: "",
	amount: 80000,
	createdAt: 500
}));
store.dispatch(addExpense({
	description: "electricity bill",
	note: "june electricity",
	amount: 20000,
	createdAt: 300
}));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();