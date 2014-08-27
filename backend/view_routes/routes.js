var commonRoutes = require('./commonRoutes');
var artistRoutes = require('./artistRoutes');
var albumRoutes = require('./albumRoutes');
var dialogueRoutes = require('./dialogueRoutes');
var groupRoutes = require('./groupRoutes');
var trackRoutes = require('./trackRoutes');
var userRoutes = require('./userRoutes');
var authRoutes = require('./authRoutes');

module.exports = function(app){
  return {
    userRoutes: userRoutes(app),
    artistRoutes: artistRoutes(app),
    albumRoutes: albumRoutes(app),
    dialogueRoutes: dialogueRoutes(app),
    groupRoutes: groupRoutes(app),
    trackRoutes: trackRoutes(app),
    authRoutes: authRoutes(app),
    commonRoutes: commonRoutes(app)
  };
};