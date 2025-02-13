// src/Weather.js
import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = '80d4f62f45d343adac6105142250602'; // Replace with your actual API key
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);
    const data = await response.json();
    console.log(data); // Log the response data
    setWeather(data);
  };

  return (
    <div>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city" 
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <div>
          <h3>Weather in {weather.location.name}, {weather.location.region}, {weather.location.country}</h3>
          <p>Temperature C: {Math.round(weather.current.temp_c)}°C</p>
          <p>Temperature F: {Math.round(weather.current.temp_f)}°F</p>
          <p>Time in {weather.location.name} is {weather.location.localtime}</p>
          {/*<p>{weather.weather[0].description}</p>*/}
        </div>
      )}
    </div>
  );
};

export default Weather;
