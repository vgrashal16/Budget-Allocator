import React from 'react'
import { useState } from 'react'
import '../component css/currency.css'

export default function Currency(props) {

    const [selectedCurrency, setSelectedCurrency] = useState('$');

    const handleCurrencyChange = (event) => {
      const curr = event.target.value;
      setSelectedCurrency(curr);
      props.onData(curr);
    };


  return (
    <div className='currbox'>
        <span className='cur'>Currency</span>
            <select id="currency_dd" className="selectcurr" value={selectedCurrency} onChange={handleCurrencyChange}>
              <option className="dropdown" value="$">$ Dollar</option>
              <option className="dropdown" value="£">£ Pound</option>
              <option className="dropdown" value="€">€ Euro</option>
              <option className="dropdown" value="₹">₹ Ruppee</option>
            </select>
    </div>
  )
}
