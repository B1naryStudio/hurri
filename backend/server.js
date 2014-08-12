var path = require('path');

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();

var morgan = require('./middleware/morgan');
var logger = require('./units/logger');
logger.info('Server is running');

var staticPath = path.normalize(__dirname + '/../public');
app.use(express.static(staticPath));

staticPath = path.normalize(__dirname + '/../bower_components');
app.use('/bower_components', express.static(staticPath));

app.use(session({ secret: 'SECRET' }));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );
app.use(passport.initialize());
app.use(passport.session());

var pass = require('./middleware/passport')();

var routes = require('./api/routes')(app);
var viewRoutes = require('./view_routes/routes')(app);
/*var io = require('socketio').listen(3055);
io.sockets.on('connection', function (socket) {
	console.log('connect');
}); */
app.listen(3055);

module.exports = app;
