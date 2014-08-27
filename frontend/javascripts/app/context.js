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
