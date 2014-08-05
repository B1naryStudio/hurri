

module.exports = function(app){
	app.get('/api/user/:id/like', function(req, res, next){
		res.json(userRepository.getLike(req.params.id));
	});

	app.get('/api/user/:id/groups', function(req, res, next){
		res.json(userRepository.getGroups(req.params.id));
	});

	app.get('/api/user/:id/playlists', function(req, res, next){
		res.json(userRepository.getPlaylists(req.params.id));
	});

	app.get('/api/user/:id/playlists/:id_pl', function(req, res, next){
		res.json(userRepository.getPlaylistsShare(req.params.id, req.params.id_pl));
	});

	app.post('/api/user', function(req, res, next){
		userRepository.add();
		res.end();
	});

	app.put('/api/user/:id', function(req, res, next){
		userRepository.edit(req.params.id);
		res.end();
	});

	app.put('/api/user/:id/playlist', function(req, res, next){
		userRepository.editPlaylist(req.params.id);
		res.end();
	});

	app.put('/api/user/:id/like', function(req, res, next){
		userRepository.editLike(req.params.id);
		res.end();
	});

	app.put('/api/user/:id/group', function(req, res, next){
		userRepository.editGroup(req.params.id);
		res.end();
	});
	
	app.delete('/api/user/:id', function(req, res, next){
		userRepository.delete(req.params.id);
		res.end();
	});
};