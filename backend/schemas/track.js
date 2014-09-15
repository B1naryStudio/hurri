var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;
var commentSchema = require('./comment.js');

var trackSchema = new Schema({
	_id: Schema.Types.ObjectId,
	deezer_id: Number,
	title : String,
	duration : Number,
	position : {
		type: Number, 
		default: 0
	},
	release_date : Date,
	kbps : {
		type: Number, 
		default: 128
	},
	lyrics : {
		type: Schema.Types.ObjectId, 
		ref: 'Lyric'
	},
	album : { 
		type: Schema.Types.ObjectId, 
		ref: 'Album'
	},
	singer : { 
		type: Schema.Types.ObjectId, 
		ref: 'Artist'
	},
	genre: {
		type: String, 
		default: ''
	},
	type:{
		type: String, 
		default: 'deezer'
	},
	url : String,
	comment : [commentSchema],
	lyricsText : {
		type: Schema.Types.ObjectId, 
		ref: 'Lyric'
	},
});

module.exports = mongoose.model('Track', trackSchema);
