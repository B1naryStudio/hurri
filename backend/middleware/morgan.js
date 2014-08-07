var morgan = require('morgan');

module.exports = function(app) {
	app.use(morgan('combined', {
		skip: function (req, res) { return res.statusCode < 400; }
	}));
};