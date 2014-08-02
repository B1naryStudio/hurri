var trackRepository = require('../repositories/trackRepository');

module.exports = function(app){
	app.get('/track/:id', function(req, res, next){
		res.json(trackRepository.getById(req.param.id));
	});

	app.get('/track/:id/title', function(req, res, next){
		res.json(trackRepository.getTitle(req.param.id));
	});

	app.get('/track/:id/lyrics', function(req, res, next){
		res.json(trackRepository.getLirycs(req.param.id));
	});

	app.get('/track/:id/url', function(req, res, next){
		res.json(trackRepository.getUrl(req.param.id));
	});

	app.get('/track/:id/comments', function(req, res, next){
		res.json(trackRepository.getComments(req.param.id));
	});

	app.post('/track', function(req, res, next){
		trackRepository.addTrack();
		res.end();
	});

	app.put('/track/:id', function(req, res, next){
		trackRepository.editTrack(req.param.id);
		res.end();
	});

	app.put('/track/:id/title', function(req, res, next){
		trackRepository.editTitle(req.param.id);
		res.end();
	});

	app.put('/track/:id/release', function(req, res, next){
		trackRepository.editRelease(req.param.id);
		res.end();
	});

	app.put('/track/:id/lyrics', function(req, res, next){
		trackRepository.editLyrics(req.param.id);
		res.end();
	});

	app.put('/track/:id/url', function(req, res, next){
		trackRepository.editUrl(req.param.id);
		res.end();
	});
	
	app.delete('/track/:id', function(req, res, next){
		trackRepository.deleteTrack(req.param.id);
		res.end();
	});
};