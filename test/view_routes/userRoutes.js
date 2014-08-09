var app = require('../../backend/server');
var request = require('supertest');

describe('view_routes should', function(){

  it('have get /user/:id route', function(done){
    request(app)
      .get('/user/:id')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /user/:id/like route', function(done){
    request(app)
      .get('/user/:id/like')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /user/:id/groups route', function(done){
    request(app)
      .get('/user/:id/groups')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /user/:id/playlists route', function(done){
    request(app)
      .get('/user/:id/playlists')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /user/:id/playlists/:id_pl route', function(done){
    request(app)
      .get('/user/:id/playlists/:id_pl')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

});