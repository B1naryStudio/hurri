var request = require('request');
var _ = require('underscore');
var mongoose = require('mongoose');
var Artist = require('../schemas/artist.js');

var albumRepository = require('../repositories/albumRepository.js');
var artistRepository = require('../repositories/artistRepository.js');
var trackRepository = require('../repositories/trackRepository.js');

function DeezerWrapper(){
}

DeezerWrapper.prototype.albumStruct = function(obj){
	var date = 00/00/00;
	if (!_.isUndefined(obj.release_date))
		date = obj.release_date.replace('-', '\/');
	var album = {
		deezer_id : obj.id,
		title : obj.title,
		cover : obj.cover,
		duration : obj.duration,
		release_date : date,
		singer : obj.artist.id,
		genres : _.pluck(obj.genres.data, 'name'),
		comment : [],
		tracks : _.pluck(obj.tracks.data, 'id')
	};
	return album;
};

DeezerWrapper.prototype.artistStruct = function(obj){
	var artist = { 
		deezer_id: obj.id,
		name : obj.name,
		picture : obj.picture
	};
	return artist;
};

DeezerWrapper.prototype.trackStruct = function(obj){
	var track = {
		deezer_id : obj.id,
		title : obj.title,
		duration : obj.duration,
		position : obj.track_position,
		release_date : obj.album.release_date,
		album : obj.album.id,
		singer : obj.artist.id,
		url : obj.preview
	};
	return track;
};

DeezerWrapper.prototype.getInfo = function(type, id, callback){
	request('http://api.deezer.com'+type+id, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		var result = JSON.parse(body)
		callback(result);
	}
});
};

DeezerWrapper.prototype.addAlbum = function(obj){
	albumRepository.add(obj, function(data){
		return;
	});
}

DeezerWrapper.prototype.addArtist = function(obj){
	artistRepository.add(obj, function(data){
		return;
	});
}

DeezerWrapper.prototype.addTrack = function(obj){
	trackRepository.add(obj, function(err, data){
	});
}

DeezerWrapper.prototype.isExist = function(id, callback){
	var exist = Artist.findOne({deezer_id : id});
	exist.exec(callback);
}

module.exports = new DeezerWrapper();