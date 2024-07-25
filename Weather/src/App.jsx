import { useState } from "react";
import "./App.css";

/*
React Weather Dashboard


We provided some simple React template code. Your goal is to build a weather dashboard application that lets users search for current weather conditions in different cities.

When the app loads, it should display a search bar where users can type in a city's name. Once the city name is entered (case-sensitive) and the user hits the "Search" button, the app should display the current temperature, humidity, and wind speed for the chosen city. For simplicity, you don't have to make actual API calls; instead, use the predefined data to mimic the weather data for a few cities.

Additionally, all previously searched cities should be listed below the search bar as buttons. When a user clicks on a previously searched city, its weather data should be displayed again.

Ensure the application handles scenarios where the city is not in your mock data by displaying a message: "City not found." You are free to add classes and styles, but make sure you leave the component ID's and classes provided as they are. Submit your code once it is complete and our system will validate your output.


*/

// instead of requesting data from an API, use this mock data

const mockWeatherData = {
  "New York": {
    temperature: "22°C",
    humidity: "56%",
    windSpeed: "15 km/h",
  },
  "Los Angeles": {
    temperature: "27°C",
    humidity: "45%",
    windSpeed: "10 km/h",
  },
  London: {
    temperature: "15°C",
    humidity: "70%",
    windSpeed: "20 km/h",
  },
};

function WeatherDashboard() {
  const [history, setHistory] = useState([]);
  const [cityInput, setCityInput] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [cityNotFound, setCityNotFound] = useState(false);

  const searchCity = () => {
    const weatherData = mockWeatherData[cityInput];
    if (weatherData) {
      setTemperature(weatherData.temperature);
      setHumidity(weatherData.humidity);
      setWindSpeed(weatherData.windSpeed);
      setCityNotFound(false);
      if (!history.includes(cityInput)) {
        setHistory([...history, cityInput]);
      }
    } else {
      setCityNotFound(true);
      setTemperature("");
      setHumidity("");
      setWindSpeed("");
    }
  };

  const showCity = (city) => {
    setCityInput(city);
    searchCity();
  };

  return (
    <div className="main-container">
      <div className="search-container">
        <input
          type="text"
          id="citySearch"
          placeholder="Search for a city..."
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button id="searchButton" onClick={searchCity}>
          Search
        </button>
      </div>

      <div id="previousSearches">
        {history.map((city) => (
          <button className="previousCityButton"key={city} onClick={() => showCity(city)}>
            {city}
          </button>
        ))}
      </div>
      <div id="weatherData">
        {cityNotFound ? (
          <div>City not found</div>
        ) : (
          <>
            <div>Temperature: {temperature}</div>
            <div>Humidity: {humidity}</div>
            <div>Wind Speed: {windSpeed}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherDashboard;
