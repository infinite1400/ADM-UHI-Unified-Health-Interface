import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './doctorcentralpage.css'

function Doctor() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='doctormaindiv'>
      <div className='doctormainimg'>
        {/* <h1>Image div</h1> */}
      </div>

      <div className='doctorloginclass'>
        <div className="doctortextdiv">

          <p>Welcome To UHI</p>

        </div>
        <div className="doctorbuttondiv">
          <button className="doctorbuttonclass">
          <NavLink
                exact
                to="/Doctor/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
          </button>
          <button className="doctorbuttonclass">
          <NavLink
                exact
                to="/Doctor/Signup"
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

export default Doctor
