var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var playlistSchema = require('./playlist.js');

var userInfoSchema = new Schema({
	user_auth_id : { 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	},
	playlists : [playlistSchema],
	liked : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}],
	totalListened : Number,
	group : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}]
});

module.exports = userInfoSchema;
