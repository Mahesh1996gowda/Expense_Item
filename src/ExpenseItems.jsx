import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
const ExpenseItems = (props) => {
  const [title,setTitle]=useState(props.title)
 const titleUpdated=()=>{
  setTitle("updated")
 }
  return (<>

   
    <div className="expenseItems_main">
      <div className="expenseItems_details">
      <ExpenseDate  date={props.date}/>
        <div className="expenseItems_items">{title}</div>
        <div className="expenseItems_price">{props.price}</div>
        <button onClick={titleUpdated} className="updateTitle">Update Title</button>
      </div>
     
    </div>
    
    </>
  );
};

export default ExpenseItems;
