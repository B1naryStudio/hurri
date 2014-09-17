function RoomManager(){
	this.rooms = {};
}

RoomManager.prototype.getSocketsByUserId = function(user_id) {
	return this.userSockets[user_id];
};

RoomManager.prototype.removeSocketForUser = function(user_id, socket_id) {
	if (this.userSockets[user_id]){
		if (this.isSocketStored(user_id, socket_id)){
			var index = this.userSockets[user_id].indexOf(socket_id);
			this.userSockets[user_id].splice(index, 1);
		}
	}	
};

RoomManager.prototype.addSocketForUser = function(user_id, socket_id) {
	if (this.userSockets[user_id]){
		if (!this.isSocketStored(user_id, socket_id)){
			this.userSockets[user_id].push(socket_id);
		}
	} else {
		this.userSockets[user_id] = [socket_id];
	}
};

RoomManager.prototype.isSocketStored = function(user_id, socket_id){
	return this.userSockets[user_id].indexOf(socket_id) !== -1;
};

module.exports = new RoomManager();