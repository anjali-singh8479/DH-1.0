import React, { useState } from "react";
import "../styles/card.css";
import "../styles/editcard.css"
import { RiHeart3Fill } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegHeart } from "react-icons/fa";

const Card = ({
  key,
  name,
  state,
  city,
  price,
  bedrooms,
  bathrooms,
  furnishing_status,
  construction_status,
  registration_status,
}) => {
  const info=(e)=>{
 
    const info=JSON.parse(localStorage.getItem("u")).filter((item)=>item.city===city);
    localStorage.setItem("info",JSON.stringify(info))
   }
  const number = JSON.parse(localStorage.getItem("u"));
  // console.log(number)
  const [delitem, setdelitem] = useState([]);
 
  const deleteitem = (e) => {
    const notdeleted = JSON.parse(localStorage.getItem("u")).filter(
      (item) => item.city !== e.target.value
    );

    localStorage.setItem("u", JSON.stringify(notdeleted));
  };
  const [toggleHeart, setToggleHeart] = useState(false);
  function changeColor() {
    setToggleHeart(!toggleHeart);
  }

  return (
    <>
      <div>
        <div className="card-wrapper">
          <div className="img-wrapper">
          <a href="/Editcard.js">
              {" "}
              <img src="city1.jpg" onClick={(e)=>info(e)} value={city} id="info"></img>
            </a>
            <div id="cost"> {price}Lakhs</div>
            <div className="form-check">
              <input
                onClick={(e) => deleteitem(e)}
                className="form-check-input"
                type="checkbox"
                value={city}
                id="flexCheckDefault"
              />
            </div>
          </div>
          <div id="property-details">
            <div className="property-name">
              <div>
                <h6>{name}</h6>

                <p>
                  {state},{city}
                </p>
              </div>
              <div className="icons-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
                <RiHeart3Fill
                  style={{ fontSize: "25px" }}
                  className={toggleHeart ? "heart active" : "heart"}
                  onClick={changeColor}
                />
               
                
                 
               
              </div>
            </div>
            <div className="png flex">
              <div className="rooms flex">
                <img src="bathtub.png"></img>
                <p>{bathrooms}</p>
              </div>
              <div className="rooms flex">
                <img src="bed.png"></img>
                <p>{bedrooms}</p>
              </div>
            </div>
            <div className="flex">
              <span>{furnishing_status}</span>
              <span>{construction_status}</span>
              <span>{registration_status}</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Card;
