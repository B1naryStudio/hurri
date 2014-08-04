var connection = require('../db/dbconnect.js');
var Artist = require('../schemas/artist.js');
var Repository = require('./generalRepository.js');

function ArtistRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Artist;
	this.model = 'artists';
};

ArtistRepository.prototype = new Repository();

ArtistRepository.prototype.getByName = function(name) {

};

ArtistRepository.prototype.editArtist = function(first_argument) {

};
ArtistRepository.prototype.editBio = function(first_argument) {

};
ArtistRepository.prototype.editGenres = function(first_argument) {

};
ArtistRepository.prototype.editPicture = function(first_argument) {

};
ArtistRepository.prototype.editName = function(first_argument) {

};
ArtistRepository.prototype.deleteArtist = function(first_argument) {

};

module.exports = new ArtistRepository();
