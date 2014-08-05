var app = require('../../backend/server');
var request = require('supertest');

describe('view_routes should', function(){

  it('have get /dialogue/:id1/:id2 route', function(done){
    request(app)
      .get('/dialogue/:id1/:id2')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res){
        done(err);
      })
  });

});