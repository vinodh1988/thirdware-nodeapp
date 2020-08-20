const offices =require ("../../mongodb/schemas/offices");
const people =require ("../../mongodb/schemas/people");
const express = require('express')
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
           response.json(data);
    })
})




module.exports = router;