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
			roomManager.addUserToRoom(socket.request.user._id, 'radio_' + radio_id);
		});
	});
	
 return context.io;
};