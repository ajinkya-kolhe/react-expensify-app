import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectExpenses, { selectFilteredExpenses } from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expenseTotal, filteredExpenseCount}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expense\'s';
  const filteredExpenseWord = filteredExpenseCount === 1 ? 'expense' : 'expense\'s';
  const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
        </h1>
        {filteredExpenseCount > 0 && <h4>Not showing <span>{filteredExpenseCount}</span> {filteredExpenseWord} because of filters.</h4>}
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const filteredExpenses = selectFilteredExpenses(state.expenses, visibleExpenses);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses),
    filteredExpenseCount: filteredExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
