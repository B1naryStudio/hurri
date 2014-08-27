var connection = require('../db/dbconnect.js');
var Track = require('../schemas/track.js');
var Repository = require('./generalRepository.js');

function TrackRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Track;
}

//TrackRepository.prototype = new Repository();

TrackRepository.prototype.getById = function(id, callback) {
	var model = this.model;
	var query = model.findOne({_id:id}).populate('album').populate('singer');
	query.exec(callback);
};

TrackRepository.prototype.getByTitle = function(title, callback) {
	var model = this.model;
	regexp = new RegExp(title, "i");
	var query = model.find({title: regexp});
	query.exec(callback);
};

TrackRepository.prototype.getTitle = function(id, callback) {
	var model = this.model;
	var query = model.find({_id:id}, 'title');
	query.exec(callback);
};

TrackRepository.prototype.getLirycs = function(id, callback) {
	var model = this.model;
	var query = model.findOne({_id: id},'lyrics');
	query.exec(callback);
};

TrackRepository.prototype.getUrl = function(id, callback) {
	var model = this.model;
	var query = model.findOne({_id: id},'url');
	query.exec(callback);
};

TrackRepository.prototype.getComments = function(id, callback) {
	var model = this.model;
	var query = model.findOne({_id: id}, 'comment').populate('comment.user_auth_id').exec(callback);
};

TrackRepository.prototype.addComments = function(id, body, callback) {
	var model = this.model;
	var query = model.findOneAndUpdate({_id: id},{$push: {comment:body}} );
	query.exec(callback);
};

module.exports = new TrackRepository();