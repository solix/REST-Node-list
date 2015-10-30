var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//create application
var app = express();

//add middleware necessary for REST api
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS Support

app.use(function(req,res,next){
  res.header('Acces-Control-Allow-Origin' , '*');
  res.header('Acces-Control-Allow-Methods' , 'GET,PUT,POST,DELETE');
  res.header('Acces-Control-Allow-Headers' , 'Content-Type');
  next();
});


//connecting mongodb and starting server at port 3000
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open' , function(){
   
   //load the models
   app.models = require('./models/index');
   
   //load the routes files
   var routes = require('./routes');
   _.each(routes, function(controller, route){

   	app.use(route, controller(app, route));

   });

   console.log("listening to port 3000");
   app.listen(3000);
});