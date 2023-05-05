import React, { useEffect, useState } from 'react'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import DoctorProfileAppointment from './DoctorProfile1';
const URL = "https://www.google.com/maps/place/";
const URL1 = "http://localhost:3000/doctorDisp";

function Appointment() {

  const [email, setemail] = useState("")
  const id = useParams()
  console.log(id)
  console.log(id.id)
  const fetchdetails = () => {
    fetch(`http://localhost:3001/PatientMain/finddoctor/${id}`)
      .then(res => res.json())
      .then(data => setemail(data))
  }
  useEffect(() => {
    fetchdetails();

  }, [email]);

  const [obj, setObj] = useState([]);
  const check = id.id
  console.log(check)
  const [email1, setemail1] = useState({ email1: check })
  useEffect(() => {
    const ChecK = async () => {
      try {
        const url = `${URL1}?email=${email1.email1}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(obj.userLogin);
      } catch (err) {
        console.log(err)
      }
    }
    ChecK();
  }, [email1])


  const PostData = async (e) => {
    e.preventDefault();

    const doctoremail=id.id;
    const patientemail=read_cookie('ashutosh')
   // console.log(patientemail)
    const patientname=read_cookie('harshita')
    const patientnumber=read_cookie('tammana')
        ///////

    const res = await fetch("/docapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        patientemail:patientemail,doctoremail:doctoremail,patientname:patientname,patientnumber:patientnumber
      })
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid");
      console.log("Invalid");
    }
    else {
      window.alert("Registration Successful");
      console.log("Successful Registration");
    }
  }


    // console.log((obj.userLogin).map((xx)=>(
    //   console.log(xx.location)
    // )))
  // obj.userLogin.map((murari) => (
  //   (console.log(murari.location))
  //   // (URL+=(murari.location))
  //   ))
  // URl+=obj.userLogin.location
  // console.log(URL+((obj.userLogin).map()))
  // const link1=`http://localhost:3001/PatientMain/finddoctor/${id}/chatbox`;
  return (
    <div>
      <h1>hello i'm in Appointment page.</h1>
      {console.log(obj.userLogin)}
      { <DoctorProfileAppointment userLogin={obj.userLogin}/>}
      <Link to='/PatientMain'>
        <input type='submit' onClick={PostData} />
      </Link>
      {/* <Link to="/chatbox">
        <button>Chatbox</button>
      </Link> */}
    </div>
  )
}

export default Appointment