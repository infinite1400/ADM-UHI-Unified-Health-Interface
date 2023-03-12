const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const patientSchema=new mongoose.Schema({
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
    Age:{
        type:Number,
        required:true
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



//WE ARE HASHING PASSWORD
// patientSchema.pre('save',async function(next){
//     console.log('chal rha hu mai bhai');
//     if(this.isModified('password')){
//         this.password=bcrypt.hash(this.password, 12);
//         this.cpassword=bcrypt.hash(this.cpassword, 12);
//     }
//     next();
// });

const User=mongoose.model('PATIENT',patientSchema);
module.exports=User;
