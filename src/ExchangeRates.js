// src/ExchangeRates.js
import React, { useState } from 'react';

const ExchangeRates = () => {
    const [country, setCountry] = useState('');
    const [rates, setRates] = useState('');

  const fetchRates = async () => {
    const apiKey = '80d4f62f45d343adac6105142250602'; // Replace with your actual API key
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=yes`);
    const data = await response.json();
    console.log(data); // Log the response data
    setRates(data);
  };

  return (
    <div>
      <input 
        type="text" 
        value={country} 
        onChange={(e) => setCountry(e.target.value)} 
        placeholder="Enter city" 
      />
      <button onClick={fetchRates}>Get Weather</button>
      {rates && (
        <div>
          <h3>Weather in {rates.location.name}, {rates.location.region}, {rates.location.country}</h3>
          <p>Temperature C: {Math.round(rates.current.temp_c)}°C</p>
          <p>Temperature F: {Math.round(rates.current.temp_f)}°F</p>
          <p>Time in {rates.location.name} is {rates.location.localtime}</p>
          {/*<p>{weather.weather[0].description}</p>*/}
        </div>
      )}
    </div>
  );
};

export default ExchangeRates;
