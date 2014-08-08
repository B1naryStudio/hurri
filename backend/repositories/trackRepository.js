var connection = require('../db/dbconnect.js');
var Track = require('../schemas/track.js');
var Repository = require('./generalRepository.js');

function TrackRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Track;
}

TrackRepository.prototype = new Repository();

TrackRepository.prototype.getTitle = function(id, callback) {
	var model = this.createModel();
	var query = model.find({});
	query.exec(callback);
};

TrackRepository.prototype.getLirycs = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id},'lyrics');
	query.exec(callback);
};

TrackRepository.prototype.getUrl = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id},'url');
	query.exec(callback);
};

TrackRepository.prototype.getComments = function(id, callback) {
	var model = this.createModel();
	var query = model.find({_id: id},'comment');
	query.exec(callback);
};

module.exports = new TrackRepository();