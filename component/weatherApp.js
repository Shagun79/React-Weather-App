import React, { useState } from "react";
import "./weatherapp.css";


const WeatherApp = () => {
    const [city, setcity]= useState('');
    const [temperature, setTemperature] = useState(null);
    const [fellsLike, setFeelsLike]=useState(null);

    
      

    
    

    const show_weather= async ()=>{
        const API=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94f443fcdf9870f4a35dbf481d9fdc7b`;
        const response=  await fetch(API);
        const  resjson =  await response.json();
        console.log(resjson.main ,"sajal");
        setTemperature(resjson.main.temp-273);
        setFeelsLike(resjson.main.feels_like-273);
        console.log(API);
       
    };
  return (
    <>
      <div className="box">
        <h1> Weather App </h1>
        <input type="text" placeholder="Enter city" value={city} onChange={(e)=>{
            setcity(
            e.target.value)
        } } />
        <button onClick={show_weather}>Get Weather</button>
        <div className="weather-info">
          <h2></h2>
          <div className="text">
            <h2> Temperature: {temperature} </h2>
            <h2 className="weatherText"> FeelsLike:
              {fellsLike} </h2>
          </div>
        </div>
        {/* <div className="imageBox">
        <img src={imageUrl} alt="wather img" />

        </div> */}
      </div>
    </>
  );
};

export default WeatherApp;
