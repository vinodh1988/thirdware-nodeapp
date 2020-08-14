const express = require('express')
const router = express.Router();

router.post("/add",function(request,response){
    response.send("SUCCESS");
})


module.exports =router;