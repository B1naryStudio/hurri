var dialogRepository = require('../repositories/dialogRepository');
var _ = require('underscore');

module.exports = function(app){
	app.get('/api/dialogue/:id1/:id2', function(req, res, next){
		dialogRepository.getDialog(req.params.id1, req.params.id2, function(data){
			var status = _.isEmpty(data) ? 400 : 200;
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