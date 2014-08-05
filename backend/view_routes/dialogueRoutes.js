var DialogueRepository = require('../repositories/dialogueRepository');

var dialogueRepository = new DialogueRepository();

var renderHelper = require('./renderHelper');

module.exports = function (app) {

	app.get('/dialogue/:id1/:id2', function (req, res, next) {
		var template = renderHelper({
			data: {
				dialogue: [
					{user_auth_id: 1, date: '2014-06-22', message: 'You\'re an idiot!'},
					{user_auth_id: 2, date: '2014-06-22', message: 'Get off!!11'},
					{user_auth_id: 1, date: '2014-06-22', message: 'NO!!!! WQAT???'},
					{user_auth_id: 2, date: '2014-06-22', message: 'Yore banned!'}
				]
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});


};