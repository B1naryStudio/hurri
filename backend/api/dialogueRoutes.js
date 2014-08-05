var dialogueRepository = require('../repositories/dialogueRepository');

module.exports = function(app){
	app.get('/api/dialogue/:id1/:id2', function(req, res, next){
		res.json(dialogueRepository.getDialogue(req.params.id1, req.params.id2));
	});

	app.delete('/api/dialogue/:id', function(req, res, next){
		dialogueRepository.delete(req.params.id);
		res.end();
	});
};