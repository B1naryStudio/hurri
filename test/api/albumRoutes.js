var app = require('../../backend/server');
var request = require('supertest');

describe('album api should', function(){
	it('have get /album/album/id route', function(done){
		request(app)
		.get('/album/album/id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});
});