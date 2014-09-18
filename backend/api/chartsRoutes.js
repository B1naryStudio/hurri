var chartParse = require('../info_service_wrappers/xmlParser');
var chartRepository = require('../repositories/chartRepository.js');
var apiResponse = require('../middleware/apiResponse');

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

	app.get('/charts/:id', function(req, res, next){
		chartRepository.getChart(req.params.id, function(err, data){
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.post('/charts/add', function(req, res, next){
		console.log('req. body=', req.body);
		chartRepository.add(req.body, function(err, data){
			console.log('data', data);
			console.log('err', err);
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/charts/:id', function(req, res){
		chartRepository.updateByObjectId(req.params.id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.delete('/charts/:id', function(req, res, next){
		chartRepository.delete(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
};