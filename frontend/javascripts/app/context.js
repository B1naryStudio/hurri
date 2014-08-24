define(['../song/SongModel','../notification/NotificationsCollection', '../user/UserModel', '../main/bars/album/AlbumBarModel','../main/radio/RadioModel', '../main/bars/playlist/PlaylistBarModel'], function(SongModel, NotificationCollection, UserModel, AlbumBarModel, RadioBarModel, PlaylistBarModel){
	var context = {
		currentSongModel: new SongModel(),
		notificationCollection: new NotificationCollection(),
		currentUserModel: new UserModel(),
		currentAlbumBar: new AlbumBarModel(),
		currentRadioBar: new RadioBarModel(),
		currentPlaylistBar: new PlaylistBarModel(),
		toggled: false
	};
	return context;
});
