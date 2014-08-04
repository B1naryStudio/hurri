var app = require('../../backend/server');
var request = require('supertest');

describe('artist api should', function(){
	it('have get /api/artist/:id route', function(done){
		request(app)
		.get('/api/artist/:id')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/artist/:name route', function(done){
		request(app)
		.get('/api/artist/:name')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have post /api/artist route', function(done){
		request(app)
		.post('/api/artist')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/artist/:id route', function(done){
		request(app)
		.put('/api/artist/:id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/artist/:id/bio route', function(done){
		request(app)
		.put('/api/artist/:id/bio')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/artist/:id/genres route', function(done){
		request(app)
		.put('/api/artist/:id/genres')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/artist/:id/picture route', function(done){
		request(app)
		.put('/api/artist/:id/picture')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/artist/:id/name route', function(done){
		request(app)
		.put('/api/artist/:id/name')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have delete /api/artist/:id route', function(done){
		request(app)
		.delete('/api/artist/:id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});
});