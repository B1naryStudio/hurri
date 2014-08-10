var mongoose = require('../../backend/db/mongoose');

var Album = require('../../backend/schemas/album.js')
var AlbumRepository = require('../../backend/repositories/albumRepository.js');
var param = require('../seeders/populating.js');
var id = param.albumid;
var name = param.albumname;

describe('Album API should', function () {

	it('call method getByTitle and return Object', function(done){
		AlbumRepository.getByTitle(name, function(err, data){
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

describe('Populate', function () {
	
		it('should find the childs within the parent', function (done) {
			Album.findOne({_id : id}, function (err) {
				(err === null).should.be.ok;
			}).populate('tracks').exec(function (err, result) {
					result.should.have.property('tracks').with.lengthOf(1);
					done();
				});
		});

});