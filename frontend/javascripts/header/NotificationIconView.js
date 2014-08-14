define(['marionette', '../notification/NotificationsCollectionView', '../app/context'], 
function(Marionette, NotificationView, context){
	
	var NotificationIconView = Marionette.ItemView.extend({
		
  		template : '#notificationbar-template',
  		
  		modelEvents: {
  			'change:unread': 'render'
  		},

		events : {
			'click #notificationbar'  : 'showNotifications'
		},
		
		showNotifications: function(){
			Backbone.trigger('show-notifications');
		}
	});
	return NotificationIconView;
});
