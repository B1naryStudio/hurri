define(['marionette', './NotificationView'], function(Marionette, NotificationView){
	var NotificationsCompositeView = Marionette.CompositeView.extend({
		childView: NotificationView,
		template: '#notifications-composite-template',
		events : {
			"click .deleteAll" : "deleteMessages"
		},

		deleteMessages : function(){
			var total = this.collection.length;
			for(var i=0; i < total; i++)
				this.collection.models[0].destroy();
		}
	});
	return NotificationsCompositeView;
});

