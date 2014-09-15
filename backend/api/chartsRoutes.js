var chartParse = require('../info_service_wrappers/xmlParser');

module.exports = function (app) {
	app.get('/charts/billboard/100', function(req, res){
		chartParse.billboardTop(function(results){
			res.json(results);
		});
	});
	app.get('/charts/ben-major/40', function(req, res){
		chartParse.benMajorUkTop(function(results){
			res.json(results);
		});
	});

	app.get('/charts/itunes/25', function(req, res){
		chartParse.iTunesTop(function(results){
			res.json(results);
		});
	});	
};