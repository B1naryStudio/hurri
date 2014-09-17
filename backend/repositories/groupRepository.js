var connection = require('../db/dbconnect.js');
var Group = require('../schemas/radio.js');
var Repository = require('./generalRepository.js');
var _ = require('underscore');

function GroupRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Group;
}

GroupRepository.prototype = new Repository();

GroupRepository.prototype.getMembers = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'listeners').populate('listeners');
	query.exec(callback);
};


GroupRepository.prototype.getAll = function(callback) {
	var model = this.createModel();
	var query = model.find({}).populate('tracks').populate('listeners').populate('user_auth_id');
	query.exec(callback);
};

GroupRepository.prototype.getById = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}).populate('listeners').populate('tracks');
	query.exec(callback);
};

GroupRepository.prototype.getTracks = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id},'tracks').populate('tracks');
	query.exec(callback);

};

GroupRepository.prototype.addListeners = function(id, body, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id: id},{$push: {listeners:body.listener}} );
	query.exec(callback);
};

GroupRepository.prototype.deleteTrack = function(id, trackid, callback) {
	var model = this.createModel();
	model.findOne({_id: id}, function(err, res){
				res.tracks.remove(trackid);
				res.save(callback);						  
	});
};


GroupRepository.prototype.deleteListener = function(id, listenerid, callback) {
	var model = this.createModel();
	model.findOne({_id: id}, function(err, res){
				res.listeners.remove(listenerid);
				res.save(callback);						  
	});
};

GroupRepository.prototype.addTracks = function(id, body, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id: id},{$push: {tracks:body.track}} );
	query.exec(callback);
};


module.exports = new GroupRepository();