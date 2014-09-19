define(['marionette', 
	'./notification/NotificationsCollectionView', 
	'./friends/FriendsCollectionView',
	'./friends/FriendsCollection',
	'./notification/NotificationModel',
	'../app/context',
	'./songlist/SonglistCollectionView',
	'../shared/playlist/SongCollection',
	'../shared/song/SongModel',
	'./statistic/StatisticView',
	'./songlist/SonglistNavi',
	'../shared/user/UserModel',
	'./friends/FollowingsCollectionView',
	'./friends/FollowingsCollection',
	 '../main/playlists/tiles/PlaylistBarModel',
	 './songlist/UndoPlaylistReplacement',
	 './dialogue/DialogueModel',
	 './dialogue/DialogueCollection',
	 './dialogue/DialogueCompositeView'
	 ], 

	function(Marionette, NotificationsCompositeView, FriendsCollectionView, FriendsCollection,
			NotificationsModel, context, SonglistCollectionView,
			SonglistCollection, SonglistModel, StatisticView, SonglistNaviView, UserModel,
			FollowingsCollectionView, FollowingsCollection, PlaylistBarModel, UndoReplacement,
			DialogueModel, DialogueCollection, DialogueCompositeView){
	
	var SidebarController = function(){		
	
		var SidebarRegion = Marionette.Region.extend({
			el: '#sidebar-region'
		});

		this.playlistBarModel = new PlaylistBarModel();

		this.sidebarRegion = new SidebarRegion();

		this.initializeNotifications();

		this.initializeSongs();

		this.initializeFriends();

		this.initializeFollowings();

		this.initializeDialogue();

		this.sidebarRegion.show(this.song.view);

		this.bindListeners();
	};

	SidebarController.prototype.initializeNotifications = function() {
		this.notification = {
			model: new NotificationsModel(),
			collection: context.notificationCollection
		};
		
		this.notification.view = this.getNotificationView();
	};

	SidebarController.prototype.initializeSongs = function() {
		this.song = {
			collection: context.currentSongCollection,
			model : new SonglistModel()
		};

		this.song.view = this.getSongView();
	};

	SidebarController.prototype.getSongView = function() {
		return new SonglistCollectionView({
			model: this.song.model,
			collection: this.song.collection
		});
	};

	SidebarController.prototype.getSongNavi = function(){
		var nav = new SonglistNaviView();
			nav.render();
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
			model: new UserModel(),
			collection: new FriendsCollection(window._injectedData.followers)
		};

		this.friends.view = this.getFriendsView();
	};

	SidebarController.prototype.getFriendsView = function(){
		return new FriendsCollectionView({
			model: this.friends.model,
			collection: this.friends.collection
		});
	};

	SidebarController.prototype.initializeFollowings = function(){
		this.followings = {
			model: new UserModel(),
			collection: new FollowingsCollection(window._injectedData.following)
		};	

		this.followings.view = this.getFollowingsView();
	};

	SidebarController.prototype.getFollowingsView = function(){
		return new FollowingsCollectionView({
			model: this.followings.model,
			collection: this.followings.collection
		});
	};

	SidebarController.prototype.initializeDialogue = function(){
		this.dialogue = {
			model: new DialogueModel(),
			collection: new DialogueCollection()
		};	

		this.dialogue.view = this.getDialogueView();
	};

	SidebarController.prototype.getDialogueView = function(){
		return new DialogueCompositeView({
			model: this.dialogue.model,
			collection: this.dialogue.collection
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

		Backbone.on('show-friends show-statistic-followers', function(){
			if(!context.toggled){
				this.sidebarRegion.show(this.getFriendsView());
			} else {
				Backbone.trigger('toggle-sidebar');
				this.sidebarRegion.show(this.getFriendsView());
			}

		}, this);

		Backbone.on('show-statistic-followings', function(){
			this.sidebarRegion.show(this.getFollowingsView());
		}, this);

		Backbone.on('send-message', function(){
			this.sidebarRegion.show(this.getDialogueView());
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

		Backbone.on('scroll-to-top', function(options){
			if (!options) options = {top : 0};
			this.sidebarRegion.$el.scrollTop(this.sidebarRegion.$el.scrollTop() + options.top - 200);
		}, this);

		Backbone.on('songlist:save-playlist', function(data){
			$.ajax({
				url:'/api/user/'+context.currentUserModel.attributes._id+'/playlist' , 
				data: data,
				method: "PUT"
			});
		}, this);

		Backbone.on('add-album-to-playlist', function(collection){
			if (context.currentSongCollection.length !== 0){
				context.previousCollection.reset(context.currentSongCollection.models);
			}
			context.currentSongCollection.add(collection);
			if (context.radio.playing && context.radio.role === ('admin' || 'editor'))
				Backbone.trigger('admin:add-tracks',{radio:context.radio.id, collection: collection});
			var button = new UndoReplacement();
			button.render();
			setTimeout($('#undo').empty(), 1000);
		}, this);


		Backbone.on('main-view:play-songs', function(model_id, collection, set){
			this.song.model._id = model_id;
			if(!context.radio.playing){
				if (context.currentSongCollection.length !== 0){
					context.previousCollection.reset(context.currentSongCollection.models);
				}
				var button = new UndoReplacement();
				button.render();
				context.currentSongCollection.reset(collection.models);
				if (!set)
					Backbone.trigger('main:play-first');
			} else {alert('Atata, you are currently translating radio');}
		},this);

		Backbone.on('song-view:play-song', function(model, i, id){
			this.song.model.attributes._id = id;
			if (context.currentSongCollection.length !== 0){
				context.previousCollection.reset(context.currentSongCollection.models);
			}
			var button = new UndoReplacement();
			button.render();
			context.currentSongCollection.reset(model);
			Backbone.trigger('main:play-at-position', i);
		},this);

		Backbone.on('songlist-view:play-song', function(i){
			Backbone.trigger('main:play-at-position', i);
		},this);

		Backbone.on('song-view:add-to-queue', function(model){
			context.currentSongCollection.add(model);
			if (context.radio.playing && context.radio.role === ('admin' || 'editor'))
				Backbone.trigger('admin:add-tracks',{radio:context.radio.id, collection: model});
		},this);

		Backbone.on('songlist:save-to-existing-playlist', function(model_id, collection){
			var tracks = [];
			for(var i = 0; i < collection.models.length; i++)
				tracks.push(collection.models[i].attributes._id);
			console.log(tracks);
			$.ajax({ 
				url:'/api/user/' + context.currentUserModel.attributes._id + '/playlist/' + model_id,
				method: "PUT",
				data: {tracks : tracks} 
			});
		}, this);

		Backbone.on('play-changed-track', function(object){
			var model = new SonglistModel(object);
			context.currentSongCollection.reset(model);
			Backbone.trigger('main:play-at-position', 0);
		},this);

		Backbone.on('add-to-your-collection', function(collection){
			if (context.radio.role === 'admin' || context.radio.role === 'editor')
				context.currentSongCollection.add(collection);
		},this);


		
	};


	return SidebarController;
});

