var VKWrapper = require('../social_network_wrapper/VKWrapper');
var albumRepository = require('../repositories/albumRepository');
var artistRepository = require('../repositories/artistRepository');
var trackRepository = require('../repositories/trackRepository');
var async = require('async');

module.exports = function (app) {
	app.get('/getAccess', function(req, res){
		app.get('http://oauth.vk.com/authorize?client_id=4504196&scope=notify,friends,audio,status,email&redirect_uri=http://localhost:3055&response_type=code&v=5.24', function(req, res){
		});

	}
	);
	app.get('/getStream', function(req, res) {

		var options = {
			query: encodeURIComponent(req.query.query),
			sort: 2,
			onlyArtist: 0,
			auto_complete: 1,
			count: 1
		};

		VKWrapper.getAudioSearch(options, function(results){
			res.json(results);
		});

	});

	app.get('/search', function(req, res) {
		async.parallel([
			albumRepository.getByTitle.bind(albumRepository, req.query.query),
			artistRepository.getByName.bind(artistRepository, req.query.query),
			trackRepository.getByTitle.bind(trackRepository, req.query.query)
		], function(err, results){
			res.json(results);
		});

	});

};