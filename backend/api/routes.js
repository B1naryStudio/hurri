var artistRoutes = require('./artistRoutes');
var albumRoutes = require('./albumRoutes');
var dialogueRoutes = require('./dialogueRoutes');
var groupRoutes = require('./groupRoutes');
var trackRoutes = require('./trackRoutes');
var likeRoutes = require('./likeRoutes');
var userRoutes = require('./userRoutes');
var searchRoutes = require('./searchRoutes');
var testRoutes = require('./testRoutes');
var chartsRoutes = require('./chartsRoutes');



module.exports = function(app){
	return {
		artistRoutes: artistRoutes(app),
		albumRoutes: albumRoutes(app),
		dialogueRoutes: dialogueRoutes(app),
		groupRoutes: groupRoutes(app),
		trackRoutes: trackRoutes(app),
		likeRoutes: likeRoutes(app),
		userRoutes: userRoutes(app),
		searchRoutes: searchRoutes(app),
		testRoutes: testRoutes(app),
		chartsRoutes: chartsRoutes(app)
	};
};