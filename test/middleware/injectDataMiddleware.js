var app = require('../../backend/server');
var request = require('supertest');
var should = require('should');
var injectData = require('../../backend/middleware/injectDataMiddleware');

describe('injectDataMiddleware should', function () {
		it('set global variable _is404Error and respond with 200 status if route is not found', function (done) {
			request(app)
				.get('/sdasd')
				.end(function(err, res) {
					res.statusCode.should.equal(200);
					res.text.should.match(/window\._is404Error = true;/);
					done(err);
				})
		});

		it('leave variable _is404Error to false and respond with 200 status if route is known', function (done) {
			request(app)
				.get('/album/1')
				.end( function(err, res) {
					res.statusCode.should.equal(200);
					res.text.should.match(/window\._is404Error = false;/);
					done(err);
				})
		});
});
