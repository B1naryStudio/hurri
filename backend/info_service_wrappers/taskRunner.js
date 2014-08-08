var wrapper = require('./DeezerWrapper');
var _ = require('underscore');

for (var ids = 302127; ids < 302128; ids++){
var album = wrapper.getInfo('/album/', ids, function(data){
	
	if (!data.error){

		var albumInfo = wrapper.albumStruct(data);
		wrapper.addAlbum(albumInfo);

		var tracks = _.pluck(data.tracks.data, 'id');
		
		for (var i = 0; i < tracks.length; i++){
			
			var track = wrapper.getInfo('/track/', tracks[i], function(info){
				
				if (!info.error){

					var trackInfo = wrapper.trackStruct(info);
					wrapper.addTrack(trackInfo);
				}

			});
		}
		
		var artistInfo = wrapper.artistStruct(data.artist);
		wrapper.addArtist(artistInfo);
	}

});
}