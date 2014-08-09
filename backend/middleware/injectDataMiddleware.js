var fs = require('fs');
var replaceStream = require('replacestream');

module.exports = function (data, res) {
	res.header('Content-Type', 'text/html');
	fs.createReadStream(__dirname + '/../../public/' + 'index.html')
		.pipe(replaceStream('/** data_replace **/', JSON.stringify(data, null, '\t')))
		.pipe(res);
};