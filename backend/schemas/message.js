var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;

var messageSchema = new Schema({
    	 user_auth_id : {
        	type : Schema.Types.ObjectId,
        	ref : 'Userauth'
    	}, 
    	 date : {
    	 	type: Date, 
    	 	default: Date.now
    	 }, 
    	 message : String
});

module.exports = messageSchema;
