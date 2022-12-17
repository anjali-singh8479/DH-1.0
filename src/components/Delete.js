import React, { useState } from "react";

import Card from "./Card";
import "../styles/card.css";
const Delete = () => {
  const number = JSON.parse(localStorage.getItem("u"));

  console.log(number);
  const del = () => {
   
    document.location.reload();
  };
  return (
    <>
      <div className="cards">
        {number.map((item) => (
          <Card
            key={number.indexOf(item)}
            name={item.name}
            state={item.state}
            city={item.city}
            price={item.price}
            bedrooms={item.bedrooms}
            bathrooms={item.bathrooms}
            furnishing_status={item.furnishing_status}
            construction_status={item.construction_status}
            registration_status={item.registration_status}
            
          />
        ))}
      </div>
     <div className="flex" style={{justifyContent:"center" , marginBottom:"20px"}}> <button className="btn" onClick={del}>
      Delete
      </button>
      </div>
    </>
  );
};

export default Delete;
