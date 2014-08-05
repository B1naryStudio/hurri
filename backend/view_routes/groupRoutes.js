var GroupRepository = require('../repositories/groupRepository');
var groupRepository = new GroupRepository();

module.exports = function(app){

  app.get('/group/:id/members', function(req, res, next){
    res.render('index');
  });

  app.get('/group/:id/tracks', function(req, res, next){
    res.render('index');
  });


};