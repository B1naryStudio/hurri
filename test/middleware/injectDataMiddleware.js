var app = require('../../backend/server');
var request = require('request');
var should = require('should');
var injectData = require('../../backend/middleware/injectDataMiddleware');

describe('injectDataMiddleware should', function () {
		it('set global variable _is404Error and respond with 200 status if route is not found', function (done) {
			request.get('http://localhost:3055/sdasd', function(error, res, body) {
					res.statusCode.should.equal(200);
					body.should.match(/window\._is404Error = true;/);
					done();
				})
		});

		it('leave variable _is404Error to false and respond with 200 status if route is known', function (done) {
			request.get('http://localhost:3055/album/1', function(error, res, body) {
					res.statusCode.should.equal(200);
					body.should.match(/window\._is404Error = false;/);
					done();
				})
		});
});
