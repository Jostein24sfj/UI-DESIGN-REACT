import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import styles from "./WeatherWidget.module.css"; // Import the CSS module

function WeatherWidget({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "your_actual_api_key"; // Replace with your actual OpenWeather API key

  useEffect(() => {
    console.log("Fetching weather for city:", city); // Debug: log the city name

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        console.log("API Response:", response); // Debug: log the response status
        if (!response.ok) {
          throw new Error("City not found or invalid API request");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Weather Data:", data); // Debug: log the fetched weather data
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err); // Log the error
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
    <div className={styles["weather-widget"]}>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

// PropTypes validation for the 'city' prop
WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherWidget;
