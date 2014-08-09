var request = require('request');
var _ = require('underscore');
var mongoose = require('mongoose');
var Artist = require('../schemas/artist.js');
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
};

function DeezerWrapper(){

}

DeezerWrapper.prototype.albumStruct = function(id, obj, singId, tracks){
	var date = '0000/00/00';
	if (!_.isUndefined(obj.release_date))
		date = obj.release_date.replace('-', '\/');
	var album = {
		_id : id,
		deezer_id : obj.id,
		title : obj.title,
		cover : obj.cover,
		duration : obj.duration,
		release_date : date,
		singer : singId,
		genres : _.pluck(obj.genres.data, 'name'),
		comment : [],
		tracks : tracks
	};
	return album;
};

DeezerWrapper.prototype.artistStruct = function(obj, id){
	var artist = { 
		_id : id,
		deezer_id: obj.id,
		name : obj.name,
		picture : obj.picture,
		albums_id: [],
		genres: []
	};
	return artist;
};

DeezerWrapper.prototype.trackStruct = function(obj, albumInfo, artId, albId, oid){
	var track = {
		_id : oid,
		deezer_id : obj.id,
		title : obj.title,
		duration : obj.duration,
		position : obj.track_position,
		release_date : albumInfo.release_date,
		album : albId,
		singer : artId,
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

DeezerWrapper.prototype.addItem = function(obj, repo, callback){
	repositories[repo].add(obj, function(){});
};

DeezerWrapper.prototype.getArtistByDeezerId = function(id, callback){
	var exist = Artist.findOne({deezer_id : id});
	exist.exec(callback);
};


DeezerWrapper.prototype.isExisting = function(id, callback){
	this.getArtistByDeezerId(id, function(err, data){
		if (data === null) 
			callback(false);
		else 
			callback(data);
	});
};

DeezerWrapper.prototype.getGenres = function(arr, callback){ 
	var userGenres = [];
	request('http://api.deezer.com/genre', function(error, response, body){
		for (var i = 0; i < arr.length; i++) {
			userGenres.push(genres[arr[i]]);
		}
		callback(userGenres);
	});
};

DeezerWrapper.prototype.importTracks = function(album, artId, albId, callback){
	var items = this.getItem('/album/' + album.id + '/tracks', function(data){
		callback(data);
	});
};

DeezerWrapper.prototype.saveTracks = function(album, artId, albId, callback){
	var self = this;
	var arr = [];
	this.importTracks(album, artId, albId, function(data){
		for (var i = 0; i < data.data.length; i++){
			var objid = mongoose.Types.ObjectId(); arr.push(objid);
			var trackInfo = self.trackStruct(data.data[i], album, artId, albId, objid);
			var dd = self.addItem(trackInfo, 'track');
		}
		callback(arr);
	});
};

DeezerWrapper.prototype.getAlbumInfo = function(id, callback){
	this.getItem('/album/' + id, function(data){
		if (!data.error && data.tracks.data.length !== 0){
			callback(data);
		} else callback(false);
	});
};

DeezerWrapper.prototype.fillArtistInfo = function(obj, artId, albId, genresArr){
	var artistInfo = this.artistStruct(obj, artId);
	artistInfo.genres = genresArr;
	artistInfo.albums_id.push(albId);
	return artistInfo;
};

DeezerWrapper.prototype.fillNewInfo = function(artist, albId, genresArr){
	artist.genres = _.uniq(_.union(artist.genres, genresArr));
	artist.albums_id.push(albId);
	artist.markModified('albums_id');
	artist.save();
};

DeezerWrapper.prototype.importAlbum = function(id){
	var self = this;
	this.getAlbumInfo(id, function(data){
		if (data) {
			var albumObjectId = mongoose.Types.ObjectId();			
			var artistObjectId = mongoose.Types.ObjectId();	
			self.isExisting(data.artist.id, function(exist){
				if (!exist) {
					var artistInfo = self.fillArtistInfo(data.artist, artistObjectId, albumObjectId, 
										_.pluck(data.genres.data, 'name'));
					self.addItem(artistInfo,'artist');
				} else {
					self.fillNewInfo(exist, albumObjectId, _.pluck(data.genres.data, 'name'));
					artistObjectId = exist._id;
				}
			});
			self.saveTracks(data, artistObjectId, albumObjectId, function(result){
					var albumInfo = self.albumStruct(albumObjectId, data, artistObjectId, result);
					self.addItem(albumInfo, 'album');
			});
		}
		
	});
};


module.exports = new DeezerWrapper();