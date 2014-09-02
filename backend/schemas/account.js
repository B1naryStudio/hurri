var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;

var accountSchema = new Schema({
	name : String, 
	email : String, 
	accountType : String,
	id: Number
});

module.exports = accountSchema;
