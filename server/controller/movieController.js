var restful = require('node-restful');

module.exports = function(app , route) {

	//setup the controller
  var rest = restful.model(
  	'movie',
  	app.models.movie
  	).methods(['get','put' , 'post' , 'delete']);

  //register the endpoints with the application
  rest.register(app, route);

  //Return the middleware
  return function(req,res,next) {
  	next();
  };
};