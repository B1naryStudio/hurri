var app = require('../../backend/server');
var request = require('supertest');
var should = require('should');

describe('view_routes should', function () {

	it('has get / route', function (done) {
		request(app)
			.get('/')
			.expect(200)
			.expect('Content-Type', /text\/html/)
			.end(function (err, res) {
				done(err);
			})
	});

	it('has get /404 route', function (done) {
		request(app)
			.get('/404')
			.expect(200)
			.expect('Content-Type', /text\/html/)
			.end(function (err, res) {
				done(err);
			})
	});

	it('has get /signin route', function (done) {
		request(app)
			.get('/signin')
			.expect(200)
			.expect('Content-Type', /text\/html/)
			.end(function (err, res) {
				done(err);
			})
	});


	it('has NotFound error text "Page not found"', function (done) {
		request(app)
			.get('/404')
			.expect(200)
			.expect('Content-Type', /text\/html/)
			.end(function (err, res) {
				res.text.should.match(/Page not found/);
				done(err);
			})
	});

});