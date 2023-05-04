const router = require("express").Router();
const Message = require("../model/Message");

//add

router.post("/newmessage", async (req,res)=>{
    
    const newmessage = new Message(req.body);

    try{
        const savedmessage= await newmessage.save();
        res.status(200).json(savedmessage);
    }catch(err){
        res.status(400).json(err);
    }

});

// get 

router.get("/newmessage/:conversationId", async (req,res)=>{
    try{
      const messages= await Message.find({
        conversationId:req.params.conversationId,
      });
      res.status(200).json(messages);
    }catch(err){
        res.status(400).json(err);
    }
})

module.exports=router