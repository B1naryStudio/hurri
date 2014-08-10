var deezer = require('../../backend/info_service_wrappers/DeezerWrapper');
var mongoose = require('../../backend/db/mongoose');

describe('Wrapper function should', function () {

		it('set items into database according schema', function (done) {
			var artist = { 
				_id : mongoose.Types.ObjectId(),
				deezer_id: 1,
				name : 'SomeName',
				picture : '/image/img.png',
				albums_id: [mongoose.Types.ObjectId()],
				genres: ['rock']
			};

			deezer.addItem(artist, 'artist', function(result){
				result.should.be.Object;
				result.should.have.property('deezer_id');
				result.should.have.property('__v');
			})
			done()
		});
});