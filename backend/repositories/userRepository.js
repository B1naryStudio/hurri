var connection = require('../db/dbconnect.js');
var Userinfo = require('../schemas/user_info.js');
var Userauth = require('../schemas/user_auth.js');
var Repository = require('./generalRepository.js');
var PlayList = require('../schemas/playlist.js');
var mongoose = require('mongoose');
var _ = require('underscore');

function UserRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Userauth;
	this.infoModel  = Userinfo;
}

UserRepository.prototype = new Repository();
//======USER-AUTH=================================================//
UserRepository.prototype.getUserAuth = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({$or:[{idVk: id},{idTw: id},{idFb: id}]});
	query.exec(callback);
};

UserRepository.prototype.addFollower = function(id, fid, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id: id},{$push: {followers:fid}} );
	query.exec(callback);
};

UserRepository.prototype.getFollower = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'followers').populate('followers');
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
	var query = model.findOneAndUpdate({_id: id},{$push: {following:fid}} );
	query.exec(callback);
};

UserRepository.prototype.getFollowing = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'following').populate('following');
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
	var query = model.findOneAndUpdate({_id: id},{$push: {alerts:alert}} );
	query.exec(callback);
};

UserRepository.prototype.getAlerts = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'alerts').populate('alerts');
	query.exec(callback);
};

UserRepository.prototype.deleteAlert = function(id, alertid, callback) {
	var model = this.createModel();
	model.findOne({_id: id}, function(err, res){
				res.alerts.remove(alertid);
				res.save(callback);						  
	});
};

UserRepository.prototype.deleteAllAlerts = function(id, callback) {
	var model = this.createModel();
	model.update({_id: id},{ $set: { alerts: [] }}).exec(callback);
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

UserRepository.prototype.getListened = function(id, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id},'listened').populate('listened');
	query.exec(callback);
};

UserRepository.prototype.getGroups = function(id, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id},'group').populate('group');
	query.exec(callback);
};

UserRepository.prototype.addLike = function(id, likedid, callback) {
	var model = this.infoModel;
	//console.log(likedid);
	var query = model.findOneAndUpdate({user_auth_id: id},{$push: {liked:likedid}} );
	query.exec(callback);
};

UserRepository.prototype.addListened = function(id, listenedid, callback) {
	var model = this.infoModel;
	//console.log(listenedid);
	var query = model.findOneAndUpdate({user_auth_id: id},{$push: {listened:listenedid}} );
	query.exec(callback);
};

UserRepository.prototype.addGroups = function(id, groupid, callback) {
	var model = this.infoModel;
	var query = model.findOneAndUpdate({user_auth_id: id},{$push: {group:groupid}} );
	query.exec(callback);
};

UserRepository.prototype.deleteLike = function(id, likedid, callback) {
	var model = this.infoModel;
	//console.log(id);
	//console.log(likedid);
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
	//console.log('addPlaylist called');
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

UserRepository.prototype.updatePlaylist = function(id, pid, body, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id}, function(err, data){
		for(var i = 0; i < data.playlists.length; i++){
			if (data.playlists[i]._id == pid){
				data.playlists[i].tracks = body.tracks;
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
	//console.log(id);
	var query = model.findOne({user_auth_id: id},'playlists', { lean: true }).populate('playlists.tracks');
	query.exec(callback);
};

UserRepository.prototype.getTracks = function(id, pid, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id},'playlists', function(err, data){
		//console.log(data);
		var  res = _.filter(data.playlists, function(it){
			//console.log(it.toString(), pid);
			return it._id.toString() === pid;
		});
		var playlist = mongoose.model('Playlist', PlayList);
		var list = new playlist(res[0]);
		// console.log(data, pid);
		 //console.log(list);
		var tracks = list.populate('tracks', function(err, data){
			callback(err, tracks.tracks);
		 });
		
	});
};

UserRepository.prototype.getPlaylistsShare = function(id, pl_id, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id, 'playlists._id' : pl_id},'playlists');
	query.exec(callback);
};

module.exports = new UserRepository();
