define(['../song/SongModel',
	'../notification/NotificationsCollection', 
	'../user/UserModel', 
	'../main/bars/album/AlbumBarModel',
	'../main/radio/RadioModel', 
	'../main/bars/playlist/PlaylistBarModel', 
	'../songlist/SonglistCollection',
	'../shared/previousCollection'
	//'../playlist/PlaylistModel'
	], 
	function(SongModel, 
		NotificationCollection, 
		UserModel, 
		AlbumBarModel, 
		RadioBarModel, 
		PlaylistBarModel, 
		SonglistCollection,
		PreviousCollection
		){
	var user = JSON.stringify(window._injectedData.user) + JSON.stringify(window._injectedData.alerts);

	var context = {
			currentSongModel: new SongModel(),
			notificationCollection: new NotificationCollection(window._injectedData.alerts),
			currentUserModel: new UserModel(window._injectedData.user),
			currentAlbumBar: new AlbumBarModel(),
			currentRadioBar: new RadioBarModel(),
			currentPlaylistBar: new PlaylistBarModel(),
			currentSongCollection: new SonglistCollection(),
			previousCollection: new SonglistCollection(),
			toggled: false
	};
	context.currentUserModel.set({
		liked: 		window._injectedData.liked.length,
		followers:  window._injectedData.followers.length,
		followings: window._injectedData.following.length,
		playlists:  window._injectedData.playlists.length
	});
	console.log(context);
	return context;
});
