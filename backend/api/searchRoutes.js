var VKWrapper = require('../social_network_wrapper/VKWrapper');
var albumRepository = require('../repositories/albumRepository');
var artistRepository = require('../repositories/artistRepository');
var trackRepository = require('../repositories/trackRepository');
var userRepository = require('../repositories/userRepository');
var async = require('async');

module.exports = function (app) {
	app.get('/getPlaylist/:id', function(req, res){
		VKWrapper.getUserAudio(req.params.id, function(results){
			res.json(results);
		});
	});

	app.get('/getFriends', function(req, res){
		VKWrapper.getFriends(req.query.id, function(results){
			res.json(results);
		});
	});
	
	app.get('/getStream', function(req, res) {

		var options = {
			query: encodeURIComponent(req.query.query),
			sort: 2,
			onlyArtist: 0,
			auto_complete: 1,
			count: 1
		};

		VKWrapper.getAudioSearch(options, function(results, status){
			if (status) res.status(status).end();
			else res.json(results);
		});

	});

	app.get('/search', function(req, res) {
		async.parallel([
			albumRepository.getByTitle.bind(albumRepository, req.query.query, req.query.limit, req.query.quick),
			artistRepository.getByName.bind(artistRepository, req.query.query, req.query.limit, req.query.quick),
			trackRepository.getByTitle.bind(trackRepository, req.query.query, req.query.limit, req.query.quick)
		], function(err, results){
			res.json(results);
		});

	});

};