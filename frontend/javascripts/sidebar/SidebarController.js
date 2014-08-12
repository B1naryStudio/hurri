define(['marionette', 
	'../notification/NotificationsCollectionView', 
	'../notification/NotificationsCollection',
	'./SidebarNavView',
	'../notification/NotificationModel',
	'./defaultView'], 
	function(Marionette, NotificationsCompositeView, NotificationsCollection, SidebarNavView, NotificationsModel, DefaultView){
	
	var SidebarController = function(){		
	
		var SidebarRegion = Marionette.Region.extend({
			el: '#sidebar-region'
		});

		var sidebarRegion = new SidebarRegion();



		var notificationsCollection = new NotificationsCollection();
		notificationsCollection.add([
			{name: 'All goes ok', type: 'info', additionalInfo: 'if you see this notification, then all goes ok', active: true},
			{name: 'New song', type: 'info', additionalInfo: 'your friend just shared one more playlist', active: false},
			{name: 'You are in danger', type: 'request', additionalInfo: 'all is ok, sorry. Its just warning. Someone want to add you', active: true}	
		]);	

		var notificationsView = new NotificationsCompositeView({
			collection: notificationsCollection,
			model : new NotificationsModel()
		});

		var defautView = new DefaultView();

		sidebarRegion.show(defautView);

		Backbone.on('show notifications', function(){
			sidebarRegion.show(notificationsView);
		});

		var sidebarView = new SidebarNavView();
		sidebarView.render();
	};
	return SidebarController;
});

