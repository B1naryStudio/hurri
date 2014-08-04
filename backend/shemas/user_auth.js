var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userAuthSchema = new Schema({
	_id : Schema.Types.ObjectId,
    name : String,
    avatarUrl : String,
    country : String,
    age : Number,
    email : String,
    friends : [Schema.Types.ObjectId],
    registrationAccounts : [{name : String, email : String, accountType : String}],
    alerts : [{name : String, type : String, additionalInfo : String}],
    online : Boolean
});

module.exports = mongoose.model('Userauth', userAuthSchema);