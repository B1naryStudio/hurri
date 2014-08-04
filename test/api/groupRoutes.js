var app = require('../../backend/server');
var request = require('supertest');

describe('group api should', function(){
	it('have get /api/group/:id/members route', function(done){
		request(app)
		.get('/api/group/:id/members')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/group/:id/tracks route', function(done){
		request(app)
		.get('/api/group/:id/tracks')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have post /api/group route', function(done){
		request(app)
		.post('/api/group')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/group/:id route', function(done){
		request(app)
		.put('/api/group/:id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/group/:id/listeners route', function(done){
		request(app)
		.put('/api/group/:id/listeners')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have delete /api/group/:id route', function(done){
		request(app)
		.delete('/api/group/:id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});
});