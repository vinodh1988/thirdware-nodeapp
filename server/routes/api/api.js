const offices =require ("../../mongodb/schemas/offices");
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

module.exports = router;