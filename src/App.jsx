import React from 'react';
import hotBg from './assets/hot.jpg'
import coldBg from './assets/cold.jpg'
import Descriptions from './components/Descriptions';
import { useEffect,useState } from 'react';
import { getFormattedWeatherData } from './service/waetherService';

const App = () => {
  const [city, setCity] = useState("paris")
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg)
  

  useEffect(() => {
    const fetchsWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      /*new test data
      console.log(data);*/

       // dynamic bg
       const threshold = units === "metric" ? 20 : 60;
       if(data.temp <= threshold) setBg(coldBg);
       else setBg(hotBg);
    };

    fetchsWeatherData();
  }, [units,city]);


  // function button
  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };
  
  // function change city
  const enterKeyPressed =(e) =>{
    if(e.keyCode === 13){
      setCity(e.currentTarget.value)
      e.currentTarget.blur();
    }
  }

  return (
    <div className="app" style={{ backgroundImage:`url(${bg})` }}>
    <div className="overlay">
      {
        weather && (
          <div className="container">
        <div className="section section__inputs">
          <input onKeyDown={enterKeyPressed} type="text" name='city' placeholder='Enter City...' />
          <button onClick={(e) => handleUnitsClick(e)}>°F</button>
        </div>
        <div className="section section__temperature">
          <div className="icon">
            <h3>{`${weather.name}, ${weather.country}`}</h3>
            <img src={weather.iconURL} alt="watherIcon" />
            <h3>Cloudy</h3>
          </div>
          <div className="temperature">
            <h1>{`${weather.temp.toFixed()}°${units=== `metric` ? "C" : "F"}`}</h1>
          </div>
        </div>
        {/*Bottom Description*/}
        <Descriptions weather = {weather} units = {units}/>
      </div>
        )}
    </div>
    
  </div>
  );
}

export default App;


