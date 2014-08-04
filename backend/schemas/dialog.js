var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = require('./message.js');

var dialogSchema = new Schema({
    user_auth_id1 : {
        type : Schema.Types.ObjectId,
        ref : 'Userauth'
    },
    user_auth_id2 : {
        type : Schema.Types.ObjectId,
        ref : 'Userauth'
    },
    dialogue : [messageSchema]
});

module.exports = dialogSchema;
