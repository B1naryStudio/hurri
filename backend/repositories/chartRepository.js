var connection = require('../db/dbconnect.js');
var Track = require('../schemas/track.js');
var Repository = require('./generalRepository.js');
var trackRepository = require('./trackRepository.js');
var mongoose = require('mongoose');
var chartParser = require('../info_service_wrappers/xmlParser.js');


function chartRepository () {
	Repository.prototype.constructor.call(this);
	this.model = Track;
}

chartRepository.prototype.addTrack = function(songlist, callback){
	trackRepository.getExistSong(songlist[0], function(err, data){

	});
};

module.exports = new chartRepository();