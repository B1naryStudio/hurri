define(['marionette', 
	'../notification/NotificationsCollectionView', 
	'../notification/NotificationsCollection'], function(Marionette, NotificationsCollectionView, NotificationsCollection){
	
	var SidebarController = function(){		
	
		var SidebarRegion = Marionette.Region.extend({
			el: '#sidebar'
		});

		var sidebarRegion = new SidebarRegion();



		var notificationsCollection = new NotificationsCollection();
		notificationsCollection.add([
			{name: 'All goes ok', type: 'info', additionalInfo: 'if you see this notification, then all goes ok'},
			{name: 'New song', type: 'info', additionalInfo: 'your friend just shared one more playlist'},
			{name: 'You are in danger', type: 'warning', additionalInfo: 'all is ok, sorry. Its just warning'}	
		]);	

		var notificationsView = new NotificationsCollectionView({
			collection: notificationsCollection
		});

		sidebarRegion.show(notificationsView);
		
	};
	return SidebarController;
});

