var request = require('request');
var fs = require('fs');
var xml2js = require('xml2js');
var parseString = require('xml2js').parseString;

function chartParse(){

}

chartParse.prototype.billboardTop = function (callback) {
	var baseURL = 'http://www.billboard.com/rss/charts/hot-100';
	request(baseURL , function (error, response, body) {
		if (!error && response.statusCode == 200) {
			parseString(body, function (err, result) {
				console.log('parse string=', result.rss.channel[0].item);
				console.log('parse err=', err);
				callback(result.rss.channel[0].item);
			});
		}
	});
};

chartParse.prototype.benMajorUkTop = function (callback) {
	var baseURL = 'http://ben-major.co.uk/labs/top40/api/singles/';
	request(baseURL , function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log('body ben-major=', body);
			var result = JSON.parse(body);
			callback(result.entries);
		}
	});
};

chartParse.prototype.iTunesTop = function (callback) {
	var baseURL = 'https://itunes.apple.com/ua/rss/topsongs/limit=25/explicit=true/xml';
	request(baseURL , function (error, response, body) {
		parseString(body, function (err, result) {
			console.log('parse string=', result.feed.entry);
			console.log('parse err=', err);
			callback(result.feed.entry);
		});
	});
};

module.exports = new chartParse();



