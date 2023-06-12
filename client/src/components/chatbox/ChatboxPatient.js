import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import axios from 'axios';
import './chatbox.css';
import { useRef } from 'react';
import { format } from 'timeago.js';
import io from "socket.io-client";
const endpoint="http://localhost:3000";
var socket;
const URL = 'http://localhost:3001/PatientMain/finddoctor/chat';
const URL1 = 'http://localhost:3000/newchat/';
const URL2 = 'http://localhost:3000/newmessage/';

function ChatboxPatient() {
  const patientemail = read_cookie('ashutosh');
  const [email, setemail] = useState('');
  const [currentmsg, setcurrentmsg] = useState(null);
  const { id } = useParams();
  const doctoremail = id;
  // const fetchdetails = () => {
  //   fetch(`http://localhost:3001/DoctorMain/history/${id}`)
  //   .then((res) => res.json())
  //   .then((data) => setemail(data));
  // };
  
  // useEffect(() => {
  //   fetchdetails();
  // }, [email]);
  
console.log(patientemail);
console.log(doctoremail)

  const [object, Setobject] = useState([]);

  const [currentmessage, Setcurrentmessage] = useState([{}]);

  const [message,newmessage]= useState([]);

   const [userconnected,setuserconnected]=useState(false)

  useEffect(() => {
    const getconversation = async () => {
      try {
        const res = await axios.get(URL1 + patientemail);
        Setobject(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getconversation();
  }, []);

  var conversationId = null;
  for (var j = 0; j < object.length; j++) {
    const arr = object[j].members;
    if (arr[0] === patientemail && arr[1] === doctoremail) {
      conversationId = object[j]._id;
    }
  }
  console.log(conversationId);

  
  useEffect(()=>{
    socket=io(endpoint);
    socket.emit("setup",conversationId)
    socket. on("connection",()=>setuserconnected(true))
 })
 
  
  useEffect(() => {
    const getmessages = async () => {
      try {
        const res = await axios.get(URL2 + conversationId);
        console.log(res);
        Setcurrentmessage(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (conversationId) {
      getmessages();
    }
  }, [conversationId]);

  // console.log(currentmessage[0]);

  // const own = currentmessage[0];
  // console.log(own);

  useEffect(()=>{
    socket.on("messagerecieved",(newmessage)=>{
      Setcurrentmessage([...currentmessage,newmessage])
    })
  })

  const sendmessage= async (e)=>{
      // console.log(e)
      e.preventDefault()
      if(conversationId === null){
        const body={
          senderId:patientemail,
          receiverId:doctoremail
        }
        try {
          const res= await axios.post(URL1,body)
          console.log(res)
        } catch (error) {
          console.log(error)
        }
    
      }
      const body={
        sender:patientemail,
        receiver:doctoremail,
        conversationId:conversationId,
        text:message
      }
      
      if(body.text!=""){
        try {
          const res= await axios.post(URL2,body)
          console.log(res)
          Setcurrentmessage([...currentmessage,res.data]);
          socket.emit("newmessage",res.data)
        } catch (error) {
          console.log(error)
        }
        newmessage("")
      }
  }
  const chatboxRef = useRef();

  

  useEffect(() => {
      // console.log("hello world")
    chatboxRef.current.scrollIntoView();
  });

  return (
    <>
    <div className="chatboxmaindiv">
    {/* {window.scrollTo(0, document.body.scrollHeight)} */}
    {currentmessage.map((own)=>(
      <div className={(own.sender==patientemail) ? 'message own' : 'message'}>
      <div className="messageTop">
        {/* <img className="messageImg" alt="pics" /> */}
        <p className="messageText">{own.text}</p>
      </div>
      <div className="messageBottom">{format(own.createdAt)}</div>
    </div>
    ))}
    
   <div>

      {/* <input type="text" name="chats" id="chats" ></input> */}
      <div className='chatboxtextarea' ref={chatboxRef}>
      <textarea  name="chats" id="chats" rows="4" columns="50"
      onChange={(e)=>newmessage(e.target.value)}
      value={message}></textarea>
      <button className='buttonsend' type="button" name="sendchats" id="sendchats"
      onClick={sendmessage}>Send</button>
      </div>
   </div>

   </div>
  </>
    
  );
}

export default ChatboxPatient
