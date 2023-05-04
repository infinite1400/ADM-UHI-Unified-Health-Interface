import React, { useEffect, useState } from "react";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import axios from "axios"
const URL= "http://localhost:3000/newchat/";

const Messages = () => {
   // doctor ki cookie ka name dev
  console.log(read_cookie("dev"));

  const doctormail= read_cookie("dev");
  
  const [Conversation,SetConversation]= useState([]);

  useEffect(()=>{
    const getconversation= async ()=>{
      try{
        const res= await axios.get(URL+doctormail);
        //console.log(res);
        SetConversation(res.data);
       console.log(res)
      }catch(err){
        console.log(err);
      }
    }
    getconversation();
  },[]);



  return (
    <div>
      
    </div>
  )
}

export default Messages
