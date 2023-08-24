import ExpenseItem from "./ExpenseItem"
import { useState } from 'react'
import './Expenses.css'
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import React from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredArray = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear});

  let expensesContent = <p>No expenses yet.</p>

  if (filteredArray.length > 0) {
    expensesContent = filteredArray.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        money={expense.money}
        date={expense.date}
        />
    ))
  };


  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onSaveFilterYear={filterYearHandler}/>
    {expensesContent}
    </Card>
    </div>
  );
};

export default Expenses
