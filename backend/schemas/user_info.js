var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;
var playlistSchema = require('./playlist.js');
var accountSchema = require('./account.js');
var alertSchema = require('./alert.js');

var userInfoSchema = new Schema({
	accountType : String,
	id: Number,
	name : String,
	email : {
		type: String, 
		default: '1@1.com'
	},
	avatarUrl : String,
	playlists : [playlistSchema],
	liked : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}],
	totalListened : {
		type: Number, 
		default: 0
	},
	group : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}],
	country : {
		type: String, 
		default: 'Unknown country'
	},
	age : {
		type: Number, 
		default: 18
	},
	friends : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	}],
	alerts : [alertSchema],
	online : Boolean
});

module.exports =  mongoose.model('Userinfo', userInfoSchema);
