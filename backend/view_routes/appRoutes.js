
module.exports = function(app){
	app.get('/', function(req, res, next){
		res.send('index');	
	});

	app.get('/album/:id', function(req, res, next){
		res.render('index');
	});

	app.get('/album/:id/cover', function(req, res, next){
		res.render('index');
	});

	app.get('/album/:id/singer', function(req, res, next){
		res.render('index');
	});

	app.get('/album/:id/genres', function(req, res, next){
		res.render('index');
	});

	app.get('/album/:id/tracks', function(req, res, next){
		res.render('index');
	});

	app.get('/album/:id/comments', function(req, res, next){
		res.render('index');
	});

	app.get('/artist/:id', function(req, res, next){
		res.render('index');
	});

	app.get('/artist/:name', function(req, res, next){
		res.render('index');
	});

	app.get('/dialogue/:id1/:id2', function(req, res, next){
		res.render('index');
	});

	app.get('/group/:id/members', function(req, res, next){
		res.render('index');
	});

	app.get('/group/:id/tracks', function(req, res, next){
		res.render('index');
	});

	app.get('/track/:id', function(req, res, next){
		res.render('index');
	});

	app.get('/track/:id/title', function(req, res, next){
		res.render('index');
	});

	app.get('/track/:id/lyrics', function(req, res, next){
		res.render('index');
	});

	app.get('/track/:id/url', function(req, res, next){
		res.render('index');
	});

	app.get('/track/:id/comments', function(req, res, next){
		res.render('index');
	});

	app.get('/user/:id', function(req, res, next){
		res.render('index');
	});

	app.get('/user/:id/like', function(req, res, next){
		res.render('index');
	});

	app.get('/user/:id/groups', function(req, res, next){
		res.render('index');
	});

	app.get('/user/:id/playlists', function(req, res, next){
		res.render('index');
	});

	app.get('/user/:id/playlists/:id_pl', function(req, res, next){
		res.render('index');
	});
};