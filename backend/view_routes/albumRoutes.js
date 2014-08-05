var AlbumRepository = require('../repositories/albumRepository');
var albumRepository = new AlbumRepository();
var renderHelper = require('./renderHelper');
module.exports = function(app){

  app.get('/album/:id', function(req, res, next){
//    res.render('index');
    renderHelper({route: req.path, data: {some: 'data'}});
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

};