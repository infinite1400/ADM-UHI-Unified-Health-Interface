import React, { useEffect, useState } from 'react'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
import { Link } from "react-router-dom"
import axios from 'axios'
const URL = "http://localhost:3000/doctorDisp";
function DoctorProfile() {
    const [obj, setObj] = useState([]);
    const check = 'par@gmail.com'
    console.log(check)
    const [email, setemail] = useState({ email: check })
    useEffect(() => {
        const ChecK = async () => {
            try {
                const url = `${URL}?email=${email.email}`;
                const { data } = await axios.get(url);
                setObj(data);
                console.log(obj.userLogin);
            } catch (err) {
                console.log(err)
            }
        }
        ChecK();
    }, [email])
    return (
        <div>
            <div className='wrapper'>
                <div className='container'>
                    <div className='head'>
                    </div>
                    <div className='body'>
                        <div className='table_container'>
                            {console.log(obj.userLogin)}
                            {obj.userLogin.map((murari)=>(
                                ( console.log(murari.location) )
                            ))}
                            {console.log("hello")}
                            <h1>check</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile
