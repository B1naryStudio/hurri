var app = require('../../backend/server');
var request = require('supertest');
var codes = [200, 301, 400];

describe('artist api should', function(){
	it('have get /api/artist/:id route', function(done){
		request(app)
		.get('/api/artist/53dcdb54ecd5695694b14ea4')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/artist/:name route', function(done){
		request(app)
		.get('/api/artist/:name')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have post /api/artist route', function(done){
		request(app)
		.post('/api/artist')
		.expect(201)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/artist/:id route', function(done){
		request(app)
		.put('/api/artist/:id')
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have delete /api/artist/:id route', function(done){
		request(app)
		.delete('/api/artist/:id')
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});
});