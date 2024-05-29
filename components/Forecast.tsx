import React from "react";
const Forecast = (forecastData: any) => {
  return (
    <>
      {forecastData.forecast.length > 0 ? (
        <h2 className="font-bold text-2xl my-4">5-day weather forecast</h2>
      ) : (
        ""
      )}
      <div className="flex sm:px-6 max-[640px]:w-full  flex-col sm:flex-row flex-wrap justify-center items-center">
        {forecastData &&
          Object.keys(forecastData.forecast).map((date) => (
            <div
              key={date}
              className=" sm:w-[800px] w-full rounded overflow-hidden shadow-lg bg-white my-2 px-2 sm:px-6 py-4"
            >
              <h2 className="text-black font-bold text-sm my-4">{date}</h2>
              <ul>
                <div className="flex sm:flex-row flex-col justify-between items-center">
                  {forecastData.forecast[date].map(
                    (weather: any, index: number) => (
                      <li
                        className="flex flex-col justify-center items-center sm:mx-5 mx-0 border-b-2 sm:border-b-0  max-[640px]:w-full max-[640px]:py-3 "
                        key={index}
                      >
                        <p className="text-xs">
                          <span className="sm:hidden">Temp: </span>
                          {weather.temperature.toFixed(1)}°C
                        </p>
                        <img
                          src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                          width={50}
                          height={50}
                        />
                        <p className="text-xs my-2">
                          <span className="sm:hidden">Humidity: </span>
                          {weather.humidity}%
                        </p>
                        <p className="text-xs my-2 text-center">
                          <span className="sm:hidden">Wind: </span>
                          {weather.windSpeed} km/h
                        </p>
                        <p className="text-xs my-2 font-bold">
                          <span className="sm:hidden font-normal">Time: </span>
                          {weather.time.slice(0, 5)}
                        </p>
                        <p className="text-xs mt-0 mb-2 text-gray-500 ">
                          {weather.time.slice(0, 2) >= 12 ? "PM" : "AM"}
                        </p>
                      </li>
                    )
                  )}
                </div>
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default Forecast;
