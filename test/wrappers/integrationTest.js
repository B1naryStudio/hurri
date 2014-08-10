var deezer = require('../../backend/info_service_wrappers/DeezerWrapper');
var mongoose = require('../../backend/db/mongoose');
var Artist = require('../../backend/schemas/artist.js');
//mongoose.mockgoose.reset();

describe('Wrapper function should', function () {

		it('set items into database according schema', function (done) {
			var artist = { 
				_id : mongoose.Types.ObjectId(),
				name : 'SomeName',
				picture : '/image/img.png',
				albums_id: [mongoose.Types.ObjectId()],
				genres: ['rock'],
				bio: 'yuppppii'
			};
			var item = new Artist(artist);	
			deezer.addItem(artist, 'artist', function(data){
				data.should.be.Object;
				data.should.have.properties('_id', 'name', 'picture');
			});
			
			done()
		});
});
