define(['marionette', './NotificationView', '../app/context'], function(Marionette, NotificationView, context){
	var NotificationsCompositeView = Marionette.CompositeView.extend({
		childView: NotificationView,
		template: '#notifications-composite-template',
		events : {
			"click .deleteAll" : "deleteMessages"
		},

		deleteMessages : function(){
			context.notificationCollection.reset();
		}
	});
	return NotificationsCompositeView;
});

