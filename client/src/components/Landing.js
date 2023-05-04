import React from 'react'
import './Landing.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Vector2 from "../img/Vector2.png";
function Landing() {

    return (
        <div className='maindivlanding'>
            <div class="landing">
                <div class="landing-content-email">
                    <h1 className='h1'>Unified Health Interface</h1>
                    <p>Unified Health Interface is a organisation.</p>
                </div>
                <div class="landing-content-image">
                    <div class="loader-container">
                        <div class="loader">
                            <img src="https://i.imgur.com/BbQQdiRr.png" alt="Lifeline" />
                            <div class="slide-box">
                                <div class="solid"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="features" id="features">
                {/* <div class="features-content premium">
                        <div>
                            <h2 class="icon-title"><Link class='navlink' to="/Doctor">Doctor</Link></h2>
                        </div>
                    </div>
                    <div class="features-content shipping">
                        <div>
                            <h2 class="icon-title"><Link class='navlink' to="/Patient">Patient</Link></h2>
                        </div>
                    </div> */}
                <div className='container6'>
                    <div class="card">
                        <div class="box">
                            <div class="content">
                                <h2 class="h2">01</h2>
                                <h3 class="h3">Doctor</h3>
                                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium tempora reiciendis nam libero ipsa consectetur officia eius odio sint?</p>
                                <Link to='/doctor' ><a class="a" href="#">Doctor</a></Link>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <div class="content">
                                <h2 class="h2">02</h2>
                                <h3 class="h3">Patient</h3>
                                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium tempora reiciendis nam libero ipsa consectetur officia eius odio sint?</p>
                                {/* <a class="a" href="#">Read More</a> */}
                                <Link to='/patient' ><a class="a" href="#">Patient</a></Link>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
        </div>
    )
}

export default Landing
