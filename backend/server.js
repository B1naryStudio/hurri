var express = require('express');
var bodyParser = require('body-parser');
var socketio = require('socket.io');


var path = require('path');

var fs = require('fs');

var app = express();

var logger = require('./units/logger');
logger.info('Server is running');

var morgan = require('./middleware/morgan');

var staticPath = path.normalize(__dirname + '/../public');
app.use(express.static(staticPath));

staticPath = path.normalize(__dirname + '/../bower_components');
app.use('/bower_components', express.static(staticPath));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

var routes = require('./api/routes')(app);
var viewRoutes = require('./view_routes/routes')(app);

var server = app.listen(3055);

var io = socketio(server);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


module.exports = app;
