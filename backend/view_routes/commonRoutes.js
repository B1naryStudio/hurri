var renderHelper = require('./renderHelper');

module.exports = function (app) {
	app.get('/', function (req, res, next) {
		console.log('app.get');
		renderHelper(app, {route: req.url, data: {some: {a: 'data', b: 'c'}}});
	});

};