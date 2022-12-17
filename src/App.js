import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Addproperty from "./components/Addproperty";
import Delete from "./components/Delete";
import Editcard from "./components/Editcard";
import Info from "./components/Info.js";
import Editproperty from "./components/Editproperty";
import Edit from "./components/Edit";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";



function App() {
  const [addToggle, setaddToggle] = useState(false);
  const [deleteToggle, setdeleteToggle] = useState(false);
  const [editToggle, seteditToggle] = useState(false);
  const [cardToggle, setcardToggle] = useState(false);
  const [editcardToggle, seteditcardToggle] = useState(false);
  useEffect(() => {
    if (
      window.location.pathname === "/Addproperty.js" ||
      window.location.pathname === "/"
    ) {
      return setaddToggle(true);
    }
    if (window.location.pathname === "/Delete.js") {
      return setdeleteToggle(true);
    }
    if (window.location.pathname === "/Editproperty.js") {
      return seteditToggle(true);
    }
    if (window.location.pathname === "/Edit.js") {
      return setcardToggle(true);
    }
    if (window.location.pathname === "/Editcard.js") {
      return seteditcardToggle(true);
    }
  }, []);
  return (
    <>
      <Navbar />
      <Navbar2 />
     
{/* 
      <div className="navoptions"> */}
        {addToggle ? <Addproperty /> : null}
        {deleteToggle ? <Delete/> : null}
        {editToggle? <Edit/> : null}
        {cardToggle ? <Editproperty/>:null}
        {editcardToggle ? <Editcard  />:null}
      {/* </div> */}

      {/* <Router>
        <Navbar/>
        <Navbar2/>
        <Routes>
          <Route Exactpath="/Addproperty.js" element={<Addproperty/>}></Route>
          <Route path="/Delete.js" element={<Delete/>}></Route>
        </Routes>
        
      </Router> */}
    </>
  );
}

export default App;
