var dialogRepository = require('../repositories/dialogRepository');

var injectData = require('../middleware/injectDataMiddleware');

module.exports = function (app) {

	app.get('/dialogue/:id1/:id2', function(res, req, next) {
		injectData(dialogRepository.getDialog(req.params.id1, req.params.id2));
	});


};