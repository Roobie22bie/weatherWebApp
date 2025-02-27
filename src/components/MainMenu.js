import React, { useState } from 'react';
import Weather from './Weather';
import ExchangeRates from './ExchangeRates';

const MainMenu = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
        <hr></hr>
        <button onClick={() => handleButtonClick('Weather')}>Weather</button>
        <button onClick={() => handleButtonClick('ExchangeRates')}>Exchange Rates</button>
        <button onClick={() => handleButtonClick(null)}>Clear</button>
        <hr></hr>
        <br></br>
        {(() => {
            if (selectedComponent === 'Weather') {
                return (<Weather />)
        } 
        else if (selectedComponent === 'ExchangeRates'){
            return (<ExchangeRates />)
        }}
        )()}
    </div>
  );
};

export default MainMenu;
