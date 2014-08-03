var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackSchema = new Schema({
	_id : Schema.Types.ObjectId,
    title : String,
    duration : Number,
    position : Number,
    release_date : Date,
    kbps : Number,
    lyrics : String,
    album : {_id : Schema.Types.ObjectId, title : String, cover : String},
    singer : {_id : Schema.Types.ObjectId, name : String},
    url : String,
    comment : [{user_auth_id : Schema.Types.ObjectId, comment : String, date : Date}]
})