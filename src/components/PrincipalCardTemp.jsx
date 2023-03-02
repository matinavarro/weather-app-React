import React from "react";
import "./principalCardTemp.css";

const PrincipalCardTemp = ({ weather, units }) => {
  return (
    <div className='section section__temperature'>
      <div className='icon'>
        <h3>{`${weather.name}, ${weather.country}`}</h3>
        <img src={weather.iconURL} alt='watherIcon' />
        <h3>Cloudy</h3>
      </div>
      <div className='temperature'>
        <h1>{`${weather.temp.toFixed()}°${units === `metric` ? "C" : "F"}`}</h1>
      </div>
    </div>
  );
};

export default PrincipalCardTemp;
