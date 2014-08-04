var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userInfoSchema = new Schema({
	user_auth_id : Schema.Types.ObjectId,
	playlists : [{
		_id : Schema.Types.ObjectId, name : String,tracks : [Schema.Types.ObjectId],duration : Number,mood : String
	}],
	liked : [Schema.Types.ObjectId],
	totalListened : Number,
	group : [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Userinfo', userInfoSchema);