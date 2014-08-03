var app = require('../../backend/server');
var request = require('supertest');

describe('track api should', function(){
	it('have get /api/track/id route', function(done){
		request(app)
		.get('/api/track/id')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/track/id/title route', function(done){
		request(app)
		.get('/api/track/id/title')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/track/id/lyrics route', function(done){
		request(app)
		.get('/api/track/id/lyrics')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/track/id/url route', function(done){
		request(app)
		.get('/api/track/id/url')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/track/id/comments route', function(done){
		request(app)
		.get('/api/track/id/comments')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have post /api/track route', function(done){
		request(app)
		.post('/api/track')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/track/id route', function(done){
		request(app)
		.put('/api/track/id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/track/id/title route', function(done){
		request(app)
		.put('/api/track/id/title')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/track/id/release route', function(done){
		request(app)
		.put('/api/track/id/release')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/track/id/lyrics route', function(done){
		request(app)
		.put('/api/track/id/lyrics')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/track/id/url route', function(done){
		request(app)
		.put('/api/track/id/url')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have delete /api/track/id route', function(done){
		request(app)
		.delete('/api/track/id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});
});