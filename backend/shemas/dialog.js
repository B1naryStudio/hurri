var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dialogSchema = new Schema({
	_id : Schema.Types.ObjectId,
    id1 : Schema.Types.ObjectId,
    id2 : Schema.Types.ObjectId,
    dialogue : [{
    	 _id : Schema.Types.ObjectId, user_auth_id : Schema.Types.ObjectId, date : Date, message : String
        }]
});