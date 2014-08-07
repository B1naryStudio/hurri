var app = require('../../backend/server');
var request = require('supertest');
var codes = [200, 301, 400];

describe('user api should', function(){
	it('have get /api/user/:id route', function(done){
		request(app)
		.get('/api/user/:id')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/user/:id/like route', function(done){
		request(app)
		.get('/api/user/:id/like')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/user/:id/groups route', function(done){
		request(app)
		.get('/api/user/:id/groups')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/user/:id/playlists route', function(done){
		request(app)
		.get('/api/user/:id/playlists')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/user/:id/playlists/:id_pl route', function(done){
		request(app)
		.get('/api/user/:id/playlists/:id_pl')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have post /api/user route', function(done){
		request(app)
		.post('/api/user')
		.expect(201)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/user/:id route', function(done){
		request(app)
		.put('/api/track/:id')
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have put /api/user/:id/playlist route', function(done){
		request(app)
		.put('/api/user/a5a5a5a5a52a/playlist')
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have put /api/user/:id/like route', function(done){
		request(app)
		.put('/api/user/a5a5a5a5a52a/like')
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have put /api/user/:id/group route', function(done){
		request(app)
		.put('/api/user/a5a5a5a5a52a/group')
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have delete /api/user/:id route', function(done){
		request(app)
		.delete('/api/user/:id')
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});
});