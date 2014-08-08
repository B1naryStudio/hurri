var artistRepository = require('../repositories/artistRepository');

var injectData = require('../middleware/injectDataMiddleware');

module.exports = function (app) {

	app.get('/artist/:id', function(req, res, next){
		injectData(artistRepository.getById(req.params.id), res);
	});

	app.get('/artist/:name', function(req, res, next){
		injectData(artistRepository.getByName(req.params.name), res);
	});


};