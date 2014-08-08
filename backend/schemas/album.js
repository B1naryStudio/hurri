var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = require('./comment.js');

var albumSchema = new Schema({
    deezer_id : Number,
    title : String,
    cover : {
        type: String, 
        default: '/image/defaultCover.jpg'
    },
    duration : Number,
    release_date : Date,
    singer : Number,
    genres : [{
        type: String, 
        default: 'unknown'
    }],
    comment : [commentSchema],
    tracks : [Number]
});

module.exports = mongoose.model('Album', albumSchema);
