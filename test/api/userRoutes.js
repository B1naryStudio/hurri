var app = require('../../backend/server');
var request = require('supertest');

describe('user api should', function(){
	it('have get /api/user/id/like route', function(done){
		request(app)
		.get('/api/user/id/like')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/user/id/groups route', function(done){
		request(app)
		.get('/api/user/id/groups')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/user/id/playlists route', function(done){
		request(app)
		.get('/api/user/id/playlists')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have get /api/user/id/playlists/id_pl route', function(done){
		request(app)
		.get('/api/user/id/playlists/id_pl')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			done(err);
		})
	});

	it('have post /api/user route', function(done){
		request(app)
		.post('/api/user')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/user/id route', function(done){
		request(app)
		.put('/api/track/id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/user/id/playlist route', function(done){
		request(app)
		.put('/api/track/id/title')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/user/id/like route', function(done){
		request(app)
		.put('/api/track/id/release')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/user/id/group route', function(done){
		request(app)
		.put('/api/user/id/group')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});

	it('have delete /api/user/id route', function(done){
		request(app)
		.delete('/api/user/id')
		.expect(200)
		.end(function(err, res){
			done(err);
		})
	});
});