var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;

var radioSchema = new Schema({
	name : {
		type: String,
		default: ''
	},
	user_auth_id : { 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	},
	listeners : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	}],
	requiring:[{
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	}],
	editors:[{
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	}],
	tracks : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}],
	active : Boolean
});

module.exports =  mongoose.model('Radio', radioSchema);
