var connection = require('../db/dbconnect.js');
var Lyric = require('../schemas/lyric.js');
var Repository = require('./generalRepository.js');
var userRepository = require ('./userRepository.js');
var _ = require('underscore');

function LikeRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Lyric;
}

LikeRepository.prototype = new Repository();

LikeRepository.prototype.getLyric = function(id, callback){
	var query = this.model.findOne({track_id: id});
	query.exec(callback);
};

module.exports = new LikeRepository();