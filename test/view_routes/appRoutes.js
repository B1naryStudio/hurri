var app = require('../../backend/server');
var request = require('supertest');

describe('view_routes should', function(){

  // Albums
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

  // Artist
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

  // Dialogue
	it('have get /dialogue/:id1/:id2 route', function(done){
		request(app)
		.get('/dialogue/:id1/:id2')
		.expect(200)
		.expect('Content-Type', /text\/html/)
		.end(function(err, res){
			done(err);
		})
	});

  // Group
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

  // Tracks
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

  // User
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