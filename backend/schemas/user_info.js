var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;
var playlistSchema = require('./playlist.js');

var userInfoSchema = new Schema({
	user_auth_id: { 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	},
	playlists : [playlistSchema],
	liked : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}],
	listened : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}],
	totalListened : {
		type: Number, 
		default: 0
	},
	group : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Radio' 
	}]
});

module.exports =  mongoose.model('Userinfo', userInfoSchema);
