define(['marionette', '../notification/NotificationsCollectionView', '../app/context'], function(Marionette, NotificationView, context){
	var NotificationIconView = Marionette.ItemView.extend({
		el: '#notification',
  		template : '#notification-icon-template',
  		
  		modelEvents: {
  			'change:unread': 'render'
  		},

		events : {
			'click #notification-icon'  : 'showNotifications'
		},
		
		showNotifications: function(){
			Backbone.trigger('show notifications');
			console.log(context.notificationCollection);
			var total = 3;
			for (var i = 0; i < total; i++){
				context.notificationCollection.models[i].set({active : false});
				context.notificationCollection.set(this.model, {remove: false});
			}
		}
	});
	return NotificationIconView;
});