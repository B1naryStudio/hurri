define(['../song/SongModel','../notification/NotificationsCollection', '../user/UserModel', '../main/bars/album/AlbumBarModel','../main/radio/RadioModel'], function(SongModel, NotificationCollection, UserModel, AlbumBarModel, RadioBarModel){
	var context = {
		currentSongModel: new SongModel(),
		notificationCollection: new NotificationCollection(),
		currentUserModel: new UserModel(
			{avatarSource:'/images/avatar.png',
			name:'Vincent Vega',
			age: 60,
			email: 'vincent-vega@gmail.com',
			country: 'United States',
			liked: ['like1', 'like2', 'like3'],
			playlists: ['playlist1', 'playlist2', 'playlist3'],
			groups: ['group1', 'group2', 'group3'],
			listened: 126,
			followers: ['follower1', 'follower2', 'follower3']
		}),
		currentAlbumBar: new AlbumBarModel(),
		currentRadioBar: new RadioBarModel(),
		toggled: false
	};
	return context;
});
