// import React from 'react'
// import {Outlet, NavLink} from 'react-router-dom'
// import './Navbar.css'
// const Navbar = () => {
//   return (
//     <>
//     <section class="head-sec">
//     <ul class="navbar-ul ml">
//         {/* <li className="navbar-li"><NavLink class="NavLink" to="/" >Home</NavLink></li> */}
//         <li className="navbar-li"><NavLink class="NavLink" to="/signup" >Register</NavLink></li>
//         <li className="navbar-li"><NavLink class="NavLink" to="/login" >Login</NavLink></li>
//         <li className="navbar-li"><NavLink class="NavLink" to="/contact" >Contact</NavLink></li>
//         <li className="navbar-li"><NavLink class="NavLink" to="/about" >About</NavLink></li>
//     </ul>
//     </section>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Unified Health Interface
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;