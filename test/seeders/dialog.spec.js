var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;
mongoose = new Mongoose();
mockgoose(mongoose);

var DialogRepository = require('../../backend/repositories/dialogRepository.js');
var param = require('./populating.js');
var id1 = param.uid1;
var id2 = param.uid2;

describe('Dialog API should', function () {

	it('call method getDialog and return object', function(done){
		DialogRepository.getDialog(id1, id2, function(err, data){
			data.should.be.object;
			done();
		});
	});

});