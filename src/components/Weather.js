// src/Weather.js
import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = '80d4f62f45d343adac6105142250602'; // Replace with your actual API key
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);
    const data = await response.json();
    console.log(data); // Log the response data
    setWeather(data);
    localStorage.setItem("setWeather", city)
  };

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-cloud-drizzle" viewBox="0 0 16 16">
        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"/>
      </svg>
      <br></br>
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
