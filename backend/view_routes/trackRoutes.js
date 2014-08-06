var TrackRepository = require('../repositories/trackRepository');

var trackRepository = new TrackRepository();

var renderHelper = require('./renderHelper');

module.exports = function (app) {

	app.get('/track/:id', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/track/:id/title', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/track/:id/lyrics', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/track/:id/url', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/track/:id/comments', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

};