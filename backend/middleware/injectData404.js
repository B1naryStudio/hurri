var fs = require('fs');
var replaceStream = require('replacestream');

module.exports = function (str) {
	return function(req, res, next) {
		fs.createReadStream(__dirname + '/../../public/' + 'index.html')
			.pipe(replaceStream('<!--404_placeholder-->', str))
			.pipe(res);
	};
};