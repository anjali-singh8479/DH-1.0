import React from "react";
import "../styles/utilities.css";
import "../styles/navbar.css";
import {ImSearch} from "react-icons/im"
const Navbar = () => {
  const show = () => {
    let hamburger = document.querySelector(".hamburger");
    let close = document.querySelector(".close");
    let mobileNav = document.querySelector(".mobile-nav");
    hamburger.addEventListener("click", function () {
      mobileNav.classList.add("open");
     
    });
    close.addEventListener("click", function () {
      mobileNav.classList.remove("open");
     
  });
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="light DH logo.png" alt="none"></img>
          <a href="/Addproperty.js" className="nav_link">
            Differ<b>HOME</b>
          </a>

          <div className="search">
          <input placeholder="Enter city, location, place"></input>
           <ImSearch/>
          </div>
        </div>
        <div className="navlinks">
          <ul id="menu" className="nav_menu">
            <li className="nav_item">
              <a href="Addphotos.js" className="nav_link">
                Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about-section" className="nav_link">
                About
              </a>
            </li>

            <li className="nav_item">
              <a href="" className="nav_link">
                Services
              </a>
            </li>

            <li className="nav_item">
              <a href="" className="nav_link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <img
          className="hamburger"
          src="icons8-menu-30 (1).png"
          alt="none"
          onClick={show}
        ></img>
        <div className="mobile-nav">
          <img
            className="close"
            src="close.png"
            alt="none"
            onClick={show}
          ></img>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
