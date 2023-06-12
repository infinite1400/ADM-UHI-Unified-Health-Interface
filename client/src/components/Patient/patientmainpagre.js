import React from 'react'
import PatientNavbar2 from './PatientNavbar2'
import './patientmainpager.css'
import { Link } from 'react-router-dom'
{/* <Link to='/PatientMain/finddoctor' ><button className="c-button">FIND</button></Link> */ }
function PatientMain() {
  return (
    <div className='maindiv'>
      {/* <h1>Hi, Central PatientMain page!</h1> */}
      <PatientNavbar2 />
      <div className='maindiv1'>
        <div className='container69'>
          <div class="card">
            <div class="box">
              <div class="content">
                <h2 class="h2">01</h2>
                <h3 class="h3">Find Doctor</h3>
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium tempora reiciendis nam libero ipsa consectetur officia eius odio sint?</p>
                <Link to='/PatientMain/finddoctor' ><a class="a" href="#">Find Doctor</a></Link>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <div class="content">
                <h2 class="h2">02</h2>
                <h3 class="h3">Card Two</h3>
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium tempora reiciendis nam libero ipsa consectetur officia eius odio sint?</p>
                <a class="a" href="#">Read More</a>
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

export default PatientMain