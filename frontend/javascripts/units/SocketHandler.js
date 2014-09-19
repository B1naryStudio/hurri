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
		var sessionid = this.socket.io.engine.id;
  		console.log(sessionid);
		console.log('user connected!');
	};

	SocketHandler.prototype.onDisconnect = function(){
		console.log('user disconnected!');
	};

	SocketHandler.prototype = _.extend(SocketHandler.prototype, Sockiator.prototype);

	var socketHandler = new SocketHandler();

	socketHandler
		.in({
			'turn'					: 'socket:turn-network',
			'radio-channel-created'	: 'update-admin-info',
			'play-this-radio-track' : 'play-changed-track',
			'change-position'		: 'change-track-position',
			'request-for-rights' 	: 'request-for-rights',
			'new-message' 			: 'socket:message-add',
			'new-notification'		: 'socket:notification-add',
			'added-to-editors' : 'added-to-editors',
			'add-to-collection-from-socket' : 'add-to-your-collection',
			'delete-track-from-radio' : 'delete-track-from-radio'
		})
		.out({
			'radio-view:stop-listening':'stop-listening',
			'sidebar:play-track' : 'play-this-track',
			'backbone:radio-view':'add-user-to-radio',
			'radio-view:create-radio' : 'create-radio-channel',
			'radio-view:add-to-requiring' : 'ask-for-rights',
			'admin:give-rights': 'add-to-editors',
			'admin:remove-rights' : 'remove-from-editors',
			'admin:stop-broadcasting' : 'stop-broadcasting',
			'admin:add-tracks' : 'add-tracks-to-db',
			'admin:delete-track-from-list' : 'delete-track-from-list',
			'dialogue:message-add'			: 'add-message',
			'notifications:notification-add': 'add-notification'
		});

	return socketHandler;
});