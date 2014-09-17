function SocketManager(){
	this.userSockets = {};
}

SocketManager.prototype.getSocketsByUserId = function(user_id) {
	return this.userSockets[user_id];
};

SocketManager.prototype.removeSocketForUser = function(user_id, socket_id) {
	if (this.userSockets[user_id]){
		if (this.isSocketStored(user_id, socket_id)){
			var index = this.userSockets[user_id].indexOf(socket_id);
			this.userSockets[user_id].splice(index, 1);
		}
	}	
};

SocketManager.prototype.addSocketForUser = function(user_id, socket_id) {
	if (this.userSockets[user_id]){
		if (!this.isSocketStored(user_id, socket_id)){
			this.userSockets[user_id].push(socket_id);
		}
	} else {
		this.userSockets[user_id] = [socket_id];
	}
};

SocketManager.prototype.isSocketStored = function(user_id, socket_id){
	return this.userSockets[user_id].indexOf(socket_id) !== -1;
};

module.exports = new SocketManager();