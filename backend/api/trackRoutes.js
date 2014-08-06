var trackRepository = require('../repositories/trackRepository');

module.exports = function(app){
	app.get('/api/track/:id', function(req, res, next){
		res.json(trackRepository.getById(req.params.id));
	});

	app.get('/api/track/:id/title', function(req, res, next){
		res.json(trackRepository.getTitle(req.params.id));
	});

	app.get('/api/track/:id/lyrics', function(req, res, next){
		res.json(trackRepository.getLirycs(req.params.id));
	});

	app.get('/api/track/:id/url', function(req, res, next){
		res.json(trackRepository.getUrl(req.params.id));
	});

	app.get('/api/track/:id/comments', function(req, res, next){
		res.json(trackRepository.getComments(req.params.id));
	});

	app.post('/api/track', function(req, res, next){
		trackRepository.add(req.body);
		res.end();
	});

	app.put('/api/track/:id', function(req, res, next){
		trackRepository.update(req.params.id, req.body);
		res.end();
	});
	
	app.delete('/api/track/:id', function(req, res, next){
		trackRepository.delete(req.params.id);
		res.end();
	});
};