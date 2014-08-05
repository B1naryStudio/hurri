var app = require('../../backend/server');
var request = require('supertest');

describe('view_routes should', function(){

  it('have get / route', function(done){
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /404 route', function(done){
    request(app)
      .get('/404')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /signin route', function(done){
    request(app)
      .get('/signin')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

});