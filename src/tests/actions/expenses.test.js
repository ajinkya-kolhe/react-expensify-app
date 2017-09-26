import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123', { note: 'Note updated'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'Note updated'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const defaultData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultData,
      id: expect.any(String)
    }
  });
});
