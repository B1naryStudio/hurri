var userRepository = require ('../repositories/userRepository');
var trackRepository = require ('../repositories/trackRepository');
var request = require('request');
var VK = require('./VKWrapper');
var mongoose = require('mongoose');
var genres = {
	1: "Rock",
	2: "Pop",
	3: "Hip Hop",
	4: "R&B/Soul/Funk",
	5: "Dance",
	6: "World",
	7: "World",
	8: "World",
	9: "Jazz",
	10: "World",
	11: "World",
	12: "World",
	13: "World",
	14: "World",
	15: "Reggae",
	16: "Classical",
	17: "World",
	18: "World",
	19: "World",
	21: "Alternative",
	22: "Electro"
};

var playlistObject = {
	name: "VK",
	tracks : [],
	duration : 0,
	mood : 'unknown'
};

function getUser(profile, done){
	userRepository.getUserAuth(profile._json.id, function(err, data){
	console.log('json id');
	console.log(err);
	console.log('json id end');
	if(!data){ console.log('add');
		userRepository.add({
			name : profile._json.first_name,
			avatarUrl : profile._json.photo,
			accountType : 'vk',
			id: profile._json.id
		}, function(err, user){
			if (err) { return done(err); }
				userRepository.addUserInfo({user_auth_id: user._id}, function(err, data){
					VK.getUserAudio(user.id, function(playlist){
						for (var i = 1; i <= playlist.response[0]; i ++){
							var id = mongoose.Types.ObjectId();
							setTrack(playlist.response[i], id);
							playlistObject.tracks.push(id);
							playlistObject.duration += playlist.response[i].duration;
						}
						userRepository.addPlaylists(user._id, playlistObject, function(err, res){});
					});
					VK.getFriends(user.id, function(friends){
						for(var j = 0; j < friends.response.length; j++){
							checkUser(friends.response[j],user._id, user.name);
						}
					});
				});		
				done(null, user);	
				function setTrack(playlist, id){
					var track = {
						_id: id,
						title : playlist.title + ' - ' + playlist.artist,
						duration : playlist.duration,
						url : playlist.url,
						genre: genres[playlist.genre],
						type: 'vk'
					};
					trackRepository.add(track, function(error, track){
						///console.log(playlistObject.duration);
					});
				}

				function checkUser(friendId, userId, userName){
					userRepository.getUserAuth(friendId, function(err, res){
						if(res){
							userRepository.addFollower(res._id, userId, function(){});
							userRepository.addFollowing( userId, res._id, function(){});
							userRepository.addAlert(res._id, {
								name: 'New follower', type:'info', additionalInfo: userName + ' follows you!'
							}, function(){});
							userRepository.addAlert(userId, {
								name:'Following', type:'info', additionalInfo: 'You are following ' + res.name 
							}, function(){});
						}
					});
				}
		});
	} else {
		console.log('update');
		userRepository.update(profile._json.id, {
			name : profile._json.first_name,
			avatarUrl : profile._json.photo,
			accountType : 'vk',
			id: profile._json.id
		}, function(err, user){
			if (err) { return done(err); }
				done(null, user);				
		});
	}
	});

}

module.exports = getUser;