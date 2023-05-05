import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import axios from 'axios';
import './chatbox.css';
import { useRef } from 'react';
import { format } from 'timeago.js';
const URL = 'http://localhost:3001/DoctorMain/history';
const URL1 = 'http://localhost:3000/newchat/';
const URL2 = 'http://localhost:3000/newmessage/';

const Chatbox = () => {
  const docemail = read_cookie('dev');
  const [email, setemail] = useState('');
  const [currentmsg, setcurrentmsg] = useState(null);
  const { id } = useParams();
  const patientemail = id;
  console.log(patientemail);

  const fetchdetails = () => {
    fetch(`http://localhost:3001/DoctorMain/history/${id}`)
      .then((res) => res.json())
      .then((data) => setemail(data));
  };

  useEffect(() => {
    fetchdetails();
  }, [email]);

  const doctormail = read_cookie('dev');
  console.log(doctormail);

  const [object, Setobject] = useState([]);

  const [currentmessage, Setcurrentmessage] = useState([{}]);

  const [message,newmessage]= useState([]);

  useEffect(() => {
    const getconversation = async () => {
      try {
        const res = await axios.get(URL1 + doctormail);
        Setobject(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getconversation();
  }, [doctormail]);

  var conversationId = null;
  for (var j = 0; j < object.length; j++) {
    const arr = object[j].members;
    if (arr[0] === docemail && arr[1] === patientemail) {
      conversationId = object[j]._id;
    }
  }
  console.log(conversationId);

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

  const sendmessage= async (e)=>{
      // console.log(e)
      e.preventDefault()
      const body={
        sender:doctormail,
        receiver:patientemail,
        conversationId:conversationId,
        text:message
      }

      try {
       const res= await axios.post(URL2,body)
       console.log(res)
       Setcurrentmessage([...currentmessage,res.data]);
      } catch (error) {
        console.log(error)
      }
      newmessage("")
  }
  const chatboxRef = useRef();

  

  useEffect(() => {
      // console.log("hello world")
    chatboxRef.current.scrollIntoView();
  });


  return (
    <>
    {/* {window.scrollTo(0, document.body.scrollHeight)} */}
    {currentmessage.map((own)=>(
      <div className={own.sender ? 'message own' : 'message'}>
      <div className="messageTop">
        <img className="messageImg" alt="pics" />
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


  </>
    
  );
};

export default Chatbox;
