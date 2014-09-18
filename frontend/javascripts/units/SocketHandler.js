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
			'radio-channel-created': 'update-admin-info',
			'play-this-radio-track' : 'play-changed-track',
			'change-position': 'change-track-position'
		})
		.out({
			'sidebar:play-track' : 'play-this-track',
			'backbone:radio-view':'add-user-to-radio',
			'radio-view:create-radio' : 'create-radio-channel',
			'radio-view:add-to-requiring' : 'ask-for-rights',
			'admin:give-rights': 'add-to-editors',
			'admin:remove-rights' : 'remove-from-editors'
		});

	return socketHandler;
});