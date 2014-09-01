var userRepository = require ('../repositories/userRepository');
var request = require('request');
var mongoose = require('mongoose');

function addUser (id, profileId, token, auth, done){
	userRepository.getUserAuth(id, function(err, data){
			
			console.log('id');
			console.log(id);
			console.log(profileId);
			console.log('id end');
			if(!data){ console.log('add');
				if(auth === 'tw'){
					userRepository.updateByObjectId(id, {
						twToken: token,
						idTw: profileId
					}, function(err, user){
						console.log(err, user);
						if (err) { 
							return done(err); 
						}	
						done(null, user);	
					});
				}
				if (auth === 'fb'){
					userRepository.updateByObjectId(id, {
						fbToken: token,
						idFb: profileId
					}, function(err, user){
						console.log(err, user);
						if (err) { return done(err); }	
							done(null, user);	
					});
				}
				if (auth === 'vk'){
					userRepository.updateByObjectId(id, {
						vkToken: token,
						idVk: profileId
					}, function(err, user){
						console.log(err, user);
						if (err) { return done(err); }		
							done(null, user);	
					});					
				}			
			}
	});
}

module.exports = addUser;