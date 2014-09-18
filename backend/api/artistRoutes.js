var artistRepository = require('../repositories/artistRepository');
var apiResponse = require('../middleware/apiResponse');

module.exports = function(app){
	app.get('/api/artist/id/:id', function(req, res, next){
		artistRepository.getById(req.params.id, function(err, data){
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.get('/api/explorer/artists/:genre', function(req, res, next){
		artistRepository.getAll(decodeURIComponent(req.params.genre), function(err, data){
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.get('/api/artist/id/:id/albums', function(req, res, next){
		artistRepository.getArtistAlbums(req.params.id, function(err, data){
			console.log(err, data);
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.get('/api/artist/:name', function(req, res, next){
		artistRepository.getByName(req.params.name, function(err, data){
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.get('/api/search/full/artists/:name', function(req, res, next){
		artistRepository.getByName(req.params.name, 50, '', function(err, data){
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.post('/api/artist/', function(req, res){
		artistRepository.add(req.body, function(err, data){
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.put('/api/artist/:id', function(req, res, next){
		artistRepository.update(req.params.id, req.body, function(err, data){
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.delete('/api/artist/:id', function(req, res, next){
		artistRepository.delete(req.params.id, function(err, data){
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

}; 