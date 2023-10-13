import { useContext } from "react"
import cardContext from "../Context/UseContext"

function Card({children}){

    const {change,setChange,checkWeather,setWeatherData,error,setError,display,setDisplay} = useContext(cardContext);

    return(
        <>
        <div className="card">
        <div className="search">
            <input type="text" placeholder="Enter city name" spellCheck="false" value={change} onChange={(e)=>{setChange(e.target.value);setError(false);}} onKeyDown={(e)=>{e.key==="Enter"&& checkWeather(change,setWeatherData,setError,setDisplay)}}/>
            <button onClick={()=>{checkWeather(change,setWeatherData,setError,setDisplay)}}  ><img alt="img" src="images/search.png" /></button>
        </div>
        {error &&(
            <div className="error">
            <p>Invalid city name!!</p>
        </div>)}
        {display && children}
    </div>
        </>
    )
}

export default Card;