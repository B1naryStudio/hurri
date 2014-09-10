var connection = require('../db/dbconnect.js');
var Like = require('../schemas/like.js');
var Repository = require('./generalRepository.js');
var _ = require('underscore');

function LikeRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Like;
	this.model = Like;
}
LikeRepository.prototype = new Repository();

LikeRepository.prototype.getLikes = function(sid, callback) {
	var model = this.createModel();
	var query = model.findOne({likeSong: sid}, 'userId').populate('userId');
	query.exec(callback);
};

LikeRepository.prototype.addLike = function(sid, uid, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({likeSong: sid},{$push: {userId: uid}});
	query.exec(function(err, data){
		if (data === null){
				var newitem = new model({likeSong: sid, userId: uid});
				newitem.save(callback);
		}
	});
};

LikeRepository.prototype.deleteLike = function(sid, uid, callback) {
	var model = this.createModel();
	model.findOne({likeSong: sid}, function(err, res){
				res.userId.remove(uid);
				res.save(callback);						  
	});
};

module.exports = new LikeRepository();