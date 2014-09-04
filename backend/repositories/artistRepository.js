var connection = require('../db/dbconnect.js');
var Artist = require('../schemas/artist.js');
var Repository = require('./generalRepository.js');

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

ArtistRepository.prototype.getByName = function(name, callback) {
	var model = this.model;
	regexp = new RegExp('^'+name, "i");
	var query = model.find({name: regexp}).limit(3);
	query.exec(callback);
};



module.exports = new ArtistRepository();
