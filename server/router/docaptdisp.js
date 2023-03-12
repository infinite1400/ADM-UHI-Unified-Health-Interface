const express= require('express')
const router=express.Router();
require('../db/conn');
const datas=require('./data.json');

const Appointment=require('../model/appointmentSchema');


router.get('/docaptdisp', async (req,res)=>{
    try {

       let email=req.query.email||"";
      
       const database= await Appointment.find({doctoremail:{$regex:email,$options:"i"}})
    //    console.log(database);
        
       return res.status(200).json(database);


    } catch (err) {
        console.log(err);
        return res.status(400).json({error:true,message:"Internal server error"})
    }
});
module.exports=router;