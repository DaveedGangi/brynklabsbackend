const express=require("express");

const router=express.Router();

const Heading = require("../models/Heading")

//Post heading  save heaing and replace previous one

router.post("/api/heading",async(req,res)=>{
    try{
        await Heading.deleteMany(); // keep only one thing
        const heading=new Heading({text:req.body.text});
        heading.save();
        res.status(200).json({message:"Heading Saved"})
    }
    catch(err){
        res.status(500).json({error:"Failed to save heading"})
    }
})

// Retrieve the latest heading

router.get("/api/heading",async(req,res)=>{
    try{
        const heading=await Heading.findOne().sort({createdAt:-1});
        res.status(200).json({text:heading?.text || ""})
    }
    catch(err){
        res.status(500).json({error:"Failed to retrieve heading"})
    }
})


module.exports=router;