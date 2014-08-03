var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var singerSchema = new Schema({
	_id : Schema.Types.ObjectId,
    name : String,
    picture : String,
    albums_id : [Schema.Types.ObjectId],
    genres : [String],
    bio : String
});