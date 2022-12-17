import React, { useEffect, useState } from "react";

import "../styles/editproperty.css";
import "../styles/addproperty.css";
import { City, State } from "country-state-city";

import { useRef } from "react";

const Editproperty = () => {
  const edititem = JSON.parse(localStorage.getItem("edititem")); //item clicked to be edited
  const savechanges = () => {
    const nottoedit = JSON.parse(localStorage.getItem("u")).filter(
      (item) => item.city !== edititem[0].city
    );
    nottoedit.push(data);
    localStorage.setItem("u", JSON.stringify(nottoedit));
    setdata([]);
  };
  const countryCode = "IN";

  const [entry, setentry] = useState([]); //stores all the data of the form
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const [getstate, setgetstate] = useState(""); //state that is entered
  const mapContainer = useRef(null);
  const statecontainer = useRef(null);

  const [getcity, setgetcity] = useState("");
  useEffect(() => {});

  useEffect(() => {
    setStates(State.getStatesOfCountry(countryCode));
  }, []);
  useEffect(() => {
    setCity(City.getCitiesOfCountry(countryCode));
  }, []);

  // localStorage.setItem("u", JSON.stringify([JSON.parse(localStorage.getItem("user")),...entry]));
  useEffect(() => {});

  useEffect(() => {
    setStates(State.getStatesOfCountry(countryCode));
  }, []);
  useEffect(() => {
    setCity(City.getCitiesOfCountry(countryCode));
  }, []);
  function handleState(e) {
    e.preventDefault();
    setdata({ ...data, state: e.target.value });

    setgetstate(e.target.value);
  }
  function handleCity(e) {
    e.preventDefault();
    setdata({ ...data, city: e.target.value });
    setgetcity(e.target.value);
  }

  const statecode = State.getStatesOfCountry(countryCode)
    .filter((item) => item.name === getstate)
    .map((item) => item.isoCode);

  const c = [...City.getCitiesOfState(countryCode, statecode[0])]; //code of the state entered
  let countries = [...states.map((item) => item.name)]; //All states of india
  let cities = [...new Set(c.map((item) => item.name))]; //cities of the entered state
  const la = City.getCitiesOfState(countryCode, statecode[0])
    .filter((item) => item.name === getcity)
    .map((item) => item.latitude);
  const ln = City.getCitiesOfState(countryCode, statecode[0])
    .filter((item) => item.name === getcity)
    .map((item) => item.longitude);

  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  const [data, setdata] = useState({
    about: edititem[0].about,
    name: edititem[0].name,
    pincode: edititem[0].pincode,

    city: edititem[0].city,
    state: edititem[0].state,
    price: edititem[0].price,
    bedrooms: edititem[0].bedrooms,
    bathrooms: edititem[0].bathrooms,
    age: edititem[0].age,
    price_per_ft: edititem[0].price_per_ft,
    registration_status: edititem[0].registration_status,
    construction_status: edititem[0].construction_status,
    furnishing_status: edititem[0].furnishing_status,
    type_property: edititem[0].type_property,
    type_area: edititem[0].type_area,
  });
  return (
    <>
      <form className="add-wrapper" encType="form-data">
        <div className=" add add_photo">
          <h4 className="Heading">Add Photos</h4>
          <div className=" flex">
            <div className="photoedit">
              <img src="city1.jpg"></img>
            </div>
            <div className="photoedit">
              <img src="city1.jpg"></img>
            </div>
            <div className="photoedit">
              <img src="city1.jpg"></img>
            </div>
          </div>
        </div>
        <div className=" add aboutproperty">
          <h4 className="Heading">About a Property</h4>
          <textarea
            id="about"
            name="about"
            value={data.about}
            cols="30"
            rows="5"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>

        <div className="add basic_details">
          <h4 className="Heading">Basic Details</h4>
          <div id="basic_details">
            <div className="name">
              <h6>Name of the property</h6>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
                required
              ></input>
            </div>

            <div ref={statecontainer} className="address">
              <h6>state of the property</h6>
              <select
                id="state"
                name="state"
                value={data.state}
                required
                onChange={(e) => handleState(e)}
              >
                <option>--select state--</option>
                {countries.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <h6>city of the property</h6>

              <select
                id="city"
                name="city"
                value={data.city}
                required
                onChange={(e) => handleCity(e)}
              >
                <option>{data.city}</option>
                {cities.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="pincode">
              <h6>pincode</h6>

              <input
                className="pin"
                type="text"
                name="pincode"
                value={data.pincode}
                onChange={(e) => handleChange(e)}
                required
              ></input>
            </div>
            <div className="price">
              <h6>price range of the property</h6>
              <input
                id="price"
                type="text"
                name="price"
                value={data.price}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          </div>
        </div>

        <div className=" add secondary-details">
          <h4 className="Heading">Secondary details</h4>
          <input type="text" name=""></input>
          <span> sq.ft</span>
          <div className="Bhks">
            <h6>BHK</h6>
            <div className="flex bhk">
              <select
                id="bedrooms"
                name="bedrooms"
                value={data.bedrooms}
                onChange={(e) => handleChange(e)}
                required
              >
                <option>{data.bedrooms}</option>
                <option value="1 bedrooms">1</option>
                <option value="2 bedrooms">2</option>
                <option value="3 bedrooms">3</option>
              </select>
              <select
                id="bathrooms"
                name="bathrooms"
                value={data.bathrooms}
                onChange={(e) => handleChange(e)}
                required
              >
                <option>{data.bathrooms}</option>
                <option value="1 bathrooms">1</option>
                <option value="2 bathrooms">2</option>
                <option value="3 bathrooms">3</option>
              </select>
            </div>
          </div>
          <div className="flex property-age Bhks">
            <div>
              <h6>Age of the property</h6>

              <select
                id="age"
                name="age"
                value={data.age}
                onChange={(e) => handleChange(e)}
              >
                <option>{data.age}</option>
                <option value="0">0 years</option>
                <option value="1-5years">1 -5 years</option>
                <option value="5-10years">5 -10 years</option>
                <option value="+10years">+10 years</option>
              </select>
            </div>
            <div>
              <h6>Price per sq.ft</h6>
              <input
                id="price-per-ft"
                name="price_per_ft"
                value={data.price_per_ft}
                required
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          </div>
          <div className="flex justify-between rera Bhks">
            <div>
              <h6>RERA status</h6>

              <select
                id="registration_status"
                name="registration_status"
                value={data.registration_status}
                onChange={(e) => handleChange(e)}
                required
              >
                <option value="registerd">registered</option>
                <option value="unregistered">unregistered</option>
              </select>
            </div>
            <div>
              <h6>Construction status</h6>

              <select
                id="construction_status"
                name="construction_status"
                value={data.construction_status}
                onChange={(e) => handleChange(e)}
                required
              >
                <option value="underconstruction">under construction</option>
                <option value="constructed">constructed</option>
              </select>
            </div>
            <div>
              <h6>Furnishing status</h6>

              <select
                id="furnishing_status"
                name="furnishing_status"
                value={data.furnishing_status}
                onChange={(e) => handleChange(e)}
                required
              >
                <option value="unfurnished">unfurnished</option>
                <option value="furnished">furnished</option>
                <option value="semi-furnished">semi-furnished</option>
              </select>
            </div>
          </div>
        </div>

        <div className=" add otherdetails">
          <h4 className="Heading">Other</h4>
          <div>
            <h6>Type of property</h6>

            <select
              id="type_property"
              name="type_property"
              value={data.type_property}
              onChange={(e) => handleChange(e)}
              required
            >
              <option value="apartments">Apartments</option>

              <option value="villas">Villas</option>
              <option value="plots">Plots</option>

              <option value="bungalow">Bungalow</option>
            </select>
          </div>
          <div>
            <h6>Type of area</h6>

            <select
              id="type_area"
              name="type_area"
              value={data.type_area}
              onChange={(e) => handleChange(e)}
              required
            >
              <option value="ft">sq.ft</option>
              <option value="km">sq.km</option>
              <option value="bighas">bighas</option>
              <option value="acres">Acres</option>
              <option value="hectares">Hectares</option>
            </select>
          </div>
          <div>
            <h6>Other Specifications</h6>
            <textarea></textarea>
          </div>
        </div>
        <div className="add 3dlayouts">
          <div>
            <h4 className="Heading">Add 3D layputs and floor plans</h4>
            <div className="photo_wrapper">
              <div className="photo">+</div>
              <div className="photo">+</div>
              <div className="photo">+</div>
            </div>
          </div>
          <div>
            <h6>Add-on-services</h6>

            <select
              placeholder="ad-on-services"
              onChange={(e) => handleChange(e)}
            >
              <option></option>
            </select>
          </div>
        </div>
      </form>
     <div className="flex" style={{justifyContent:"center",marginBottom:"20px"}}>
     <button className="btn" onClick={savechanges}>
        save changes
      </button>
     </div>
    </>
  );
};

export default Editproperty;
