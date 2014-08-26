var connection = require('../db/dbconnect.js');
var Userinfo = require('../schemas/user_info.js');
var Repository = require('./generalRepository.js');
var mongoose = require('mongoose');

function UserRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Userinfo;
	this.model = Userinfo;
}

UserRepository.prototype = new Repository();

UserRepository.prototype.getUserInfo = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({id: id});
	query.exec(callback);
};

UserRepository.prototype.getLike = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({user_auth_id: id},'liked').populate('liked');
	query.exec(callback);
};

UserRepository.prototype.getGroups = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({user_auth_id: id},'group').populate('group');
	query.exec(callback);
};

UserRepository.prototype.getPlaylists = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({user_auth_id: id},'playlists').populate('playlists');
	query.exec(callback);
};

UserRepository.prototype.getPlaylistsShare = function(id, pl_id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id, playlists : pl_id}).populate('playlists');
	query.exec(callback);
};

UserRepository.prototype.editPlaylist = function(id, body, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)}, body);
	query.exec(callback);
};

UserRepository.prototype.editLike = function(id, body, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)}, body);
	query.exec(callback);
};

UserRepository.prototype.editGroup = function(id, body, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)}, body);
	query.exec(callback);
};

module.exports = new UserRepository();
