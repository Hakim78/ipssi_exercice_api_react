import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Veuillez entrer une ville.");
      return;
    }
    setError("");

    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
      );
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.info);
      }

      setWeatherData(data.current);
      console.log(weatherData);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Application Météo</h1>
      <input
        type="text"
        placeholder="Entrez une ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Rechercher</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div>
          <h2>Météo actuelle à {city}</h2>
          <p>Température : {weatherData.temperature}°C</p>
          <p>Description : {weatherData.weather_descriptions[0]}</p>
          <p>Vent : {weatherData.wind_speed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
