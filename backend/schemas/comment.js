var mongoose = require('../db/mongoose');
var userAuth = require('./user_auth.js');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
	user_auth_id : {
		type : Schema.Types.ObjectId,
		ref : 'Userauth' 
	},
	comment : String,
	userName: String,
	avatar: String, 
	date : String
});
mongoose.model('Comment', commentSchema);
module.exports = commentSchema;
