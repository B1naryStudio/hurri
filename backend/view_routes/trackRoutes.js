var trackRepository = require('../repositories/trackRepository');

var injectData = require('../middleware/injectDataMiddleware');

module.exports = function (app) {

	app.get('/track/:id', function(res, req, next) {
		injectData(trackRepository.getById(req.params.id));
	});

	app.get('/track/:id/title', function(res, req, next) {
		injectData(trackRepository.getTitle(req.params.id));
	});

	app.get('/track/:id/lyrics', function(res, req, next) {
		injectData(trackRepository.getLirycs(req.params.id));
	});

	app.get('/track/:id/url', function(res, req, next) {
		injectData(trackRepository.getUrl(req.params.id));
	});

	app.get('/track/:id/comments', function(res, req, next) {
		injectData(trackRepository.getComments(req.params.id));
	});

};