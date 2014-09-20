var connection = require('../db/dbconnect.js');
var Userinfo = require('../schemas/user_info.js');
var Userauth = require('../schemas/user_auth.js');
var Like = require('../schemas/like.js');
var Repository = require('./generalRepository.js');
var likeRepository = require ('./likeRepository.js');
var PlayList = require('../schemas/playlist.js');
var trackRepository = require('./trackRepository.js');
var mongoose = require('mongoose');
var _ = require('underscore');
var Track = require('../schemas/track.js');
var VK = require('../social_network_wrapper/VKWrapper');
var async = require('async');
var genres = {
	1: "Rock",
	2: "Pop",
	3: "Hip Hop",
	4: "R&B/Soul/Funk",
	5: "Dance",
	6: "World",
	7: "World",
	8: "World",
	9: "Jazz",
	10: "World",
	11: "World",
	12: "World",
	13: "World",
	14: "World",
	15: "Reggae",
	16: "Classical",
	17: "World",
	18: "World",
	19: "World",
	21: "Alternative",
	22: "Electro"
};
var ObjectId = require('mongoose').Types.ObjectId;

function UserRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Userauth;
	this.infoModel = Userinfo;
	this.likeModel = Like;
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
	//mediator.publish('notifications:notification-add', {id: id, alert: alert});
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


UserRepository.prototype.getFollowersFromList = function(id, list, callback) {
	var model = this.createModel();
	//console.log('list=', list);
	var query = model.findOne({_id: id}, 'following').populate('following').find({'following._id': {$in: list}});
	query.exec(callback);
};
//========USER-INFO==========================================//
UserRepository.prototype.songLikeState = function(uid, song, callback) {
	song = song.toObject();
	var self = this;
	var sid = song._id;
	var model = this.likeModel;
	//console.log('sid', sid);
	//console.log('uid', uid);
	var query =  model.findOne({likeSong: sid});
	query.exec(function(err, data){
		//console.log('err=', err);
		//console.log('data=', data);
		if (!data || err){
			callback(err, song);
			return;
		}
		
		for (var i = 0; i < data.userId.length; i++){
		//	console.log('data userid', data.userId[i], uid, data.userId[i].equals(uid));
			if (data.userId[i].equals(uid)){
				song.liked = true;
				break;
			} else {
				song.liked =  false;
			}
		}
		self.getFollowersFromList(uid, data.userId, function(err, data){
		//console.log('data=', data[0].following[0]);
		//console.log('song=', song);
			if (!data[0] || err){
				callback(err, song);
				return;
			}
		//	for (var i = 0; i < data.length; i++){
				song.likedId = data[0].following;
		//	}
			//console.log(' err list=', err);
			callback(err, song);
		});		
	});
};

UserRepository.prototype.getTracks = function(id, pid, callback) {
	var self = this;
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
			//console.log('tracks=',tracks.tracks);
			async.map(tracks.tracks, self.songLikeState.bind(self, id), function(err, results){
				//console.log('getTracksResults=', results);
				callback(err, results);
			});
		//	callback(err, results);
		 });
		
	});
};


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


UserRepository.prototype.getUserListInfo = function(list, callback) {
	var model = this.infoModel;
	var query = model.find({user_auth_id: {$in:list}}).populate('listened').populate('liked');
	query.exec(callback);
};

UserRepository.prototype.getFollowersInfo = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'followers').populate('followers');
	var self = this;
	query.exec(function(err,data){
		var infomodel = Userinfo;
			//console.log('id=',data.followers[0]._id);
			var list = [];
			for (var i=0; i<data.followers.length; i++){
				list.push(data.followers[i]._id);
			}
			self.getUserListInfo(list, function(error, data){
				console.log('data=',data);
				console.log('error', error);
				callback(error, data);
			});
	//	}

	});
};

UserRepository.prototype.getFollowingInfo = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'following').populate('following');
	var self = this;
	query.exec(function(err,data){
		var infomodel = Userinfo;
			//console.log('id=',data.following[0]._id);
			var list = [];
			for (var i=0; i<data.following.length; i++){
				list.push(data.following[i]._id);
			}
			//console.log('list', list);
			self.getUserListInfo(list, function(error, data){
				console.log('data=',data);
				console.log('error', error);
				callback(error, data);
			});
			
		});
};

UserRepository.prototype.sync = function(id, callback) {
	var self = this;
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id}, 'playlists', { lean: true }).findOne({'playlists.name' : 'VK'});
	query.exec(function(err, data){
		var opts = [
			{ path: 'tracks', model: 'Track' }
		];
		Track.populate(data.playlists, opts, function(err, res){
			var result = _.findWhere(res, {name : 'VK'});
			var list = result.tracks;
			var auth = self.createModel();
			auth.findOne({_id:id},'idVk', function(err, dataauth){
				//console.log(data);
				VK.getUserAudio(dataauth.idVk, function(playlist){
					var vklist = playlist.response;
					var vkSongNames = [];
					var vkSongTitle = _.pluck(vklist, 'title');
					var vkSongSinger = _.pluck(vklist, 'artist');
					for (var i = 1; i < vkSongTitle.length; i++){
						vkSongNames.push(vkSongTitle[i] + ' - ' + vkSongSinger[i]);
					}
					////console.log(vkSongNames);
					var synchronised = _.filter(list, function(item){
    					return vkSongNames.indexOf(item.title) !== -1;
					});

					var synchronisedNames = _.pluck(synchronised, 'title');

					var synchronisedDiff = _.filter(vklist, function(item){
    					return synchronisedNames.indexOf(item.title + ' - '+item.artist) === -1;
					});

					var synchronisedFinal = synchronised.concat(synchronisedDiff);
					var pure = _.filter(synchronisedFinal, function(item){
						return item.title !== undefined;
					});
					var tracksToSave = [];
					var ids = [];

					for (var track in pure){
						if (pure[track].aid){
							var tid = mongoose.Types.ObjectId();
							var newTrack = {
									_id: tid,
									title : pure[track].title + ' - ' + pure[track].artist,
									duration : pure[track].duration,
									url : pure[track].url,
									genre: genres[pure[track].genre],
									type: 'vk',
									singer: null,
									albumTitle : 'VK',
									albumCover: '/images/default/vk.png'
							};
							ids.push(tid);
							trackRepository.add(newTrack);
						} else {
							ids.push(pure[track]._id);
						}
					}
					//console.log('ID', id,  'PLAYLIST:', result._id);
					self.updatePlaylist(id, result._id, {tracks: ids}, function(err, info){
						//console.log(err, info);
					});
				});

			});
			
			////console.log('DATA: ', result.tracks);
		});	
	});
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
	////console.log(likedid);
	var query = model.findOneAndUpdate({user_auth_id: id},{$push: {liked:likedid}} );
	query.exec(callback);
};

UserRepository.prototype.addListened = function(id, listenedid, callback) {
	var model = this.infoModel;
	////console.log(listenedid);
	var query = model.findOneAndUpdate({user_auth_id: id},{$addToSet: {listened:listenedid}} );
	query.exec(callback);
};

UserRepository.prototype.addGroups = function(id, groupid, callback) {
	var model = this.infoModel;
	var query = model.findOneAndUpdate({user_auth_id: id},{$push: {group:groupid}} );
	query.exec(callback);
};

UserRepository.prototype.deleteLike = function(id, likedid, callback) {
	var model = this.infoModel;
	////console.log(id);
	////console.log(likedid);
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
	////console.log('addPlaylist called');
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
	//console.log('update Called');
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id}, function(err, data){
		//console.log(err, data);
		for(var i = 0; i < data.playlists.length; i++){
			//console.log(data.playlists[i]._id, pid);
			if (data.playlists[i]._id.toString() === pid.toString()){
				//console.log('Find list');
				data.playlists[i].tracks = body.tracks;
				data.save(callback);
			}
		}
	});
};

UserRepository.prototype.updatePlaylistType = function(id, pid, body, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id}, function(err, data){
		for(var i = 0; i < data.playlists.length; i++){
			if (data.playlists[i]._id == pid){
				//console.log('body=', body);
				data.playlists[i].type = body.type;
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
	////console.log(id);
	var query = model.findOne({user_auth_id: id},'playlists', { lean: true }).populate('playlists.tracks');
	query.exec(callback);
};

UserRepository.prototype.getPublicPlaylists = function(id, callback) {
	var model = this.infoModel;
	////console.log(id);
	var query = model.findOne({user_auth_id: id, 'playlists.type': 'private'}, 'playlists', function(err, data){
		for(var i = 0; i < data.playlists.length; i++){
			if (data.playlists[i].type === 'private'){
				data.playlists[i].remove();
			}
		}
		console.log('error public pl', err);
		console.log('data public pl', data);
		callback(err, data);
	});

};

UserRepository.prototype.getPlaylistsShare = function(id, pl_id, callback) {
	var model = this.infoModel;
	var query = model.findOne({user_auth_id: id, 'playlists._id' : pl_id},'playlists');
	query.exec(callback);
};

module.exports = new UserRepository();
