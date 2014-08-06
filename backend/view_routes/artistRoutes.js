var ArtistRepository = require('../repositories/artistRepository');

var artistRepository = new ArtistRepository();

var renderHelper = require('./renderHelper');

module.exports = function (app) {

	app.get('/artist/:id', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/artist/:name', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});


};