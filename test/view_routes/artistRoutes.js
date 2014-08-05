var app = require('../../backend/server');
var request = require('supertest');

describe('view_routes should', function(){

  it('have get /artist/:id route', function(done){
    request(app)
      .get('/artist/:id')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

  it('have get /artist/:name route', function(done){
    request(app)
      .get('/artist/:name')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });


});