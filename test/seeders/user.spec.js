var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;
mongoose = new Mongoose();
mockgoose(mongoose);

var UserRepository = require('../../backend/repositories/userRepository.js');
var param = require('./populating.js');
var id = param.userid;

describe('User API should', function () {

	it('call method getUserInfo ', function(done){
		UserRepository.getUserInfo(id, function(err, data){
			data.should.be.object;
			done();
		});
	});

	it('call method getLike ', function(done){
		UserRepository.getLike(id, function(err, data){
			data.should.be.object;
			done();
		});
	});

	it('call method getGroups and return array', function(done){
		UserRepository.getGroups(id, function(err, data){
			data.should.be.object;
			done();
		});
	});

	it('call method getPlaylists and return array of objects', function(done){
		UserRepository.getPlaylists(id, function(err, data){
			data.should.be.object;
			done();
		});
	});
});