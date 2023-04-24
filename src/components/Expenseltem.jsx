import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {

  const expenseData = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount =  249.67;

  return (
    <div className="expense-item">
      <div>Match 28th 2021</div>
      <div className="expense-item__description">
        <h1> {expenseTitle} </h1>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
