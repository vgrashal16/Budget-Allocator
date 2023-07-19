import React from 'react'

export default function Remain(props) {
  return (
    <div className="alert alert-success">
      <span>
        Remaining {props.data} {props.total - props.expense}
      </span>
    </div>
  )
}
