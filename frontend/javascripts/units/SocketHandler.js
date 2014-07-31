define(['socketio'], function(io){

	var SocketHandler = function(){

		this.socket = io('http://localhost:3055');
		this.socket.on('news', function (data) {
			console.log(data);
			this.socket.emit('my other event', { my: 'data' });
		});

	};

	return new SocketHandler();
});