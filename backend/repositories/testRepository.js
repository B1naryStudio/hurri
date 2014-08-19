var connection = require('../db/dbconnect.js');

var Album = require('../schemas/album.js');
var Artist = require('../schemas/artist.js');
var Track = require('../schemas/track.js');

function TestRepository(){

}

TestRepository.prototype.getAlbums = function(callback) {
	var query = Album.find({});
	query.exec(callback);
};

TestRepository.prototype.getArtists = function(callback) {
	var query = Artist.find({});
	query.exec(callback);
};

TestRepository.prototype.getTracks = function(callback) {
	var query = Track.find({});
	query.exec(callback);
};

module.exports = new TestRepository();