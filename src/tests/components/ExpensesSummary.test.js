import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={23512340907}/>);
  expect(wrapper).toMatchSnapshot();
});
