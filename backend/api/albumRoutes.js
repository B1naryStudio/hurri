var albumRepository = require('../repositories/albumRepository');

module.exports = function(app){
	app.get('/api/album/:id', function(req, res, next){
		res.json(albumRepository.getById(req.params.id));
	});

	app.get('/api/album/:id/cover', function(req, res, next){
		res.json(albumRepository.getCover(req.params.id));
	});

	app.get('/api/album/:id/singer', function(req, res, next){
		res.json(albumRepository.getSinger(req.params.id));
	});

	app.get('/api/album/:id/genres', function(req, res, next){
		res.json(albumRepository.getGenres(req.params.id));
	});

	app.get('/api/album/:id/tracks', function(req, res, next){
		res.json(albumRepository.getTracks(req.params.id));
	});

	app.get('/api/album/:id/comments', function(req, res, next){
		res.json(albumRepository.getComments(req.params.id));
	});

	app.put('/api/album/:id', function(req, res, next){
		res.json(albumRepository.update(req.params.id, req.body));
	});

	app.post('/api/album', function(req, res, next){
		albumRepository.add(req.body);
		res.end();
	});

	app.delete('/api/album/:id', function(req, res, next){
		albumRepository.delete(req.params.id);
		res.end();
	});
};