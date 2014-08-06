var AlbumRepository = require('../repositories/albumRepository');

var albumRepository = new AlbumRepository();

var renderHelper = require('./renderHelper');

module.exports = function (app) {

	app.get('/album/:id', function (req, res, next) {
		var template = renderHelper({
			data: {
				title: 'Stadium Arcadium',
				cover: '/image/defaultCover.jpg',
				duration: 7342000,
				release_date: '2006-05-09',
				singer: 1,
				genres: ['funk-rock, alternative-rock'],
				comment: [],
				tracks: []
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);
	});

	app.get('/album/:id/cover', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/album/:id/singer', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/album/:id/genres', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/album/:id/tracks', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/album/:id/comments', function (req, res, next) {
		var template = renderHelper({data: {some: 'data'}});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

};