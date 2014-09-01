var userRepository = require('../repositories/userRepository');
var _ = require('underscore');

module.exports = function(app){
	app.get('/api/user/:id', function(req, res, next){
		userRepository.getUserAuth(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			console.log(data);
			res.status(status).json(data);
		});
	});

	app.get('/api/user/info/:id', function(req, res, next){
		userRepository.getUserInfo(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			console.log(data);
			res.status(status).json(data);
		});
	});


	app.get('/api/user/:id/follower', function(req, res, next){
		userRepository.getFollower(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/following', function(req, res, next){
		userRepository.getFollowing(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/alert', function(req, res, next){
		userRepository.getAlerts(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/like', function(req, res, next){
		userRepository.getLike(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/groups', function(req, res, next){
		userRepository.getGroups(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/playlists', function(req, res, next){
		userRepository.getPlaylists(req.params.id, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data.playlists);
		});
	});

	app.get('/api/user/:id/playlists/:id_pl', function(req, res, next){
		userRepository.getPlaylistsShare(req.params.id, req.params.id_pl, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.get('/api/user/:id/playlists/:id_pl/tracks', function(req, res, next){
		userRepository.getTracks(req.params.id, req.params.id_pl, function(data){
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

	app.post('/api/user/info', function(req, res, next){
		userRepository.addUserInfo(req.body, function(err, data){
			var status = err ? 400 : 201;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/alert', function(req, res, next){
		userRepository.addAlert(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 201;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/playlist/:pid/track/:tid', function(req, res, next){
		userRepository.addSongToPlaylist(req.params.id, req.params.pid,req.params.tid, function(err, data){
			var status = err ? 400 : 201;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id', function(req, res, next){
		userRepository.update(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/info/:id', function(req, res, next){
		userRepository.updateUserInfo(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/follower/:follower_id', function(req, res, next){
		userRepository.addFollower(req.params.id, req.params.follower_id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/following/:following_id', function(req, res, next){
		userRepository.addFollowing(req.params.id, req.params.following_id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/like/:like_id', function(req, res, next){
		userRepository.addLike(req.params.id, req.params.like_id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/group/:group_id', function(req, res, next){
		userRepository.addGroups(req.params.id, req.params.group_id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/user/:id/playlist', function(req, res, next){
		userRepository.addPlaylists(req.params.id, req.body, function(err, data){
			var status = err ? 400 : 201;
			res.status(status).json(data);
		});
	});
	
	app.delete('/api/user/:id/follower/:fid', function(req, res, next){
		userRepository.deleteFollower(req.params.id, req.params.fid, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.delete('/api/user/:id/following/:fid', function(req, res, next){
		userRepository.deleteFollowing(req.params.id, req.params.fid, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.delete('/api/user/:id/playlist/:pid/track/:tid', function(req, res, next){
		userRepository.deleteSongFromPlaylist(req.params.id, req.params.pid,req.params.tid, function(err, data){
			var status = err ? 400 : 201;
			res.status(status).json(data);
		});
	});

	app.delete('/api/user/:id/alert/:aid', function(req, res, next){
		userRepository.deleteAlert(req.params.id, req.params.aid, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.delete('/api/user/:id/alert', function(req, res, next){
		userRepository.deleteAllAlerts(req.params.id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.delete('/api/user/:id/like/:lid', function(req, res, next){
		userRepository.deleteLike(req.params.id, req.params.lid, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.delete('/api/user/:id/group/:gid', function(req, res, next){
		userRepository.deleteGroups(req.params.id, req.params.gid, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.delete('/api/user/:id/playlists/:pid', function(req, res, next){
		console.log('DELETE PLAYLIST');
		userRepository.deletePlaylists(req.params.id, req.params.pid, function(err, data){
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