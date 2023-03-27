const express = require('express');
var fetchuser = require('../middleware/fetchuser');
const axios=require("axios")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const router = express.Router();
router.post("/compile",async(req,res)=>{
    const detail=req.body;
    try {
        console.log(detail)
        // const result = await axios.post("https://api.codex.jaagrav.in", detail);
        const response = await fetch('https://api.codex.jaagrav.in', {method: 'POST', headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }, body: detail});
        const data = await response.json();
        console.log(data);
        // output.current.value = result.data.output;
        res.status(200).json({"result": data})
      } catch (error) {
        console.log(error);
        res.status(400).json({"error": error})
      }
    // console.log(req.body);
    // try {
    //     const User=await Interviewer.findOne({email:req.body.from});

    //     //  console.log(interviewer);
    //      if(!User){
    //         res.status(400).json("User With This Email is Doesn't Exists")
    //      }
    //     const newEmail=new Email({
    //         user:User._id,
    //         sender:req.body.from,
    //         recipient:req.body.to,
    //         body:req.body.message,
    //         subject:req.body.subject,
    //         displayName:req.body.displayName,
    //         createdAt:Date.now()
    //     })
    //      const result=await  newEmail.save()  
    //      await sendEmail({from:req.body.from,to:req.body.to,displayName:req.body.displayName,Subject:req.body.subject,Message:req.body.message})
    //     res.status(201).json({"success":"succefully send"});
    // } catch (error) {
    //     console.log(error);
    //     res.status(400).json({"error":"Error in sending Email"})
    // }  
})


module.exports=router