var io = require('../units/context').io;
var sockets = require('./sockets');

function RoomManager(){
	this.userRooms = {};
}

RoomManager.prototype.getRoomsByUserId = function(user_id) {
	return this.userRooms[user_id.toString()];
};

RoomManager.prototype.removeUserFromRoom = function(user_id, room_name) {
	user_id = user_id.toString();
	if (this.userRooms[user_id]){
		if (this.isRoomStored(user_id, room_name)){
			var index = this.userRooms[user_id].indexOf(room_name);
			this.userRooms[user_id].splice(index, 1);


			for (var i in sockets[user_id]){
				io.sockets.connected[i].leave(room_name);
			}
		}
	}	
};

RoomManager.prototype.addUserToRoom = function(user_id, room_name) {
	user_id = user_id.toString();
	if (this.userRooms[user_id]){
		if (!this.isSocketStored(user_id, room_name)){
			this.userRooms[user_id].push(room_name);
			this.addSocketsToRoom(user_id, room_name);
		}
	} else {
		this.userRooms[user_id] = [room_name];
		this.addSocketsToRoom(user_id, room_name);
	}
};

RoomManager.prototype.isRoomStored = function(user_id, room_name){
	return this.rooms[user_id].indexOf(room_name) !== -1;
};

RoomManager.prototype.onAddUserSocket = function(user_id, socket_id) {
	user_id = user_id.toString();
	for (var i in this.userRooms[user_id]){
		io.sockets.connected[socket_id].join(this.userRooms[user_id][i]);
	}
};

RoomManager.prototype.addSocketsToRoom = function(user_id, room_name) {
	for (var i in sockets[user_id]){
		io.sockets.connected[i].join(room_name);
	}
};

module.exports = new RoomManager();