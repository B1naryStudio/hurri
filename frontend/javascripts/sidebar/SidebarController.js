define(['marionette', 
	'../notification/NotificationsCollectionView', 
	'./SidebarNavView',
	'../notification/NotificationModel',
	'./defaultView',
	 '../app/context',
	 '../songlist/SonglistCollectionView',
	 '../songlist/SonglistCollection',
	 '../songlist/SonglistModel'], 
	function(Marionette, NotificationsCompositeView,  SidebarNavView, NotificationsModel, DefaultView, context, SonglistCollectionView, SonglistCollection, SonglistModel){
	
	var SidebarController = function(){		
	
		var SidebarRegion = Marionette.Region.extend({
			el: '#sidebar-region'
		});

		var sidebarRegion = new SidebarRegion();

		context.notificationCollection.add([
			{name: 'All goes ok', type: 'info', additionalInfo: 'if you see this notification, then all goes ok', active: true},
			{name: 'New song', type: 'info', additionalInfo: 'your friend just shared one more playlist', active: false},
			{name: 'You are in danger', type: 'request', additionalInfo: 'all is ok, sorry. Its just warning. Someone want to add you', active: true}	
		]);	
		
		var notificationsView = new NotificationsCompositeView({
			collection: context.notificationCollection,
			model : new NotificationsModel()
		});

		var defautView = new DefaultView();

		sidebarRegion.show(defautView);

		Backbone.on('show-notifications', function(){
			var total = context.notificationCollection.length;
			for (var i = 0; i < total; i++){
				context.notificationCollection.models[i].set({active : false});
			}
			sidebarRegion.show(notificationsView);
		});



		// Backbone.on('show followers', function(){
		// 	sidebarRegion.show(followersView);
		// });

		var songlistCollection = new SonglistCollection();
		songlistCollection.add([
			{name : 'Komissar rex', cover : '../images/default/cover.jpg', artist : 'Tim Rot', current : false, albumname : 'Hello I love you'},
			{name : 'Funny Essso', cover : '../images/default/cover.jpg', artist : 'Ocean', current : true, albumname : 'Digital histoyr'},
			{name : 'Runble be you', cover : '../images/default/cover.jpg', artist : 'T-Rex', current : false, albumname : 'Wat a flag?'},
			{name : 'So serious', cover : '../images/default/cover.jpg', artist : 'Kirkorov', current : false, albumname : 'Fust furrry'},
			{name : 'Defstrouk', cover : '../images/default/cover.jpg', artist : 'U2', current : false, albumname : 'Drums for you'}
		]);
		var musicListView = new SonglistCollectionView({
			collection : songlistCollection,
			model : new SonglistModel()
		});

		Backbone.on('show-musiclist', function(){
		 	sidebarRegion.show(musicListView);
		});

		var sidebarView = new SidebarNavView();
		sidebarView.render();
	};
	return SidebarController;
});

