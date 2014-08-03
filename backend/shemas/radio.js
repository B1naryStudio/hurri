var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var radioSchema = new Schema({
	 _id : Schema.Types.ObjectId,
    user_auth_id : Schema.Types.ObjectId,
    listeners : [Schema.Types.ObjectId],
    tracks : [Schema.Types.ObjectId],
    active : Boolean
});