define(['marionette', 
	'underscore',
	'./playlists/PlaylistsView',
	'./listened/ListenedView',
	'./song/SongView', 
	'./user/UserView', 
	'../app/context', 
	'./explorer/album/tiles/AlbumCollection', 
	'./explorer/album/tiles/AlbumBarCompositeView',
	'./search/NotFoundView',
	'./radio/tiles/RadioCollection',
	'./radio/tiles/RadioCollectionView',
	'./song/comment/CommentLayout',
	'./playlists/tiles/PlaylistBarCollectionView',
	'./playlists/tiles/PlaylistBarCollection',
	'./playlists/tiles/PlaylistBarModel',
	'../shared/songlistmain/MainSongCollectionView',
	'./charts/ChartsCollection',
	'./charts/ChartsView',
	 '../shared/playlist/SongCollection',
	 '../shared/playlist/PlaylistModel',
	 './favorites/FavoritesCollection',
	 'clipboard',
	 './listened/ListenedCollection',
	 '../player/PlayerModel',
	 '../units/HtmlAudioHandler',
	 './search/GetSearchResults',
	  './search/NoResultsView',
	  './search/ResultView',
	  './explorer/album/tiles/AlbumModel',
	  './radio/tiles/RadioModel',
	  '../app/routes',
	  './explorer/album/AlbumCompositeView',
	  './explorer/artist/AlbumCompleteView',
	   './explorer/artist/tiles/ArtistModel',
	   './explorer/album/tiles/AlbumCollection',
	   '../shared/song/SongModel'
	  ],
	function(Marionette, 
		_,
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
		PlaylistBarModel,
		MainSongCollectionView,
		ChartsCollection,
		ChartsView,
		MainSonglistCollection,
		PlaylistModel,
		FavoritesCollection, 
		ZeroClipboard,
		ListenedCollection,
		PlayerModel,
		audioHandler,
		FullSearchResults,
		NoResultsView,
		ResultView,
		AlbumBarModel,
		RadioBarModel,
		Router,
		AlbumCompositeView,
		AlbumCompleteView,
		ArtistModel,
		AlbumCollection,
		SongModel
		){
	
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

		//this.initializeAlbumInner();

		//this.initializeResults();

		// this.initializeLayout();

		this.initializeCharts();
	
		if (window._is404Error) {
			this.mainRegion.show(this.getNotFoundView());
		} else {
			//this.mainRegion.show(this.getPlaylistBarView());
		}
		this.bindListeners();	
	};

	MainController.prototype.initializeNotFound = function(){
		this.notFoundView = this.getNotFoundView();
	};

	MainController.prototype.initializeLayout = function(id){
		this.layoutView = this.getLayout(id);
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

	MainController.prototype.getUserView = function(id){
		if (id === this.user.model.attributes._id){
			return new UserView({
				model: this.user.model
			});
		} else{
			var follower = _.findWhere(window._injectedData.followers, {_id:id});
			var following = _.findWhere(window._injectedData.following, {_id:id});
			var model;
			if (follower)
				model = new Backbone.Model(follower);
			else 
				model = new Backbone.Model(following); 
			return new UserView({
				model: model
			});
		}
	};

	MainController.prototype.initializePlaylistBar = function(){
		this.playlist = {
			model: new PlaylistBarModel(),
			collection: new PlaylistBarCollection(window._injectedData.playlists)
		};

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
			collection: new AlbumBarCollection([], {playlistId: 'none'}),
			model: new AlbumBarModel()
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
			model: new RadioBarModel()
		};

		this.radio.collection.add([
			{
				name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10, 
				master: {name: 'Serhio', avatarUrl: '/images/avatar.png'},
				tracks : [{ artist : 'Brainstorm', title : 'Undefined name', duration : 0},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 101},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 70},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 45}
			]},
			{
				name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10, 
				master : {name: 'Serhio', avatarUrl: '/images/avatar.png'},
				tracks : [{ artist : 'Brainstorm', title : 'Undefined name', duration : 0},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 101},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 70},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 45}
			]},
			{
				name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10, 
				master: {name: 'Serhio', avatarUrl: '/images/avatar.png'},
				tracks : [{ artist : 'Brainstorm', title : 'Undefined name', duration : 0},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 101},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 70},
						{ artist : 'Brainstorm', title : 'Undefined name', duration : 45}
			]},
			{
				name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10, 
				master: {name: 'Serhio', avatarUrl: '/images/avatar.png'},
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

	MainController.prototype.initializeMainSonglist = function(id){
		var playlist = _.findWhere(window._injectedData.playlists, {_id:id});
		if (!playlist)
			return "404";
		var model = PlaylistModel.set(playlist);
		this.mainsonglist = {
			model: model,
			collection: new MainSonglistCollection([], {
				playlistId : '/api/user/' + context.currentUserModel.attributes._id + 
							'/playlists/' + model.attributes._id + '/tracks'
			})
		};
		this.mainsonglist.collection.fetch({
			cache: true, 
			success: function () {
		  		Backbone.trigger('check-play', model);
	   		}
		});
		this.mainsonglist.view = this.getMainSonglistView();
	};

	MainController.prototype.getMainSonglistView = function(){

		return new MainSongCollectionView({
			model: this.mainsonglist.model,
			collection: this.mainsonglist.collection
		});
	};

	MainController.prototype.initializeAlbumInner = function(id, obj){
		var album = _.findWhere(obj, {_id:id});
		this.albuminner = {	
			model: new AlbumBarModel(album),
			collection: new MainSonglistCollection([], {
				playlistId : '/api/album/' + id + '/tracks'
			})
		};

		this.albuminner.collection.fetch({
			cache: true, 
			success: function () {
		  		Backbone.trigger('show-tracks');
	   		}
		});
	};

	MainController.prototype.getAlbumInnerView = function(){

		return new AlbumCompositeView({
			model: this.albuminner.model,
			collection: this.albuminner.collection
		});
	};

	MainController.prototype.getArtistInnerView = function(){

		return new AlbumCompleteView({
			model: this.artistinner.model,
			collection: this.artistinner.collection
		});
	};

	MainController.prototype.initializeArtistInner = function(id, obj){
		var artist = _.findWhere(obj, {_id:id});
		this.artistinner = {	
			model: new ArtistModel(artist),
			collection: new AlbumCollection([], {
				playlistId : '/api/artist/id/' + id + '/albums'
			})
		};

		this.artistinner.collection.fetch({
			cache: true, 
			success: function () {
		  		Backbone.trigger('show-artits-alb');
	   		}
		});
	};

	MainController.prototype.initializeCharts = function(){
		this.charts = {
			collection: new ChartsCollection()
		};
		this.charts.collection.add([
			{artist: 'The Beatles',  	title: 'Yesterday'},
			{artist: 'John Lennon',  	title: 'Imagine'},
			{artist: 'The Beatles',  	title: 'Let It Be'},
			{artist: 'Pink Floyd',  	title: 'Time'},
			{artist: 'Queen',  			title: 'The Show Must Go On'},
			{artist: 'Queen',  			title: 'Bohemian Rhapsody'},
			{artist: 'Led Zeppelin',  	title: 'Stairway To Heaven'},
			{artist: 'Queen',  			title: 'We Are The Champions'},
			{artist: 'The Beatles',  	title: 'Come Together'},
			{artist: 'Pink Floyd',  	title: 'Shine On You Crazy Diamond'},
			{artist: 'Pink Floyd',  	title: 'Another Brick In The Wall'},
			{artist: 'Queen',  			title: 'We Will Rock You'},
			{artist: 'Louis Armstrong', title: 'What A Wonderful World'},
			{artist: 'Elvis Presley',  	title: 'Love Me Tender'},
			{artist: 'Eagles',  		title: 'Hotel California'},
		]);
		this.charts.view = this.getChartsView();
	};

	MainController.prototype.getChartsView = function(model){
		return new ChartsView({
			collection: this.charts.collection
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

	MainController.prototype.initializeResults = function(input, callback){
		var res = FullSearchResults;
		this.fullresults = res;
		var self = this;
		res.getData(input, function(obj){
			callback(obj);
		});
		

		
	};

	
	// MainController.prototype.getSearchResultView = function(){
	// 	return new SongResultCompositeView({
	// 		model: this.results.model,
	// 		collection: this.results.collection
	// 	});
	// };

	// MainController.prototype.getArtistResultView = function(){
	// 	return new ArtistCompositeView({
	// 		model: this.results.model,
	// 		collection: this.results.artist_collection
	// 	});
	// };

	// MainController.prototype.getAlbumResultView = function(){
	// 	return new AlbumCompositeView({
	// 		model: this.results.model,
	// 		collection: this.results.album_collection
	// 	});
	// };

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

	// MainController.prototype.initializeListened = function(){
	// 	this.listened = {
	// 		model: context.currentUserModel
	// 	};

	// 	this.listened.view = this.getListenedView();
	// };

	// MainController.prototype.getListenedView = function(){
	// 	return new ListenedView({
	// 		model: this.listened.model
	// 	});
	// };

	MainController.prototype.getLayout = function(id) {
		var model;
		if (id === undefined && !window._injectedData.track)
			this.mainRegion.show(this.getNotFoundView());
		else {
				if (context.currentSongModel.attributes._id === undefined && window._injectedData.track._id === id){
					model  = new SongModel(window._injectedData.track);
					this.mainRegion.show(new LayoutView(model));
				} else {
					var self = this;
					$.ajax({url: '/api/track/id/'+id}).done(function(data){
						model = new SongModel(data);
						self.mainRegion.show(new LayoutView(model));
					});
				}

				
				// if (context.currentSongModel.attributes._id === id){
				// 	self.mainRegion.show(new LayoutView(track));
				// }

				// 	var Track = SongModel.extend({urlRoot: '/track/id'});
				// 	var track = new Track({id:id});
				// 	track.fetch({
				// 		success: function () {
				// 			alert();
				// 	  		self.mainRegion.show(new LayoutView(track));
				// 	  	}
				//    	});
			}
	};

	MainController.prototype.bindListeners = function(){
		Backbone.on('show-albums', function(){
			this.mainRegion.show(this.getAlbumView());
		},this);

		Backbone.on('action:showUserView', function(id){
			this.mainRegion.show(this.getUserView(id));
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

		Backbone.on('show-charts', function(){
			this.mainRegion.show(this.getChartsView());
		},this);

		Backbone.on('player:add-comment', function(id){
			this.getLayout(id);
		},this);

		Backbone.on('show-album-tracks', function(id){
			this.initializeAlbumInner(id, this.fullresults.data[0]);
		},this);

		Backbone.on('show-artist-albums', function(id){
			this.initializeArtistInner(id, this.fullresults.data[1]);
		},this);

		Backbone.on('show-artits-alb', function(){
			this.mainRegion.show(this.getArtistInnerView());
		},this);

		Backbone.on('show-tracks', function(){
			this.mainRegion.show(this.getAlbumInnerView());
		}, this);

		Backbone.on('playlist-play', function(id){
			var err = this.initializeMainSonglist(id);
			if (err === '404')
				this.mainRegion.show(this.getNotFoundView());
			else
				this.mainRegion.show(this.getMainSonglistView());
		},this);

		Backbone.on('playlist-open-and-play', function(model){
			Backbone.trigger('main-view:play-songs', model._id, this.mainsonglist.collection);
		},this);

		

		Backbone.on('show-statistic-listened', function(){
			this.mainRegion.show(this.getListenedView());
		},this);

		Backbone.on('toggle-sidebar', function(){
			this.mainRegion.$el.toggleClass('toggled-main');
		}, this);
		
		// Backbone.on('sidebar:show-listened', function(){
		// 	this.mainRegion.show(this.getListenedView());
		// },this);
		
		Backbone.on('show-friends-details', function(model){
			this.mainRegion.show(this.getUserView(model));
		},this);

		Backbone.on('show-404', function(){
			this.mainRegion.show(this.getNotFoundView());
		}, this);

		Backbone.on('searchbar:show-more', function(input){
			var self = this;
			this.initializeResults(input, function(obj){
				if ((obj.song.length === 0) && (obj.artist.length === 0) && (obj.album.length === 0)){
					self.mainRegion.show(new NoResultsView());	
				} else {
					self.mainRegion.show(new ResultView(obj));
				}

			//	self.getArtistResultView();
				//self.getAlbumResultView().render();
				//self.getArtistResultView().render();
			});
			
			//this.getArtistResultView().render();
			//this.getAlbumResultView().render();
		},this);
	};

	return MainController;
});
