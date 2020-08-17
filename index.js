var handlebars=require('express-handlebars');
const express=require("express");
const app = express();
const path=require('path');
const peopleroutes = require('./server/routes/people/people')
const orgroutes = require('./server/routes/people/org')
const bodyParser = require("body-parser"); //reads request data and decodes it


app.use(express.static(path.join(__dirname,"client/styles")))
app.use(express.static(path.join(__dirname,"client/scripts")))  //configuring paths of static resources
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist")))
app.use(express.static(path.join(__dirname,"node_modules/jquery/dist")))

app.use(bodyParser.urlencoded());  // to parse request with urlencoded data
app.use(bodyParser.json()); //to parser JSON data

  app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/client/templates/layouts')
  }));


  app.set('views', path.join(__dirname, 'client/templates'));
  app.set('view engine', 'handlebars');

app.use('/people',peopleroutes);
app.use('/api',orgroutes);


app.get("/",function(request,response){

    response.send("Node JS server is running...!!!")
})

app.get("/home",function(request,response){
   
    response.sendFile(path.join(__dirname,"client/index.html"));
})

app.listen("4800",function(){
    console.log("Server started with port number 4800")
})

