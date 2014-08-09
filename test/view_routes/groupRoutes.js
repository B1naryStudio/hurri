var app = require('../../backend/server');
var request = require('supertest');

describe('view_routes should', function(){

  it('have get /group/:id/members route', function(done){
    request(app)
      .get('/group/:id/members')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /group/:id/tracks route', function(done){
    request(app)
      .get('/group/:id/tracks')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

});