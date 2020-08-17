const express = require('express')
const router = express.Router();
const Department = require('../../model/departments');


router.get("/departments",function(request,response){
    Department.query().eager('employees').then(
        (data)=>response.json(data),
        ()=>response.json([])
    )
})

router.post("/departments",function(request,response){
     Department.query().insert(request.body).then(
         ()=>response.send({status:"Success"}),
         ()=>response.status(500)
     )
   
})

module.exports = router;