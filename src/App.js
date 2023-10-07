import React,{ useState } from 'react';
import './App.css';
import {checkWeather} from './logic';
import Weather from './components/Weather';

function App() {
    const [change,setChange]= useState("");
    const [error,setError]= useState(false);
    const [display,setDisplay]= useState(true);
    const [weatherData, setWeatherData] = useState(null);
    
  function inputChange(e){
    setChange(e.target.value);
    setError(false);
  }

  return (
    <>
    <div className="card">
        <div className="search">
            <input type="text" placeholder="Enter city name" spellCheck="false" value={change} onChange={(e)=>{inputChange(e)}} onKeyDown={(e)=>{e.key==="Enter"&& checkWeather(change,setWeatherData,setError,setDisplay)}}/>
            <button onClick={()=>{checkWeather(change,setWeatherData,setError,setDisplay)}}  ><img alt="img" src="images/search.png" /></button>
        </div>
        {error &&(
            <div className="error">
            <p>Invalid city name!!</p>
        </div>)}
        {display &&(<Weather data={weatherData}/>)}
    </div>
    </>
  );
}

export default App;
