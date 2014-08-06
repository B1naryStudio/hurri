var express = require('express');

var fs = require('fs');

var app = express();

module.exports = function (params) {

	var file = fs.readFileSync(__dirname + '/../../public/' + 'index.html', 'utf8');
	console.log(file);
	console.log(file.replace(/<\!\-\-data_replace\-\-\>/g, JSON.stringify(params.data)));
	return file.replace(/<\!\-\-data_replace\-\-\>/g, JSON.stringify(params.data));

};