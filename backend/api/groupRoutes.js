var groupRepository = require('../repositories/groupRepository');

module.exports = function(app){
	app.get('/api/group/:id/members', function(req, res, next){
		res.json(groupRepository.getMembers(req.params.id));
	});

	app.get('/api/group/:id/tracks', function(req, res, next){
		groupRepository.getTracks(req.params.id, function(err, data){
			res.json(data);
		});
	});

	app.post('/api/group', function(req, res, next){
		groupRepository.add(req.body);
		res.end();
	});

	app.put('/api/group/:id', function(req, res, next){
		groupRepository.update(req.params.id, req.body);
		res.end();
	});

	app.put('/api/group/:id/listeners', function(req, res, next){
		groupRepository.updateListeners(req.params.id, req.body);
		res.end();
	});
	
	app.delete('/api/group/:id', function(req, res, next){
		groupRepository.delete(req.params.id);
		res.end();
	});
};