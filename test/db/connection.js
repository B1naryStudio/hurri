var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

mockgoose(mongoose);

describe('Connect', function () {
	it('Should NOT return an error when connecting to Mockgoose through connect', function (done) {
        mongoose.connect('mongodb://localhost:27017/hurri', function (err, result) {
                expect(err).toBeNull();
                expect(result).toBeTruthy();
                done();
        });
    });
});