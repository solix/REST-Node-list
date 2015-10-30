var mongoose = require('mongoose');

//create the Schema

var MovieSchema = new mongoose.Schema({
  
  title: {
  	type: String,
  	required: true
  },
  url: {
  	type: String,
  	required: true
  }
});

//export the model
module.exports = MovieSchema;