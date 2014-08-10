var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;
var albumModel = require('./album.js');

var artistSchema = new Schema({
     _id: Schema.Types.ObjectId,
    deezer_id : Number,
    name : String,
    picture : {
        type: String, 
        default: '/image/defaultSinger.jpg'
    },
    albums_id : [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Album'
    }],
    genres : [String],
    bio : {
        type: String, 
        default: 'No bio for this singer/group. Sorry.'
    }
});

module.exports = mongoose.model('Artist', artistSchema);
