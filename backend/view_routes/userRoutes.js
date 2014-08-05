var UserRepository = require('../repositories/userRepository');
var userRepository = new UserRepository();

module.exports = function(app){

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