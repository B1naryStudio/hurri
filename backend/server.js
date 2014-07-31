var express = require('express');
var socketio = require('socket.io');

var path = require('path');

var app = express();
var server = require('http').Server(app);
var io = socketio(server);

var staticPath = path.normalize(__dirname + '/../public');
app.use(express.static(staticPath));

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
  	//dostuff
  });
});

app.listen(3055);
