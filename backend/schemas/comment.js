var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    user_auth_id : {
        type : Schema.Types.ObjectId,
        ref : 'Userauth' 
    },
    comment : String, 
    date : {
    	type: Date, 
    	default: Date.now
    }
});

module.exports = commentSchema;
