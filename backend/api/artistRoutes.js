var artistRepository = require('../repositories/artistRepository');

module.exports = function(app){
	app.get('/api/artist/:id', function(req, res, next){
		res.json(artistRepository.getById(req.param.id));
	});

	app.get('/api/artist/:name', function(req, res, next){
		res.json(artistRepository.getByName(req.param.name));
	});

	app.post('/api/artist', function(req, res, next){
		artistRepository.addArtist();
		res.end();
	});

	app.put('/api/artist/:id', function(req, res, next){
		artistRepository.editArtist(req.param.id);
		res.end();
	});

	app.put('/api/artist/:id/bio', function(req, res, next){
		artistRepository.editBio(req.param.id);
		res.end();
	});

	app.put('/api/artist/:id/genres', function(req, res, next){
		artistRepository.editGenres(req.param.id);
		res.end();
	});

	app.put('/api/artist/:id/picture', function(req, res, next){
		artistRepository.editPicture(req.param.id);
		res.end();
	});

	app.put('/api/artist/:id/name', function(req, res, next){
		artistRepository.editName(req.param.id);
		res.end();
	});

	app.delete('/api/artist/:id', function(req, res, next){
		artistRepository.deleteArtist(req.param.id);
		res.end();
	});

};