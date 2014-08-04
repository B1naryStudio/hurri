var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema({
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

module.exports = artistSchema;
