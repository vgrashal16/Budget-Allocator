import React, { useEffect } from 'react'
import { useState } from 'react'
import "../component css/change.css"

export default function Budget(props) {
  const[budget, setBudget] = useState(0);

  const handleBudget = (event) => {
    setBudget(event.target.value)
  }

  props.setMainBudget(budget);

  useEffect(()=>{
    if (parseInt(budget)>20000){alert("Budget cannot exceed " + props.data + "20000")}
    if (parseInt(budget) < parseInt(props.spent)){alert("You cannot reduce the budget value lower than the spending")}
  }, [budget])

  return (
    <div className='alert alert-secondary bud'>
      <span>Budget </span>
      {props.data}<span> </span>
      <input onChange={handleBudget} className='incdec'/>
      <button className='inc'>▲</button>
      <button className='dec'>▼</button>
    </div>
  )
}
