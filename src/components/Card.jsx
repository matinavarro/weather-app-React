import React from "react";

const Card = ({id,icon,title,data,unit}) => {
  return (
    <>
      <div key={id} className='card'>
        <div className='description__card-icon'>
          {icon}
          <small>{title}</small>
        </div>
        <h2>{`${data} ${unit}`}</h2>
      </div>
    </>
  );
};

export default Card;
