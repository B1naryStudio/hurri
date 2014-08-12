define(['socketio'], function(io){

	var SocketHandler = function(){

		var self = this;

		this.socket = io('http://localhost:3055');
		this.socket.on('news', function (data) {
			self.socket.emit('my other event', { my: 'data' });
		});

	};

	return new SocketHandler();
});