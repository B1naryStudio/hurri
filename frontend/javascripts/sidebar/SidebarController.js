define(['marionette', 
	'../notification/NotificationsCollectionView', 
	'../notification/NotificationModel'], function(Marionette, NotificationsView, notificationModel){
	
	var SidebarController = function(){		
	
		var SidebarRegion = Marionette.Region.extend({
			el: '#sidebar'
		});

		var sidebarRegion = new SidebarRegion();
		var notificationsView = new NotificationsView({
			model: notificationModel
		});
		sidebarRegion.show(notificationsView);
		
	};
	return SidebarController;
});

