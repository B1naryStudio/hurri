var connection = require('../db/dbconnect.js');
var Singer = require('../schemas/singer.js');

function ArtistRepository(){}

ArtistRepository.prototype.getById = function(id) {
	
};
ArtistRepository.prototype.getByName = function(name) {
	Singer.findOne({ name: name }, function (err, singer) {
  		if (err) return handleError(err);
  		return singer;
	})
};
ArtistRepository.prototype.addArtist = function(first_argument) {

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
