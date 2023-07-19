import React from 'react'

export default function Spent(props) {
  return (
    <div className='alert alert-primary'>
      <span>
        Spent so far {props.data} {props.expense}
      </span>
    </div>
  )
}
