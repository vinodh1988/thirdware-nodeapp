const express = require('express')
const router = express.Router();
const Department = require('../../model/departments');


router.get("/departments",async function(request,response){
   /* Department.query().withGraphFetched('employees').then(
        (data)=>response.json(data),
        ()=>response.json([])
    )*/

    try{
        let data = await Department.query().withGraphFetched('employees'); 
        response.json(data) ;
    }
    catch(e){
        console.log(e);
        response.json([]);
    }
})

router.post("/departments",async function(request,response){
   /*  Department.query().withGraphFetched('employees').insertWithRelated(request.body).then(
         ()=>response.send({status:"Success"}),
         ()=>response.status(500)
     )*/
     try{
         await Department.query().insertWithRelated(request.body)
         response.send({status:"success"})
     }
     catch(e){
         console.log(e);
         response.status(500)
     }
   
})

module.exports = router;