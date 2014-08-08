var mongoose = require('../../backend/db/mongoose');

var casual = require('casual');
var Album = require('../../backend/schemas/album.js')
var AlbumRepository = require('../../backend/repositories/albumRepository.js');

var param = require('./populating.js');
var id = param.albumid;

describe('General API should', function () {

	it('call method getById and return Object', function(done){
		AlbumRepository.getById(id, function(err, data){
			data.should.be.object;
			(err === null).should.be.true;
			data.should.have.property('cover');
			done();
		});
	});

	it('call method add and put object in collection', function(done){
		AlbumRepository.add({title: "Brand new Album"});
		var query = Album.findOne({title: "Brand new Album"});
		query.exec(function (err, docs) {
			docs.should.be.object;
			docs.should.have.property('cover');
			docs.cover.should.be.eql('/image/defaultCover.jpg');
			done();
		});	
	});

	it('call method update and return updated doc', function(done){
	 var title = casual.title;
	 	AlbumRepository.update(id, {title: title});
		var query = Album.findOne({title: title});
		query.exec(function (err, docs) {
			docs.should.be.object;
			(err === null).should.be.true;
			done();
		});
 	});

 	it('call method delete and deletes doc', function(done){
	 	AlbumRepository.delete(id);
		var query = Album.findOne({_id: id});
		query.exec(function (err, docs) {
			(docs === null).should.be.true;
			done();
		});
 	});
});