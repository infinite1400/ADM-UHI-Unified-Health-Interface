const express=require('express')
const router=express.Router();
require('../db/conn');
const datas=require('./data.json');

const Doctor=require('../model/doctorSchema');

router.get('/',(req,res)=>{
    res.send('Hello World from router js')
})

router.post('/registerDoc', async(req,res)=>{


    const {name,email,phone,registration_number,location,qualification,speciality,experience,fees,rating,password,cpassword}=req.body;
    if(!name|| !email|| !phone|| !registration_number|| !location|| !qualification|| !speciality|| !experience|| !fees|| !password|| !cpassword){
        return res.status(422).json({Error:"Please Fill the fields properly"})
    }

   try{

    const docExist=await Doctor.findOne({email:email})
    const regindoc=await Doctor.findOne({registration_number:registration_number})
    if(docExist){
        return res.status(422).json({Error:"Email already exist!!"})
    }
    else if(regindoc){
        return res.status(422).json({Error:"Enter Valid Registration Number"})
    }
    else if(password!=cpassword){
        return res.status(422).json({Error:"Password are not matching"})
    }
    else{
        const doctor=new Doctor({name,email,phone,registration_number,location,qualification,speciality,experience,fees,rating,password,cpassword});

        //  yha password ki hashing wali call ho rhi hh
        //pre to save

        await doctor.save();

         res.status(201).json({message:"Registered Successfully"});
    }
   }catch(err){
    console.log(err);
   }

})

router.post('/signinDoc',async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({Error:"Please Enter Details"});
        }
        const docLogin=await Doctor.findOne({email:email});  
        if(docLogin){
            if(password!=docLogin.password){
                res.status(400).json({error:"Invalid Credentials!!"});
            }
            else{
                res.json(docLogin);
                // console.log(req.body);
            }
        }
        else{
            res.status(400).json({error:"Invalid Credentials!!"});
        }     
    }catch(err){
        console.log(err);
    }
});

router.post('/signinDoc',async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({Error:"Please Enter Details"});
        }
        const userLogin=await Doctor.findOne({email:email});  
        if(userLogin){
            if(password!=userLogin.password){
                res.status(400).json({error:"Invalid Credentials!!"});
            }
            else{
                res.json({message:"User SignedIn Successfully"});
                // console.log(req.body);
            }
        }
        else{
            res.status(400).json({error:"Invalid Credentials!!"});
        }     
    }catch(err){
        console.log(err);
    }
});



module.exports=router;