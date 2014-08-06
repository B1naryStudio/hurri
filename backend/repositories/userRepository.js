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

UserRepository.prototype.getUserInfo = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id});
	query.exec(function (err, docs) {
		return docs;
	});
};

UserRepository.prototype.getLike = function(id) {
		var model = this.createModel();
	var query = model.find({_id: id},'liked').populate('liked');
	query.exec(function (err, docs) {
		return docs;
	});
};
UserRepository.prototype.getGroups = function(id) {
	var model = this.createModel();
	var query = model.find({_id: id},'group').populate('group');
	query.exec(function (err, docs) {
		return docs;
	});
};
UserRepository.prototype.getPlaylists = function(id) {
	var model = this.createModel();
	var query = model.find({_id: id},'playlists').populate('playlists');
	query.exec(function (err, docs) {
		return docs;
	});
};

UserRepository.prototype.getPlaylistsShare = function(id, pl_id) {
	var model = this.createModel();
	var query = model.findOne({_id: id, playlists : pl_id}).populate('playlists');
	query.exec(function (err, docs) {
		return docs;
	});
};

UserRepository.prototype.editPlaylist = function(id, body) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)}, body);
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('updated');
	});
};
UserRepository.prototype.editLike = function(id, body) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)}, body);
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('updated');
	});
};
UserRepository.prototype.editGroup = function(id, body) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id:mongoose.Types.ObjectId(id)}, body);
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('updated');
	});
};

module.exports = new UserRepository();
