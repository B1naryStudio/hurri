var app = require('../../backend/server');
var request = require('supertest');

describe('album api should', function(){
	it('have get /api/album/id route', function(done){
		request(app)
		.get('/api/album/id')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/album/id/cover route', function(done){
		request(app)
		.get('/api/album/id/cover')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/album/id/singer route', function(done){
		request(app)
		.get('/api/album/id/singer')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/album/id/genres route', function(done){
		request(app)
		.get('/api/album/id/genres')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/album/id/tracks route', function(done){
		request(app)
		.get('/api/album/id/tracks')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/album/id/comments route', function(done){
		request(app)
		.get('/api/album/id/comments')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have post /api/album route', function(done){
		request(app)
		.post('/api/album')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/album/id route', function(done){
		request(app)
		.put('/api/album/id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/album/id/title route', function(done){
		request(app)
		.put('/api/album/id/title')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/album/id/cover route', function(done){
		request(app)
		.put('/api/album/id/cover')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/album/id/release route', function(done){
		request(app)
		.put('/api/album/id/release')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/album/id/genre route', function(done){
		request(app)
		.put('/api/album/id/genre')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/album/id/tracks route', function(done){
		request(app)
		.put('/api/album/id/tracks')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have delete /api/album/id route', function(done){
		request(app)
		.delete('/api/album/id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});
});