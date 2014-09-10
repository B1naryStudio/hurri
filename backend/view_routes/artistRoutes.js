var artistRepository = require('../repositories/artistRepository');
var isLoggedIn = require('../middleware/isLoggedIn');
var injectData = require('../middleware/injectDataMiddleware');

module.exports = function (app) {

	app.get('/artist/id/:id', function(req, res, next){
		artistRepository.getById(req.params.id, function(err, data){
			injectData(req, res, {}, false);
		});
	});

	app.get('/artist/id/:id/albums', isLoggedIn, function(req, res, next){
		artistRepository.getArtistAlbums(req.params.id, function(err, data){
			injectData(req, res, {artist:data}, false);
		});
	});

	app.get('/artist/:name', function(req, res, next){
		artistRepository.getByName(req.params.name, function(err, data){
			injectData(req, res, {}, false);
		});
	});


};