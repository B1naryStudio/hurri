var dialogRepository = require('../repositories/dialogRepository');

module.exports = function(app){
	app.get('/api/dialogue/:id1/:id2', function(req, res, next){
		dialogRepository.getDialog(13123123,1312321312);
		res.json(dialogRepository.getDialog(req.params.id1, req.params.id2));
	});

	app.delete('/api/dialogue/:id', function(req, res, next){
		dialogRepository.delete(req.params.id);
		res.end();
	});
};