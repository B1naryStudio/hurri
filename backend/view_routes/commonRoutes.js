var inject404 = require('../middleware/injectData404')
var fs = require('fs');

module.exports = function (app) {

	app.get('/', function (req, res, next) {
	});

	app.get('/404', function (req, res, next) {
		res.set('Content-Type', 'text/html');
		res.send(fs.readFileSync(__dirname + '/../../public/' + '404.html', 'utf8'));
	});

	app.get('/signin', function (req, res, next) {
		res.set('Content-Type', 'text/html');
		res.send(fs.readFileSync(__dirname + '/../../public/' + 'signin.html', 'utf8'));
	});

	app.get('*', inject404('<h1>404 error</h1><h2>Not found</h2>'));

};