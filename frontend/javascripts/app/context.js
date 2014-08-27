define(['../song/SongModel',
	'../notification/NotificationsCollection', 
	'../user/UserModel', 
	'../main/bars/album/AlbumBarModel',
	'../main/radio/RadioModel', 
	'../main/bars/playlist/PlaylistBarModel',  
	'../main/bars/playlist/PlaylistBarCollection',
	//'../playlist/PlaylistModel'
	], 
	function(SongModel, 
		NotificationCollection, 
		UserModel, 
		AlbumBarModel, 
		RadioBarModel, 
		PlaylistBarModel, 
		PlaylistBarCollection, 
		PlaylistModel){
	var context = {
			currentSongModel: new SongModel(),
			notificationCollection: new NotificationCollection(),
			currentUserModel: new UserModel({avatarSource: window._injectedData.avatarUrl,
												name: window._injectedData.name,
												id: window._injectedData.id,
												age: window._injectedData.age,
												email: window._injectedData.email,
												country: window._injectedData.country,
												liked: window._injectedData.liked,
												playlists: window._injectedData.playlists,
												groups: window._injectedData.group,
												listened: window._injectedData.totalListened,
												followers: window._injectedData.friends
											}
				),
			currentAlbumBar: new AlbumBarModel(),
			currentRadioBar: new RadioBarModel(),
			currentPlaylistBar: new PlaylistBarModel(),
			playlistBarCollection: new PlaylistBarCollection(),
			toggled: false
	};
	console.log(context);
	return context;
});
