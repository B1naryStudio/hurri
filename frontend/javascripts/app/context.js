define(['../song/SongModel','../notification/NotificationsCollection'], function(SongModel, NotificationCollection){
	var context = {
		currentSongModel: new SongModel(),
		notificationCollection: new NotificationCollection()
	};
	return context;
});