var app = require('../../backend/server');
var request = require('supertest');
var param = require('../seeders/populating.js');
var id = param.trackid;
var codes = [200, 301, 400];

describe('track api should', function(){
	it('have get /api/track/:id route', function(done){
		request(app)
		.get('/api/track/'+id)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/track/:id/title route', function(done){
		request(app)
		.get('/api/track/'+id+'/title')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/track/:id/lyrics route', function(done){
		request(app)
		.get('/api/track/'+id+'/lyrics')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/track/:id/url route', function(done){
		request(app)
		.get('/api/track/'+id+'/url')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/track/:id/comments route', function(done){
		request(app)
		.get('/api/track/'+id+'/comments')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have post /api/track route', function(done){
		request(app)
		.post('/api/track')
		.expect(201)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/track/:id route', function(done){
		request(app)
		.put('/api/track/'+id)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	//TODO: fix. this test was impacting track repo tests
	xit('have delete /api/track/:id route', function(done){
		request(app)
		.delete('/api/track/'+id)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});
});