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
			//console.log(roomManager.getSocketsByRoom('radio_' + radio_id));
		});

		socket.on('create-radio-channel', function () {
			mediator.publish("create-radio-channel", socket.request.user._id);
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
			//console.log(roomManager.getSocketsByRoom('radio_' + radio_id));
		});

		socket.on('ask-for-rights', function () {
			mediator.publish("add-to-requiring", socket.request.user._id);
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
			//console.log(roomManager.getSocketsByRoom('radio_' + radio_id));
		});

		socket.on('add-to-editors', function () {
			mediator.publish("create-radio-channel", socket.request.user._id);
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
			//console.log(roomManager.getSocketsByRoom('radio_' + radio_id));
		});

		socket.on('remove-from-editors', function () {
			mediator.publish("remove-from-editors", socket.request.user._id);
			//roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
			//console.log(roomManager.getSocketsByRoom('radio_' + radio_id));
		});

		mediator.on('radio-channel-created', function(){
			context.io.emit('radio-channel-created', arguments[0]);
		});
		
	});
	
 return context.io;
};