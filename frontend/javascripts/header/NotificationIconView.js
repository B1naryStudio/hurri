define(['marionette', '../notification/NotificationsCollectionView', '../app/context'], 
function(Marionette, NotificationView, context){
	
	var NotificationIconView = Marionette.ItemView.extend({
		
		template : '#notificationbar-template',
		modelEvents: {
			'change:unread': 'render'
		},

		events : {
			'click #notification-icon'  : 'showNotifications'
		},
		
		showNotifications: function(){
			this.model.set('unread', 0);
			Backbone.trigger('show-notifications');
		}
	});
	return NotificationIconView;
});
