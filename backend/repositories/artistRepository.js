var connection = require('../db/dbconnect.js');
var Artist = require('../schemas/artist.js');
var Repository = require('./generalRepository.js');

function ArtistRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Artist;
}

ArtistRepository.prototype = new Repository();

ArtistRepository.prototype.getByName = function(name, callback) {
	var model = this.createModel();
	regexp = new RegExp(name, "i");
	var query = model.find({name: regexp});
	query.exec(callback);
};



module.exports = new ArtistRepository();
