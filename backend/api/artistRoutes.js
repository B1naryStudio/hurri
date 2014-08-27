var artistRepository = require('../repositories/artistRepository');
var _ = require('underscore');

module.exports = function(app){
	app.get('/api/artist/id/:id', function(req, res, next){
		artistRepository.getById(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/artist/:name', function(req, res, next){
		artistRepository.getByName(req.params.name, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.post('/api/artist/', function(req, res){
		artistRepository.add(req.body, function(err, data){
			var status = err ? 400 : 201;
			res.status(status).json(data);
		});
	});

	app.put('/api/artist/:id', function(req, res, next){
		artistRepository.update(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.delete('/api/artist/:id', function(req, res, next){
		artistRepository.delete(req.params.id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

}; 