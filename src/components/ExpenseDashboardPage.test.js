import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseDashboardPage from './ExpenseDashboardPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
