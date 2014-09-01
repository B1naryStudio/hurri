define(['marionette', './NotificationView', '../app/context'], function(Marionette, NotificationView, context){
	var NotificationsCompositeView = Marionette.CompositeView.extend({
		childView: NotificationView,
		template: '#notifications-composite-template',
		events : {
			"click .deleteAll" : "deleteMessages"
		},
		ui : {
			message : '.notification-message'
		},

		deleteMessages : function(){
			while(context.notificationCollection.length>0)
				context.notificationCollection.models[0].destroy({url:'/api/user/' + context.currentUserModel.attributes._id +
																 '/alert'});
		}
	});
	return NotificationsCompositeView;
});

