var albumRepository = require('../repositories/albumRepository');

var injectData = require('../middleware/injectDataMiddleware');

module.exports = function (app) {

	app.get('/album/:id', function(req, res, next) {
		injectData(albumRepository.getById(req.params.id));
	});

	app.get('/album/:id/cover', function(req, res, next) {
		injectData(albumRepository.getCover(req.params.id));
	});

	app.get('/album/:id/singer', function(req, res, next) {
		injectData(albumRepository.getSinger(req.params.id));
	});

	app.get('/album/:id/genres', function(req, res, next) {
		injectData(albumRepository.getGenres(req.params.id));
	});

	app.get('/album/:id/tracks', function(req, res, next) {
		injectData(albumRepository.getTracks(req.params.id));
	});

	app.get('/album/:id/comments', function(req, res, next) {
		injectData(albumRepository.getComments(req.params.id));
	});

};