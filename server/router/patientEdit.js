const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/patientSchema");

router.post("/patientEdit", async (req, res) => {
  try {
    const { name, email, phone, Age, password} = req.body;
    if (!email || !password || !name || !Age  || !phone) {
      return res.status(400).json({ Error: "Please Enter Details" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      if (password != userLogin.password) {
        res.status(400).json({ error: "Invalid Credentials!!" });
      } else {
        userLogin.name = name;
        userLogin.Age = Age;
        userLogin.phone = phone;

        await userLogin.save();
        res.json({ message: "Details Updated Successfully" });
        // console.log(req.body);
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;