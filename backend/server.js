var express = require('express');
var bodyParser = require('body-parser');


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
/*var io = require('socketio').listen(3055);
io.sockets.on('connection', function (socket) {
	console.log('connect');
}); */
app.listen(3055);

module.exports = app;
