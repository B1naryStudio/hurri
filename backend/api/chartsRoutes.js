var chartParse = require('../info_service_wrappers/xmlParser');

module.exports = function (app) {
	app.get('/charts/billboard/100', function(req, res){
		chartParse.billboardTop(function(err, results){
			res.json(results);
		});
	});
	app.get('/charts/ben-major/40', function(req, res){
		chartParse.benMajorUkTop(function(err, results){
			res.json(results);
		});
	});

	app.get('/charts/itunes/25', function(req, res){
		chartParse.iTunesTop(function(err, results){
			res.json(results);
		});
	});	
};