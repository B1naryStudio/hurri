var albumRepository = require('../repositories/albumRepository');
var _ = require('underscore');

module.exports = function(app){
	app.get('/api/album/:name', function(req, res, next){
		albumRepository.getByTitle(req.params.name, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/album/id/:id', function(req, res, next){
		albumRepository.getById(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/album/:id/cover', function(req, res, next){
		albumRepository.getCover(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/album/:id/singer', function(req, res, next){
		albumRepository.getSinger(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/album/:id/genres', function(req, res, next){
		albumRepository.getGenres(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/album/:id/tracks', function(req, res, next){
		albumRepository.getTracks(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/album/:id/comments', function(req, res, next){
		albumRepository.getComments(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/album/:id/comments', function(req, res, next){
		albumRepository.addComments(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.post('/api/album', function(req, res, next){
		albumRepository.add(req.body, function(err, data){
			var status = err ? 400 : 201;
			res.status(status).json(data);
		});
	});

	app.delete('/api/album/:id', function(req, res, next){
		albumRepository.delete(req.params.id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});
};