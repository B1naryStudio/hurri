
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

};