var express = require('express');
var bodyParser = require('body-parser');


var path = require('path');

var fs = require('fs');

var app = express();

var staticPath = path.normalize(__dirname + '/../public');
app.use(express.static(staticPath));

staticPath = path.normalize(__dirname + '/../bower_components');
app.use('/bower_components', express.static(staticPath));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

var routes = require('./api/routes')(app);
var viewRoutes = require('./view_routes/routes')(app);

// reference: http://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
app.use(function (req, res, next) {
	res.status(404);

	// respond with html page
	if (req.accepts('html')) {
		res.set('Content-Type', 'text/html');
		res.send(fs.readFileSync(__dirname + '/../public/' + '404.html', 'utf8'));
		return;
	}

	// respond with json
	if (req.accepts('json')) {
		res.send({ error: 'Not found' });
		return;
	}

	// default to plain-text. send()
	res.type('txt').send('Not found');
});

app.listen(3055);

module.exports = app;
