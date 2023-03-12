import React from 'react'
import DoctorNavbar2 from './DoctorNavbar2'
import './DoctorMain.css'
import { Link } from 'react-router-dom'
function DoctorMain() {
  return (
    <div className='maindiv'>
      {/* <h1>Hi, Central DoctorMain page!</h1> */}
      <DoctorNavbar2 />

      <div className='row'>
        <div className='col-md-6'>
          <form className='formPatient'>
          <input type='text' placeholder='name' />
          <input type='Age' placeholder='Age' />
          <input type='email' placeholder='email' />
          <input type='text' placeholder='name' />
          <input type='text' placeholder='name' />
          </form>
        </div>
        <div className='col-md-5'>
          <div className="card1">
            {/* <img src={emoji} alt="" /> */}
            <span>Your Appointments</span>
            <span>See, Your List of Appointments</span>
            <Link to='/DoctorMain/history'><button className="c-button">See</button></Link>
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

export default DoctorMain
