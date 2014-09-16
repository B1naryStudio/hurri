var request = require('request');
var VK = require('vksdk');
function VKWrapper(){

	this.vk = new VK({
		'appID'	: 4504196,
		'appSecret' : 'sKTyZBHIHu17JeRLTsez',
		'mode'	  : 'oauth'
	});
}

VKWrapper.prototype.setAccessToken = function(accessToken){
	this.vk.setToken( { token : accessToken});
};


VKWrapper.prototype.getUserAuth = function(id, fields, callback){
	this.vk.request('users.get', {'uids' : id, 'fields': fields});
	this.vk.once('done:users.get', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getFriends = function(id, callback){
	this.vk.request('friends.get', {'uids' : id});
	this.vk.once('done:friends.get', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getOnlineFriends = function(id, callback){
	this.vk.request('friends.getOnline', {'uids' : id});
	this.vk.once('done:friends.getOnline', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getUserAudio = function(id, callback){
	this.vk.request('audio.get', {'owner_id' : id}, 'get-user-audio');
	this.vk.once('get-user-audio', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getAudioById = function(aid, count, callback){
	this.vk.request('audio.get', {'audio_ids' : aid, 'count': count}, 'get-audio-by-id');
	this.vk.once('get-audio-by-id', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getLyricsById = function(lid, callback){
	this.vk.request('audio.getLyrics', {'lyrics_id' : lid});
	this.vk.once('done:audio.getLyrics', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getAudioSearch = function(options, callback){

	this.vk.request('audio.search', {
		'q' : options.query, 
		'sort': options.sort, 
		'performer_only': options.onlyArtist, 
		'auto_complete': options.auto_complete, 
		'count': options.count
	});
	
	this.vk.once('done:audio.search', function(result) {
		console.log(result);
		if (result.response[1]){
			var object = {
				url: result.response[1].url,
				duration: result.response[1].duration,
				lyrics_id: result.response[1].lyrics_id
			};
			callback(object);
		} else {
			callback(404);
		}
	});

};

VKWrapper.prototype.getBigAudioSearch = function(options, callback){

	this.vk.request('audio.search', {
		'q' : options.query, 
		'sort': options.sort, 
		'performer_only': options.onlyArtist, 
		'auto_complete': options.auto_complete, 
		'count': options.count
	});
	
	this.vk.once('done:audio.search', function(result) {
		console.log(result);
		if (result.response[1]){
			var object = {
				url: result.response[1].url,
				duration: result.response[1].duration,
				lyrics_id: result.response[1].lyrics_id
			};
			callback(object);
		} else {
			callback(404);
		}
	});

};

VKWrapper.prototype.getRecommendations = function(id, count, callback){
	this.vk.request('audio.getRecommendations', {'user_id' : id, 'count': count});
	this.vk.once('done:audio.getRecommendations', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getAlbums = function(id, count, callback){
	this.vk.request('audio.getAlbums', {'owner_id' : id, 'count': count});
	this.vk.once('done:audio.getAlbums', function(result) {
		callback(result);
	});
};

module.exports = new VKWrapper();