var artistRoutes = require('./artistRoutes');
var albumRoutes = require('./albumRoutes');
var dialogueRoutes = require('./dialogueRoutes');
var groupRoutes = require('./groupRoutes');
var trackRoutes = require('./trackRoutes');
var userRoutes = require('./userRoutes');

module.exports = function(app){
	return {
		artistRoutes: artistRoutes(app),
		albumRoutes: albumRoutes(app),
		dialogueRoutes: dialogueRoutes(app),
		groupRoutes: groupRoutes(app),
		trackRoutes: trackRoutes(app),
		userRoutes: userRoutes(app)
	};
};