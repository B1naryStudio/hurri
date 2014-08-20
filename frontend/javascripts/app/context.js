define(['../song/SongModel','../notification/NotificationsCollection', '../user/UserModel', '../main/bars/album/AlbumBarModel','../main/radio/RadioModel'], function(SongModel, NotificationCollection, UserModel, AlbumBarModel, RadioBarModel){
	var context = {
		currentSongModel: new SongModel(),
		notificationCollection: new NotificationCollection(),
		currentUserModel: new UserModel(),
		currentAlbumBar: new AlbumBarModel(),
		currentRadioBar: new RadioBarModel(),
		toggled: false
	};
	return context;
});
