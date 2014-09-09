var connection = require('../db/dbconnect.js');
var Group = require('../schemas/like.js');
var Repository = require('./generalRepository.js');
var _ = require('underscore');

function LikeRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Like;
}

LikeRepository.prototype = new Repository();

LikeRepository.prototype.getLikes = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, 'userId').populate('userId');
	query.exec(callback);
};

LikeRepository.prototype.addLike = function(id, uid, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id: id},{$push: {userId: uid}} );
	query.exec(callback);
};

LikeRepository.prototype.deleteLike = function(id, uid, callback) {
	var model = this.createModel();
	model.findOne({_id: id}, function(err, res){
				res.userId.remove(uid);
				res.save(callback);						  
	});
};

module.exports = new LikeRepository();