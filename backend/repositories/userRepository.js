var connection = require('../db/dbconnect.js');
var Userinfo = require('../schemas/user_info.js');
var Userauth = require('../schemas/user_auth.js');
var Repository = require('./generalRepository.js');
var mongoose = require('mongoose');

function UserRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Userauth;
	this.infoModel  = Userinfo;
}

UserRepository.prototype = new Repository();
//======USER-AUTH=================================================//
UserRepository.prototype.getUserAuth = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({id: id});
	query.exec(callback);
};

UserRepository.prototype.addFollower = function(id, fid, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({id: id},{$push: {followers:fid}} );
	query.exec(callback);
};

UserRepository.prototype.getFollower = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({id: id}, 'followers').populate('followers');
	query.exec(callback);
};

UserRepository.prototype.deleteFollower = function(id, userid, callback) {
	var model = this.createModel();
	model.findOne({id: id}, function(err, res){
           	 	res.followers.remove(userid);
				res.save(callback);                          
    });
};

UserRepository.prototype.addFollowing = function(id, fid, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({id: id},{$push: {following:fid}} );
	query.exec(callback);
};

UserRepository.prototype.getFollowing = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({id: id}, 'following').populate('following');
	query.exec(callback);
};

UserRepository.prototype.deleteFollowing = function(id, userid, callback) {
	var model = this.createModel();
	model.findOne({id: id}, function(err, res){
           	 	res.following.remove(userid);
				res.save(callback);                          
    });
};

UserRepository.prototype.addAlert = function(id, alert, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({id: id},{$push: {alerts:alert}} );
	query.exec(callback);
};

UserRepository.prototype.getAlerts = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({id: id}, 'alerts').populate('alerts');
	query.exec(callback);
};

UserRepository.prototype.deleteAlert = function(id, alertid, callback) {
	var model = this.createModel();
	model.findOne({id: id}, function(err, res){
           	 	res.alerts.remove(alertid);
				res.save(callback);                          
    });
};

UserRepository.prototype.deleteAllAlerts = function(id, callback) {
	var model = this.createModel();
	model.update({id: id},{ $set: { alerts: [] }}).exec(callback);
};

//========USER-INFO==========================================//
UserRepository.prototype.addUserInfo = function(user, callback){
	var model = this.infoModel;
	var newitem = new model(user);
	newitem.save(callback);
};

UserRepository.prototype.getUserInfo = function(id, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id});
	query.exec(callback);
};

Repository.prototype.updateUserInfo = function(id, body, callback) {
	var model = this.infoModel;
	var query = model.findOneAndUpdate({_id: id}, body);
	query.exec(callback);
};

UserRepository.prototype.getLike = function(id, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id},'liked').populate('liked');
	query.exec(callback);
};

UserRepository.prototype.getGroups = function(id, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id},'group').populate('group');
	query.exec(callback);
};

UserRepository.prototype.addLike = function(id, likedid, callback) {
	var model = this.infoModel;
	console.log(likedid);
	var query = model.findOneAndUpdate({user_auth_id: id},{$push: {liked:likedid}} );
	query.exec(callback);
};

UserRepository.prototype.addGroups = function(id, groupid, callback) {
	var model = this.infoModel;
	var query = model.findOneAndUpdate({user_auth_id: id},{$push: {group:groupid}} );
	query.exec(callback);
};

UserRepository.prototype.deleteLike = function(id, likedid, callback) {
	var model = this.infoModel;
	model.findOne({user_auth_id: id}, function(err, res){
           	 	res.liked.remove(likedid);
				res.save(callback);                          
    });
};

UserRepository.prototype.deleteGroups = function(id, groupid, callback) {
	var model = this.infoModel;
	model.findOne({user_auth_id: id}, function(err, res){
           	 	res.group.remove(groupid);
				res.save(callback);                          
    });
};

UserRepository.prototype.addPlaylists = function(id, playlist, callback) {
	var model = this.infoModel;
	var query = model.findOneAndUpdate({user_auth_id: id},{$push: {playlists:playlist}} );
	query.exec(callback);
};

UserRepository.prototype.deletePlaylists = function(id, playlistid, callback) {
	var model = this.infoModel;
	model.findOne({user_auth_id: id}, function(err, res){
           	 	res.playlists.remove(playlistid);
				res.save(callback);                          
    });
};

UserRepository.prototype.addSongToPlaylist = function(id, pid, tid, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id}, function(err, data){
		for(var i = 0; i < data.playlists.length; i++){
			if (data.playlists[i]._id == pid){
				data.playlists[i].tracks.push(tid);
				data.save(callback);
			}
		}
	});
};

UserRepository.prototype.deleteSongFromPlaylist = function(id, pid, tid, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id}, function(err, data){
		for(var i = 0; i < data.playlists.length; i++){
			if (data.playlists[i]._id == pid){
				data.playlists[i].tracks.remove(tid);
				data.save(callback);
			}
		}
	});
};

UserRepository.prototype.getPlaylists = function(id, callback) {
	var model = this.infoModel;
	console.log(id);
	var query = model.findOne({user_auth_id: id},'playlists');
	query.exec(callback);
};

UserRepository.prototype.getPlaylistsShare = function(id, pl_id, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id, 'playlists._id' : pl_id},'playlists');
	query.exec(callback);
};

module.exports = new UserRepository();
