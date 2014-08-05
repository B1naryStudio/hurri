var DialogueRepository = require('../repositories/dialogueRepository');
var dialogueRepository = new DialogueRepository();

module.exports = function(app){

  app.get('/dialogue/:id1/:id2', function(req, res, next){
    res.render('index');
  });


};