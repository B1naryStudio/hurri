var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;

var playlistSchema = new Schema({ 
	name : {
		type: String, 
		default: 'Playlist'
	},
	tracks : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}],
	duration : { type: Number, min: 0 },
	mood : {
		type: String, 
		default: 'unknown'
	},
	created: {
		type: Date,
		default: Date.now
	},
	type: {
		type: String, 
		default: 'default'
	}
});

module.exports = playlistSchema;
