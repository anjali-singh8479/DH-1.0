import React from "react";
import Card2 from "./Card2";

import "../styles/card.css";
import "../styles/editproperty.css";
import { Link } from "react-router-dom";
const Edit = () => {
  const number = JSON.parse(localStorage.getItem("u"));

  // const edit = () => {
  //   // document.location.reload();
  //   if (document.getElementById("edithide").style.display === "block") {
  //     document.getElementById("edithide").style.display = "none";
  //   } else {
  //     document.getElementById("edithide").style.display = "block";
  //   }
  // };

  return (
    <>
      <div className="cards">
        {number.map((item) => (
          <Card2
            key={number.indexOf(item)}
            about={item.about}
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

     <div className="flex" style={{justifyContent:"center" ,marginBottom:"20px"}}>
     <a href="./Edit.js">
        <button className="btn">
          Edit property{" "}
        </button>
      </a>
     </div>
    </>
  );
};

export default Edit;
