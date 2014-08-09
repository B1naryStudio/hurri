define(['../song/SongModel'], function(SongModel){
	var context = {
		currentSongModel: new SongModel()
	};
	return context;
});