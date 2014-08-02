var artistsRepository = require('repositories/artistsRepository');

module.exports = function(app){
	app.get('/artists/:id', function(req, res, next){
		res.json(artistsRepository.getById(req.param.id));
	});
};