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
                <div class="landing-org">
                    <div class="org_name">
                        <h1 className='h1'>Unified Health Interface</h1>
                    </div>
                    <div class="org_logo"></div>
                </div>
            </div>
            <div class="features" id="features">

                <div className='container6'>
                    <div class="docpat">
                        <div class="cardlanding">
                            <div class="box">
                                <div class="content">
                                    <Link to='/doctor' ><a class="a" href="#">Doctor</a></Link>
                                </div>
                            </div>
                        </div>
                        <div class="cardlanding">
                            <div class="box">
                                <div class="content">
                                    <Link to='/doctor' ><a class="a" href="#">Pharmacy</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="phar">
                        <div class="cardlanding">
                            <div class="box">
                                <div class="content">
                                    <Link to='/patient' ><a class="a" href="#">Patient</a></Link>
                                </div>
                            </div>
                        </div>
                        <div class="cardlanding">
                            <div class="box">
                                <div class="content">
                                    <Link to='/doctor' ><a class="a" href="#"></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
