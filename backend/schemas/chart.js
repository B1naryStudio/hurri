var mongoose = require('../db/mongoose');

var Schema = mongoose.Schema;

var chartSchema = new Schema({ 
	name : {
		type: String, 
		default: 'Hot 100'
	},
	tracks : [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Track' 
	}],
	info:{
		type: String, 
		default: 'Super'
	},
	positionLw: [Number],
	positionChange: [Number]

});

module.exports = mongoose.model('Chart', chartSchema);
