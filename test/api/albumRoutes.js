var mongoose = require('../../backend/db/mongoose');
var app = require('../../backend/server');
var request = require('supertest');
var codes = [200, 301, 400];

describe('album api should', function(){
	it('have get /api/album/:id route', function(done){
		request(app)
		.get('/api/album/53dcdb54ecd5695694b15ea4')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/album/:id/cover route', function(done){
		request(app)
		.get('/api/album/53dcdb54ecd5695694b15ea4/cover')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/album/:id/singer route', function(done){
		request(app)
		.get('/api/album/53dcdb54ecd5695694b15ea4/singer')
		.expect('Content-Type', /json/)
		.end(function(err, res){
			codes.indexOf(res.status).should.not.be.equal(-1);
			done(err);
		});
	});

	it('have get /api/album/:id/genres route', function(done){
		request(app)
		.get('/api/album/53dcdb54ecd5695694b15ea4/genres')
		.expect('Content-Type', /json/)
		.end(function(err, res){
   			codes.indexOf(res.status).should.not.be.equal(-1);
   			done(err);
  		})
	});

	it('have get /api/album/:id/tracks route', function(done){
		request(app)
		.get('/api/album/53dcdb54ecd5695694b15ea4/tracks')
		.expect('Content-Type', /json/)
		.end(function(err, res){
   			codes.indexOf(res.status).should.not.be.equal(-1);
  			done(err);
  		})
	});

	it('have get /api/album/:id/comments route', function(done){
		request(app)
		.get('/api/album/53dcdb54ecd5695694b15ea4/comments')
		.expect('Content-Type', /json/)
		.end(function(err, res){
   			codes.indexOf(res.status).should.not.be.equal(-1);
   			done(err);
  		})
	});

	it('have post /api/album route', function(done){
		request(app)
		.post('/api/album')
		.end(function(err, res){
   			codes.indexOf(res.status).should.not.be.equal(-1);
   			done(err);
  		})
	});


	it('have delete /api/album/:id route', function(done){
		request(app)
		.delete('/api/album/:id')
		.end(function(err, res){
   			codes.indexOf(res.status).should.not.be.equal(-1);
   			done(err);
  		})
	});
});