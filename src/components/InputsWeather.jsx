import React from "react";
import "./inputsWeather.css";

const InputsWeather = ({ changeCountry, buttonRef, changeScale }) => {
  return (
    <div className='section section__inputs'>
      <input
        onKeyDown={changeCountry}
        type='text'
        name='city'
        placeholder='Enter City...'
      />
      <button ref={buttonRef} onClick={changeScale}>
        °F
      </button>
    </div>
  );
};

export default InputsWeather;
