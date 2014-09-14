var _ = require('underscore');

module.exports = function(req, res, next){
	var successStatus = res.successStatus || 200;
	var failureStatus = res.failureStatus || 404;
	if (res.err){
		res.status(400).end();
	}
	var status = _.isEmpty(res.data) ? failureStatus : successStatus;
	//console.log(res.data);
	res.status(status).json(res.data);
};