define(['marionette', 
	'./PlaylistsView',
	'./SongView', 
	'../user/UserView', 
	'../app/context', 
	'./bars/album/AlbumBarCollection', 
	'./bars/album/AlbumBarCompositeView',
	'./NotFoundView',
	'./radio/RadioCollection',
	'./radio/RadioCollectionView',
	'./comment/CommentLayout'],
	function(Marionette, PlaylistsView, SongView, UserView, context, AlbumBarCollection, AlbumBarView, NotFoundView, RadioBarCollection, RadioBarView, LayoutView){

	
	var MainController = function(){		
		
		var MainRegion = Marionette.Region.extend({
			
			el: '#main'

		});
		
		this.mainRegion = new MainRegion();
		
		this.initializeUser();

		this.initializePlaylists();

		this.initializeSong();

		this.initializeAlbums();

		this.initializeNotFound();

		this.initializeRadio();

		this.initializeLayout();
	
		if (window._is404Error) {
			this.mainRegion.show(this.getNotFoundView());
		} else {
		/*	this.mainRegion.show(this.getPlaylistView());*/
			this.mainRegion.show(new LayoutView());
		}
		/*this.mainRegion.show(this.getPlaylistView());	*/
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
			model : context.currentSongModel
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

		Backbone.on('show-playlists', function(){
			this.mainRegion.show(this.getPlaylistView());
		},this);

		Backbone.on('show-groupes', function(){
			this.mainRegion.show(this.getRadioView());
		},this);

		Backbone.on('show-favorites', function(){
			this.getLayout();
		},this);
		Backbone.on('toggle-sidebar', function(){
			/*this.sidebarRegion.el.parentNode.style.display='none';*/
			this.mainRegion.$el.toggleClass('toggled-main');
		}, this);
		
		
	};

	return MainController;
});
