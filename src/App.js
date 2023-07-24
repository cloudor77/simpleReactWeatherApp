// Hooks
// import { Fragment } from "react";
import { useEffect, useState } from "react";
// UI Segments,
import WeatherSegment from "./components/Weather";
import Navbar from "./UI/Navbar";
import Loading from "./UI/Loading";
// Helpers
import { url, findMin as min, findMax as max } from "./helpers/helpers";
import { pickTheRighWeatherCode as weatherStatus } from "./tools/weatherCodes";
// import { findMin as min } from "./helpers/helpers";
// import { findMax as max } from "./helpers/helpers";

import "./App.css";
import Card from "./UI/Card";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
      body: JSON.stringify(),
    });

    if (!response.ok) {
      throw new Error(`There was an unexpected error${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    try {
      return setWeatherData({
        city: data.timezone,
        currentTemp: data.current_weather.temperature,
        maxTemperature: max(data.daily.temperature_2m_max),
        minTemperature: min(data.daily.temperature_2m_min),
        windSpeed: data.current_weather.windspeed,
        weatherCode: weatherStatus(data.current_weather.weathercode),
      });
    } catch (error) {
      console.log("Something has gone wrong");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      getData();
    }, 1500);
  }, []);

  window.addEventListener("beforeunload", (event) => {
    getData();
  });

  window.addEventListener("unload", (event) => {
    getData();
  });

  return (
    <Card>
      <Navbar />
      {!isLoading && !isLoading ? (
        <WeatherSegment weatherData={weatherData} />
      ) : (
        <Loading />
      )}
    </Card>
  );
}

export default App;
