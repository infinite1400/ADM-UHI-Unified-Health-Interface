const express = require("express");
const router = express.Router();
require("../db/conn");
const Doctor = require("../model/doctorSchema");
const Cmo=require('../model/cmoSchema');

router.post("/doctorEdit", async (req, res) => {
  try {
    const { name, email,phone,registration_number,location,qualification,speciality,experience,fees,rating,password} = req.body;
    if (!name|| !email|| !phone|| !registration_number|| !location|| !qualification|| !speciality|| !experience|| !fees|| !rating|| !password) {
      return res.status(400).json({ Error: "Please Enter Details" });
    }
    const userLogin = await Doctor.findOne({ email: email });

    if (userLogin) {
      if (password != userLogin.password) {
        res.status(400).json({ error: "Invalid Credentials!!" });
      }
       
      else {

        const regExist=await Cmo.findOne({cmo_registration_number:registration_number})
        if(!regExist){
            return res.status(400).json({Error:"Enter Valid Registration Number"})
        }
        else{
            userLogin.name = name;
            userLogin.registration_number=registration_number;
            userLogin.location=location;
            userLogin.qualification=qualification;
            userLogin.speciality=speciality;
            userLogin.experience=experience;
            userLogin.fees=fees;
            userLogin.rating=rating;
            userLogin.phone = phone;
    
            await userLogin.save();
            res.json({ message: "Details Updated Successfully" });
            // console.log(req.body);
        }
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;