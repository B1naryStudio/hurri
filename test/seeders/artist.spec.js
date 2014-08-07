var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;
mongoose = new Mongoose();
mockgoose(mongoose);

var ArtistRepository = require('../../backend/repositories/artistRepository.js');
var param = require('./populating.js');
var id = param.artistid;

describe('Artist API should', function () {

});