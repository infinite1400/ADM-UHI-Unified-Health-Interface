import React from 'react'
import './Landing.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
function Landing() {
    return (
        <div className='maindiv'>
            {/* <>
                <Routes>
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </> */}
            <div className='maindiv1'>
                <div className='maindiv2'>
                    <div className='maindiv3'>
                        <div className='docpa'>
                            <button type='text' id='btn1' ><Link class='navlink' to="/Doctor">Doctor</Link></button>
                            <button type='text' id='btn2' ><Link class='navlink' to="/Patient">Patient</Link></button>
                        </div>
                        <div className='pharhea'>
                            <button type='text' id='btn3' ><Link class='navlink' to="/contact">Pharmacy</Link></button>
                            <button type='text' id='btn4' ><Link class='navlink' to="/about">Blogs</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
