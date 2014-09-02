var fs = require('fs');
var replaceStream = require('replacestream');
var userRepository = require('../repositories/userRepository');
var async = require('async');

module.exports = function (req, res, obj, error) {
	error = error || false;

	populateInjectData(req.user, function(data){
		obj.alerts = data.alerts;
		obj.user = req.user;
		obj.playlists = data.playlists;
		obj.followers = data.followers;
		obj.following = data.following;
		res.header('Content-Type', 'text/html');
		fs.createReadStream(__dirname + '/../../public/' + '_index.html')
			.pipe(replaceStream("[\"data_replace\"]", JSON.stringify(obj)))
			.pipe(replaceStream("window._is404Error = false;", "window._is404Error = " + error + ";"))
			.pipe(res);
	});
};

function populateInjectData(user, callback_main){
	async.series({
		alerts : function(callback){
			userRepository.getAlerts(user._id, function(err, data){
				callback(err, data.alerts);
			});
		},
		playlists : function(callback){
			userRepository.getPlaylists(user._id, function(err, data){
				callback(err, data.playlists);
			});
		},
		followers : function(callback){
			userRepository.getFollower(user._id, function(err, data){
				console.log(data);
				callback(err, data.followers);
			});
		},
		following : function(callback){
			userRepository.getFollowing(user._id, function(err, data){
				callback(err, data.following);
			});
		}
	}, function(err, results){
		console.log(results);
		callback_main(results);
	});
}