var deezer = require('../../backend/info_service_wrappers/DeezerWrapper');

describe('DeezerWrapper should', function(){

	it('contain have methods for artist and album getting', function(){
		deezer.getItem.should.be.Function;
		deezer.importTracks.should.be.Function;
		deezer.getAlbumInfo.should.be.Function;
	});

	it('contain have methods for artist, album and track setting', function(){
		deezer.saveTracks.should.be.Function;
		deezer.addItem.should.be.Function;
	});
});

describe('DeezerWrapper functions should', function(){

	it('getItem returns object with necessary data', function(){
		deezer.getItem('/albums/302127', function(result){
			result.shoul.be.Object;
			result.should.have.property('title');
			result.title.should.be.type('string');
			result.title.should.be('Discovery')
		});
	});

	it('getItem returns error object', function(){
		deezer.getItem('/albums/100000000', function(result){
			result.shoul.be.Object;
			result.should.have.property('error');
			result.error.code.should.be(800);
		});
	});

	it('importTracks returs object with array of tracks', function(){
		deezer.importTracks({id:302127}, function(result){
			result.shoul.be.Object;
			result.should.have.property('data');
			result.data.should.have.length(14);
		});
	});

	it('getAlbumInfo returns object with necessary data', function(){
		deezer.getAlbumInfo(302127, function(result){
			result.shoul.be.Object;
			result.should.have.property('genre_id');
			result.genre_id.should.be(113);
		});
	});
});