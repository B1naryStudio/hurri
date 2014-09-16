var trackRepository = require('../repositories/trackRepository');
var apiResponse = require('../middleware/apiResponse');
var VK = require('../social_network_wrapper/VKWrapper');

module.exports = function(app){
	app.get('/api/track/id/:id', function(req, res, next){
		trackRepository.getById(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/track/:id/lyrics/:name', function(req, res, next){
		trackRepository.getLyrics(req.params.id, req.params.name, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
		
	}, apiResponse);

	app.get('/api/track/:name', function(req, res, next){
		trackRepository.getByTitle(req.params.name, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/search/full/tracks/:name', function(req, res, next){
		trackRepository.getByTitle(req.params.name, 50, '', function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/explorer/tracks/:genre', function(req, res, next){
		trackRepository.getAll(decodeURIComponent(req.params.genre), function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/track/:id/title', function(req, res, next){
		trackRepository.getTitle(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/track/:id/lyrics', function(req, res, next){
		trackRepository.getLirycs(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/track/:id/url', function(req, res, next){
		trackRepository.getUrl(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/track/:id/comments', function(req, res, next){
		trackRepository.getComments(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.post('/api/track', function(req, res, next){
		trackRepository.add(req.body, function(err, data){
			res.successStatus = 201;
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/api/track/:id/comments', function(req, res, next){
		trackRepository.addComments(req.params.id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
	
	app.delete('/api/track/:id', function(req, res, next){
		trackRepository.delete(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
};