var DialogueRepository = require('../repositories/dialogueRepository');
var dialogueRepository = new DialogueRepository();

module.exports = function(app){
	app.get('/api/dialogue/:id1/:id2', function(req, res, next){
		res.json(dialogueRepository.getDialogue(req.params.id1, req.params.id2));
	});

	app.put('/api/dialogue/:id', function(req, res, next){
		dialogueRepository.update(req.params.id);
		res.end();
	});

	app.delete('/api/dialogue/:id', function(req, res, next){
		dialogueRepository.delete(req.params.id);
		res.end();
	});
};