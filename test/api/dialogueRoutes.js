var app = require('../../backend/server');
var request = require('supertest');
var param = require('../seeders/populating.js');
var id1 = param.uid1;
var id2 = param.uid2;
var codes = [200, 301, 400];

describe('dialogue api should', function(){
	it('have get /api/dialogue/:id1/:id2 route', function(done){
		request(app)
		.get('/api/dialogue/'+id1+'/'+id2)
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have delete /api/dialogue/:id route', function(done){
		request(app)
		.delete('/api/dialogue/:id')
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});
});