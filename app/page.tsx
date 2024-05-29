"use client";
import React, { useState } from "react";
//components
import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Loader from "@/components/Loader";

export default function Home() {
  //usestate hooks
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>([]);
  const [showLoader, setshowLoader] = useState(false);
  // function to group forecast data
  function groupForecastDataByDate(forecastList: any) {
    const groupedData: any = {};
    forecastList.forEach((forecast: any) => {
      const dateTime = forecast.dt_txt.split(" "); // Split date and time
      const date = dateTime[0]; // Extract date
      const time = dateTime[1]; // Extract time
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push({
        temperature: forecast.main.temp,
        humidity: forecast.main.humidity,
        windSpeed: forecast.wind.speed,
        date: date,
        time: time,
        weather: forecast.weather[0].description,
        icon: forecast.weather[0].icon,
      });
    });
    return groupedData;
  }

  // function for fetch weather Data
  const fetchWeatherData = async (city: String) => {
    setshowLoader(true);
    const apiKey = "acdf728de1a9a13a0f281767514d09d0";
    const Weather_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const Forecast_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const currentWeatherResponse = await fetch(Weather_API_URL);
      const currentWeatherData = await currentWeatherResponse.json();
      const forecastResponse = await fetch(Forecast_API_URL);
      const forecastData = await forecastResponse.json();
         setshowLoader(false);
      const groupedData = groupForecastDataByDate(forecastData.list);

      setWeather({
        temp: currentWeatherData.main.temp,
        weather: currentWeatherData.weather[0].description,
        humidity: currentWeatherData.main.humidity,
        windSpeed: currentWeatherData.wind.speed,
        name: currentWeatherData.name,
      });

      setForecast(groupedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally{
      setshowLoader(false)
    }
  };

  return (
    <div className="flex flex-col px-7 mt-20 justify-center items-center">
      <h1 className="my-5 text-black font-bold sm:text-2xl">
        Weather Dashboard
      </h1>
      <SearchBar onSearch={fetchWeatherData} />
      {
        !showLoader ? <>
          <CurrentWeather weather={weather} />
      <Forecast forecast={forecast} />
        </> : <Loader/>
      }
    
    </div>
  );
}
