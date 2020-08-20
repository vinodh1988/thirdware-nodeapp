const offices =require ("../../mongodb/schemas/offices");
const people =require ("../../mongodb/schemas/people");
const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

router.get("/offices",(request,response)=>{
    offices.find({},{_id:0},(error,data)=>{
        if(error)
           response.status(500);
        else
           response.json(data);
    })
})

router.get("/people",(request,response)=>{
    people.find({},{_id:0},(error,data)=>{
        
        if(error)
           response.status(500);
        else
           response.json({"people": data});
    })
})

router.post("/people",(request,response)=>{
    people.aggregate([{$group: {_id:"max",max:{$max:"$id"}}}],function(err,data){
        
       let id=data[0].max+1;
       let obj ={...request.body.person,id: id};
       console.log(obj);
       people.insertMany(obj,(error,data)=>{
        
        if(error)
           response.status(500);
        else
           response.json( {"person": {id:id}});
    })
})
})






module.exports = router;