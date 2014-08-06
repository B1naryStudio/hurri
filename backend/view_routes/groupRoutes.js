var GroupRepository = require('../repositories/groupRepository');

var groupRepository = new GroupRepository();

var renderHelper = require('./renderHelper');

module.exports = function (app) {

	app.get('/group/:id/members', function (req, res, next) {
		var template = renderHelper({
			data: {
				members: [1,2,4]
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/group/:id/tracks', function (req, res, next) {
		var template = renderHelper({
			data: {
				tracks: [1,23,24,6,7,45,76,22,11]
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});


};