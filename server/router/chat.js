const router = require("express").Router();
const Conversation = require("../model/Conversation");

// new chat

router.post("/newchat",async (req,res)=>{
    const newchat= new Conversation({
        members: [req.body.senderId,req.body.receiverId],
    });
    try{
       const savedchat= await newchat.save();
       res.status(200).json(savedchat);

    }catch(err){
        res.status(400).json(err);
    }
});

// individual chat of a person
router.get("/newchat/:id", async (req,res)=>{
    try{
       const chats =await Conversation.find({
        members:{$in :[req.params.id]}
       });
       res.status(200).json(chats);
    }catch(err){
        res.status(400).json(err);
    }
})

// get chats of 2 person
router.get("/newchat/:firstuserid/:seconduserid",async (req,res)=>{
    try{
       const chats= await Conversation.findOne({
        members :{ $all :[req.params.firstuserid,req.params.seconduserid]},
       });
       res.status(200).json(chats);

    }catch(err){
        res.status(400).json(err);
    }
})

module.exports=router;