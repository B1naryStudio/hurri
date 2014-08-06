var connection = require('../db/dbconnect.js');
var Track = require('../schemas/track.js');
var Repository = require('./generalRepository.js');

function TrackRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Track;
	this.model = Track;
}

TrackRepository.prototype.getTitle = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id},'title');
	query.exec(function (err, docs) {
		return docs;
	});
};

TrackRepository.prototype.getLirycs = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id},'lyrics');
	query.exec(function (err, docs) {
		return docs;
	});
};

TrackRepository.prototype.getUrl = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id},'url');
	query.exec(function (err, docs) {
		return docs;
	});
};

TrackRepository.prototype.getComments = function(id) {
	var model = this.createModel();
	var query = model.find({_id: id},'comment');
	query.exec(function (err, docs) {
		return docs;
	});
};

TrackRepository.prototype = new Repository();

module.exports = new TrackRepository();