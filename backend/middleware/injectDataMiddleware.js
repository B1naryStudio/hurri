var fs = require('fs');
var replaceStream = require('replacestream');

module.exports = function (data) {
	return function(req, res, next) {
		fs.createReadStream(__dirname + '/../../public/' + 'index.html')
			.pipe(replaceStream('/** data_replace **/', JSON.stringify(data, null, '\t')))
			.pipe(res);
	};
};