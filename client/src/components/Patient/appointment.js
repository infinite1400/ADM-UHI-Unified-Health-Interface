import React,{useEffect,useState} from 'react'
import { bake_cookie,read_cookie,delete_cookie } from 'sfcookies'
import { Link, useParams } from "react-router-dom"
// import PatientNavbar2 from './PatientNavbar2'
import axios from 'axios'
// import Profile from './profile'
import Apointment from './appointmentprofile'
const URL= "http://localhost:3001/PatientMain/finddoctor";

function Appointment() {
   
        const [email,setemail]=useState("")
        const id =useParams()
        console.log(id.id)
        const fetchdetails=()=>{
            fetch(`http://localhost:3001/PatientMain/finddoctor/${id}`)
            .then(res=>res.json())
            .then(data=>setemail(data))
        }
        useEffect(()=>{
            fetchdetails();
    
        },[email]);
        
        // const [user,setUser]=useState({
        //     patientemail:"",
        //     doctoremail:""
        // });
        // const handleInputs=(e)=>{
        //     console.log(e);
        //     doctoremail=id.id;
        //     //////
        // }


        const PostData=async(e)=>{
            e.preventDefault();

    const doctoremail=id.id;
    // const patientemail=read_cookie('ashutosh')
    const patientname=read_cookie('harshita')
    const patientnumber=read_cookie('tammana')
        ///////

    const res=await fetch("/docapp",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        doctoremail:doctoremail,patientname:patientname,patientnumber:patientnumber
      })
    });

    const data=await res.json();
    if(res.status===422 || !data){
        window.alert("Invalid");
        console.log("Invalid");
    }
    else{
      window.alert("Registration Successful");
        console.log("Successful Registration");
        // navigate("/Patient/login",{ replace :true});
      // history.push("/login");
    }
        }

        
    //   console.log(id)
  
  return (
    <div>
      <h1>hello i'm in Appointment page.</h1>
      <input type='submit' onClick={PostData}/>
    </div>
  )
}

export default Appointment