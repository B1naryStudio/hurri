var userRepository = require('../repositories/userRepository');
var isLoggedIn = require('../middleware/isLoggedIn');
var injectData = require('../middleware/injectDataMiddleware');

module.exports = function(app){

	app.get('/charts', isLoggedIn, function(req, res, next) {
		//userRepository.getLike(req.params.id, function(err, data){
			injectData(req, res, {}, false);
		//});
	});


	app.get('/user/:id', isLoggedIn, function(req, res, next) {
	//	userRepository.getUserAuth(req.params.id, function(err, data){
			injectData(req, res, {}, false);
		//});
	});

	app.get('/user/:id/like', isLoggedIn, function(req, res, next) {
		//userRepository.getLike(req.params.id, function(err, data){
			injectData(req, res, {}, false);
		//});
	});

	app.get('/user/:id/listened', isLoggedIn, function(req, res, next) {
		//userRepository.getLike(req.params.id, function(err, data){
			injectData(req, res, {}, false);
		//});
	});

	app.get('/user/:id/groups', isLoggedIn, function(req, res, next) {
		userRepository.getGroups(req.params.id, function(err, data){
			injectData(req, res, {groups: data}, false);
		});
	});

	app.get('/user/:id/playlists', isLoggedIn, function(req, res, next) {
		userRepository.getPlaylists(req.params.id, function(err, data){
			console.log(data.playlists[0]);
			injectData(req, res, {playlists : data.playlists}, false);
		});
	});

	app.get('/user/:id/playlists/:id_pl', isLoggedIn, function(req, res, next) {
		//userRepository.getPlaylistsShare(req.params.id, req.params.id_pl, function(err, data){
			injectData(req, res, {}, false);
		//});
	});

};