import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () =>{
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Time</label>
            <input type="text" name="" id="" />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" name="" id="" />
        </div>
    </div>
};

export default ExpenseForm;