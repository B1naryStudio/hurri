var request = require('request');

function VKWrapper(){

}

VKWrapper.prototype.getUserInfo= function(){

};

VKWrapper.prototype.getFriends= function(){

};

VKWrapper.prototype.getOnlineFriends= function(){

};

VKWrapper.prototype.getUserAudio= function(id, access_token, callback){
	request('https://api.vk.com/method/audio.get?' +'owner_id='+ id + '&access_token=' + access_token, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var result = JSON.parse(body);
			callback(result);
		}
	});
};

VKWrapper.prototype.getAudioById= function(){

};

VKWrapper.prototype.getLirycsById= function(){

};
VKWrapper.prototype.getAudioSearch= function(){

};



module.exports = new VKWrapper();