const mongoose=require('mongoose');
const appointmentSchema=new mongoose.Schema({
    patientname:{
        type:String,
        required:true
    },
    patientnumber:{
        type:Number,
        required:true
    },
    doctoremail:{
        type:String,
        required:true
    }
})

const Appointment=mongoose.model('APPOINTMENT',appointmentSchema);
module.exports=Appointment;