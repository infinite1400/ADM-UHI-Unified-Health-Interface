const express= require('express')
const router=express.Router();
require('../db/conn');
const datas=require('./data.json');

const Doctor=require('../model/doctorSchema');


router.get('/doctor', async (req,res)=>{
    try {
      const page = parseInt(req.query.page) -1 || 0;
      const limit = parseInt(req.query.limit) || 5;
       let speciality=req.query.speciality||"All";
       const Specialarr=[
        "Gastrologist",
        "Neuro Surgeon",
        "Gynaecologist",
        "Dentist",
        "Sexologist",
        "Dermatologist",
        "Cardiologist"
       ];
       speciality==="All"?(speciality=[...Specialarr]):(speciality=req.query.speciality.split(','));

       let sort=req.query.sort||"rating";
       req.query.sort?(sort=req.query.sort.split(',')):(sort=[sort]);

       let Sortby={};
       if(sort[1]){
         Sortby[sort[0]]=sort[1];
       }
       else{
        Sortby[sort[0]]="asc";
       }
       const search=req.query.search||"";
       const database= await Doctor.find({name:{$regex:search,$options:"i"}})
       .where("speciality")
       .in([...speciality])
       .sort(Sortby)
       .skip(page*limit)
       .limit(limit)

      const total = await Doctor.countDocuments({
        speciality:{$in:[...speciality]},
        name:{$regex :search,$options:"i"},
      })

       const response={
        error:false,
        total,
        page:page+1,
        limit,
        database,
        speciality:Specialarr,
       };

       return res.status(200).json(response);


    } catch (err) {
        console.log(err);
        return res.status(400).json({error:true,message:"Internal server error"})
    }
});
module.exports=router;