var albumRepository = require('../repositories/albumRepository');
var apiResponse = require('../middleware/apiResponse');

module.exports = function(app){
	app.get('/api/album/:name', function(req, res, next){
		albumRepository.getByTitle(req.params.name, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/search/full/albums/:name', function(req, res, next){
		albumRepository.getByTitle(req.params.name, 100, '', function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/album/id/:id', function(req, res, next){
		albumRepository.getById(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/explorer/albums/:genre', function(req, res, next){
		console.log(decodeURIComponent(req.params.genre));
		albumRepository.getAll(decodeURIComponent(req.params.genre), function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/album/:id/cover', function(req, res, next){
		albumRepository.getCover(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/album/:id/singer', function(req, res, next){
		albumRepository.getSinger(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/album/:id/genres', function(req, res, next){
		albumRepository.getGenres(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/album/:id/tracks', function(req, res, next){
		albumRepository.getTracks(req.params.id, function(err, data){
			res.err = err;
			res.data = data.tracks;
			next();
		});
	}, apiResponse);

	app.get('/api/album/:id/comments', function(req, res, next){
		albumRepository.getComments(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/api/album/:id/comments', function(req, res, next){
		albumRepository.addComments(req.params.id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.post('/api/album', function(req, res, next){
		albumRepository.add(req.body, function(err, data){
			res.successStatus = 201;
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.delete('/api/album/:id', function(req, res, next){
		albumRepository.delete(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
};