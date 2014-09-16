var connection = require('../db/dbconnect.js');
var Artist = require('../schemas/artist.js');
var Repository = require('./generalRepository.js');
var Track = require('../schemas/track.js');

function ArtistRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Artist;
}

//ArtistRepository.prototype = new Repository();

ArtistRepository.prototype.getById = function(id, callback) {
	var model = this.model;
	var query = model.findOne({_id: id}).populate('albums_id');
	query.exec(callback);
};

ArtistRepository.prototype.getAll = function(genre, callback) {
	var model = this.model;
	var query = model.find({genres: {$in : [genre]}}).populate('albums_id').limit(50);
	query.exec(callback);
};

ArtistRepository.prototype.getArtistAlbums = function(id, callback) {
	var model = this.model;
	model.findOne({_id: id}, 'albums_id').lean().populate({path:'albums_id albums_id.tracks'}).exec(function(err, data){
		var opts = [
			{ path: 'tracks', model: 'Track' }
		];
		Track.populate(data.albums_id, opts, callback);
	});
};

ArtistRepository.prototype.getByName = function(name, limit, quick, callback) {
	//console.log(limit);
	var model = this.model;
	var lim = limit || '';
	var q = quick || '';
	regexp = new RegExp(q+name, "i");
	var query = model.find({name: regexp}).limit(lim);
	query.exec(callback);
};



module.exports = new ArtistRepository();
