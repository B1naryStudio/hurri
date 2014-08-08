var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;

var accountSchema = new Schema({
	name : String, 
    email : String, 
    accountType : String
});

module.exports = accountSchema;
