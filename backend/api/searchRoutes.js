var VKWrapper = require('../social_network_wrapper/VKWrapper');
var albumRepository = require('../repositories/albumRepository');
var artistRepository = require('../repositories/artistRepository');
var trackRepository = require('../repositories/trackRepository');
var async = require('async');

module.exports = function (app) {

	app.get('/getStream', function(req, res) {
		
		var options = {
			query: req.query.query,
			sort: 2,
			onlyArtist: 0,
			auto_complete: 1,
			count: 1
		};

		VKWrapper.getAudioSearch(options, function(result){
			res.json(result);
		});
	});

	app.get('/search', function(req, res) {
		async.parallel([
			albumRepository.getByTitle(req.query.query),
			artistRepository.getByName(req.query.query),
			trackRepository.getByTitle(req.query.query)
		], function(result){
			res.json(result);
		});
	});

};