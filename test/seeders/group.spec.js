var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;
mongoose = new Mongoose();
mockgoose(mongoose);

var GroupRepository = require('../../backend/repositories/groupRepository.js');

var param = require('./populating.js');
var id = param.userid;

describe('Group API should', function () {

	it('call method getMembers and return cover url', function(done){
		GroupRepository.getMembers(id, function(err, data){
			data.should.be.object;
			done();
		});
	});

	it('call method getTracks and return singer object', function(done){
		GroupRepository.getTracks(id, function(err, data){
			data.should.be.object;
			done();
		});
	});

	it('call method updateListeners and return array', function(done){
		console.log("TEST")
		GroupRepository.updateListeners(id, "3dd332ae4f5fee220e1ab4c5", function(err, data){
			//console.log('Group test' + data);
			//data.should.be.object;
			done();
		});
	});

});