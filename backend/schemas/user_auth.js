var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var accountSchema = require('./account.js');
var alertSchema = require('./alert.js');

var userAuthSchema = new Schema({
    name : String,
    avatarUrl : String,
    country : {
        type: String, 
        default: 'Unknown country'
    },
    age : {
        type: Number, 
        default: 'Undefined'
    },
    email : String,
    friends : [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Userauth' 
    }],
    registrationAccounts : [accountSchema],
    alerts : [alertSchema],
    online : Boolean
});

module.exports = mongoose.model('Userauth', userAuthSchema);
