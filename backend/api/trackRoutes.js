var trackRepository = require('../repositories/trackRepository');
var _ = require('underscore');

module.exports = function(app){
	app.get('/api/track/:id', function(req, res, next){
		trackRepository.getById(req.params.id, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/track/:name', function(req, res, next){
		albumRepository.getByTitle(req.params.name, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/track/:id/title', function(req, res, next){
		trackRepository.getTitle(req.params.id, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/track/:id/lyrics', function(req, res, next){
		trackRepository.getLirycs(req.params.id, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/track/:id/url', function(req, res, next){
		trackRepository.getUrl(req.params.id, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/track/:id/comments', function(req, res, next){
		trackRepository.getComments(req.params.id, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.post('/api/track', function(req, res, next){
		trackRepository.add(req.body, function(err, data){
			var status = err ? 400 : 201;
			res.status(status).json(data);
		});
	});

	app.put('/api/track/:id', function(req, res, next){
		trackRepository.update(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});
	
	app.delete('/api/track/:id', function(req, res, next){
		trackRepository.delete(req.params.id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});
};