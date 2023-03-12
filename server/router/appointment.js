const express=require('express')
const router=express.Router();
require('../db/conn');

const Appointment=require('../model/appointmentSchema');
const Doctor=require('../model/doctorSchema')

router.get('/',(req,res)=>{
    res.send('Hello World from router js')
})

router.post('/docapp', async(req,res)=>{

        const {patientname,patientnumber,doctoremail}=req.body;
        if(!patientname || !doctoremail || !patientnumber){
            return res.status(422).json({Error:"Please Fill the fields properly"});
        }
      
            const app=new Appointment({patientname,patientnumber,doctoremail});
            await app.save();
            res.status(201).json({message:"Appointment Booked Successfully"});
            
    });

module.exports=router;