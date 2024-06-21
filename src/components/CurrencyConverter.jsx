
import React from 'react';
import { observer } from 'mobx-react-lite';
import { currencyConverterStore } from './CurrencyConverterStore';
import './CurrencyConverter.css';

const CurrencyConverter = observer(() => {
  const handleUsdChange = (event) => {
    currencyConverterStore.setUsd(event.target.value);
  };

  const handleEurChange = (event) => {
    currencyConverterStore.setEur(event.target.value);
  };

  return (
    <div className="currency-converter">
      <div className="input-container">
        <label  className='input-lebel' htmlFor="usd">USD</label>
        <input
          type="number"
          id="usd"
          value={currencyConverterStore.usd}
          onChange={handleUsdChange}
        />
      </div>
      <div className="input-container">
        <label className='input-lebel' htmlFor="eur">EUR</label>
        <input
          type="number"
          id="eur"
          value={currencyConverterStore.eur}
          onChange={handleEurChange}
        />
      </div>
    </div>
  );
});

export default CurrencyConverter;
