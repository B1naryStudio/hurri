var userRepository = require('../repositories/userRepository');

var injectData = require('../middleware/injectDataMiddleware');

module.exports = function(app){

  app.get('/user/:id', function(res, req, next) {
	  injectData(userRepository.getUserInfo(req.params.id), res);
  });

  app.get('/user/:id/like', function(res, req, next) {
	  injectData(userRepository.getLike(req.params.id), res);

  });

  app.get('/user/:id/groups', function(res, req, next) {
	  injectData(userRepository.getGroups(req.params.id), res);
  });

  app.get('/user/:id/playlists', function(res, req, next) {
	  injectData(userRepository.getPlaylists(req.params.id), res);
  });

  app.get('/user/:id/playlists/:id_pl', function(res, req, next) {
	  injectData(userRepository.getPlaylistsShare(req.params.id_pl), res);
  });

};