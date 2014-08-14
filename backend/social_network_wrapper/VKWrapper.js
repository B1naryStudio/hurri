var request = require('request');
var VK = require('vksdk');


function VKWrapper(){

	this.vk = new VK({
		'appID'	: 4504196,
		'appSecret' : 'sKTyZBHIHu17JeRLTsez',
		'mode'      : 'oauth'
	});
	this.vk.setToken( { token :'07cf157b9f176abb17cfd2f25b9868d5bd8e3eaa1756d0d258ceda52f9cb6d7e817d87bc00da960440adc' });

}

VKWrapper.prototype.getUserInfo = function(id, fields, callback){
	this.vk.request('users.get', {'uids' : id, 'fields': fields});
	this.vk.on('done:users.get', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getFriends = function(id, callback){
	this.vk.request('friends.get', {'uids' : id});
	this.vk.on('done:friends.get', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getOnlineFriends = function(id, callback){
	this.vk.request('friends.getOnline', {'uids' : id});
	this.vk.on('done:friends.getOnline', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getUserAudio = function(id, callback){
	this.vk.request('audio.get', {'owner_id' : id}, 'get-user-audio');
	this.vk.on('get-user-audio', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getAudioById = function(aid, count, callback){
	this.vk.request('audio.get', {'audio_ids' : aid, 'count': count}, 'get-audio-by-id');
	this.vk.on('get-audio-by-id', function(result) {
		callback(result);
	});
};

VKWrapper.prototype.getLyricsById = function(lid, count, callback){
	this.vk.request('audio.getLyrics', {'lyrics_id' : lid, 'count': count});
	this.vk.on('done:audio.getLyrics', function(result) {
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
	
	this.vk.on('done:audio.search', function(result) {
		callback(result);
	});

};

module.exports = new VKWrapper();