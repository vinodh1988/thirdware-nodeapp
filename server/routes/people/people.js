const express = require('express')
const router = express.Router();
const db = require('../../db/connection')

router.post("/add",function(request,response){
    console.log(request.body);
    db('person').insert(request.body).returning("*").then(
        (data)=>response.json(data),
        ()=>response.status(500)
    )
   // response.send("SUCCESS");
})


module.exports =router;