var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var radioSchema = new Schema({
    user_auth_id : { 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	},
    listeners : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Userauth' 
	}],
    tracks : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}],
    active : Boolean
});

module.exports = mongoose.model('Radio', radioSchema);
