var appRoutes = require('./appRoutes');

module.exports = function(app){
	return {
		appRoutes: appRoutes(app)
	};
};