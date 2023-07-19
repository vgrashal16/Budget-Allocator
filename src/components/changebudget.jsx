import React from 'react'
import { useState, useEffect } from 'react';
import '../component css/change.css'

export default function ChangeAllocation(props) {
    const [selectedDepartment, setSelectedDepartment] = useState('Choose...');

    const handleDepartmentChange = (event) => {
      setSelectedDepartment(event.target.value);
      console.log(event.target.value);
    };

    const [selectAlloc, setselectAlloc] = useState('');

    const handleAlloc = (event) => {
      setselectAlloc(event.target.value);
    }

    const [change, setChange] = useState('');

    const handleChange = (event) => {
      setChange(event.target.value);
    }

    useEffect(() => {
      if (isNaN(change) === false) {
        if (parseInt(change) > parseInt(props.budget)) {
          alert('Value more than available Budget');
        }
      } else {
        alert('Field only accepts numbers');
      }
    }, [change, props.budget]);

  return (
    <>
    <div className='pcontainer'>
      <h1>Change Allocation</h1>
    </div>
    <div className='four'>
            <div className="col1">
                <div className="alert alert-secondary">Department</div>
                <select className="inputs" value={selectedDepartment} onChange={handleDepartmentChange}>
                    <option>Choose...</option>
                    {props.table.map((item, index) => (            
                        <option key={index} value={item.department}>
                        {item.department}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col1">
                <div className="alert alert-secondary">Allocation</div>
                <select className="inputs" value={selectAlloc} onChange={handleAlloc}>
                    <option>Add</option>
                    <option>Sub</option>
                </select>
            </div>
            <div >
                <span className='curr'>{props.data}</span> <input className='allocAdd' onChange={handleChange}></input>
            </div>
            <div>
                <div className="btn btn-primary ele">Save</div>
            </div>
        </div>
    </>
  )
}
