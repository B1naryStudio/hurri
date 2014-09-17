var groupRepository = require('../repositories/groupRepository');
var apiResponse = require('../middleware/apiResponse');

module.exports = function(app){

	app.get('/api/group', function(req, res, next){
		groupRepository.getAll(function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/group/:id/members', function(req, res, next){
		groupRepository.getMembers(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/group/:id/tracks', function(req, res, next){
		groupRepository.getTracks(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.get('/api/group/:id', function(req, res, next){
		groupRepository.getById(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.post('/api/group', function(req, res, next){
		groupRepository.add(req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/api/group/:id', function(req, res, next){
		groupRepository.update(req.params.id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/api/group/:id/listeners', function(req, res, next){
		groupRepository.addListeners(req.params.id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
	
	app.put('/api/group/:id/tracks', function(req, res, next){
		groupRepository.addTracks(req.params.id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.delete('/api/group/:id/listener/:listener_id', function(req, res, next){
		groupRepository.deleteListener(req.params.id,req.params.listener_id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.delete('/api/group/:id/track/:track_id', function(req, res, next){
		groupRepository.deleteTrack(req.params.id, req.params.track_id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.delete('/api/group/:id', function(req, res, next){
		groupRepository.delete(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
};