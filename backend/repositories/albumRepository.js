var connection = require('../db/dbconnect.js');
var Album = require('../schemas/album.js');
var Repository = require('./generalRepository.js');

function AlbumRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Album;
	this.model = 'Album';
}

AlbumRepository.prototype.getById = function(first_argument) {

};
AlbumRepository.prototype.getCover = function(first_argument) {

};
AlbumRepository.prototype.getSinger = function(first_argument) {

};
AlbumRepository.prototype.getGenres = function(first_argument) {

};
AlbumRepository.prototype.getTracks = function(first_argument) {

};
AlbumRepository.prototype.getComments = function(first_argument) {

};
AlbumRepository.prototype.addAlbum = function() {

};
AlbumRepository.prototype.editAlbum = function(first_argument) {

};
AlbumRepository.prototype.editTitle = function(first_argument) {

};
AlbumRepository.prototype.editCover = function(first_argument) {

};
AlbumRepository.prototype.editRelease = function(first_argument) {

};
AlbumRepository.prototype.editGenre = function(first_argument) {

};
AlbumRepository.prototype.editTracks = function(first_argument) {

};
AlbumRepository.prototype.deleteAlbum = function(first_argument) {

};

module.exports = AlbumRepository;