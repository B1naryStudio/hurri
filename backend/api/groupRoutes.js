var GroupRepository = require('../repositories/groupRepository');
var groupRepository = new GroupRepository();

module.exports = function(app){
	app.get('/api/group/:id/members', function(req, res, next){
		res.json(groupRepository.getMembers(req.param.id));
	});

	app.get('/api/group/:id/tracks', function(req, res, next){
		res.json(groupRepository.getTracks(req.param.id));
	});

	app.post('/api/group', function(req, res, next){
		groupRepository.addGroup();
		res.end();
	});

	app.put('/api/group/:id', function(req, res, next){
		groupRepository.editGroup(req.param.id);
		res.end();
	});

	app.put('/api/group/:id/listeners', function(req, res, next){
		groupRepository.editListeners(req.param.id);
		res.end();
	});
	
	app.delete('/api/group/:id', function(req, res, next){
		groupRepository.deleteGroup(req.param.id);
		res.end();
	});
};