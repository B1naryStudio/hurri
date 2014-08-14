define(['../song/SongModel','../notification/NotificationsCollection', '../user/UserModel', '../main/bars/album/AlbumBarModel'], function(SongModel, NotificationCollection, UserModel, AlbumBarModel){
	var context = {
		currentSongModel: new SongModel(),
		notificationCollection: new NotificationCollection(),
		currentUserModel: new UserModel(),
		currentAlbumBar: new AlbumBarModel()
	};
	return context;
});
