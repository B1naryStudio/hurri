define(['backbone', './NotificationModel'], function(Backbone, NotificationModel){
var NotificationsCollection = Backbone.Collection.extend({
	model: NotificationModel
});

var notificationsCollection = new NotificationsCollection();
notificationsCollection.add([
	{name: 'All goes ok', type: 'info', additionalInfo: 'if you see this notification, then all goes ok'},
	{name: 'New song', type: 'info', additionalInfo: 'your friend just shared one more playlist'},
	{name: 'You are in danger', type: 'warning', additionalInfo: 'all is ok, sorry. Its just warning'}	
]);

return notificationsCollection;	
});