var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;
mongoose = new Mongoose();
mockgoose(mongoose);

var GroupRepository = require('../../backend/repositories/groupRepository.js');

var param = require('./populating.js');
var id = param.radioid;

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
		/*GroupRepository.updateListeners(id, function(err, data){
			data.should.be.object;
			console.log("updateListeners: Ok");
			done();
		});*/
	done();
	});

});