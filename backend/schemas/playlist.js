var mongoose = require('mongoose');
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
	duration : Number,
	mood : {
        type: String, 
        default: 'unknown'
    }
});

module.exports = playlistSchema;

