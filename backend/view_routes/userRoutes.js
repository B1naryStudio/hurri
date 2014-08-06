var UserRepository = require('../repositories/userRepository');

var userRepository = new UserRepository();

var renderHelper = require('./renderHelper');

module.exports = function(app){

  app.get('/user/:id', function(req, res, next){
	  var template = renderHelper({data: {some: 'data'}});
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

  app.get('/user/:id/like', function(req, res, next){
	  var template = renderHelper({data: {some: 'data'}});
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

  app.get('/user/:id/groups', function(req, res, next){
	  var template = renderHelper({data: {some: 'data'}});
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

  app.get('/user/:id/playlists', function(req, res, next){
	  var template = renderHelper({data: {some: 'data'}});
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

  app.get('/user/:id/playlists/:id_pl', function(req, res, next){
	  var template = renderHelper({data: {some: 'data'}});
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

};