// src/ExchangeRates.js
import React, { useEffect, useState } from 'react';
import './ExchangeRates.css';
//https://api.exchangeratesapi.io/v1/latest?access_key=
//d12bf5e47acb3e5a6c88b4dc43ff91be

const ExchangeRates = () => {
  const [currSel1, setCurrSel1] = useState(''); //the variable 'currSel1' and the function inside useState() that begins with 'set'. When setCurrSel1 is passed a parameter (argument) then it will update the variable.
  const [currSel2, setCurrSel2] = useState('');
  const [returnData, setReturnData] = useState('');
  const [baseCurr, setBaseCurr] = useState('');
  const [baseSel1Ex, setBaseSel1Ex] = useState('');
  const [baseSel2Ex, setBaseSel2Ex] = useState('');
  const [sel1Sel2Ex, setSel1Sel2Ex] = useState('');
  //const [rates, setRates] = useState('');
  //useState is used because it will change things in a manner that React can detect. React will not refresh or render any changes unless it can detect them first. Directly setting a variable is not detectable by React.

  const handleSelect = async function(selID, selected) {
    const reportSelect = function(hndlSelId, hndlSelected) {//why is the useState value (currSel1 and currSel2) not updating until after the console.log in reportSelect()?: ANSWER IN COMMENT ABOVE
      console.log(`Selected ID: ${hndlSelId}, Selected Value: ${hndlSelected}`);
    }
    if (selID === "1") {
      setCurrSel1(selected);
      await reportSelect (selID, selected);

    } else if (selID === "2") {
      setCurrSel2(selected);
      await reportSelect (selID, selected);
    }
  }

  useEffect (function(){console.log(`Currency Selected in 1: ${currSel1}, Currency Selected in 2: ${currSel2}`);},[currSel1, currSel2]);

  const fetchRates = async () => {
    console.log('fetchRates() called');
    const apiKey = 'd12bf5e47acb3e5a6c88b4dc43ff91be'; // Replace with your actual API key
    const response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`);
    const data = await response.json();
    const baseTEST = data.base
    const sel1ExchangeRate = data.rates[currSel1]
    const sel2ExchangeRate = data.rates[currSel2]
    console.log('fetchRates() consts have been set: sel1ExchangeRate =', sel1ExchangeRate);
    console.log('fetchRates() consts have been set: sel2ExchangeRate =', sel2ExchangeRate);
    console.log(data); // Log the response data
    setReturnData(data);
    setBaseCurr(baseTEST);
    handleNumbers(sel1ExchangeRate, sel2ExchangeRate)
  }

  const handleNumbers = function(baseSel1Ex, baseSel2Ex) {
    console.log('handleNumbers() called');
    setBaseSel1Ex(parseFloat(baseSel1Ex).toFixed(2));
    setBaseSel2Ex(parseFloat(baseSel2Ex).toFixed(2));
    console.log('handleNumbers() set exchangeRate strings to floats', sel1Sel2Ex);//, BaseSel1Ex.toFixed(2));
  }

  const handleCalculation = function(){
    const setCalculation = parseFloat((1/baseSel1Ex)/(1/baseSel2Ex)).toFixed(2);
    return (setCalculation)
  }
  useEffect (function(){console.log(`Base Currency set to: ${baseCurr}`);},[baseCurr]);
  useEffect (function(){console.log(`Returning Data set to: ${returnData}`);},[returnData]);

  return (
    <div id="exchangeChecker">
      <div id = "exchangeCheckerHeader">
        <h4 id ="exchangeCheckerHeading">Exchange Rates</h4>
      </div>
      <div id = "exchangeCheckerBody">
          <label class="currencyLabel" for="currency1">Select Currency: </label>
          <br></br>
          <select id="currency1" name="currency1" value={currSel1} onChange={function(e) {handleSelect("1", e.target.value)}}>
            <option value={null}></option>
            <option value="AUD">AUD</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <label class="currencyLabel" for="currency2"> convert to </label>
          <select id="currency2" name="currency2" value={currSel2} onChange={function(e) {handleSelect("2", e.target.value)}}>
            <option value={null}></option>
            <option value="AUD">AUD</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <br></br>
          <button onClick={fetchRates}>What's the Exchange?</button>
        {returnData && (
          <div>
            <hr></hr>
            <em>
              1 {currSel1} = {handleCalculation(baseSel1Ex, baseSel2Ex)} {currSel2}
            </em>
            <hr></hr>
            <h6>
              Exchange Rate Base: {returnData.base} <br></br>
              Exchange Rate from {returnData.base} to {currSel1}: {returnData.rates[currSel1]}<br></br>
              Exchange Rate from {returnData.base} to {currSel2}: {returnData.rates[currSel2]}
            </h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangeRates;
