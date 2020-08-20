const express = require('express')
const router = express.Router();
const db = require('../../db/connection');
const Department = require('../../model/departments');

router.post("/add",function(request,response){
    console.log(request.body);
    db('person').insert(request.body).returning("*").then(
        (data)=>response.redirect('../home'),
        ()=>response.status(500)
    )
   // response.send("SUCCESS");
})


router.get("/report",function(request,response){
     db('person').select().then(
         (data)=> response.render("people",{people:data}),
         (error)=> {console.log(error);response.json([])}
     )
})

router.get("/",function(request,response){
    let data =[{id:1,name: "Raj", position: "President"},
    {id:2,name: "Ramesh", position: "Chief people officer"},
    {id:3,name: "Gajendran", position: "Chief Executive officer"}]
    response.json({people: data})
})

router.post("/",function(request,response){
    console.log(request.body)
    response.json({"person": {id: Math.round(Math.random()*1000),status : "success"}})
})


module.exports =router;