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
function getUser (profile, auth, done){
	userRepository.getUserAuth(profile._json.id, function(err, data){
			console.log('err');
			console.log(err);
			console.log('err end');
			if(!data){ console.log('add');
				if(auth === 'tw'){
					userRepository.add({
						name : profile._json.name,
						avatarUrl : profile._json.profile_image_url,
						accountType : auth,
						id: profile._json.id
					}, function(err, user){
						if (err) { return done(err); }
							userRepository.addUserInfo({user_auth_id: user._id}, function(err, data){});		
							done(null, user);	
					});
				}
				if (auth === 'fb'){
					userRepository.add({
						name : profile._json.first_name,
						accountType : 'facebook',
						id: profile._json.id
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
						accountType : 'vk',
						id: profile._json.id
					}, function(err, user){
						if (err) { return done(err); }
							userRepository.addUserInfo({user_auth_id: user._id}, function(err, data){
								VK.getUserAudio(user.id, function(playlist){
									for (var i = 1; i < playlist.response[0]; i ++){
										var id = mongoose.Types.ObjectId();
										setTrack(playlist.response[i], id);
										playlistObject.tracks.push(id);
										playlistObject.duration += playlist.response[i].duration;
									}
									userRepository.addPlaylists(user._id, playlistObject, function(err, res){
									});
									});
							});		
							done(null, user);	
							function setTrack(playlist, id){
								var track = {
									_id: id,
									title : playlist.title + ' - ' + playlist.artist,
									duration : playlist.duration,
									url : playlist.uri,
									genre: genres[playlist.genre],
									type: 'vk'
								};
								trackRepository.add(track, function(error, track){});
							}
					});					
				}			
			} else {
				if (auth === 'vk'){
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
				if (auth === 'fb'){
					console.log('update fb');
					userRepository.update(profile._json.id, {
						name : profile._json.first_name,
						id: profile._json.id
					}, function(err, user){
						if (err) { return done(err); }
							done(null, user);				
					});
				}
				if (auth === 'tw'){
					console.log('update');
					userRepository.update(profile._json.id, {
						name : profile._json.name,
						avatarUrl : profile._json.profile_image_url,
						id: profile._json.id
					}, function(err, user){
						if (err) { return done(err); }
							done(null, user);				
					});
				}
			}
	});
}


module.exports = getUser;