import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import axios from 'axios';
import './chatbox.css';
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

  useEffect(() => {
    const getconversation = async () => {
      try {
        const res = await axios.get(URL1 + doctormail);
        Setobject(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }{}
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
  
  return (
    <>
    {currentmessage.map((own)=>(
      <div className={own.sender ? 'message own' : 'message'}>
      <div className="messageTop">
        <img className="messageImg" alt="pics" />
        <p className="messageText">{own.text}</p>
      </div>
      <div className="messageBottom">{format(own.createdAt)}</div>
    </div>
    ))}
    {/* <div className={own.sender ? 'message own' : 'message'}>
      <div className="messageTop">
        <img className="messageImg" alt="pics" />
        <p className="messageText">{own.text}</p>
      </div>
      <div className="messageBottom">{format(own.createdAt)}</div>
    </div> */}
    </>
  );
};

export default Chatbox;
