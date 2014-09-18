var connection = require('../db/dbconnect.js');
var Group = require('../schemas/radio.js');
var Repository = require('./generalRepository.js');
var _ = require('underscore');
var mediator = require('../units/mediator');
var roomManger = require('../io/roomManager');

function GroupRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Group;
	this.bindListeners();
}

GroupRepository.prototype = new Repository();

GroupRepository.prototype.bindListeners = function(){
	var self = this;
	mediator.on("add-user-to-radio", function(){
		self.addListeners(arguments[0], { listener: arguments[1] }, function(er, data){
			console.log(er, data);
		}); 
	});

	mediator.on("create-radio-channel", function(){
		self.add({user_auth_id : arguments[0], name: 'Radio Channel'}, function(err, data){
			roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			mediator.publish("radio-channel-created", data.id);
		}); 
	});

	mediator.on("add-to-requiring", function(){
		self.addRequiring(arguments[0], arguments[1], function(err, data){
			//roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			//mediator.publish("radio-channel-created", data.id);
		}); 
	});

	mediator.on("add-to-editors", function(){
		self.addEditor(arguments[0], arguments[1], function(err, data){
			//roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			//mediator.publish("radio-channel-created", data.id);
		}); 
	});

	mediator.on("remove-from-requiring", function(){
		self.deleteRequiring(arguments[0], arguments[1], function(err, data){
			//roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			//mediator.publish("radio-channel-created", data.id);
		}); 
	});

	mediator.on("remove-from-editors", function(){
		self.deleteEditor(arguments[0], arguments[1], function(err, data){
			//roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			//mediator.publish("radio-channel-created", data.id);
		}); 
	});
};

GroupRepository.prototype.createRadio = function(id, callback) {
	var model = this.createModel();
	var query = model.add({user_auth_id: id});
	query.exec(callback);

};

GroupRepository.prototype.getMembers = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}).populate('editors').populate('requiring');
	query.exec(callback);
};


GroupRepository.prototype.getAll = function(callback) {
	var model = this.createModel();
	var query = model.find({}).populate('tracks').populate('listeners').populate('user_auth_id');
	query.exec(callback);
};

GroupRepository.prototype.getById = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}).populate('listeners').populate('tracks');
	query.exec(callback);
};

GroupRepository.prototype.getTracks = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id},'tracks').populate('tracks');
	query.exec(callback);

};

GroupRepository.prototype.addListeners = function(id, body, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, function(err, data){
		 if(data.listeners.indexOf(body.listener) == -1) {
        	data.listeners.push(body.listener);
        	data.save(callback);
    	}
	});
};

GroupRepository.prototype.addRequiring = function(id, requiring, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, function(err, data){
		 if(data.requiring.indexOf(requiring) == -1) {
        	data.requiring.push(requiring);
        	data.save(callback);
    	}
	});
};

GroupRepository.prototype.addEditor = function(id, editors, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id}, function(err, data){
		 if(data.editors.indexOf(editors) == -1) {
        	data.editors.push(editors);
        	data.save(callback);
    	}
	});
};

GroupRepository.prototype.deleteTrack = function(id, trackid, callback) {
	var model = this.createModel();
	model.findOne({_id: id}, function(err, res){
				res.tracks.remove(trackid);
				res.save(callback);						  
	});
};


GroupRepository.prototype.deleteListener = function(id, listenerid, callback) {
	var model = this.createModel();
	model.findOne({_id: id}, function(err, res){
				res.listeners.remove(listenerid);
				res.save(callback);						  
	});
};

GroupRepository.prototype.deleteRequiring = function(id, requirerid, callback) {
	var model = this.createModel();
	model.findOne({_id: id}, function(err, res){
				res.requiring.remove(requirerid);
				res.save(callback);						  
	});
};

GroupRepository.prototype.deleteEditor = function(id, editorid, callback) {
	var model = this.createModel();
	model.findOne({_id: id}, function(err, res){
				res.editors.remove(editorid);
				res.save(callback);						  
	});
};

GroupRepository.prototype.addTracks = function(id, body, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id: id},{$push: {tracks:body.track}} );
	query.exec(callback);
};


module.exports = new GroupRepository();