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
				tracks: [
					{title: 'Dani California', duration: '4:42'},
					{title: 'Snow (Hey Oh)', duration: '5:34'},
					{title: 'Charlie', duration: '4:37'},
					{title: 'Stadium Arcadium', duration: '5:15'},
					{title: 'Hump de Bump', duration: '3:33'},
					{title: 'She’s Only 18', duration: '3:25'},
					{title: 'Slow Cheetah', duration: '5:19'},
					{title: 'Torture Me', duration: '3:44'},
					{title: 'Strip My Mind', duration: '4:19'},
					{title: 'Especially in Michigan', duration: '4:00'},
					{title: 'Warlocks', duration: '3:25'},
					{title: 'C’mon Girl', duration: '3:48'},
					{title: 'Wet Sand', duration: '5:09'},
					{title: 'Hey', duration: '5:39'},
					{title: 'Desecration Smile', duration: '5:01'},
					{title: 'Tell Me Baby', duration: '4:07'},
					{title: 'Hard to Concentrate', duration: '4:01'},
					{title: '21st Century', duration: '4:22'},
					{title: 'She Looks to Me', duration: '4:06'},
					{title: 'Readymade', duration: '4:30'},
					{title: 'If', duration: '2:52'},
					{title: 'Make You Feel Better', duration: '3:51'},
					{title: 'Animal Bar', duration: '5:25'},
					{title: 'So Much I', duration: '3:44'},
					{title: 'Storm in a Teacup', duration: '3:45'},
					{title: 'We Believe', duration: '3:36'},
					{title: 'Turn It Again', duration: '6:06'},
					{title: 'Death of a Martian', duration: '4:24'}
				]
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);
	});

	app.get('/album/:id/cover', function (req, res, next) {
		var template = renderHelper({
			data: {
				cover: '/image/defaultCover.jpg'
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/album/:id/singer', function (req, res, next) {
		var template = renderHelper({
			data: {
				singer: 'Red Hot Chili Peppers'
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/album/:id/genres', function (req, res, next) {
		var template = renderHelper({
			data: {
				genres: ['funk-rock, alternative-rock']
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/album/:id/tracks', function (req, res, next) {
		var template = renderHelper({
			data: {
				tracks: [
					{title: 'Dani California', duration: '4:42'},
					{title: 'Snow (Hey Oh)', duration: '5:34'},
					{title: 'Charlie', duration: '4:37'},
					{title: 'Stadium Arcadium', duration: '5:15'},
					{title: 'Hump de Bump', duration: '3:33'},
					{title: 'She’s Only 18', duration: '3:25'},
					{title: 'Slow Cheetah', duration: '5:19'},
					{title: 'Torture Me', duration: '3:44'},
					{title: 'Strip My Mind', duration: '4:19'},
					{title: 'Especially in Michigan', duration: '4:00'},
					{title: 'Warlocks', duration: '3:25'},
					{title: 'C’mon Girl', duration: '3:48'},
					{title: 'Wet Sand', duration: '5:09'},
					{title: 'Hey', duration: '5:39'},
					{title: 'Desecration Smile', duration: '5:01'},
					{title: 'Tell Me Baby', duration: '4:07'},
					{title: 'Hard to Concentrate', duration: '4:01'},
					{title: '21st Century', duration: '4:22'},
					{title: 'She Looks to Me', duration: '4:06'},
					{title: 'Readymade', duration: '4:30'},
					{title: 'If', duration: '2:52'},
					{title: 'Make You Feel Better', duration: '3:51'},
					{title: 'Animal Bar', duration: '5:25'},
					{title: 'So Much I', duration: '3:44'},
					{title: 'Storm in a Teacup', duration: '3:45'},
					{title: 'We Believe', duration: '3:36'},
					{title: 'Turn It Again', duration: '6:06'},
					{title: 'Death of a Martian', duration: '4:24'}
				]
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/album/:id/comments', function (req, res, next) {
		var template = renderHelper({
			data: {
				comments: [
					{user_auth_id: 1, comment: 'Fking gr8t!!!!', date: '2014-06-30'},
					{user_auth_id: 2, comment: 'Best RHCP album EVER!!!', date: '2014-07-22'},
					{user_auth_id: 1, comment: 'true!', date: '2014-07-22'},
					{user_auth_id: 3, comment: 'Awesome!', date: '2014-08-03'}
				]
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

};