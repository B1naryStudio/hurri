var fs = require('fs');
var replaceStream = require('replacestream');

module.exports = function (data, res, error) {
	error = error || false;
	console.log(data);
	res.header('Content-Type', 'text/html');
	fs.createReadStream(__dirname + '/../../public/' + '_index.html')
		.pipe(replaceStream("[\"data_replace\"]", JSON.stringify(data)))
		.pipe(replaceStream("window._is404Error = false;", "window._is404Error = " + error + ";"))
		.pipe(res);
};