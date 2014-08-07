var app = require('../../backend/server');
var request = require('supertest');
var param = require('../seeders/populating.js');
var id = param.radioid;
var codes = [200, 301, 400];

describe('group api should', function(){
	it('have get /api/group/:id/members route', function(done){
		request(app)
		.get('/api/group/'+id+'/members')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/group/:id/tracks route', function(done){
		request(app)
		.get('/api/group/'+id+'/tracks')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have post /api/group route', function(done){
		request(app)
		.post('/api/group')
		.expect(201)
		.end(function(err, res){
			done(err);
		})
	});

	it('have put /api/group/:id route', function(done){
		request(app)
		.put('/api/group/'+id)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have put /api/group/:id/listeners route', function(done){
		request(app)
		.put('/api/group/'+id+'/listeners')
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have delete /api/group/:id route', function(done){
		request(app)
		.delete('/api/group/'+id)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});
});