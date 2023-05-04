import React from 'react'
import {useEffect,useState} from 'react'
import{Link,useParams} from "react-router-dom"
import { read_cookie,delete_cookie } from 'sfcookies'
import axios from 'axios'
const URL="http://localhost:3001/DoctorMain/history"
const URL1= "http://localhost:3000/newchat/";
const URL2="http://localhost:3000/newmessage/"
const Chatbox = () => {
    const docemail=read_cookie('dev');
    const [email,setemail]=useState("")
    const [currentmsg,setcurrentmsg]=useState(null);
    const id=useParams()
    const patientemail=id.id;
    console.log(patientemail);
    const fetchdetails=()=>{
      fetch(`http://localhost:3001/DoctorMain/history/${id}`)
      .then(res=>res.json())
        .then(data=>setemail(data))
      }
      useEffect(()=>{
        fetchdetails();
      },[email]);
   const doctormail= read_cookie("dev");
  
  const [object,Setobject]= useState([]);

  const [currentmessage,Setcurrentmessage]=useState(null);
  // this is branch
  useEffect(()=>{
    const getconversation= async ()=>{
      try{
        const res= await axios.get(URL1+doctormail);
        //console.log(res);
        Setobject(res.data);
       console.log(res)
      }catch(err){
        console.log(err);
      }
    }
    getconversation();
  },[]);

        //searching in object
        var conversationId=null 
        for(var j=0;j<object.length;j++){
          const arr=object[j].members;
          if(arr[0]===docemail && arr[1]===patientemail){
            conversationId=object[j]._id;
          }
        }
      // ye message fetch ke liye hh conversationid ke basis pe
   useEffect(()=>{
     const getmessages=async ()=>{
        try{
          const res= await axios.get(URL2+conversationId);
          console.log(res)
        }catch(err){
          console.log(err);
        }
     }
     getmessages();
   })






  return (
    <div>
      helo
    </div>
  )
}

export default Chatbox
