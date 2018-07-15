import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/normalize.css/normalize.css';
import './styles/styles.css';

import AppRouter from './router';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import addMockExpenses from './utils/mockStoreData';

const store = configureStore();

addMockExpenses(store);

const wrappedApp = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
registerServiceWorker();