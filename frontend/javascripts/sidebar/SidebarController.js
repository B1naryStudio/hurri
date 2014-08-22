define(['marionette', 
	'../notification/NotificationsCollectionView', 
	'./SidebarNavView',
	'./FriendsView',
	'../notification/NotificationModel',
	'./defaultView',
	 '../app/context',
	 '../songlist/SonglistCollectionView',
	 '../playlist/SongCollection',
	 '../song/SongModel',
	 './StatisticView'], 
	function(Marionette, NotificationsCompositeView,  SidebarNavView, FriendsView,
			NotificationsModel, DefaultView, context, SonglistCollectionView,
			SonglistCollection, SonglistModel, StatisticView){
	
	var SidebarController = function(){		
	
		var SidebarRegion = Marionette.Region.extend({
			el: '#sidebar-region'
		});

		this.sidebarRegion = new SidebarRegion();

		this.initializeNotifications();

		this.initializeSongs();

		this.initializeFriends();
/*
		var sidebarView = new SidebarNavView();
		sidebarView.render();
*/
		this.sidebarRegion.show(this.song.view);

		this.bindListeners();
	};

	SidebarController.prototype.initializeNotifications = function() {
		this.notification = {
			model: new NotificationsModel(),
			collection: context.notificationCollection
		};

		this.notification.collection.add([
			{name: 'All goes ok', type: 'info', additionalInfo: 'if you see this notification, then all goes ok', active: true},
			{name: 'New song', type: 'info', additionalInfo: 'your friend just shared one more playlist', active: false},
			{name: 'You are in danger', type: 'request', additionalInfo: 'all is ok, sorry. Its just warning. Someone want to add you', active: true}	
		]);	
		
		this.notification.view = this.getNotificationView();
	};

	SidebarController.prototype.initializeSongs = function() {
		this.song = {
			collection: SonglistCollection,
			model : SonglistModel
		 };

		// this.song.collection.add([
		// 	{name : 'Komissar rex', cover : '../images/default/cover.jpg', artist : 'Tim Rot', current : false, albumname : 'Hello I love you'},
		// 	{name : 'Funny Essso', cover : '../images/default/cover.jpg', artist : 'Ocean', current : true, albumname : 'Digital histoyr'},
		// 	{name : 'Runble be you', cover : '../images/default/cover.jpg', artist : 'T-Rex', current : false, albumname : 'Wat a flag?'},
		// 	{name : 'So serious', cover : '../images/default/cover.jpg', artist : 'Kirkorov', current : false, albumname : 'Fust furrry'},
		// 	{name : 'Defstrouk', cover : '../images/default/cover.jpg', artist : 'U2', current : false, albumname : 'Drums for you'}
		// ]);

		this.song.view = this.getSongView();
	};

	SidebarController.prototype.getSongView = function() {
		return new SonglistCollectionView({
			model: this.song.model,
			collection: this.song.collection
		});
	};

	SidebarController.prototype.getNotificationView = function() {
		return new NotificationsCompositeView({
			model: this.notification.model,
			collection: this.notification.collection
		});
	};

	SidebarController.prototype.getStatisticView = function() {
		return new StatisticView({
			model: context.currentUserModel
		});
	};

	SidebarController.prototype.initializeFriends = function(){
		this.friends = {
			model: context.currentUserModel
		};

		this.friends.view = this.getFriendsView();
	};

	SidebarController.prototype.getFriendsView = function(){
		return new FriendsView({
			model: this.friends.model
		});
	};




	SidebarController.prototype.bindListeners = function() {

		Backbone.on('show-notifications', function(){
			var total = this.notification.collection.length;
			for (var i = 0; i < total; i++){
				this.notification.collection.models[i].set({active : false});
			}
			if(!context.toggled){
				this.sidebarRegion.show(this.getNotificationView());
			} else {
				Backbone.trigger('toggle-sidebar');
				this.sidebarRegion.show(this.getNotificationView());
			}

		}, this);

		Backbone.on('show-musiclist', function(){
			if(!context.toggled){
				this.sidebarRegion.show(this.getSongView());
			} else {
				Backbone.trigger('toggle-sidebar');
				this.sidebarRegion.show(this.getSongView());
			}

		}, this);

		Backbone.on('show-statistic', function(){
			if(!context.toggled){
				this.sidebarRegion.show(this.getStatisticView());
			} else {
				Backbone.trigger('toggle-sidebar');
				this.sidebarRegion.show(this.getStatisticView());
			}

		}, this);

		Backbone.on('show-friends', function(){
			if(!context.toggled){
				this.sidebarRegion.show(this.getFriendsView());
			} else {
				Backbone.trigger('toggle-sidebar');
				this.sidebarRegion.show(this.getFriendsView());
			}

		}, this);

		Backbone.on('toggle-sidebar', function(){
			if (!context.toggled){
				this.sidebarRegion.$el.parent().addClass('toggled');
				$('#hideButton').addClass('toggled-button');
				context.toggled = true;
			} else{
				this.sidebarRegion.$el.parent().removeClass('toggled');
				$('#hideButton').removeClass('toggled-button');
				context.toggled = false;
		
			}
		}, this);

		// Backbone.on('show followers', function(){
		// 	this.sidebarRegion.show(this.getFollowerView());
		// }, this);

	};


	return SidebarController;
});

