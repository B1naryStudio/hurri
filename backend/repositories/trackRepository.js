var connection = require('../db/dbconnect.js');
var Track = require('../schemas/track.js');
var Repository = require('./generalRepository.js');
var Lyric = require('./lyricRepository.js');
var mongoose = require('mongoose');
var VK = require('../social_network_wrapper/VKWrapper');

function TrackRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Track;
}

TrackRepository.prototype = new Repository();

TrackRepository.prototype.getById = function(id, callback) {
	var ids = mongoose.Types.ObjectId(id);
	var model = this.model;
	var query = model.findOne({_id:ids}).populate('album').populate('singer');
	query.exec(callback);
};

TrackRepository.prototype.getAll = function(genre, callback) {
	var model = this.model;
	console.log(genre);
	var query = model.find({}).populate('album', null, {'album.genres': {$in : [genre]}}).populate('singer').limit(50);
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

TrackRepository.prototype.getTitle = function(id, callback) {
	var model = this.model;
	var query = model.find({_id:id}, 'title');
	query.exec(callback);
};

TrackRepository.prototype.getLyrics = function(id, name, callback) {
	var model = this.model;
	var query = model.findOne({_id: id}).populate('lyricsText');
	query.exec(function(err, data){
		if (!data.lyricsText){

			var options = {
				query: encodeURIComponent(name),
				sort: 2,
				onlyArtist: 0,
				auto_complete: 1,
				count: 1
			};

			VK.getAudioSearch(options, function(results){
				if (results !== 404 && results.lyrics_id !== undefined){
					VK.getLyricsById(results.lyrics_id, function(lyrics){
						var l_id = mongoose.Types.ObjectId();
						Lyric.add({_id: l_id, lyric: lyrics.response.text}, function(){
							model.findOneAndUpdate({_id:id}, {lyricsText: l_id}, function(){
								callback(err, lyrics.response.text);
							});
						});
						
					});
				} else {
					callback(err, 'Sorry, we didn\'t find any lyrics...');
				}
			});
		} else {
			callback(err, data.lyricsText.lyric);
		}
	});
};

TrackRepository.prototype.getUrl = function(id, callback) {
	var model = this.model;
	var query = model.findOne({_id: id},'url');
	query.exec(callback);
};

TrackRepository.prototype.getComments = function(id, callback) {
	var model = this.model;
	var query = model.findOne({_id: id}, 'comment').populate('comment.user_auth_id').exec(callback);
};

TrackRepository.prototype.addComments = function(id, body, callback) {
	var model = this.model;
	var query = model.findOneAndUpdate({_id: id},{$push: {comment:body}} );
	query.exec(callback);
};

module.exports = new TrackRepository();