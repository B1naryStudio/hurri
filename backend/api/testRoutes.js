var testRepository = require('../repositories/testRepository');
var _ = require('underscore');
var run = require('../info_service_wrappers/taskRunner');


module.exports = function(app){

	app.get('/api/test/albums', function(req, res, next){
		testRepository.getAlbums(function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/test/artists', function(req, res, next){
		testRepository.getArtists(function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/test/tracks', function(req, res, next){
		testRepository.getTracks(function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});
};