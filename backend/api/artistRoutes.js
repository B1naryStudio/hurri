var artistRepository = require('../repositories/artistRepository');
artistRepository.update('adaadaadaada', {});

module.exports = function(app){
	app.get('/api/artist/:id', function(req, res, next){
		res.json(artistRepository.getById(req.params.id));
	});

	app.get('/api/artist/:name', function(req, res, next){
		res.json(artistRepository.getByName(req.params.name));
	});

	app.post('/api/artist/', function(req, res){
		artistRepository.add(req.body);
		res.end();
	});

	app.put('/api/artist/:id', function(req, res, next){
		artistRepository.update(req.params.id, req.body);
		res.end();
	});

	app.delete('/api/artist/:id', function(req, res, next){
		artistRepository.delete(req.params.id);
		res.end();
	});

}; 