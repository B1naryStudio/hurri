var mongoose = require('../../backend/db/mongoose');

var TrackRepository = require('../../backend/repositories/trackRepository.js');
var param = require('./populating.js');
var id = param.trackid;

describe('Track API should', function () {

	it('call method getTitle ', function(done){
		TrackRepository.getTitle(id, function(err, data){
			data.should.be.object;
			console.log('Data getAll'+data+'');
			done();
		});
	});

	it('call method getLyrics', function(done){
		TrackRepository.getLirycs(id, function(err, data){
			data.should.be.object;
			//console.log(data);
			done();
		});
	});

	it('call method getUrl', function(done){
		TrackRepository.getUrl(id, function(err, data){
			data.should.be.object;
			data.should.have.property('url');
			done();
		});
	});

	it('call method getComments and return array of objects', function(done){
		TrackRepository.getComments(id, function(err, data){
			data.should.be.object;
			done();
		});
	});


});