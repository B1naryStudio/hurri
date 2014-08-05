var TrackRepository = require('../repositories/trackRepository');
var trackRepository = new TrackRepository();

module.exports = function(app){

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

};