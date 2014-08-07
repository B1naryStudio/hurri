var winston = require('winston');

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({ json: false, timestamp: true }),
		new winston.transports.File({ filename: __dirname + '/../../logs/common/development.log', json: false })
	],
	exceptionHandlers: [
		new (winston.transports.Console)({ json: false, timestamp: true }),
		new winston.transports.File({ filename: __dirname + '/../../logs/common/error.log', json: false })
	],
	exitOnError: false
});

module.exports = logger;