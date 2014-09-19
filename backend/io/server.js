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
		});
		
		socket.on('add-message', function (options){
			var id1 = socket.request.user._id;
			var id2 = options.recipient_id;
			var arr = [id1, id2];
			arr = arr.sort();
			mediator.publish('add-message-to-dialogue', {user_auth1: id1, user_auth2: id2, options: options});
			roomManager.addRoomToUser(id1, 'dialogue_' + arr[0] + '_' + arr[1]);
			roomManager.addRoomToUser(id2, 'dialogue_' + arr[0] + '_' + arr[1]);
			console.log('asdasdas');
			context.io.to('dialogue_' + arr[0] + '_' + arr[1]).emit('new-message',options);
		});

		socket.on('create-radio-channel', function () {
			mediator.publish("create-radio-channel", socket.request.user._id);
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
		});

		socket.on('ask-for-rights', function (radio_id) {
			mediator.publish("add-to-requiring", {radioId: radio_id, userId: socket.request.user._id});
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
		});

		socket.on('add-to-editors', function () {
			mediator.publish("create-radio-channel", socket.request.user._id);
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
		});

		socket.on('remove-from-editors', function () {
			mediator.publish("remove-from-editors", socket.request.user._id);
		});

		socket.on('play-this-track', function (object) {
			context.io.to('radio_' + object.radio).emit('play-this-radio-track', object.id);
		});

		socket.on('stop-listening', function (id) {
			mediator.publish("stop-listening", {userId : socket.request.user._id, radioId: id});
			roomManager.removeUserFromRoom(socket.request.user._id, 'radio_' + id);
		});

		socket.on('stop-broadcasting', function (id) {
			mediator.publish("stop-broadcasting", {userId : socket.request.user._id, radioId: id});
			//roomManager.removeUserFromRoom(socket.request.user._id, 'radio_' + id);
		});
		
		
	});

	mediator.on('radio-channel-created', function(object){
		roomManager.addRoomToUser(object.userId, 'user_' + object.userId);
		context.io.to('user_' + object.userId).emit('radio-channel-created', object);
	});

	mediator.on('request-for-rights', function(object){
		context.io.to('user_' + object.master).emit('request-for-rights', object);
	});

 return context.io;
};