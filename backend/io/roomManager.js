var context = require('../units/context');
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
				context.io.sockets.sockets[i].leave(room_name);
			}
		}
	}	
};

RoomManager.prototype.addRoomToUser = function(user_id, room_name) {
	user_id = user_id.toString();
	if (this.userRooms[user_id]){
		if (!this.isRoomStored(user_id, room_name)){
			this.userRooms[user_id].push(room_name);
			this.addSocketsToRoom(user_id, room_name);
		}
	} else {
		this.userRooms[user_id] = [room_name];
		this.addSocketsToRoom(user_id, room_name);
		console.log('ADD ROOM TO USER: ', user_id, room_name);
	}
};

RoomManager.prototype.isRoomStored = function(user_id, room_name){
	return this.userRooms[user_id].indexOf(room_name) !== -1;
};

RoomManager.prototype.onAddUserSocket = function(user_id, socket_id) {
	user_id = user_id.toString();
	for (var i in this.userRooms[user_id]){
		context.io.sockets.connected[socket_id].join(this.userRooms[user_id][i]);
	}
};

RoomManager.prototype.addSocketsToRoom = function(user_id, room_name) {
	if (sockets[user_id]){
			for (var i = 0; i < sockets[user_id].length; i++){
				context.io.sockets.connected[sockets[user_id][i]].join(room_name);
			}
	}
};

RoomManager.prototype.getSocketsByRoom = function(roomId) {
	var res = [], 
	room = context.io.sockets.adapter.rooms[roomId];
	if (room) {
		for (var id in room) {
			res.push(context.io.sockets.adapter.nsp.connected[id].id);
		}
	}
	return res;
};


module.exports = new RoomManager();