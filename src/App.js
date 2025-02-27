// src/App.js
import React from 'react';
import MainMenu from './components/MainMenu';
// import Weather from './Weather.js';
// import ExchangeRates from './ExchangeRates.js';
import './App.css';

// const selectWeatherApp = document.getElementById('displaySpace').innerHTML = <Weather />
// const selectExchangeApp = document.getElementById('displaySpace').innerHTML = <ExchangeRates />


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Checker App</h1>
        <div id="MainMenu">
        <MainMenu/>
        </div>
        {/* <Weather />
        <ExchangeRates /> */}
        {/* <div id="menu">
          <button onClick={selectWeatherApp}>Weather App</button>
          <button onClick={selectExchangeApp}>Check Exchange Rates</button>
        </div>
        <div id="displaySpace">
          <Weather />
        </div> */}
      </header>
    </div>
  );
}

export default App;
