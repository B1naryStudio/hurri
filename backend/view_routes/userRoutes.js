var userRepository = require('../repositories/userRepository');

var injectData = require('../middleware/injectDataMiddleware');

module.exports = function(app){

	app.get('/user/:id', function(req, res, next) {
		injectData(userRepository.getUserAuth(req.params.id), res);
	});

	app.get('/user/:id/like', function(req, res, next) {
		injectData(userRepository.getLike(req.params.id), res);
	});

	app.get('/user/:id/groups', function(req, res, next) {
		injectData(userRepository.getGroups(req.params.id), res);
	});

	app.get('/user/:id/playlists', function(req, res, next) {
		injectData(userRepository.getPlaylists(req.params.id), res);
	});

	app.get('/user/:id/playlists/:id_pl', function(req, res, next) {
		injectData(userRepository.getPlaylistsShare(req.params.id, req.params.id_pl), res);
	});

};