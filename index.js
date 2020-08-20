var handlebars=require('express-handlebars');
const express=require("express");
const app = express();
const path=require('path');

const peopleroutes = require('./server/routes/people/people')
const orgroutes = require('./server/routes/people/org')
const apiroutes = require('./server/routes/api/api')

const bodyParser = require("body-parser"); //reads request data and decodes it
var cors = require('cors')

var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/thirdware');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongo db connection is open");
});


app.use(cors())


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
app.use('/objective-api',orgroutes);
app.use('/api',apiroutes)


app.get("/",function(request,response){

    response.send("Node JS server is running...!!!")
})

app.get("/home",function(request,response){
   
    response.sendFile(path.join(__dirname,"client/index.html"));
})

app.get("/images/:imagename",function(request,response) {

    console.log(request.params.imagename)
    response.sendFile(path.join(__dirname,"static-files/images/"+request.params.imagename))
});

app.listen("4800",function(){
    console.log("Server started with port number 4800")
})

