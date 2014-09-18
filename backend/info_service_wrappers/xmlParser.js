var request = require('request');
var fs = require('fs');
var xml2js = require('xml2js');
var parseString = require('xml2js').parseString;
var trackRepository = require('../repositories/trackRepository.js');
var chartRepository = require('../repositories/chartRepository.js');
var async = require('async');

function chartParse(){

}

chartParse.prototype.billboardTop = function (callback) {
	chartRepository.addChart('billboard', function(){});
	var baseURL = 'http://www.billboard.com/rss/charts/hot-100';
	request(baseURL , function (error, response, body) {
		if (!error && response.statusCode == 200) {
			parseString(body, function (err, result) {

				var results = [];
				for (var i = 0; i < result.rss.channel[0].item.length; i++){
					results[i] = {};
					results[i].rankTw  = i+1;
					results[i].singer = result.rss.channel[0].item[i].artist[0];
					results[i].title = result.rss.channel[0].item[i].chart_item_title[0];
					results[i].rankLw = result.rss.channel[0].item[i].rank_last_week[0];
				}
				chartRepository.setChart('billboard', results, function(err, data){});
				async.map(results, trackRepository.getExistSong.bind(trackRepository), function(err, data){
						if (!err){
							for (var i = 0; i < data.length; i++){
								if(data[i].length === 0){
									data[i] = results[i];
									/*request('/getStream?query='+results[i].title, function (err, result){
										data[i].set({url: result.url, duration: result.duration});
									});*/
								} else {
									data[i] = data[i][0];
								}						
							}
						}
					async.map(data, trackRepository.addTrack.bind(trackRepository), function (err, addResult){
					});
					chartRepository.setTracks('billboard', data, function(err, data){});
					callback(err, data);
				});


			});
		}
	});
};


chartParse.prototype.benMajorUkTop = function (callback) {
	chartRepository.addChart('ben-major', function(){});
	var baseURL = 'http://ben-major.co.uk/labs/top40/api/singles/';
	request(baseURL , function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var result = JSON.parse(body);
			var results = [];
			for (var i = 0; i < result.entries.length; i++){
				results[i] = {};
				results[i].rankTw = i+1;
				results[i].singer = result.entries[i].artist;
				results[i].title = result.entries[i].title;
				results[i].rankLw = result.entries[i].previousPosition;
			}
			results.updated = result.date;
			chartRepository.setChart('ben-major', results, function(err, data){});
	/*		trackRepository.getExistSong(results, function(err, data){
				console.log('err=', err);
				console.log('data=', data);

			});	*/		
			async.map(results, trackRepository.getExistSong.bind(trackRepository), function(err, data){
					if (!err){
						for (var i = 0; i < data.length; i++){
							if(data[i].length === 0){
								data[i] = results[i];
							} else {
								data[i] = data[i][0];
							}						
						}
					}
				async.map(data, trackRepository.addTrack.bind(trackRepository), function (err, addResult){
					console.log('add res=', addResult);
					console.log('add err=', err);
				});
				chartRepository.setTracks('ben-major', data, function(err, data){});
				callback(err, data);
			});
		}
	});
};

chartParse.prototype.iTunesTop = function (callback) {
	chartRepository.addChart('itunes', function(){});
	var baseURL = 'https://itunes.apple.com/ua/rss/topsongs/limit=25/explicit=true/xml';
	request(baseURL , function (error, response, body) {
		parseString(body, function (err, parseResult) {
			var results = [];
			for (var i = 0; i < parseResult.feed.entry.length; i++){
				results[i] = {};
				results[i].rankTw = i+1;
				results[i].singer = parseResult.feed.entry[i]['im:artist'][0]._;
				results[i].title = parseResult.feed.entry[i]['im:name'][0];
			}
			results.updated = parseResult.feed.entry.updated;
			chartRepository.setChart('itunes', results, function(err, data){});
			async.map(results, trackRepository.getExistSong.bind(trackRepository), function (err, data){
					if (!err){
						for (var i = 0; i < data.length; i++){
							if(data[i].length === 0){
								data[i] = results[i];
							} else {
								data[i] = data[i][0];
							}						
						}
					}
				async.map(data, trackRepository.addTrack.bind(trackRepository), function (err, addResult){
					console.log('add res=', addResult);
					console.log('add err=', err);
				});
				chartRepository.setTracks('itunes', data, function(err, data){});
				callback(err, data);
			});

		});
	});
};

module.exports = new chartParse();



