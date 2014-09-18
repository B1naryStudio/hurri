var connection = require('../db/dbconnect.js');
var Chart = require('../schemas/chart.js');
var trackRepository = require('./trackRepository.js');
var mongoose = require('mongoose');
var chartParser = require('../info_service_wrappers/xmlParser.js');
var Repository = require('./generalRepository.js');

function chartRepository () {
	Repository.prototype.constructor.call(this);
	this.model = Chart;
}

chartRepository.prototype = new Repository();

chartRepository.prototype.addChart = function(name, callback){
	var model = this.createModel();
	var query = model.findOne({name: name});
	console.log('querry=', query);
	var newitem = new model({
		name: name,
	});
	newitem.save(callback);
};

chartRepository.prototype.addTracks = function(id, tracks, positionLw, positionChange, callback) {
	var model = this.infoModel;
	var query = model.findOneAndUpdate({_id: id},{$push: {tracks:tracks}}, {$push: {positionLw: positionLw}}, {$push: {positionChange: positionChange}});
	query.exec(callback);
};

chartRepository.prototype.getChart = function(id, callback){
	var model = this.model;
	var query = model.findOne({_id: id}).populate('tracks');
	query.exec(callback);
};

chartRepository.prototype.setPositionLw = function(name, list1, list2, callback){
	var model = this.model;
	var query = model.findOneAndUpdate({name: name}, {$set: {positionLw: list1, positionChange: list2}});
	query.exec(callback);
};

chartRepository.prototype.setChart = function(name, list, callback){
	var model = this.model;
	var positions = [];
	var change = [];
	for (var i = 0; i < list.length; i++){
		positions[i] = parseInt(list[i].rankLw);
		if (positions[i] === 0){
			change[i] = 0;
		} else {
			change[i] = positions[i] - i - 1;
		}
	}
	this.setPositionLw(name, positions, change, callback);
};

chartRepository.prototype.setTracks = function(name, list, callback){
	var model = this.model;
	var tracks = [];
	for (var i = 0; i < list.length; i++){
		tracks[i] = list[i]._id;
	}
	var query = model.findOneAndUpdate({name: name}, {$set: {tracks: tracks}});
	query.exec(callback);
};

module.exports = new chartRepository();