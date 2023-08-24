import React, {useState} from 'react';

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Weekend Getaway',
    money: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
  title: 'New TV',
  money: 799.49,
  date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    money: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    money: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    money: 450,
    date: new Date(2021, 5, 12),
  }]

function App() {

  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
      expenses={expenses}
      />
    </div>

  );
}

export default App;
