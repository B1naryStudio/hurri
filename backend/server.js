var express = require('express');

var path = require('path');

var app = express();

//app.engine('jade', require('jade').__express);
//var viewsPath = path.normalize(__dirname + '/../frontend/views');
//app.set('views', viewsPath);
//app.set('view engine', 'jade');

var staticPath = path.normalize(__dirname + '/../public');
app.use(express.static(staticPath));

staticPath = path.normalize(__dirname + '/../bower_components');
app.use('/bower_components', express.static(staticPath));

var routes = require('./api/routes')(app);
var viewRoutes = require('./view_routes/routes')(app);

app.listen(3055);

module.exports = app;
