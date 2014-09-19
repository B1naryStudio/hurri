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
			// mediator.publish("add-user-to-radio", id);
			console.log('SOCKET', socket.request.user._id);
			mediator.publish("add-user-to-radio", radio_id);
			roomManager.addRoomToUser(socket.request.user._id, 'radio_' + radio_id);
			console.log(roomManager.getSocketsByRoom('radio_' + radio_id));
		});
		socket.on('add-message', function (options){
			var id1 = socket.request.user._id;
			var id2 = options.recipient_id;
			mediator.publish('add-message-to-dialogue', {user_auth1: id1, user_auth2: id2});
			var arr = [id1, id2];
			arr.sort();
			roomManager.addRoomToUser(id1, 'dialogue_' + arr[0] + '_' + arr[1]);
			roomManager.addRoomToUser(id2, 'dialogue_' + arr[0] + '_' + arr[1]);
			context.io.to('dialogue_' + arr[0] + '_' + arr[1]).emit('new-message',options);
		});
	});
	
 return context.io;
};