import React from "react";
import "../styles/editcard.css";
import { useState } from "react";
import { RiHeart3Fill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import mapboxgl from "mapbox-gl";
import { useRef } from "react";
import Card from "./Card.js";
import { comment } from "fontawesome";

const Editcard = (
  ) => {
    const info=JSON.parse(localStorage.getItem("info"))
    console.log(info)
  const mapContainer = useRef(null);
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
  });
  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude]);
  }
  function errorLocation() {
    setupMap([23.2599333, 77.41261499999996]);
  }
  function setupMap() {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [23.2599333, 77.41261499999996],
      zoom: 12,
    });
    
  }
  const [toggleHeart, setToggleHeart] = useState(false);
  function changeColor() {
    setToggleHeart(!toggleHeart);
  }
  return (
    <>
      <section>
        <div className="editcard-wrapper">
          <div className="img-wrapper">
            <img src="city1.jpg"></img>
            <RiHeart3Fill
              style={{
                fontSize: "20px",
                margin: "5px",
                padding: "5px",
                background: "var(--pure)",
                position: "absolute",
                right: "15px",
                borderRadius: "50%",
              }}
              className={toggleHeart ? "heart active" : "heart"}
              onClick={changeColor}
            />
          </div>
          <div className="info">
            <div className="gokul-wrapper flex">
              <div className="gokul">
                <h4>{info[0].name}</h4>
                <span> Rs. {info[0].price}</span>
                <p>view EMI plans</p>
                <button className="btn">View All Offers</button>

                <p className="btn-p">
                  {" "}
                  <img className="vector" src="images\Vector (4).svg"></img>
                  Don't miss out the best offers of the years
                </p>
              </div>
              <div className="gokul">
                <h5>Address of the property</h5>
                <p> {info[0].state} ,{info[0].city}</p>
                <h6>Pincode {info[0].pincode}</h6>
                <div className="flex">
                  <div>
                    <h6 className="btn-p">
                      {" "}
                      <img className="vector" src="images\vector.svg"></img>Area
                    </h6>
                    <p>{info[0].type_area}</p>
                  </div>
                  <div>
                    <h6 className="btn-p">
                      <img className="vector" src="images\vector (1).svg"></img>
                      BHKs
                    </h6>
                    <p>{info[0].bedrooms} ,{info[0].bathrooms}</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <h6 className="btn-p">
                     
                      <img className="vector" src="images\vector (2).svg"></img>
                      Price
                    </h6>
                    <p>Rs. {info[0].price} </p>
                  </div>
                  <div>
                    <h6 className="btn-p">
                     
                      <img className="vector" src="images\vector (3).svg"></img>
                      Age of the propertty
                    </h6>
                    <p>{info[0].age}</p>
                  </div>
                </div>
              </div>
            </div>
            <span>About</span>
            <p id="about">
             {info[0].about}
            </p>
            <div className="gokul-wrapper">
              <div className=" gokul2">
                <div className="flex">
                <div>
                  <h6>Carpet area</h6>
                  <p>{info[0].area}sq.ft</p>
                </div>
                <div>
                  <h6>Price/sq.ft</h6>
                  <p> Rs. {info[0].price_per_ft}</p>
                </div>
                </div>
              </div>
              <div className=" gokul2 ">
               <div className="flex">
               <div>
                  <h6>Rera Registered</h6>
                  <p>{info[0].registration_status}</p>
                </div>
                <div>
                  <h6>Status</h6>
                  <p>{info[0].construction_status}</p>
                </div>
               </div>
              </div>
              <div className="gokul2">
                <h6>Furnishing Status</h6>
                <p>{info[0].furnishing_status}</p>
              </div>
            </div>
            <div className="btn-wrapper">
              <button className="btn ">
                <span className="btn-p">
                  {" "}
                  Enquire{" "}
                  <img className="vector" src="images\Vector (7).svg"></img>
                </span>
              </button>
              <button className="btn-secondary ">
                <span className="btn-p">
                  Download vouchure{" "}
                  <img className="vector " src="images\Vector (6).svg"></img>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex section2">
        <div className="layout-img-wrapper">
          <h4 className="heading">3D Layouts and floor plans</h4>
          <div className="layoutimg-wrapper">
            <img src="city1.jpg"></img>
            <img src="city1.jpg"></img>
            <img src="city1.jpg"></img>
            <img src="city1.jpg"></img>
          </div>
          <button className="btn">View All</button>
        </div>
        <div className="contact-info-wrapper">
          <div className="contact-info">
            <h4>Consult out expert</h4>
            <span>
              {" "}
              <IoIosCall /> -97654289554
            </span>
            <span>
              <MdEmail /> estate@gmail.com
            </span>
            <span>
              <IoLogoWhatsapp /> -56895436888
            </span>
          </div>
          <div>
            <div className="Map" id="map">
              <div ref={mapContainer} className=" map-container mapBox"></div>
            </div>
          </div>
          <button className="btn">view on map</button>
        </div>
      </section>
      <section className="specifications">
        <h4 className="heading">Other Specifications</h4>
      </section>
      <section>
        <h4 className="heading"> All on services</h4>
        <div className="flex elipse">
          <div>
            <img src="elipse6.jpeg"></img>
            <p>Furlenco Furnitures</p>
          </div>
          <div>
            <img src="elipse7.png"></img>

            <p>Sulekha-Packers & movers</p>
          </div>
          <div>
            <img src="elipse6.jpeg"></img>
            <p>Furlenco Furnitures</p>
          </div>
          <div>
            <img src="elipse7.png"></img>
            <p>Sulekha-Packers & movers</p>
          </div>
        </div>
      </section>
      <div>
        <h4 className="heading">Similar properties</h4>
        <div className="flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Editcard;
