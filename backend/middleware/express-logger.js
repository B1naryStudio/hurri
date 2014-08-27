var log = require('winston-wrapper')(module);

/**
 * Custom logger for express requests.
 */
module.exports = function (req, res, next) {

	var date = new Date();
	var hh = date.getHours();
	var mm = date.getMinutes();
	var time = hh + ':' + mm;

	log.info(time, '[' + req.method.grey + ']:', req.url);
	next();
};