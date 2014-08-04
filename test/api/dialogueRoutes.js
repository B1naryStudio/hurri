var app = require('../../backend/server');
var request = require('supertest');

describe('dialogue api should', function(){
	it('have get /api/dialogue/:id1/:id2 route', function(done){
		request(app)
		.get('/api/dialogue/:id1/:id2')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/dialogue/:id route', function(done){
		request(app)
		.put('/api/dialogue/:id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have delete /api/dialogue/:id route', function(done){
		request(app)
		.delete('/api/dialogue/:id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});
});