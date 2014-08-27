var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;
var accountSchema = require('./account.js');
var alertSchema = require('./alert.js');

var userAuthSchema = new Schema({
	accountType : String,
	id: Number,
	name : String,
	email : String,
	avatarUrl : String,
	country : {
		type: String, 
		default: 'Unknown country'
	},
	age : {
		type: Number, 
		default: 18
	},
	friends : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	}],
	alerts : [alertSchema],
	online : Boolean
});

module.exports =  mongoose.model('Userauth', userAuthSchema);