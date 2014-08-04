var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hurri');
var artist = require('./repositories/artistRepository.js');


module.exports = function(app){
	app.get('/', function(req, res, next){
		res.send(artist.show);	
	});
};