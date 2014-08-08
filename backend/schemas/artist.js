var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var albumModel = require('./album.js');

var artistSchema = new Schema({
    deezer_id : Number,
    name : String,
    picture : {
        type: String, 
        default: '/image/defaultSinger.jpg'
    },
    albums_id : [Number],
    genres : [String],
    bio : {
        type: String, 
        default: 'No bio for this singer/group. Sorry.'
    }
});

module.exports = mongoose.model('Artist', artistSchema);
