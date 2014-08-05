var DialogueRepository = require('../repositories/dialogueRepository');
var dialogueRepository = new DialogueRepository();

module.exports = function(app){
	app.get('/api/dialogue/:id1/:id2', function(req, res, next){
		res.json(dialogueRepository.getDialogue(req.param.id1, req.param.id2));
	});

	app.put('/api/dialogue/:id', function(req, res, next){
		dialogueRepository.editDialogue(req.param.id);
		res.end();
	});

	app.delete('/api/dialogue/:id', function(req, res, next){
		dialogueRepository.deleteDialogue(req.param.id);
		res.end();
	});
};