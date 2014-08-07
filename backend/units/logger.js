var winston = require('winston');
var config = require('../config/');

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({ json: config.logger.transports.console.json, timestamp: config.logger.transports.console.timestamp }),
		new winston.transports.File({ filename: config.logger.transports.file.filename, json: config.logger.transports.file.json })
	],
	exceptionHandlers: [
		new (winston.transports.Console)({ json: false, timestamp: true }),
		new winston.transports.File({ filename: config.logger.exceptionHandlers.file.filename, json: config.logger.exceptionHandlers.file.json })
	],
	exitOnError: config.logger.exitOnError
});

module.exports = logger;