import React,{useEffect,useState} from 'react'
import { bake_cookie,read_cookie,delete_cookie } from 'sfcookies'
import { Link } from "react-router-dom"
import PatientNavbar2 from './PatientNavbar2'
import axios from 'axios'
import Profile from './profile'
const URL= "http://localhost:3000/patientDisp";
//console.log(URL);
function Patientprofile() {
    const [obj,setObj]=useState([]);
    const check=read_cookie('ashutosh')
    console.log(check)
    const [email,setemail]=useState({email:check})
    //setemail(read_cookie('ashutosh'));
    console.log(email)
    const display="";

    useEffect(()=>{
        const ProfilePatient= async()=>{
            try{
                const url=`${URL}?email=${email.email}`;
            
                //console.log(url);
                const {data}=await axios.get(url);
                //setObj(data);
                console.log(data)
                //bake_cookie(cookie_key,data);
                //display=read_cookie(cookie_key);
              //  console.log(data)
                setObj(data);
                console.log(data)
            }catch(err){
                console.log(err)
            }
        }
        ProfilePatient();
    },[email])
    return (
        <div>
            {/* <PatientNavbar2/> */}
            {/* <h1>Hello, i'm in Find doctor page.</h1> */}
            <div className='wrapper'>
                <div className='container'>
                <div className='head'>
                </div>
                <div className='body'>
                    <div className='table_container'>
                        {console.log(obj.userLogin)}
                        { <Profile userLogin={obj.userLogin}/> }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Patientprofile
