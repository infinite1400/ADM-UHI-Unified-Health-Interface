const express= require('express')
const router=express.Router();
require('../db/conn');

const User=require('../model/patientSchema');


router.get('/patientDisp', async (req,res)=>{
    try{
        const email=req.query.email||"";

        if(!email){
            return res.status(400).json({Error:"Please Enter Details"});
        }
        const userLogin=await User.find({email:{$regex:email,$options:"i"}});  
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