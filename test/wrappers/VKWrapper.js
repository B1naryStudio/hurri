var VK = require('../../backend/social_network_wrapper/VKWrapper');

describe('VKWrapper should', function(){

	it('contain have methods for user and audio data getting', function(){
		VK.getUserInfo.should.be.Function;
		VK.getFriends.should.be.Function;
		VK.getOnlineFriends.should.be.Function;
		VK.getUserAudio.should.be.Function;
		VK.getAudioById.should.be.Function;
		VK.getLyricsById.should.be.Function;
		VK.getAudioSearch.should.be.Function;
	});
});

describe('VKWrapper functions should', function(){
	it('getUserInfo returns object with necessary data', function(done){
		VK.getUserInfo('18252726','photo_50,city',function(result){
			result.should.be.Object;
			console.log(result);
			done();
		});
	});
	it('getFriends returns object with necessary data', function(done){
		VK.getFriends('18252726', function(result){
			result.should.be.Object;
			console.log(result);
			done();
		});
	});
	it('getFriendsOnline returns object with necessary data', function(done){
		VK.getOnlineFriends('18252726', function(result){
			result.should.be.Object;
			console.log(result);
			done();
		});
	});
	it('getUserAudio returns object with necessary data', function(done){
		VK.getUserAudio('18252726', function(result){
			result.should.be.Object;
			console.log(result);
			done();
		});
	});
	it('getAudioById returns object with necessary data', function(done){
		VK.getAudioById('18252726_295129112', 3, function(result){
			result.should.be.Object;
			console.log(result);
			done();
		});
	});
	it('getLyricsById returns object with necessary data', function(done){
		VK.getLyricsById('2428970', 3, function(result){
			result.should.be.Object;
			console.log(result);
			done();
		});
	});
	it('getAudioSearch returns object with necessary data', function(done){
		VK.getAudioSearch('Yesterday', 2, 1, 1, 3, function(result){
			result.should.be.Object;
			console.log("WARNING!!")
			console.log(result);
			done();
		});
	});
});