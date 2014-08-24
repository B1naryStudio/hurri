define(['../song/SongModel','../notification/NotificationsCollection', '../user/UserModel', '../main/bars/album/AlbumBarModel','../main/radio/RadioModel', '../main/bars/playlist/PlaylistBarModel',  '../main/bars/playlist/PlaylistBarCollection'], function(SongModel, NotificationCollection, UserModel, AlbumBarModel, RadioBarModel, PlaylistBarModel, PlaylistBarCollection){
	var context = {
		currentSongModel: new SongModel(),
		notificationCollection: new NotificationCollection(),
		currentUserModel: new UserModel(),
		currentAlbumBar: new AlbumBarModel(),
		currentRadioBar: new RadioBarModel(),
		currentPlaylistBar: new PlaylistBarModel(),
		playlistBarCollection : new PlaylistBarCollection(),
		toggled: false
	};
	return context;
});
