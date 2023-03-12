import React, { useEffect, useState } from 'react'
import { read_cookie,bake_cookie} from 'sfcookies'
import axios from 'axios'
// import Appointment from '../Patient/appointment'
import AptTable from './AptTable'
const URL='http://localhost:3000/docaptdisp'
const doc=read_cookie('dev')
console.log(doc)
function Appointmenthistory() {
    
    const [lol,setlol]=useState([{}])
    useEffect(()=>{
        const history=async()=>{
            try{
                const url=`${URL}?email=${doc}`
                const {data}=await axios.get(url);
                console.log(data);
                setlol(data)
                console.log(lol)
            }catch(err){
                console.log(err)
            }
        }
        history();
    },[lol])
    

  return (
    <div>
      <h1>I'm in appointment history Page.</h1>
      <div className='container'>
                <div className='head'>
                </div>
                <div className='body'>
                    <div className='table_container'>
                         {console.log(lol)}
                         { <AptTable database={lol}/>}
                    </div>
                </div>
                </div>
    </div>
  )
}

export default Appointmenthistory
