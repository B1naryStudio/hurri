var app = require('../../backend/server');
var request = require('supertest');

describe('search routes should', function(){
	it('have get /getStream route', function(done){
		request(app)
			.get('/getStream?query=Beatles')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res){
				done(err);
		})
	});
		it('have get /search route', function(done){
		request(app)
			.get('/search?query=Beatles')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res){
				done(err);
		})
	});
});