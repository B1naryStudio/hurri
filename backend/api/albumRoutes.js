var AlbumRepository = require('../repositories/albumRepository');
var albumRepository = new AlbumRepository();

module.exports = function(app){
	app.get('/album/album/:id', function(req, res, next){
		res.json(albumRepository.getById(req.param.id));
	});

	app.get('/album/album/:id/cover', function(req, res, next){
		res.json(albumRepository.getCover(req.param.name));
	});

	app.get('/album/album/:id/singer', function(req, res, next){
		res.json(albumRepository.getSinger(req.param.name));
	});

	app.get('/album/album/:id/genres', function(req, res, next){
		res.json(albumRepository.getGenres(req.param.name));
	});

	app.get('/album/album/:id/tracks', function(req, res, next){
		res.json(albumRepository.getTracks(req.param.name));
	});

	app.get('/album/album/:id/comments', function(req, res, next){
		res.json(albumRepository.getComments(req.param.name));
	});

	app.post('/album', function(req, res, next){
		albumRepository.addAlbum();
		res.end();
	});

	app.put('/album/:id', function(req, res, next){
		albumRepository.editAlbum(req.param.id);
		res.end();
	});

	app.put('/album/:id/title', function(req, res, next){
		albumRepository.editTitle(req.param.id);
		res.end();
	});

	app.put('/album/:id/cover', function(req, res, next){
		albumRepository.editCover(req.param.id);
		res.end();
	});

	app.put('/album/:id/release', function(req, res, next){
		albumRepository.editRelease(req.param.id);
		res.end();
	});

	app.put('/album/:id/genre', function(req, res, next){
		albumRepository.editGenre(req.param.id);
		res.end();
	});

	app.put('/album/:id/tracks', function(req, res, next){
		albumRepository.editTracks(req.param.id);
		res.end();
	});

	app.delete('/album/:id', function(req, res, next){
		albumRepository.deleteAlbum(req.param.id);
		res.end();
	});
};