var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;
mongoose = new Mongoose();
mockgoose(mongoose);

var AlbumRepo = require('../../backend/repositories/albumRepository.js');
require('./populating.js');
var id = '53e29fabdf508c382dd42869';

describe('Album API should', function () {

	it('call method getCover and return cover url', function(done){
		AlbumRepo.getCover(id, function(err, data){
			data.should.be.object;
			data.should.have.property('cover');
			data.cover.should.be.type('string');
			done();
		});
	});

	it('call method getSinger and return singer object', function(done){
		AlbumRepo.getSinger(id, function(err, data){
			data.should.be.object;
			console.log(data);
			done();
		});
	});

	it('call method getGenres and return array', function(done){
		AlbumRepo.getGenres(id, function(err, data){
			data.should.be.object;
			data.should.have.property('genres');
			data.genres.should.be.an.Array;
			done();
		});
	});

	it('call method getTracks and return array of objects', function(done){
		AlbumRepo.getTracks(id, function(err, data){
			data.should.be.object;
			data.should.have.property('tracks');
			data.tracks.should.be.an.Array;
			console.log(data);
			done();
		});
	});

	it('call method getComments and return array of objects', function(done){
		AlbumRepo.getComments(id, function(err, data){
			data.should.be.object;
			data.should.have.property('comment');
			data.comment.should.be.an.Array;
			done();
		});
	});


});var casual = require('./casual.js');
var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;
mongoose = new Mongoose();
mockgoose(mongoose);

var Album = require('../../backend/schemas/album.js');
var Artist = require('../../backend/schemas/album.js');
var Dialog = require('../../backend/schemas/album.js');
var Group = require('../../backend/schemas/album.js');
var Track = require('../../backend/schemas/album.js');
var Userinfo = require('../../backend/schemas/album.js');
var Userauth = require('../../backend/schemas/album.js');

var albums;
var artists;
var dialogs;
var radios;
var tracks;
var userinfos;
var userauths;

mongoose.connect('mongodb://localhost:27017/hurri');

for (var i = 0; i <= 9; i++) {
	albums = new Album(casual.albums); albums.save();
	artists = new Artist(casual.artists); artists.save();
	dialogs = new Dialog(casual.dialogs); dialogs.save();
	radios = new Group(casual.radios); radios.save();
	tracks = new Track(casual.tracks); tracks.save();
	userinfos = new Userinfo(casual.userinfos); userinfos.save();
	userauths = new Userauth(casual.userauths); userauths.save();
};

