var sockets = require('./sockets');
var roomManager = require('./roomManager');

function SocketManager(){}

SocketManager.prototype.getSocketsByUserId = function(user_id) {
	return sockets[user_id];
};

SocketManager.prototype.removeSocketForUser = function(user_id, socket_id) {
	if (sockets[user_id]){
		if (this.isSocketStored(user_id, socket_id)){
			var index = sockets[user_id].indexOf(socket_id);
			sockets[user_id].splice(index, 1);
		}
	}	
};

SocketManager.prototype.addSocketForUser = function(user_id, socket_id) {
	if (sockets[user_id]){
		if (!this.isSocketStored(user_id, socket_id)){
			sockets[user_id].push(socket_id);
		}
	} else {
		sockets[user_id] = [socket_id];
	}
	roomManager.onAddUserSocket(user_id, socket_id);
};

SocketManager.prototype.isSocketStored = function(user_id, socket_id){
	return sockets[user_id].indexOf(socket_id) !== -1;
};

module.exports = new SocketManager();