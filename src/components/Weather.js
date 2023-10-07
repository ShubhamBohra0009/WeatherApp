import React from "react";

function Weather({ data }) {
  const weatherIcon = determineWeatherIcon(data?.weather[0].main);
  const temp = Math.round(data?.main.temp);
  return (
    <div className="weather">
      <img src={weatherIcon} alt="img" className="weather-icon" />
      <h1 className="temp">{data ? temp + "°c" : "22°c"}</h1>
      <h2 className="city"> {data ? data?.name : "New York"}</h2>
      <div className="details">
        <div className="col">
          <img alt="img" src="images/humidity.png" />
          <div>
            <p className="humidity">
              {data ? data.main.humidity + "%" : "50%"}
            </p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img alt="img" src="images/wind.png" />
          <div>
            <p className="wind">
              {data ? data.wind.speed + " km/h" : "15 km/h"}
            </p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function determineWeatherIcon(weatherMain) {
  if (weatherMain === "Clouds") {
    return "./images/clouds.png";
  } else if (weatherMain === "Clear") {
    return "./images/clear.png";
  } else if (weatherMain === "Rain") {
    return "./images/rain.png";
  } else if (weatherMain === "Drizzle") {
    return "./images/drizzle.png";
  } else if (weatherMain === "Mist") {
    return "./images/mist.png";
  } else {
    return "./images/Mist.png";
  }
}
export default Weather;