var artistRepository = require('../repositories/artistRepository');

module.exports = function(app){
	app.get('/artists/:id', function(req, res, next){
		res.json(artistRepository.getById(req.param.id));
	});
};