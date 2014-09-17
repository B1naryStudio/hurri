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

var config = require('./config/');
var MongoStore = require('connect-mongo')(session);
var mongoose_connection = require('./db/dbConnect').connection;

var context = require('./units/context');

context.mongoStore = new MongoStore({
	mongoose_connection : mongoose_connection
});

app.use(session({
	secret: config.session.secret,
	store: context.mongoStore
}));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );
app.use(passport.initialize());
app.use(passport.session());

var pass = require('./middleware/passport')();

var routes = require('./api/routes')(app);
var viewRoutes = require('./view_routes/routes')(app);

var server = app.listen(3055);

var ioserver = require('./io/server')(server);

// var runner = require('./info_service_wrappers/taskRunner');
// runner(50000, 50020, false);

module.exports = app;
