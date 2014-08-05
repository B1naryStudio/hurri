var UserRepository = require('../repositories/userRepository');

var userRepository = new UserRepository();

var renderHelper = require('./renderHelper');

module.exports = function(app){

  app.get('/user/:id', function(req, res, next){
	  var template = renderHelper({
		  data: {
			  user_auth_id: 1,
			  playlists: [{name: 'for soul',tracks: [1,3,5,8,9,34,45]},{name: 'brain stimulation',tracks: [21,32,67,77]}],
			  liked: [1,5,34,45,32],
			  totalListened: 999,
			  group: [1,2,5]
		  }
	  });
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

  app.get('/user/:id/like', function(req, res, next){
	  var template = renderHelper({
		  data: {
			  liked: [1,5,34,45,32]
		  }
	  });
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

  app.get('/user/:id/groups', function(req, res, next){
	  var template = renderHelper({
		  data: {
			  group: [1,2,5]
		  }
	  });
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

  app.get('/user/:id/playlists', function(req, res, next){
	  var template = renderHelper({
		  data: {
			  playlists: [{name: 'for soul',tracks: [1,3,5,8,9,34,45]},{name: 'brain stimulation',tracks: [21,32,67,77]}]
		  }
	  });
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

  app.get('/user/:id/playlists/:id_pl', function(req, res, next){
	  var template = renderHelper({
		  data: {
			  name: 'for soul',
			  tracks: [1,3,5,8,9,34,45],
			  duration: '25:13',
			  mood: 'good'
		  }
	  });
	  res.set('Content-Type', 'text/html');
	  res.send(template);

  });

};