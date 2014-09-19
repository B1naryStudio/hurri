var connection = require('../db/dbconnect.js');
var Group = require('../schemas/radio.js');
var Repository = require('./generalRepository.js');
var _ = require('underscore');
var mediator = require('../units/mediator');
var roomManager = require('../io/roomManager');
var userRepository = require('./userRepository');
var trackRepository = require('./trackRepository');

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

	mediator.on("create-radio-channel", function(id){
		self.add({user_auth_id : id, name: 'Radio Channel'}, function(err, data){
			roomManager.addRoomToUser(id, 'user_' + id);
			mediator.publish("radio-channel-created", {userId:id, radioId: data.id});
		}); 
	});

	mediator.on("add-to-requiring", function(object){
		self.addRequiring(object.radioId, object.userId, function(err, data){
			self.deleteListener(object.radioId, object.userId, function(error, data){
				self.getById(object.radioId, function(er, radio){
					userRepository.addAlert(radio.user_auth_id, {name:'Request', type: 'info', additionalInfo: 'You have request for editor rights'}, function(err, alert){
						mediator.publish("request-for-rights", {master:radio.user_auth_id, alert:alert});
					});
				});
			});
			//roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			//mediator.publish("radio-channel-created", data.id);
		}); 
	});

	mediator.on("add-to-editors", function(object){
		self.addEditor(object.radio, object.id, function(err, data){
			self.deleteRequiring(object.radio, object.id, function(err, data){
				mediator.publish("added-to-editors");
			});
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

	mediator.on("stop-listening", function(object){
		self.deleteEditor(object.radioId, object.userId, function(err, data){
			self.deleteRequiring(object.radioId, object.userId, function(err, data){

			});
			//roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			//mediator.publish("radio-channel-created", data.id);
		}); 
	});

	mediator.on("get-track-info", function(id){
		trackRepository.getById(id, function(err, data){
			console.log(err, data);
			mediator.publish("track-info", data);
			//roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			//mediator.publish("radio-channel-created", data.id);
		}); 
	});

	mediator.on("add-tracks-to-db", function(object){
		var tracks = _.pluck(object.collection, '_id');
		console.log(tracks);
		self.addTracks(object.radio, {track : tracks}, function(err, data){
			console.log(err, data);
			//roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			//mediator.publish("radio-channel-created", data.id);
		}); 
	});

	mediator.on("delete-track-from-list", function(object){
		self.deleteTrack(object.radio, object.id, function(err, data){
			console.log(err, data);
			//roomManager.addRoomToUser(socket.request.user._id, 'user_' + radio_id);
			//mediator.publish("radio-channel-created", data.id);
		}); 
	});

	mediator.on("stop-broadcasting", function(object){
		self.delete(object.radioId, function(err, data){

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
	var query = model.findOneAndUpdate({_id: id},{$pushAll: {tracks:body.track}} );
	query.exec(callback);
};


module.exports = new GroupRepository();