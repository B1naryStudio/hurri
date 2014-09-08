define(['../shared/song/SongModel',
	'../shared/notification/NotificationsCollection', 
	'../shared/user/UserModel', 
	'../main/playlists/tiles/PlaylistBarModel', 
	'../sidebar/songlist/SonglistCollection'
	], 
	function(SongModel, 
		NotificationCollection, 
		UserModel,
		PlaylistBarModel, 
		SonglistCollection){
	var user = JSON.stringify(window._injectedData.user) + JSON.stringify(window._injectedData.alerts);

	var context = {
			currentSongModel: new SongModel(),
			queueSavedSong: undefined,
			notificationCollection: new NotificationCollection(window._injectedData.alerts),
			currentUserModel: new UserModel(window._injectedData.user),
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
