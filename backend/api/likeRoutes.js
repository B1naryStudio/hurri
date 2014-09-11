var likeRepository = require('../repositories/likeRepository');
var apiResponse = require('../middleware/apiResponse');

module.exports = function(app){
	app.get('/api/like/:song_id', function(req, res, next){
		likeRepository.getLikesBySongId(req.params.song_id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.post('/api/like', function(req, res, next){
		likeRepository.add(req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/api/like/:song_id', function(req, res, next){
		likeRepository.update(req.params.song_id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.put('/api/like/:song_id/:user_id', function(req, res, next){
		likeRepository.addLike(req.params.song_id, req.params.user_id, req.body, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.delete('/api/like/:song_id/:user_id', function(req, res, next){
		likeRepository.deleteLike(req.params.song_id, req.params.user_id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);

	app.delete('/api/like/:song_id', function(req, res, next){
		likeRepository.delete(req.params.song_id, function(err, data){
			res.err = err;
			res.data = data;
			next();
		});
	}, apiResponse);
};