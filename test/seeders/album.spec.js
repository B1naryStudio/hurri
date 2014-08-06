var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;
mongoose = new Mongoose();
mockgoose(mongoose);
var Album = require('../../backend/schemas/album.js');
var AlbumRepo = require('../../backend/repositories/albumRepository.js');

require('./populating.js');

describe('Album functions should', function () {

	it('has method find', function (done) {
        Album.find({}).exec().then(function (models) {
            models.length.should.equal(60);
            done();
        });
    });

});