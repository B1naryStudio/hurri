var dialogRepository = require('../repositories/dialogRepository');
var apiResponse = require('../middleware/apiResponse');


module.exports = function(app){
	app.get('/api/dialogue/:id1/:id2', function(req, res, next){
		dialogRepository.getDialog(req.params.id1, req.params.id2, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.post('/api/dialogue/:id1/:id2', function(req, res, next){
		dialogRepository.addDialog(req.params.id1, req.params.id2, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/api/dialogue/:id1/:id2', function(req, res, next){
		dialogRepository.addMessage(req.params.id1, req.params.id2, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);


	app.delete('/api/dialogue/:id', function(req, res, next){
		dialogRepository.delete(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
};