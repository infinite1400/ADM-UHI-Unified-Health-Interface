import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './centralpagePatient.css'


function Patient() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='patientmaindiv'>
      <div className='patientmainimg'>
        {/* <h1>Image div</h1> */}
      </div>

      <div className='patientloginclass'>
        <div className="patienttextdiv">

          <p>Welcome To UHI</p>

        </div>
        <div className="patientbuttondiv">
          <button className="patientbuttonclass">
            <NavLink
              exact
              to="/Patient/login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Login
            </NavLink>
          </button>
          <button className="patientbuttonclass">
            <NavLink
              exact
              to="/Patient/Signup"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Register
            </NavLink>
          </button>
        </div>
      </div>
    </div >


  )
}

export default Patient