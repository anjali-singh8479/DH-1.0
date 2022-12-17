import React from 'react'
import "../styles/navbar2.css"

const Navbar2 = () => {
  
  return (
  <div className='navbar2'>
    <div className="navlinks" >
          <ul id="menu" className="nav_menu">
            <li className="nav_item">
              <a href="/Addproperty.js" className="nav_link">
                Add a property
              </a>
            </li>

            <li className="nav_item">
              <a href="/Delete.js" className="nav_link">
                Delete a property
              </a>
            </li>

            <li className="nav_item">
              <a href="/Editproperty.js" className="nav_link">
               Edit property
              </a>
            </li>

            <li className="nav_item">
              <a href="" className="nav_link">
                Queries
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar2;