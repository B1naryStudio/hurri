var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = require('./comment.js');

var trackSchema = new Schema({
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
        type: String, 
        default: 'No lyrics for this song. Sorry.'
    },
    album : Number,
    singer : Number,
    url : String,
    comments : [commentSchema]
});

module.exports = mongoose.model('Track', trackSchema);
