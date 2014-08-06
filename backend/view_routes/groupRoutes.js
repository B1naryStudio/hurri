var GroupRepository = require('../repositories/groupRepository');

var groupRepository = new GroupRepository();

var renderHelper = require('./renderHelper');

module.exports = function (app) {

	app.get('/group/:id/members', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/group/:id/tracks', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});


};