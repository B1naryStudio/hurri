define(['socketio', './Sockiator'], function(io, Sockiator){

	var SocketHandler = function(){

		var self = this;

		this.socket = io('http://localhost:3055');
		this.socket.on('connect', function(){
  			self.onConnect();
  		});
  		this.socket.on('disconnect', function(){
   			self.onDisconnect();
  		});
  		this.socket.on('socket:message-add', function(options){
  			console.log('message-add', options);
  			self.onMessageAdd();
  		});
	};
	
	SocketHandler.prototype.onConnect = function(){
		console.log('user connected!');
	};

	SocketHandler.prototype.onDisconnect = function(){
		console.log('user disconnected!');
	};

	SocketHandler.prototype = _.extend(SocketHandler.prototype, Sockiator.prototype);

	var socketHandler = new SocketHandler();

	socketHandler
		.in({
			'turn'			: 'socket:turn-network',
			'new-message' 	: 'socket:message-add' 
		})
		.out({
			'backbone:radio-view'	:'add-user-to-radio',
			'dialogue:message-add'	:'add-message'
		});

	return socketHandler;
});