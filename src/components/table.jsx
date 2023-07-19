import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component css/table.css';
import Plus from './plus';
import Minus from './minus';

const Table = (props) => {
  const [data, setData] = useState(props.table);
  const [bud, setbud] = useState(0);

  useEffect(() => {
    spent();
  }, [data]);

  const handleAllocationChange = (index, value) => {
    setData((prevData) => {
      return prevData.map((row, i) => {
        if (i === index) {
          return {
            ...row,
            budget: row.budget + value,
          };
        }
        return row;
      });
    });
  };

  const handleIncreaseByTen = (index) => {
    handleAllocationChange(index, 10);
  };

  const handleDecreaseByTen = (index) => {
    handleAllocationChange(index, -10);
  };

  const spent = () => {
    const totalBudget = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.budget,
      0
    );
    setbud(totalBudget);
  };


  props.totalSpent(bud);
  
  const renderRows = () => {
    return data.map((row, index) => (
      <tr key={index}>
        <td>{row.department}</td>
        <td>
          {props.data}
          {row.budget}
        </td>
        <td>
          <button className="round" onClick={() => handleIncreaseByTen(index)}>
            <Plus />
          </button>
        </td>
        <td>
          <button className="round" onClick={() => handleDecreaseByTen(index)}>
            <Minus />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Department</th>
          <th>Allocated Budget</th>
          <th>Increase by 10</th>
          <th>Decrease by 10</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default Table;
