import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";

import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./service/waetherService";
import React, { useRef } from "react";

import CardList from "./components/CardList";
import InputsWeather from "./components/InputsWeather";
import PrincipalCardTem from "./components/PrincipalCardTemp";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [bg, setBg] = useState(hotBg);
  const [city, setCity] = useState("paris");
  const [units, setUnits] = useState("metric");

  const buttonRef = useRef();

  // call API
  useEffect(() => {
    const fetchsWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      /*new test data
      console.log(data);*/

      // dynamic bg
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    };

    fetchsWeatherData();
  }, [units, city]);

  // function button temperture scale
  const changeTempScale = () => {
    const button = buttonRef.current;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  // function change city
  const enterKeyCity = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className='app' style={{ backgroundImage: `url(${bg})` }}>
      <div className='overlay'>
        {weather && (
          <div className='container'>
            {/*botton and search*/}
            <InputsWeather
              changeCountry={enterKeyCity}
              buttonRef={buttonRef}
              changeScale={changeTempScale}
            />
            {/*Principal Card Description*/}
            <PrincipalCardTem weather={weather} units={units} />

            {/*Botton Description*/}
            <CardList weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
