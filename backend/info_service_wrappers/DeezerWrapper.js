var request = require('request');
var _ = require('underscore');
var mongoose = require('mongoose');
var Artist = require('../schemas/artist.js')
var albumRepository = require('../repositories/albumRepository.js');
var artistRepository = require('../repositories/artistRepository.js');
var trackRepository = require('../repositories/trackRepository.js');

var repositories = {
	'album' : albumRepository,
	'artist' : artistRepository,
	'track' : trackRepository
};

var genres = {
      0: "All",
      85: "Alternative",
      95: "Children’s Music",
      98: "Classical",
      113: "Dance",
      106: "Electro",
      32: "Europe",
      173: "Films/Games",
      116: "Hip Hop",
      129: "Jazz",
      132: "Pop",
      165: "R&B/Soul/Funk",
      144: "Reggae",
      152: "Rock",
      1: "World"
}

function DeezerWrapper(){

}

DeezerWrapper.prototype.albumStruct = function(obj){
	var date = '0000/00/00';
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
		picture : obj.picture,
		albums_id: [],
		genres: []
	};
	return artist;
};

DeezerWrapper.prototype.trackStruct = function(obj, albumInfo){
	var track = {
		deezer_id : obj.id,
		title : obj.title,
		duration : obj.duration,
		position : obj.track_position,
		release_date : albumInfo.release_date,
		album : albumInfo.id,
		singer : obj.artist.id,
		url : obj.preview
	};
	return track;
};

DeezerWrapper.prototype.getItem = function(url, callback){
	request('http://api.deezer.com' + url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var result = JSON.parse(body);
			callback(result);
		}
	});
};

DeezerWrapper.prototype.addItem = function(obj, repo){
	repositories[repo].add(obj, function(data){
		return;
	});
}

DeezerWrapper.prototype.isExist = function(id, callback){
	var exist = Artist.findOne({deezer_id : id});
	exist.exec(callback);
}

DeezerWrapper.prototype.importTracks = function(id, albumInfo){
	var self = this;
	this.getItem('/album/' + id + '/tracks', function(data){
		for (var i = 0; i < data.data.length; i++){
			var trackInfo = self.trackStruct(data.data[i], albumInfo);
			self.addItem(trackInfo, 'track');
		}
	});
};

DeezerWrapper.prototype.getGenres = function(arr, callback){ 
	var userGenres = [];
	request('http://api.deezer.com/genre', function(error, response, body){
		for (var i = 0; i < arr.length; i++) {
			userGenres.push(genres[arr[i]]);
		};
		callback(userGenres);
	});
};

DeezerWrapper.prototype.importArtists = function(obj){
	var self = this;
	var albumList;
	var artistAlbums = this.getItem('/artist/' + obj.id + '/albums', function(data){
		albumList = _.pluck(data.data, 'id');
		genres_id = _.uniq(_.pluck(data.data, 'genre_id'));
		var artistInfo = self.artistStruct(obj);
		self.getGenres(genres_id, function(genresArr){
			artistInfo.genres = genresArr;
			artistInfo.albums_id = albumList;
			var exist = self.isExist(obj.id, function(err, data){
					if (data == null) self.addItem(artistInfo,'artist');
			});
	});
	});
};

DeezerWrapper.prototype.importAlbum = function(id){
	var self = this;

	this.getItem('/album/' + id, function(data){
		if (!data.error){
			var albumInfo = self.albumStruct(data);
				if (albumInfo.tracks.length != 0){
					self.addItem(albumInfo, 'album');
					self.importTracks(albumInfo.deezer_id, albumInfo)
					self.importArtists(data.artist);
				}
		};
	});
};


module.exports = new DeezerWrapper();