import React from 'react'
import DoctorNavbar2 from './DoctorNavbar2'
import './DoctorMain.css'
import { Link } from 'react-router-dom'
function DoctorMain() {
  return (
    <div className='maindiv'>
      {/* <h1>Hi, Central DoctorMain page!</h1> */}
      <DoctorNavbar2 />

      <div className='maindiv2'>
        <div className='container70'>
          <div class="card">
            <div class="box">
              <div class="content">
                <h2 class="h2">01</h2>
                <h3 class="h3">Appointment History</h3>
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium tempora reiciendis nam libero ipsa consectetur officia eius odio sint?</p>
                <Link to='/Doctormain/history' ><a class="a" href="#">Find Doctor</a></Link>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <div class="content">
                <h2 class="h2">02</h2>
                <h3 class="h3">Profile</h3>
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium tempora reiciendis nam libero ipsa consectetur officia eius odio sint?</p>
               <Link to='Doctormain/profile'> <a class="a" href="#">Profile</a></Link>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <div class="content">
                <h2 class="h2">03</h2>
                <h3 class="h3">Card Three</h3>
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium tempora reiciendis nam libero ipsa consectetur officia eius odio sint?</p>
                <a class="a" href="#">Find Doctor</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorMain
