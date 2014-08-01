var DeezerWrapper = require('../../backend/info_service_wrappers/DeezerWrapper');

describe('DeezerWrapper should', function(){

	var deezer = new DeezerWrapper();

	it('contain have methods for artist and album getting', function(){
		deezer.getArtistByName.should.be.Function;
		deezer.getAlbumByName.should.be.Function;
	});

});