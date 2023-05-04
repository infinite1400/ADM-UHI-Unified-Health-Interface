const mongoose=require('mongoose');
const appointmentSchema=new mongoose.Schema({
    patientemail:{
       type:String,
       required:true,
    },
    patientname:{
        type:String,
        required:true
    },
    patientnumber:{
        type:String,
        required:true
    },
    doctoremail:{
        type:String,
        required:true
    }
})

const Appointment=mongoose.model('APPOINTMENT',appointmentSchema);
module.exports=Appointment;