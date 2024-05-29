import React from "react";
const CurrentWeather = ({ weather }: any) => {
  return (
    <div>
      {weather && (
        <div className="max-w-sm my-10 rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Current Weather</div>
            <div className="text-gray-700 text-base">
              <div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-4xl">{weather.temp} °C</p>
                  <img
                    src="http://openweathermap.org/img/wn/04d.png"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="m-0 text-black font-bold mb-2">{weather.name}</p>
                <p>
                  Weather Condition:{" "}
                  <span className="font-bold">{weather.weather}</span>
                </p>
                <p>
                  Humidity:{" "}
                  <span className="font-bold">{weather.humidity}%</span>
                </p>
                <p>
                  Wind Speed:{" "}
                  <span className="font-bold">{weather.windSpeed} m/s</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
