import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
import './WeatherApp.css';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({ 
        
city: "Gujrat",
feelsLike: 42.98,
temp: 36.66,
tempMin: 36.66,
tempMax: 36.66,
humidity: 46,
weather: "clear sky",
  
    });

    let updateInfo = (newInfo) =>{ //take new obj like that pass in initialization
        setWeatherInfo (newInfo); // here update new value in setweatherinfo state
    }
    return(
        <div>
            <h2 style={{textAlign:"center",color:"black"}}>Weather App</h2>
                 <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
            </div>
         
    );

}