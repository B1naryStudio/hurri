var groupRepository = require('../repositories/groupRepository');
var apiResponse = require('../middleware/apiResponse');

module.exports = function(app){
	app.get('/api/like/:id', function(req, res, next){
		likeRepository.getLikes(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.post('/api/like', function(req, res, next){
		groupRepository.add(req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/api/like/:id', function(req, res, next){
		likeRepository.update(req.params.id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/api/like/:id/:user_id', function(req, res, next){
		likeRepository.addLike(req.params.id, req.params.user_id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.delete('/api/like/:id/:user_id', function(req, res, next){
		likeRepository.deleteTrack(req.params.id, req.params.user_id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.delete('/api/like/:id', function(req, res, next){
		likeRepository.delete(req.params.id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
};