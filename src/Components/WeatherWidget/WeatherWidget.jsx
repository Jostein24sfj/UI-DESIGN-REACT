import { useState, useEffect } from "react";
import "./WeatherWidget.css"; // Import the CSS for the Weather Widget

function WeatherWidget({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "your_openweather_api_key"; // Replace with your actual OpenWeather API key

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching weather data");
        setLoading(false);
      });
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!weather) {
    return <div>Weather data not found</div>;
  }

  return (
    <div className="weather-widget">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherWidget;
