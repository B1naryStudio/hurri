var connection = require('../db/dbconnect.js');
var Album = require('../schemas/album.js');
var Repository = require('./generalRepository.js');

function AlbumRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Album;
	this.model = Album;
}

AlbumRepository.prototype = new Repository();

AlbumRepository.prototype.getById = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}).populate('singer').populate('tracks');
	query.exec(callback);
};

AlbumRepository.prototype.getByTitle = function(name, callback) {
	var model = this.createModel();
	var query = model.findOne({title: name}).populate('singer').populate('tracks');
	query.exec(callback);
};

AlbumRepository.prototype.getCover = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'cover');
	query.exec(callback);
};

AlbumRepository.prototype.getSinger = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'singer').populate('singer');
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
	var query = model.findOne({_id: id}, 'comment').populate('comment');
	query.exec(callback);
};

module.exports = new AlbumRepository();