import React from 'react'
import PatientNavbar2 from './PatientNavbar2'
import './patientmainpager.css'
import { Link } from 'react-router-dom'
function PatientMain() {
  return (
    <div className='maindiv'>
      {/* <h1>Hi, Central PatientMain page!</h1> */}
      <PatientNavbar2 />

      <div className='row'>
        <div className='col-md-5'>
          <div className="card1">
            {/* <img src={emoji} alt="" /> */}
            <span>Find Doctor</span>
            <span>Here,You can find doctor nearby your place</span>
            <Link to='/PatientMain/finddoctor' ><button className="c-button">FIND</button></Link>
          </div>

          <div className="cards">
            {/* <img src={emoji} alt="" /> */}
            <span>Appointments</span>
            <span>Previous History</span>
            <button className="c-button">SEE</button>
          </div>

          <div className="cards">
            {/* <img src={emoji} alt="" /> */}
            <span>Profile</span>
            <span>hii</span>
            <button className="c-button">Profile</button>
          </div>
        </div></div>
    </div>
  )
}

export default PatientMain
