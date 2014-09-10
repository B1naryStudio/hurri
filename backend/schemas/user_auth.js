var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;
var accountSchema = require('./account.js');
var alertSchema = require('./alert.js');

var userAuthSchema = new Schema({
	accountType : String,
	idVk: Number,
	idTw: Number,
	idFb: Number,
	name : String,
	email : {
		type: String,
		default: 'undefined'
	},
	avatarUrl : String,
	country : {
		type: String, 
		default: 'Unknown country'
	},
	vkToken: String,
	twToken: String,
	fbToken: String,
	age : {
		type: Number, 
		default: 18,
		min: 0,
		max: 130
	},
	followers : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	}],
	following : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	}],
	alerts : [alertSchema],
	online : Boolean
});

module.exports =  mongoose.model('Userauth', userAuthSchema);