define(['../song/SongModel',
	'../notification/NotificationsCollection', 
	'../user/UserModel', 
	'../main/bars/album/AlbumBarModel',
	'../main/radio/RadioModel', 
	'../main/bars/playlist/PlaylistBarModel', 
	'../songlist/SonglistCollection' 
	//'../playlist/PlaylistModel'
	], 
	function(SongModel, 
		NotificationCollection, 
		UserModel, 
		AlbumBarModel, 
		RadioBarModel, 
		PlaylistBarModel, 
		SonglistCollection
		){
	var context = {
			currentSongModel: new SongModel(),
			notificationCollection: new NotificationCollection(),
			currentUserModel: new UserModel({ 	_id: window._injectedData._id,
												avatarSource: window._injectedData.avatarUrl,
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
			currentSongCollection: new SonglistCollection(),
			toggled: false
	};
	console.log(context);
	return context;
});
