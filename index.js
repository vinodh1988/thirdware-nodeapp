const fs = require('fs');
const obj = require('./server/second')
const express=require("express");
const app = express();
const path=require('path');
const peopleroutes = require('./server/routes/people/people')
const bodyParser = require("body-parser"); //reads request data and decodes it


app.use(express.static(path.join(__dirname,"client/styles")))
app.use(express.static(path.join(__dirname,"client/scripts")))  //configuring paths of static resources
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist")))
app.use(express.static(path.join(__dirname,"node_modules/jquery/dist")))

app.use(bodyParser.urlencoded());  // to parse request with urlencoded data

app.use('/people',peopleroutes);


app.get("/",function(request,response){

    response.send("Node JS server is running...!!!")
})

app.get("/home",function(request,response){
   
    response.sendFile(path.join(__dirname,"client/index.html"));
})

app.listen("4800",function(){
    console.log("Server started with port number 4800")
})

