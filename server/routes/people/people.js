const express = require('express')
const router = express.Router();

router.post("/add",function(request,response){
    console.log(request.body);
    response.send("SUCCESS");
})


module.exports =router;