const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    registration_number:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    speciality:{
        type:[String],
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    fees:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:false
    },
    password:{
        type: String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})

const Doctor=mongoose.model('DOCTOR',doctorSchema);
module.exports=Doctor;