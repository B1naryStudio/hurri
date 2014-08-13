var VK = require('../../backend/social_network_wrapper/VKWrapper');

describe('VKWrapper should', function(){

	it('contain have methods for user and audio data getting', function(){
		VK.getUserInfo.should.be.Function;
		VK.getFriends.should.be.Function;
		VK.getOnlineFriends.should.be.Function;
		VK.getUserAudio.should.be.Function;
		VK.getAudioById.should.be.Function;
		VK.getLirycsById.should.be.Function;
		VK.getAudioSearch.should.be.Function;
	});
});

describe('VKWrapper functions should', function(){
	it('getUserAudio returns object with necessary data', function(done){
		VK.getUserAudio('18252726', '07cf157b9f176abb17cfd2f25b9868d5bd8e3eaa1756d0d258ceda52f9cb6d7e817d87bc00da960440adc', function(result){
			result.should.be.Object;
			console.log(result);
			done();
		});
	});
});