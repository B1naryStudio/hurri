var express = require('express');

var path = require('path');

var app = express();

var staticPath = path.normalize(__dirname + '/../public');
app.use(express.static(staticPath));

var routes = require('./api/routes')(app);

app.listen(3055);

module.exports = app;