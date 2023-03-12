const express= require('express')
const router=express.Router();
require('../db/conn');

const Doctor=require('../model/doctorSchema');


router.get('/doctorDisp', async (req,res)=>{
    try{
        const email=req.query.email||"";

        if(!email){
            return res.status(400).json({Error:"Please Enter Details"});
        }
        const userLogin=await Doctor.find({email:{$regex:email,$options:"i"}});  
        if(userLogin){
            return res.status(200).json({userLogin});
        //    console.log(userLogin);
        }
        else{
            return res.status(400).json({error:"Invalid Credentials!!"});
        }     
    }catch(err){
        console.log(err);
    }
});
module.exports=router;