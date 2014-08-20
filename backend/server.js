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

var server = app.listen(3055);

var ioserver = require('./io/server')(server);

var runner = require('./info_service_wrappers/taskRunner');
runner(50000, 50020, false);

module.exports = app;
