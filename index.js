const fs = require('fs');
const obj = require('./server/second')
const express=require("express");
const app = express();


app.get("/",function(request,response){

    response.send("Node JS server is running...!!!")
})

app.listen("4800",function(){
    console.log("Server started with port number 4800")
})
