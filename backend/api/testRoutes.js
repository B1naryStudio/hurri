var testRepository = require('../repositories/testRepository');
var apiResponse = require('../middleware/apiResponse');
var run = require('../info_service_wrappers/taskRunner');


module.exports = function(app){

	app.get('/api/populating/run/:start/:end', function(req, res, next){
			run(req.params.start, req.params.end, true);
			res.status(200).json('running....');
	});

	app.get('/api/test/albums', function(req, res, next){
		testRepository.getAlbums(function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/test/artists', function(req, res, next){
		testRepository.getArtists(function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/test/tracks', function(req, res, next){
		testRepository.getTracks(function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
};