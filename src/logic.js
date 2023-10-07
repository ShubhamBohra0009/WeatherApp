const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function checkWeather(city,setWeatherData,setError,setDisplay) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status === 404) {
        setError(true);
        setDisplay(false);
    }
    else {
    var data = await response.json();
    setDisplay(true)
    setError(false);
    await setWeatherData(data)
    }
}

