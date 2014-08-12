define(['marionette', '../notification/NotificationsCollectionView'], function(Marionette, NotificationView){
	var NotificationIconView = Marionette.ItemView.extend({
		el: '#notification',
  		template : '#notification-icon-template',
		events : {
			'click #notification-icon'  : 'showNotifications'
		},
		
		showNotifications: function(){
			Backbone.trigger('show notifications');
		}
	});
	return NotificationIconView;
});