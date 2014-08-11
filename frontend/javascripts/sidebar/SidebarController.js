define(['marionette', 
	'../notification/NotificationsCollectionView', 
	'../notification/NotificationsCollection',
	'./SidebarNavView'], function(Marionette, NotificationsCollectionView, NotificationsCollection, SidebarNavView){
	
	var SidebarController = function(){		
	
		var SidebarRegion = Marionette.Region.extend({
			el: '#sidebar-region'
		});

		var sidebarRegion = new SidebarRegion();



		var notificationsCollection = new NotificationsCollection();
		notificationsCollection.add([
			{name: 'All goes ok', type: 'info', additionalInfo: 'if you see this notification, then all goes ok'},
			{name: 'New song', type: 'info', additionalInfo: 'your friend just shared one more playlist'},
			{name: 'You are in danger', type: 'request', additionalInfo: 'all is ok, sorry. Its just warning. Someone want to add you'}	
		]);	

		var notificationsView = new NotificationsCollectionView({
			collection: notificationsCollection
		});

		sidebarRegion.show(notificationsView);
		var sidebarView = new SidebarNavView();
		sidebarView.render();
	};
	return SidebarController;
});

