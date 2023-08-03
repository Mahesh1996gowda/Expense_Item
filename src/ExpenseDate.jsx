import React from 'react'

const ExpenseDate = (props) => {
    const Date=props.date.toLocaleString('en-US',{day:'2-digit'});
const Month=props.date.toLocaleString('en-US',{month:'long'});
 const Year=props.date.getFullYear()
  return (

       <div className="expenseItems_date">
            <div className="expenseItems_year">{Year}</div>
            <div className="expenseItems_month">{Month}</div>
            <div className="expenseItems_Date">{Date}</div>
           
    </div>
  )
}

export default ExpenseDate
