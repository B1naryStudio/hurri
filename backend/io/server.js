var socketio = require('socket.io');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var config = require('../config/');
var mongoStore = require('../units/context');
var passportSocketIo = require('passport.socketio');
var context = require('../units/context');
var socketManager = require('./socketManager');
var roomManager = require('./roomManager');
var mediator = require('../units/mediator');
require('./listener');

module.exports = function(server){
	
	context.io = socketio(server);

	context.io.use(passportSocketIo.authorize({
		cookieParser: cookieParser,
		key: 'connect.sid',     
		secret: config.session.secret,  
		store: context.mongoStore
	}));

	context.io.on('connection', function (socket) {
		socketManager.addSocketForUser(socket.request.user._id, socket.id);

		socket.on('disconnect', function () {
			socketManager.removeSocketForUser(socket.request.user._id, socket.id);
		});

		socket.on('add-user-to-radio', function (radio_id) {
			mediator.publish("add-user-to-radio", radio_id, socket.request.user._id);
			roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
			roomManager.addRoomToUser(socket.request.user._id, 'user_' + socket.request.user._id);
			console.log('USER ID = ', socket.request.user._id);
			console.log('Add user to radio', roomManager.getSocketsByRoom('radio_' + radio_id));
		});

		socket.on('create-radio-channel', function () {
			mediator.publish("create-radio-channel", socket.request.user._id);
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
			//console.log(roomManager.getSocketsByRoom('radio_' + radio_id));
		});

		socket.on('ask-for-rights', function (radio_id) {
			mediator.publish("add-to-requiring", {radioId: radio_id, userId: socket.request.user._id});
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
			//console.log(roomManager.getSocketsByRoom('radio_' + radio_id));
		});

		socket.on('add-to-editors', function (object) {
			mediator.publish("add-to-editors", object);
			mediator.once('added-to-editors', function(){
				console.log('ADDED');
				context.io.to('user_' + object.id).emit('added-to-editors', object.radio);
			});
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
			//console.log(roomManager.getSocketsByRoom('radio_' + radio_id));
		});

		socket.on('remove-from-editors', function () {
			mediator.publish("remove-from-editors", socket.request.user._id);
		});

		socket.on('play-this-track', function (object) {
			console.log('Play this track', roomManager.getSocketsByRoom('radio_' + object.radio));
			mediator.publish("get-track-info", object.id);
			mediator.once("track-info", function(data){
				context.io.to('radio_' + object.radio).emit('play-this-radio-track', data);
			});
			
		});

		socket.on('stop-listening', function (id) {
			mediator.publish("stop-listening", {userId : socket.request.user._id, radioId: id});
			roomManager.removeUserFromRoom(socket.request.user._id, 'radio_' + id);
		});

		socket.on('stop-broadcasting', function (id) {
			mediator.publish("stop-broadcasting", {userId : socket.request.user._id, radioId: id});
			//roomManager.removeUserFromRoom(socket.request.user._id, 'radio_' + id);
		});

		socket.on('add-tracks-to-db', function (object) {
			mediator.publish("add-tracks-to-db", object);
			context.io.to('radio_' + object.radio).emit('add-to-collection-from-socket', object.collection);
		});

		socket.on('delete-track-from-list', function (object) {
			mediator.publish("delete-track-from-list", object);
			context.io.to('radio_' + object.radio).emit('delete-track-from-radio', object.id);
		});
		
	});

	mediator.on('radio-channel-created', function(object){
		console.log(object);
		roomManager.addRoomToUser(object.userId, 'user_' + object.userId);
		roomManager.addRoomToUser(object.userId, 'radio_' + object.radioId);
		context.io.to('user_' + object.userId).emit('radio-channel-created', object);
	});

	mediator.on('request-for-rights', function(object){
		context.io.to('user_' + object.master).emit('request-for-rights', object);
	});

 return context.io;
};