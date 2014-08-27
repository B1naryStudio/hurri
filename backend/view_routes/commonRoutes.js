var injectData = require('../middleware/injectDataMiddleware');
var path = require('path');

module.exports = function (app) {

	app.get('/', function (req, res, next) {
		if(!req.user){
			res.redirect('/signin');
		} else {
			injectData(req.user, res, false);
		}
	});

	app.get('/signin', function (req, res, next) {
		res.sendfile(path.resolve(__dirname + '/../../public/' + 'signin.html'));
	});

	app.use(function(req, res, next) {

		if (req.accepts('html')) {
			injectData('<h1>404 error</h1><h2>Not found</h2>', res, true);
			return;
		}

		if (req.accepts('json')) {
			res.status(404);
			res.send({ error: 'Not found' });
			return;
		}

	});

};