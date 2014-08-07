var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;

mongoose = new Mongoose();
mockgoose(mongoose);

var Album = require('../../backend/schemas/album.js')
var AlbumRepository = require('../../backend/repositories/albumRepository.js');
var param = require('./populating.js');
var id = param.albumid;
var name = param.albumname;

describe('Album API should', function () {

	it('call method getByName and return Object', function(done){
		AlbumRepository.getByName(name, function(err, data){
			data.should.be.object;
			done();
		});
	});

	it('call method getCover and return cover url', function(done){
		AlbumRepository.getCover(id, function(err, data){
			data.should.be.object;
			data.should.have.property('cover');
			data.cover.should.be.type('string');
			done();
		});
	});

	it('call method getSinger and return singer object', function(done){
		AlbumRepository.getSinger(id, function(err, data){
			data.should.be.object;
			done();
		});
	});

	it('call method getGenres and return array', function(done){
		AlbumRepository.getGenres(id, function(err, data){
			data.should.be.object;
			data.should.have.property('genres');
			data.genres.should.be.an.Array;
			done();
		});
	});

	it('call method getTracks and return array of objects', function(done){
		AlbumRepository.getTracks(id, function(err, data){
			data.should.be.object;
			data.should.have.property('tracks');
			data.tracks.should.be.an.Array;
			done();
		});
	});

	it('call method getComments and return array of objects', function(done){
		AlbumRepository.getComments(id, function(err, data){
			data.should.be.object;
			data.should.have.property('comment');
			data.comment.should.be.an.Array;
			done();
		});
	});


});