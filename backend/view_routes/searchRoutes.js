var VKWrapper = require('../social_network_wrapper/VKWrapper');

module.exports = function (app) {

	app.get('/search/:q/:sort/:artist/:complete/:count', function(req, res) {
		res.send(VKWrapper.getAudioSearch(req.params.q, parseInt(req.params.sort), parseInt(req.params.artist), parseInt(req.params.complete), parseInt(req.params.count)));
		console.log('Tadaaam');
	});

};