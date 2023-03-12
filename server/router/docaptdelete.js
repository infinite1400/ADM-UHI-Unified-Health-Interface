const express=require('express')
const router=express.Router();
require('../db/conn');

const Appointment=require('../model/appointmentSchema');
// const Doctor=require('../model/doctorSchema')

router.get('/',(req,res)=>{
    res.send('Hello World from router js')
})

router.post('/docaptdelete', async(req,res)=>{
        const obj=req.body
        console.log(obj)
        const ide=obj.id.toString()

        try {
            const query={_id:ide}
            const result = await Appointment.deleteOne(query);
             if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
            } else {
            console.log("No documents matched the query. Deleted 0 documents.");
            }
            return res.status(201).json({message:"Successfully Deleted"});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error:true,message:"Internal server error"})
        }
            
    });

module.exports=router;