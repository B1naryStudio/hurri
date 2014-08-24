var socketio = require('socket.io');

module.exports = function(server){
	
	var io = socketio(server);

	io.on('connection', function (socket) {
	});

 return io;
};