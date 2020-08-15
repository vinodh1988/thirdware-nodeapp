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

router.get("/departments",function(request,response){
     Department.query().eager('employees').then(
         (data)=>response.json(data),
         ()=>response.json([])
     )
})



module.exports =router;