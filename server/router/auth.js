const express=require('express')
const router=express.Router();
require('../db/conn');
const User=require('../model/patientSchema');
const Doctor=require('../model/doctorSchema');

router.get('/',(req,res)=>{
    res.send('Hello World from router js')
})

//FOR GETTING DATA FROM USER ENTRIES

//USING PROMISES

// router.post('/register', (req,res)=>{


//     const {name,email,phone,Age,password,cpassword}=req.body;
//     if(!name || !email || !phone || !Age || !password || !cpassword){
//         return res.status(422).json({Error:"Please Fill the fields properly"})
//     }

//     //Datbase me entry aur validation
//     //left side me db wala email and rhs mein user wala email
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({Error:"Email already exist!!"})
//     }
//     const user=new User({name,email,phone,Age,password,cpassword});

//     user.save().then(()=>{
//         res.status(201).json({message:"User registered Successfully"
//     }).catch((err)=>res.status(500).json({error:"Failed to register"}))})

//     }).catch(err =>{console.log(err);});

// })

//USING ASYNC

router.post('/register', async(req,res)=>{


        const {name,email,phone,Age,password,cpassword}=req.body;
        if(!name || !email || !phone || !Age || !password || !cpassword){
            return res.status(422).json({Error:"Please Fill the fields properly"})
        }
    
       try{

        const userExist=await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({Error:"Email already exist!!"})
        }
        else if(password!=cpassword){
            return res.status(422).json({Error:"Password are not matching"})
        }
        else{
            const user=new User({name,email,phone,Age,password,cpassword});

            //  yha password ki hashing wali call ho rhi hh
            //pre to save
    
            await user.save();
    
             res.status(201).json({message:"User registered Successfully"});
        }
       }catch(err){
        console.log(err);
       }

    })

//LOGIN KA ROUTE SET KR RHE AHH AB
//NO EMPTY FIELDS
//EMAIL MUST BE IN DATABASE
// PASSWORD SHOULD BE MATCHED

router.post('/signin',async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({Error:"Please Enter Details"});
        }
        const userLogin=await User.findOne({email:email});  
        if(userLogin){
            if(password!=userLogin.password){
                res.status(400).json({error:"Invalid Credentials!!"});
            }
            else{
                res.json(userLogin);
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