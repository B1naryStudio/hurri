define(['../song/SongModel','../notification/NotificationsCollection', '../user/UserModel'], function(SongModel, NotificationCollection, UserModel){
	var context = {
		currentSongModel: new SongModel(),
		notificationCollection: new NotificationCollection(),
		currentUserModel: new UserModel()
	};
	return context;
});
