var mongoose = require('../../backend/db/mongoose');

var GroupRepository = require('../../backend/repositories/groupRepository.js');

var param = require('../seeders/populating.js');
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
		GroupRepository.updateListeners(id, "3dd332ae4f5fee220e1ab4c5", function(err, data){
			//console.log('Group test' + data);
			// data.should.be.object;
			done();
		});
	});

});