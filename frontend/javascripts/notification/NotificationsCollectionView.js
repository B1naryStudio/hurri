define(['marionette', './NotificationView'], function(Marionette, NotificationView){
	var NotificationsCompositeView = Marionette.CompositeView.extend({
		childView: NotificationView,
		template: '#notifications-composite-template',
		events : {
			"click .deleteAll" : "deleteMessages"
		},

		deleteMessages : function(){
			//remove items
		}
	});
	return NotificationsCompositeView;
});

