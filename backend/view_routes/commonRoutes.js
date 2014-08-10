var injectData = require('../middleware/injectDataMiddleware');
var path = require('path');

module.exports = function (app) {

	app.get('/', function (req, res, next) {
	});

	app.get('/signin', function (req, res, next) {
		res.sendfile(path.resolve(__dirname + '/../../public/' + 'signin.html'));
	});

	app.use(function(req, res, next) {
		injectData('<h1>404 error</h1><h2>Not found</h2>', res);
	});

};