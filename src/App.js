import React from 'react'
import "./expenseItem.css"

import ExpenseItems from './ExpenseItems'
import ExpenseForms from './ExpenseForms'
const App = () => {
  const expense = [{
    title: "Car ",
    price: 209.3,
    date: new Date(2014, 1, 23)
  },
  {
    title: "Bike",
    price: 309.3,
    date: new Date(2015, 3, 22)
  },
  {
    title: "Food",
    price: 20.3,
    date: new Date(2016, 10, 3)
  },
  {
    title: "Health",
    price: 505.3,
    date: new Date(2017, 12, 13)
  }
]
  return ( 
  
    <
    >
    <div> <h2>ExpenseItems !</h2></div>
    <ExpenseForms/>
    <
    ExpenseItems title = {
      expense[0].title
    }
    price = {
      expense[0].price
    }
    date = {
      expense[0].date
    }
    /> <
    ExpenseItems title = {
      expense[1].title
    }
    price = {
      expense[1].price
    }
    date = {
      expense[1].date
    }
    /> <
    ExpenseItems title = {
      expense[2].title
    }
    price = {
      expense[2].price
    }
    date = {
      expense[2].date
    }
    /> <
    ExpenseItems title = {
      expense[3].title
    }
    price = {
      expense[3].price
    }
    date = {
      expense[3].date
    }
    />

    </> 
  )
}

export default App