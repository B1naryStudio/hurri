var artistRoutes = require('./artistRoutes');

module.exports = function(app){
	return {
		artistRoutes: artistRoutes(app)
	};
};