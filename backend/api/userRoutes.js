

module.exports = function(app){
	app.get('/api/user/:id/like', function(req, res, next){
		res.json(userRepository.getLike(req.param.id));
	});

	app.get('/api/user/:id/groups', function(req, res, next){
		res.json(userRepository.getGroups(req.param.id));
	});

	app.get('/api/user/:id/playlists', function(req, res, next){
		res.json(userRepository.getPlaylists(req.param.id));
	});

	app.get('/api/user/:id/playlists/:id_pl', function(req, res, next){
		res.json(userRepository.getPlaylistsShare(req.param.id, req.param.id_pl));
	});

	app.post('/api/user', function(req, res, next){
		userRepository.addUser();
		res.end();
	});

	app.put('/api/user/:id', function(req, res, next){
		userRepository.editUser(req.param.id);
		res.end();
	});

	app.put('/api/user/:id/playlist', function(req, res, next){
		userRepository.editPlaylist(req.param.id);
		res.end();
	});

	app.put('/api/user/:id/like', function(req, res, next){
		userRepository.editLike(req.param.id);
		res.end();
	});

	app.put('/api/user/:id/group', function(req, res, next){
		userRepository.editGroup(req.param.id);
		res.end();
	});
	
	app.delete('/api/user/:id', function(req, res, next){
		userRepository.deleteUser(req.param.id);
		res.end();
	});
};