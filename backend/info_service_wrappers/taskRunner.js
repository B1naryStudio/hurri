var mongoose = require('mongoose');
var wrapper = require('./DeezerWrapper');
var _ = require('underscore');

for (var ids = 49500; ids < 50000 ; ids++){
var album = wrapper.getInfo('/album/', ids, function(data){
	if (!data.error){
		var albumInfo = wrapper.albumStruct(data);
		if (albumInfo.tracks.length != 0){
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
			var exist = wrapper.isExist(data.artist.id, function(err, data){
				if (data == null) wrapper.addArtist(artistInfo);
			});
		}
	}
});
}
