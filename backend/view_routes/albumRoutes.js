var albumRepository = require('../repositories/albumRepository');

var injectData = require('../middleware/injectDataMiddleware');

module.exports = function (app) {

	app.get('/explorer/albums', function(req, res, next) {
		injectData(req, res, {}, false);
	});

	app.get('/album/:id', function(req, res, next) {
		albumRepository.getById(req.params.id, function(err, data){
			injectData(req, res, data, false);
		}); 
	});

	app.get('/album/:id/cover', function(req, res, next) {
		albumRepository.getCover(req.params.id, function(err, data){
			injectData(req, res, data, false);
		}); 
	});

	app.get('/album/:id/singer', function(req, res, next) {
		albumRepository.getSinger(req.params.id, function(err, data){
			injectData(req, res, data, false);
		}); 
	});

	app.get('/album/:id/genres', function(req, res, next) {
		albumRepository.getGenres(req.params.id, function(err, data){
			injectData(req, res, data, false);
		}); 
	});

	app.get('/album/id/:id', function(req, res, next) {
		albumRepository.getTracks(req.params.id, function(err, data){
			injectData(req, res, {album : data}, false);
		}); 
	});

	app.get('/album/:id/comments', function(req, res, next) {
		albumRepository.getComments(req.params.id, function(err, data){
			injectData(req, res, data, false);
		}); 
	});

};