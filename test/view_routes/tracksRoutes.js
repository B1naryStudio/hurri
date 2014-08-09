var app = require('../../backend/server');
var request = require('supertest');

describe('view_routes should', function(){

  it('have get /track/:id route', function(done){
    request(app)
      .get('/track/:id')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /track/:id/title route', function(done){
    request(app)
      .get('/track/:id/title')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /track/:id/lyrics route', function(done){
    request(app)
      .get('/track/:id/lyrics')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /track/:id/url route', function(done){
    request(app)
      .get('/track/:id/url')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /track/:id/comments route', function(done){
    request(app)
      .get('/track/:id/comments')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

});