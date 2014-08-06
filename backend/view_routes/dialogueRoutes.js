var DialogueRepository = require('../repositories/dialogueRepository');

var dialogueRepository = new DialogueRepository();

var renderHelper = require('./renderHelper');

module.exports = function (app) {

	app.get('/dialogue/:id1/:id2', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});


};