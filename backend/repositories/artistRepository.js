var connection = require('../db/dbconnect.js');
var Artist = require('../schemas/artist.js');
var Repository = require('./generalRepository.js');

function ArtistRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Artist;
	this.model = 'Artist';
}

ArtistRepository.prototype = new Repository();

module.exports = new ArtistRepository();
