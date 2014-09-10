var trackRepository = require('../repositories/trackRepository');
var isLoggedIn = require('../middleware/isLoggedIn');
var injectData = require('../middleware/injectDataMiddleware');

module.exports = function (app) {

	app.get('/track/id/:id', isLoggedIn, function(req, res, next) {
		console.log(req.params.id);
		trackRepository.getById(req.params.id, function(err, data){
			console.log(err, data);
			injectData(req, res, {track:data}, false);
		});
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