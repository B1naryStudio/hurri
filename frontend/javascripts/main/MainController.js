define(['marionette', 
	'./PlaylistsView',
	'./ListenedView',
	'./SongView', 
	'../user/UserView', 
	'../app/context', 
	'./bars/album/AlbumBarCollection', 
	'./bars/album/AlbumBarCompositeView',
	'./NotFoundView',
	'./radio/RadioCollection',
	'./radio/RadioCollectionView',
	'./comment/CommentLayout',
	'./bars/playlist/PlaylistBarCollectionView',
	'./bars/playlist/PlaylistBarCollection',
	'./songlistmain/MainSongCollectionView',

	 '../playlist/SongCollection',
	 '../playlist/PlaylistModel',
	 './favorites/FavoritesCollection',
	 'clipboard',
	 './listened/ListenedCollection'],
	function(Marionette, 
		PlaylistsView,
		ListenedView, 
		SongView, 
		UserView, 
		context, 
		AlbumBarCollection, 
		AlbumBarView, 
		NotFoundView, 
		RadioBarCollection,
		RadioBarView, 
		LayoutView, 
		PlaylistBarView, 
		PlaylistBarCollection, 
		MainSongCollectionView,
		 
		MainSonglistCollection,
		PlaylistModel,
		FavoritesCollection, 
		ZeroClipboard,
		ListenedCollection){
	
	var MainController = function(){		
		
		var MainRegion = Marionette.Region.extend({
			
			el: '#main'

		});
		
		this.mainRegion = new MainRegion();
		
		this.initializeUser();

		this.initializePlaylistBar();

		this.initializeFavoritesSonglist();

		this.initializeSong();

		this.initializeListened();

		this.initializeAlbums();

		this.initializeNotFound();

		this.initializeRadio();

		this.initializeListened();

		this.initializeLayout();

		this.initializeMainSonglist();
	
		if (window._is404Error) {
			this.mainRegion.show(this.getNotFoundView());
		} else {
			this.mainRegion.show(this.getPlaylistBarView());
		}
		this.bindListeners();	
	};

	MainController.prototype.initializeNotFound = function(){
		this.notFoundView = this.getNotFoundView();
	};

	MainController.prototype.initializeLayout = function(){
		this.layoutView = this.getLayout();
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

	MainController.prototype.initializePlaylistBar = function(){
		this.playlist = {
			model: context.currentPlaylistBar,
			collection: context.playlistBarCollection
		};

		this.playlist.collection.add([
			{playlistName: 'Playlist1',created: Date(1),totalTracks : 12,
			tracks: [{artist : 'Jim Morrison', title: 'Hello moto'},{artist : 'Jim Morrison', title: 'unknown'}]},
			{playlistName: 'Playlist2',created: Date(1),totalTracks : 21,
			tracks: [{artist : 'Pink Floyd', title: 'You are the livung'}]},
			{playlistName: 'Playlist3',created: Date(1),totalTracks : 0,
			tracks: [{artist : 'Yupppii', title: 'Woop woop'},{artist : 'Jim Morrison', title: 'unknown'}]},
			{playlistName: 'Playlist4',created: Date(1),totalTracks : 21,
			tracks: [{artist : 'Some farms', title: 'Ant farm'}]},
		]);

		this.playlist.view = this.getPlaylistBarView();
	};

	MainController.prototype.getPlaylistBarView = function(){
		return new PlaylistBarView({
			model: this.playlist.model,
			collection: this.playlist.collection
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

	MainController.prototype.initializeRadio = function(){
		this.radio = {
			collection: new RadioBarCollection(),
			model: context.currentRadioBar
		};

		this.radio.collection.add([
			{
				name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10, 
				master: {name: 'Serhio', avatarUrl: 'images/avatar.png'},
				tracks : [{ artist : 'Brainstorm', title : 'Undefined name', duration : 0},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 101},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 70},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 45}
			]},
			{
				name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10, 
				master : {name: 'Serhio', avatarUrl: 'images/avatar.png'},
				tracks : [{ artist : 'Brainstorm', title : 'Undefined name', duration : 0},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 101},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 70},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 45}
			]},
			{
				name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10, 
				master: {name: 'Serhio', avatarUrl: 'images/avatar.png'},
				tracks : [{ artist : 'Brainstorm', title : 'Undefined name', duration : 0},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 101},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 70},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 45}
			]},
			{
				name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10, 
				master: {name: 'Serhio', avatarUrl: 'images/avatar.png'},
				tracks : [{ artist : 'Brainstorm', title : 'Undefined name', duration : 0},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 101},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 70},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 45}
			]},
		]);

		this.radio.view = this.getRadioView();
	};

	MainController.prototype.getRadioView = function() {
		return new RadioBarView({
			model : this.radio.model,
			collection : this.radio.collection
		});
	};

	MainController.prototype.initializeSong = function() {
		this.song = {
			model: context.currentSongModel
		};

		this.song.view = this.getSongView();
	};

	MainController.prototype.getSongView = function() {
		return new SongView({
			model : this.song.model
		});
	};

	MainController.prototype.initializeMainSonglist = function(){
		this.mainsonglist = {
			model: PlaylistModel,
			collection: MainSonglistCollection
		};

		this.mainsonglist.view = this.getMainSonglistView();
	};

	MainController.prototype.getMainSonglistView = function(){
		return new MainSongCollectionView({
			model: this.mainsonglist.model,
			collection: this.mainsonglist.collection
		});
	};

	MainController.prototype.initializeFavoritesSonglist = function(){
		this.favoriteslist = {
			model: PlaylistModel,
			collection: FavoritesCollection
		};

		this.favoriteslist.view = this.getFavoritesSonglistView();
	};

	MainController.prototype.initializeListened = function(){
		this.listened = {
			model: PlaylistModel,
			collection: ListenedCollection
		};

		this.listened.view = this.getListenedView();
	};

	MainController.prototype.getFavoritesSonglistView = function(){
		return new MainSongCollectionView({
			model: this.favoriteslist.model,
			collection: this.favoriteslist.collection
		});
	};

	MainController.prototype.getListenedView = function(){
		return new MainSongCollectionView({
			model: this.listened.model,
			collection: this.listened.collection
		});
	};

	MainController.prototype.initializeListened = function(){
		this.listened = {
			model: context.currentUserModel
		};

		this.listened.view = this.getListenedView();
	};

	MainController.prototype.getListenedView = function(){
		return new ListenedView({
			model: this.listened.model
		});
	};

	MainController.prototype.getLayout = function() {
		this.mainRegion.show(new LayoutView());
	};

	MainController.prototype.bindListeners = function(){
		Backbone.on('show-albums', function(){
			this.mainRegion.show(this.getAlbumView());
		},this);

		Backbone.on('action:showUserView', function(){
			this.mainRegion.show(this.getUserView());
		},this);

		Backbone.on('show-playlists show-statistic-playlists', function(){
			this.mainRegion.show(this.getPlaylistBarView());
		},this);

		Backbone.on('show-groupes', function(){
			this.mainRegion.show(this.getRadioView());
		},this);

		Backbone.on('show-favorites show-statistic-liked', function(){
			this.mainRegion.show(this.getFavoritesSonglistView());
		},this);

		Backbone.on('player:add-comment', function(){
			this.getLayout();
		},this);

		Backbone.on('playlist-play', function(){
			this.mainRegion.show(this.getMainSonglistView());
		},this);

		Backbone.on('show-statistic-listened', function(){
			this.mainRegion.show(this.getListenedView());
		},this);

		Backbone.on('toggle-sidebar', function(){
			this.mainRegion.$el.toggleClass('toggled-main');
		}, this);
		
		Backbone.on('sidebar:show-listened', function(){
			this.mainRegion.show(this.getListenedView());
		},this);
		
	};

	return MainController;
});
