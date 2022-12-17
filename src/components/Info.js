
import React from 'react'
import Editcard from './Editcard'
import "../styles/editcard.css"
const Info = () => {
    const number = JSON.parse(localStorage.getItem("u"));
  return (
   <>
   <Editcard />
   </>
  )
}

export default Info