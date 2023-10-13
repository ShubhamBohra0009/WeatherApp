import React,{  useState } from 'react';
import './App.css';
import {checkWeather} from './logic';
import Weather from './components/Weather';
import Card from './components/WeatherCard';
import cardContext from './Context/UseContext';

function App() {
    const [change,setChange]= useState("");
    const [error,setError]= useState(false);
    const [display,setDisplay]= useState(true);
    const [weatherData, setWeatherData] = useState(null);

  return (
    <>
    <cardContext.Provider value={{change,setChange,checkWeather,setWeatherData,error,setError,display,setDisplay}}>
    <Card>
    <Weather data={weatherData}/>
    </Card>
    </cardContext.Provider>
    </>
  );
}

export default App;
