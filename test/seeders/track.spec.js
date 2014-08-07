// var Mongoose = require('mongoose').Mongoose;
// var mockgoose = require('mockgoose');
// var mongoose;
// mongoose = new Mongoose();
// mockgoose(mongoose);

// var TrackRepository = require('../../backend/repositories/trackRepositorysitory.js');
// require('./populating.js');
// var id = '53e29fabdf508c382dd42869';

// describe('Track API should', function () {

// 	it('call method getCover and return cover url', function(done){
// 		TrackRepository.getCover(id, function(err, data){
// 			data.should.be.object;
// 			data.should.have.property('cover');
// 			data.cover.should.be.type('string');
// 			done();
// 		});
// 	});

// 	it('call method getSinger and return singer object', function(done){
// 		TrackRepository.getSinger(id, function(err, data){
// 			data.should.be.object;
// 			console.log(data);
// 			done();
// 		});
// 	});

// 	it('call method getGenres and return array', function(done){
// 		TrackRepository.getGenres(id, function(err, data){
// 			data.should.be.object;
// 			data.should.have.property('genres');
// 			data.genres.should.be.an.Array;
// 			done();
// 		});
// 	});

// 	it('call method getTracks and return array of objects', function(done){
// 		TrackRepository.getTracks(id, function(err, data){
// 			data.should.be.object;
// 			data.should.have.property('tracks');
// 			data.tracks.should.be.an.Array;
// 			console.log(data);
// 			done();
// 		});
// 	});

// 	it('call method getComments and return array of objects', function(done){
// 		TrackRepository.getComments(id, function(err, data){
// 			data.should.be.object;
// 			data.should.have.property('comment');
// 			data.comment.should.be.an.Array;
// 			done();
// 		});
// 	});


// });