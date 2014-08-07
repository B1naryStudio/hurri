var connection = require('../db/dbconnect.js');
var Album = require('../schemas/album.js');
var Repository = require('./generalRepository.js');

function AlbumRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Album;
	this.model = Album;
}

AlbumRepository.prototype = new Repository();

Repository.prototype.getByName = function(name, callback) {
	var model = this.createModel();
	var query = model.findOne({title: name});
	query.exec(callback);
};

AlbumRepository.prototype.getCover = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'cover');
	query.exec(callback);
};

AlbumRepository.prototype.getSinger = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}).populate('tracks');
	query.exec(callback);
};

AlbumRepository.prototype.getGenres = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'genres');
	query.exec(callback);
};

AlbumRepository.prototype.getTracks = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'tracks').populate('tracks');
	query.exec(callback);
};

AlbumRepository.prototype.getComments = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'comment');
	query.exec(callback);
};

module.exports = new AlbumRepository();