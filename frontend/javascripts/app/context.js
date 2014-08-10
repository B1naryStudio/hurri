define(['../song/SongModel', '../user/UserModel'], function(SongModel, UserModel){
	var context = {
		currentSongModel: new SongModel(),
		currentUserModel: new UserModel()
	};
	return context;
});
