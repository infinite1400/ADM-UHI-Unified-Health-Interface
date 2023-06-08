import React from 'react'
import {useEffect,useState} from 'react'
import{Link,useParams} from "react-router-dom"

const URL="http://localhost:3001/DoctorMain/history"
const Chatbox = () => {

    const [email,setemail]=useState("")
    const id=useParams()
    console.log(id.id)
    const fetchdetails=()=>{
        fetch(`http://localhost:3001/DoctorMain/history/${id}`)
        .then(res=>res.json())
        .then(data=>setemail(data))
    }
    useEffect(()=>{
        fetchdetails();
    },[email]);


  return (
    <div>
      helo
    </div>
  )
}

export default Chatbox
