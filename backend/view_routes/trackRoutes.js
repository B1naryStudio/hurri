var trackRepository = require('../repositories/trackRepository');

var injectData = require('../middleware/injectDataMiddleware');

module.exports = function (app) {

	app.get('/track/:id', function(req, res, next) {
		injectData(trackRepository.getById(req.params.id), res);
	});

	app.get('/track/:id/title', function(req, res, next) {
		injectData(trackRepository.getTitle(req.params.id), res);
	});

	app.get('/track/:id/lyrics', function(req, res, next) {
		injectData(trackRepository.getLirycs(req.params.id), res);
	});

	app.get('/track/:id/url', function(req, res, next) {
		injectData(trackRepository.getUrl(req.params.id), res);
	});

	app.get('/track/:id/comments', function(req, res, next) {
		injectData(trackRepository.getComments(req.params.id), res);
	});

};