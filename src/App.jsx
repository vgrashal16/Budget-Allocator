import React from "react";
import "./App.css";
import  { useState } from 'react';
import DepartmentTable from "./components/table";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget  from "./components/budget";
import Remain from "./components/remain";
import Spent from "./components/spent";
import Currency from "./components/currency";
import ChangeAllocation from "./components/changebudget";

const App = () => {
  const initialData = [
    { department: 'Marketing', budget: 0 },
    { department: 'Finance', budget: 0 },
    { department: 'Sales', budget: 0 },
    { department: 'Human Resource', budget: 0 },
    { department: 'IT', budget: 0 }
  ];

  const [curr, setCurr] = useState('$');

  const handleCurrency = (data) => {
    setCurr(data);
  };

  const [budget, setTotalBudget] = useState();

  const handleBudget = (data) => {
    setTotalBudget(data);
  };

  const [spent, setSpent] = useState();

  const handleSpent = (data) => {
    setSpent(data);
  };

  return (
    <>
      <div className="container">
        <div className="mt-3">
          <h1>Company's Budget Allocation</h1>
        </div>
        <div className="row mt-3">
            <div className="col-sm"><Budget data={curr} setMainBudget={handleBudget} spent={spent}/></div>
            <div className="col-sm"><Remain data={curr} total={budget} expense={spent}/></div>
            <div className="col-sm"><Spent data={curr} expense={spent}/></div>
            <div className="col-sm"><Currency onData={handleCurrency}/></div>
        </div>
        <div className="table">
          <h1>Allocation</h1>
          <DepartmentTable data={curr} table={initialData} totalSpent={handleSpent}/>
        </div>
        <div className="change">
          <ChangeAllocation data={curr} table={initialData} budget={budget}/>
        </div>
      </div>     
    </>
  );
};

export default App;
