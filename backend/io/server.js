var socketio = require('socket.io');
var mediator = require('../units/mediator');

module.exports = function(server){
	
	var io = socketio(server);

	io.on('connection', function (socket) {
		socket.on('add-user-to-radio', function (id) {
			console.log('SOCKET', socket.request.user);
			mediator.publish("add-user-to-radio", id);
		});
	});



 return io;
};