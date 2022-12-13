import { useEffect, useState } from "react";

import WeatherInfo from "./components/WeatherInfo";
import ClothesInfo from "./components/ClothesInfo";

export default function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function getWeather() {
      const api_key = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&lang=kr&appid=${api_key}`;
      const res = await fetch(URL);
      const weather = await res.json();
      setWeatherData({
        city: weather.name,
        celTemp: (weather.main.temp - 273.15).toFixed(0),
        feelsTemp: (weather.main.feels_like - 273.15).toFixed(0),
        weatherDesc: weather.weather[0].description,
        icon: weather.weather[0].icon,
      });
    }
    getWeather();
  }, []);

  function getBgColor(el) {
    let temp = Number(el);
    let colorName = "";

    if (temp <= 5) colorName = "#4C4EF9";
    else if (temp <= 9) colorName = "#6044E7";
    else if (temp <= 11) colorName = "#7641C5";
    else if (temp <= 16) colorName = "#8D3E9A";
    else if (temp <= 19) colorName = "#A9337D";
    else if (temp <= 26) colorName = "#B92B67";
    else if (temp >= 27) colorName = "#E1345F";

    return colorName;
  }

  let bgColor = getBgColor(weatherData.celTemp);

  return (
    <div className="flex  justify-center items-center w-full h-screen">
      <div
        className="flex flex-col justify-center items-center w-64 h-80 rounded-3xl text-white shadow-2xl"
        style={{ backgroundColor: bgColor }}
      >
        <WeatherInfo data={weatherData} />
        <ClothesInfo data={weatherData} />
      </div>
    </div>
  );
}
