var connection = require('../db/dbconnect.js');
var Track = require('../schemas/track.js');
var Repository = require('./generalRepository.js');
var mongoose = require('mongoose');

function TrackRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Track;
}

TrackRepository.prototype = new Repository();

TrackRepository.prototype.addTrack = function(data, callback){
	if (data._id === undefined){
		var ids = mongoose.Types.ObjectId();
		var model = this.createModel();
		var newitem = new model({
			_id:ids,
			title: data.title + ' - ' + data.singer 
		});
		newitem.save(callback);
	}
};

TrackRepository.prototype.getById = function(id, callback) {
	var ids = mongoose.Types.ObjectId(id);
	var model = this.model;
	var query = model.findOne({_id:ids}).populate('album').populate('singer');
	query.exec(callback);
};

TrackRepository.prototype.getAll = function(callback) {
	var model = this.model;
	var query = model.find({}).populate('album').populate('singer').limit(50);
	query.exec(callback);
};

TrackRepository.prototype.getByTitle = function(title, limit, quick, callback) {
	var model = this.model;
	var lim = limit || '';
	var q = quick || '';
	regexp = new RegExp(q + title, "i");
	var query = model.find({title: regexp}).populate('singer').limit(lim);
	query.exec(callback);
};

TrackRepository.prototype.getExistSong = function(song, callback) {
	var model = this.model;
	var query = model.find({title: song.title +' - '+ song.singer});
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
	var query = model.findOne({_id: id}, 'comment').exec(callback);
};

TrackRepository.prototype.addComments = function(id, body, callback) {
	var model = this.model;
	var query = model.findOneAndUpdate({_id: id},{$push: {comment:body}} );
	query.exec(callback);
};

module.exports = new TrackRepository();