const mongoose=require('mongoose');
const cmoSchema=new mongoose.Schema({
    cmo_registration_number:{
        type:String,
        required:true
    }
})

const Cmo=mongoose.model('CMO',cmoSchema);
module.exports=Cmo;