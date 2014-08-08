var request = require('request');
function DeezerWrapper(){

}

DeezerWrapper.prototype.getArtistById = function(){
};

DeezerWrapper.prototype.getAlbums = function(id){
	request('http://api.deezer.com/album/'+id, function (error, response, body) {
  	if (!error && response.statusCode == 200) {
    	console.log(body);
  	}
})
};

module.exports = DeezerWrapper;