var ArtistRepository = require('../repositories/artistRepository');
var artistRepository = new ArtistRepository();

module.exports = function(app){

  app.get('/artist/:id', function(req, res, next){
    res.render('index');
  });

  app.get('/artist/:name', function(req, res, next){
    res.render('index');
  });


};