var userRepository = require('../repositories/userRepository');
var _ = require('underscore');

module.exports = function(app){
	app.get('/api/user/:id', function(req, res, next){
		userRepository.getUserInfo(req.params.id, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/like', function(req, res, next){
		userRepository.getLike(req.params.id, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/groups', function(req, res, next){
		userRepository.getGroups(req.params.id, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/playlists', function(req, res, next){
		userRepository.getPlaylists(req.params.id, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/playlists/:id_pl', function(req, res, next){
		userRepository.getPlaylistsShare(req.params.id, req.params.id_pl, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.post('/api/user', function(req, res, next){
		userRepository.add(req.body, function(err, data){
			var status = err ? 400 : 201;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id', function(req, res, next){
		userRepository.edit(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/playlist', function(req, res, next){
		userRepository.editPlaylist(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/like', function(req, res, next){
		userRepository.editLike(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/group', function(req, res, next){
		userRepository.editGroup(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});
	
	app.delete('/api/user/:id', function(req, res, next){
		userRepository.delete(req.params.id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});
};