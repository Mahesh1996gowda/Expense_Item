import React, { useState } from 'react'

const ExpenseForms = () => {
  const[enteredTitle,setEnteredTitle]=useState('')
  const[enteredAmount,setEnteredAmount]=useState('')
  const[enteredDate,setEnteredDate]=useState('')
  const handelSubmit=(e)=>{
e.preventDefault()

const expenseData={
  title:enteredTitle,
  Amount:enteredAmount,
  date:new Date(enteredDate)
}
console.log(expenseData)
setEnteredTitle('')
setEnteredAmount('')
setEnteredDate('')
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className='ExpenseForm'>
            <div className='ExpenseFormTitle'>
                <label htmlFor="Title">Title  :</label>
                <input  className='ExpenseFormTitleInput' type="text" value={enteredTitle} onChange={(event)=>setEnteredTitle(event.target.value)} />
            </div>
            <div className='ExpenseFormAmount'>
                <label htmlFor="Amount">Amount:</label>
                <input  className='ExpenseFormAmountInput' type="number" value={enteredAmount} min={0.01} step={0.01} onChange={(event)=>setEnteredAmount(event.target.value)} />
            </div>
            <div className='ExpenseFormDate'>
                <label htmlFor="Date">Date  :     </label>
                <input className='ExpenseFormDateInput' type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={(event)=>setEnteredDate(event.target.value)} />
            </div>
            <div >
              <button className='ExpenseFormDateButton' >Add Expense</button>
              </div>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForms
