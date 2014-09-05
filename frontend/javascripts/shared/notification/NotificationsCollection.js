define(['backbone', '../../sidebar/notification/NotificationModel'], function(Backbone, NotificationModel){
	var NotificationsCollection = Backbone.Collection.extend({
		model: NotificationModel
	});
	return NotificationsCollection;
});