var groupRepository = require('../repositories/groupRepository');

var injectData = require('../middleware/injectDataMiddleware');


module.exports = function (app) {

	app.get('/group/:id/members', function(res, req, next) {
		injectData(groupRepository.getMembers(req.params.id));
	});

	app.get('/group/:id/tracks', function(res, req, next) {
		injectData(groupRepository.getTracks(req.params.id));
	});


};