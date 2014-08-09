var app = require('../../backend/server');
var request = require('supertest');

describe('view_routes should', function(){

  it('have get /album/:id route', function(done){
    request(app)
      .get('/album/:id')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /album/:id/cover route', function(done){
    request(app)
      .get('/album/:id/cover')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /album/:id/singer route', function(done){
    request(app)
      .get('/album/:id/singer')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /album/:id/genres route', function(done){
    request(app)
      .get('/album/:id/genres')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /album/:id/tracks route', function(done){
    request(app)
      .get('/album/:id/tracks')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /album/:id/comments route', function(done){
    request(app)
      .get('/album/:id/comments')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });


});