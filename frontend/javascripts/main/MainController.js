define(['marionette', 
	'./PlaylistsView', 
	'../user/UserView', 
	'../app/context', 
	'./bars/album/AlbumBarCollection', 
	'./bars/album/AlbumBarCompositeView',
	'./NotFoundView'],
	function(Marionette, PlaylistsView, UserView, context, AlbumBarCollection, AlbumBarView, NotFoundView){

	
	var MainController = function(){		
		
		var MainRegion = Marionette.Region.extend({
			
			el: '#main'

		});
		
		this.mainRegion = new MainRegion();
		
		this.initializeUser();

		this.initializePlaylists();

		this.initializeAlbums();

		this.initializeNotFound();
	
		if (window._is404Error) {
			this.mainRegion.show(this.getNotFoundView());
		} else {
			this.mainRegion.show(this.getPlaylistView());
		}

		this.mainRegion.show(this.getPlaylistView());	

		this.bindListeners();	
	};

	MainController.prototype.initializeNotFound = function(){
		this.notFoundView = this.getNotFoundView();
	};

	MainController.prototype.getNotFoundView = function(){
		return new NotFoundView();
	};

	MainController.prototype.initializeUser = function(){
		this.user = {
			model: context.currentUserModel
		};

		this.user.view = this.getUserView();
	};

	MainController.prototype.getUserView = function(){
		return new UserView({
			model: this.user.model
		});
	};

	MainController.prototype.initializePlaylists = function(){
		this.playlist = {
			model: context.currentSongModel
		};

		this.playlist.view = this.getPlaylistView();
	};

	MainController.prototype.getPlaylistView = function(){
		return new PlaylistsView({
			model: this.playlist.model
		});
	};

	MainController.prototype.initializeAlbums = function(){
		this.album = {
			collection: new AlbumBarCollection(),
			model: context.currentAlbumBar
		};

		this.album.collection.add([
			{name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10},
			{name: 'Sadfield', artist: 'New Artists', totalTracks: 5},
			{name: 'New Yrear', artist: 'Ocean Artists', totalTracks: 12},
			{name: 'Fast Food', artist: 'Various Fieds', totalTracks: 6},
			{name: 'Some fink', artist: 'Various Artists 2', totalTracks: 12},
			{name: 'Suffer from', artist: 'Some other', totalTracks: 34},
			{name: 'Astroby', artist: 'General Autos', totalTracks: 2},
			{name: 'Digerty or nothing', artist: 'U2', totalTracks: 10},
			{name: 'Dgg', artist: 'Gactor Vasskez', totalTracks: 170}
		]);

		this.album.view = this.getAlbumView();
	};

	MainController.prototype.getAlbumView = function() {
		return new AlbumBarView({
			model : this.album.model,
			collection : this.album.collection
		});
	};

	MainController.prototype.bindListeners = function(){
		Backbone.on('show-albums', function(){
			this.mainRegion.show(this.getAlbumView());
		},this);

		this.listenTo(context.currentUserModel, 'action:showUserView', 
			function(){this.show(this.getUserView());},this);
		
		this.listenTo(context.currentSongModel, 'action:showPlaylistsView', 
			function(){this.show(this.getPlaylistView());},this);
	};

	return MainController;
});
