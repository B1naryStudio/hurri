var connection = require('../db/dbconnect.js');
var Album = require('../schemas/album.js');
var Repository = require('./generalRepository.js');

function AlbumRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Album;
	this.model = Album;
}

AlbumRepository.prototype = new Repository();

AlbumRepository.prototype.getCover = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'cover');
	query.exec(function (err, docs) {
		return docs;
	});
};

AlbumRepository.prototype.getSinger = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'singer').populate('singer');
	query.exec(function (err, docs) {
		return docs;
	});
};

AlbumRepository.prototype.getGenres = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'genres');
	query.exec(function (err, docs) {
		return docs;
	});
};

AlbumRepository.prototype.getTracks = function(id) {
	var model = this.createModel();
	var query = model.find({_id: id}, 'tracks').populate('tracks');
	query.exec(function (err, docs) {
	return docs;
	});
};

AlbumRepository.prototype.getComments = function(id) {
	var model = this.createModel();
	var query = model.find({_id: id}, 'comments');
	query.exec(function (err, docs) {
		return docs;
	});
};

module.exports = new AlbumRepository();