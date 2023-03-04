import React from "react";
import "./inputsWeather.css";

const InputsWeather = ({ changeCountry, changeScale, currentUnit }) => {
  return (
    <div className='section section__inputs'>
      <input
        onKeyDown={changeCountry}
        type='text'
        name='city'
        placeholder='Enter City...'
      />

      <label className='switch'>
        <input
          value={currentUnit}
          onClick={changeScale}
          className='inpt'
          type='checkbox'
        />
        <span className='slider'></span>
        <div className='containerScale'>
          <p className='metric'>°C</p>
          <p className='metric'>°F</p>
        </div>
      </label>
    </div>
  );
};

export default InputsWeather;
