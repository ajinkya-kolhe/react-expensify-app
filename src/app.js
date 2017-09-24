import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 1506294414255 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);

const appTemplate = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(appTemplate, document.getElementById('app'));
