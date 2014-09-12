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

var genres_count = {
	"Rock":0,
	"Pop":0,
	"Hip Hop":0,
	"R&B/Soul/Funk":0,
	"Dance":0,
	"World":0,
	"Jazz":0,
	"Reggae":0,
	"Alternative":0,
	"Electro":0
};

var playlistObject = {
	name: "VK",
	tracks : [],
	duration : 0,
	mood : 'unknown'
};
function getUser (profile, token, auth, done){
	userRepository.getUserAuth(profile._json.id, function(err, data){
			if(!data){ console.log('add');
				if(auth === 'tw'){
					userRepository.add({
						name : profile._json.name,
						avatarUrl : profile._json.profile_image_url,
						accountType : auth,
						idTw: profile._json.id,
						twToken: token
					}, function(err, user){
						if (err) { return done(err); }
							userRepository.addUserInfo({user_auth_id: user._id}, function(err, data){});		
							done(null, user);	
					});
				}
				if (auth === 'fb'){
					userRepository.add({
						name : profile._json.first_name,
						accountType : auth,
						idFb: profile._json.id,
						fbToken: token
					}, function(err, user){
						if (err) { return done(err); }
							userRepository.addUserInfo({user_auth_id: user._id}, function(err, data){});		
							done(null, user);	
					});
				}
				if (auth === 'vk'){
					userRepository.add({
						name : profile._json.first_name,
						avatarUrl : profile._json.photo,
						accountType : auth,
						idVk: profile._json.id,
						vkToken: token
					}, function(err, user){
						if (err) { return done(err); }
							userRepository.addUserInfo({user_auth_id: user._id}, function(err, data){
								VK.getUserAudio(user.idVk, function(playlist){
									for (var i = 1; i < playlist.response.length; i ++){
										var id = mongoose.Types.ObjectId();
										setTrack(playlist.response[i], id);
										playlistObject.tracks.push(id);
										playlistObject.duration += playlist.response[i].duration;
										genres_count[playlist.response[i].genre] += 1;
									}
									var max = 0; var genre = 'unknown';
									for (var g in genres_count){
										if (genres_count[g] >= max){
											max = genres_count[g];  genre = g;
										}
									} 
									playlistObject.genre = genre;
									userRepository.addPlaylists(user._id, playlistObject, function(err, res){
									});
								});

								VK.getFriends(user.idVk, function(friends){
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
									type: 'vk',
									singer: null,
									albumTitle : 'VK',
									albumCover: '/images/default/vk.png'
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
				}			
			} else {
				if (auth === 'vk'){
					console.log('update');
					userRepository.update(profile._json.id, {
						name : profile._json.first_name,
						avatarUrl : profile._json.photo,
						accountType : auth,
						idVk: profile._json.id,
						vkToken: token
					}, function(err, user){
						if (err) { return done(err); }
							done(null, user);				
						});
				}
				if (auth === 'fb'){
					console.log('update fb');
					userRepository.update(profile._json.id, {
						name : profile._json.first_name,
						idFb: profile._json.id,
						fbToken: token
					}, function(err, user){
						if (err) { return done(err); }
							done(null, user);				
					});
				}
				if (auth === 'tw'){
					console.log('update tw');
					userRepository.update(profile._json.id, {
						name : profile._json.name,
						avatarUrl : profile._json.profile_image_url,
						idTw: profile._json.id,
						twToken: token
					}, function(err, user){
						if (err) { return done(err); }
							done(null, user);				
					});
				}
			}
	});
}

module.exports = getUser;