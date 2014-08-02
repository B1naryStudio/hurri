var userRepository = require('../repositories/userRepository');

module.exports = function(app){
	app.get('/user/:id/like', function(req, res, next){
		res.json(userRepository.getLike(req.param.id));
	});

	app.get('/user/:id/groups', function(req, res, next){
		res.json(userRepository.getGroups(req.param.id));
	});

	app.get('/user/:id/playlists', function(req, res, next){
		res.json(userRepository.getPlaylists(req.param.id));
	});

	app.get('/user/:id/playlists/:id_pl', function(req, res, next){
		res.json(userRepository.getPlaylistsShare(req.param.id, req.param.id_pl));
	});

	app.post('/user', function(req, res, next){
		userRepository.addUser();
		res.end();
	});

	app.put('/user/:id', function(req, res, next){
		userRepository.editUser(req.param.id);
		res.end();
	});

	app.put('/user/:id/playlist', function(req, res, next){
		userRepository.editPlaylist(req.param.id);
		res.end();
	});

	app.put('/user/:id/like', function(req, res, next){
		userRepository.editLike(req.param.id);
		res.end();
	});

	app.put('/user/:id/group', function(req, res, next){
		userRepository.editGroup(req.param.id);
		res.end();
	});
	
	app.delete('/user/:id', function(req, res, next){
		userRepository.deleteUser(req.param.id);
		res.end();
	});
};