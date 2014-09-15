var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;

var lyricSchema = new Schema({
	lyric : { 
		type: String, 
		default: 'No lyrics, sorry...' 
	},
	_id : Schema.Types.ObjectId 
});

module.exports =  mongoose.model('Lyric', lyricSchema);