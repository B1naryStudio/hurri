var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;

var messageSchema = new Schema({
		user_auth_id : {
			type : Schema.Types.ObjectId,
			ref : 'Userauth'
		}, 
		date : String, 
		message : String
});

module.exports = messageSchema;
