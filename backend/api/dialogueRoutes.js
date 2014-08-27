var dialogRepository = require('../repositories/dialogRepository');
var _ = require('underscore');

module.exports = function(app){
	app.get('/api/dialogue/:id1/:id2', function(req, res, next){
		dialogRepository.getDialog(req.params.id1, req.params.id2, function(err, data){
			var status = _.isEmpty(data) ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.post('/api/dialogue', function(req, res, next){
		dialogRepository.add(req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});

	app.put('/api/dialogue/:id1/:id2', function(req, res, next){
		dialogRepository.addMessage(req.params.id1, req.params.id2, req.body, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});


	app.delete('/api/dialogue/:id', function(req, res, next){
		dialogRepository.delete(req.params.id, function(err, data){
			var status = err ? 400 : 200;
			res.status(status).json(data);
		});
	});
};