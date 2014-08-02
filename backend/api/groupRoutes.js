var groupRepository = require('../repositories/groupRepository');

module.exports = function(app){
	app.get('/group/:id/members', function(req, res, next){
		res.json(groupRepository.getMembers(req.param.id));
	});

	app.get('/group/:id/tracks', function(req, res, next){
		res.json(groupRepository.getTracks(req.param.id));
	});

	app.post('/group', function(req, res, next){
		groupRepository.addGroup();
		res.end();
	});

	app.put('/group/:id', function(req, res, next){
		groupRepository.editGroup(req.param.id);
		res.end();
	});

	app.put('/group/:id/listeners', function(req, res, next){
		groupRepository.editListeners(req.param.id);
		res.end();
	});
	
	app.delete('/group/:id', function(req, res, next){
		groupRepository.deleteGroup(req.param.id);
		res.end();
	});
};