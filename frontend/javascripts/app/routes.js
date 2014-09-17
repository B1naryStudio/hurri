define(['marionette'], function(Marionette){

var HurriRoutes = Marionette.AppRouter.extend({
	appRoutes: {
		'': 'chooseShow',
		'user/:id/playlists' : 'showPlaylists',
		'user/:id/groups' : 'showRadios',
		'user/:id/listened' : 'showListened',
		'user/:id/like'	: 'showFavorites',
		'user/:id' : 'showUser',
		'explorer/albums/:name' : 'showEplorerAlbums',
		'charts' : 'showCharts',
		'user/:id/playlists/:id_pl' : 'showPlaylist',
		'track/id/:id' : 'showTrack',
		'search/:name' : 'showSearch',
		'album/id/:id' : 'showAlbumTracks',
		'artist/id/:id/albums' : 'showArtistAlbums',
		'explorer/artists/:name' : 'showExplorerArtists',
		'explorer/tracks/:name' : 'showExplorerTracks',
		'search/full/albums/:name' : 'showFullAlbumList',
		'search/full/artists/:name' : 'showFullArtistList',
		'search/full/tracks/:name' : 'showFullSongList',
		'*404' : 'notFound',
		'notFound' : 'notFound'

	},
	 routes : {
	 	// 'user/:id/playlists' : 'showPlaylists',
	 	// 'user/:id/groups' : 'showRadios'
	 }
});

	
	var RouteController = function(){
		
	};

	RouteController.prototype.showAlbumTracks =  function(id){
		console.log('Album Tracks');
		Backbone.trigger('show-album-tracks', id);
		window.localStorage.setItem("currentTab", "album/id/" + id);
	};

	RouteController.prototype.showFullAlbumList =  function(name){
		console.log('Album Tracks');
		Backbone.trigger('album-result-composite:show-more', name);
		window.localStorage.setItem("currentTab", "search/full/albums/" + name);
	};

	RouteController.prototype.showFullArtistList =  function(name){
		console.log('Album Tracks');
		Backbone.trigger('artist-result-composite:show-more', name);
		window.localStorage.setItem("currentTab", "search/full/artists/" + name);
	};

	RouteController.prototype.showFullSongList =  function(name){
		console.log('Album Tracks');
		Backbone.trigger('song-result-composite:show-more', name);
		window.localStorage.setItem("currentTab", "search/full/tracks/" + name);
	};

	RouteController.prototype.showExplorerTracks =  function(name){
		console.log('Explorer Tracks');
		Backbone.trigger('show-all-tracks', name);
		window.localStorage.setItem("currentTab", "explorer/tracks/" + encodeURIComponent(name));
	};


	RouteController.prototype.showArtistAlbums =  function(id){
		console.log('Artist albums show');
		Backbone.trigger('show-artist-albums', id);
		window.localStorage.setItem("currentTab", "artist/id/" + id);
	};

	RouteController.prototype.chooseShow =  function(){
		var tab = window.localStorage.getItem("currentTab");
		if (tab){
			router.navigate(tab, true);
		} else {
			this.showEplorerAlbums('World');
		}
	};

	RouteController.prototype.notFound =  function(){
		Backbone.trigger('show-404');
	};

	RouteController.prototype.showPlaylists =  function(id){
		console.log('paylist show');
		Backbone.trigger('show-playlists');
		window.localStorage.setItem("currentTab", "user/"+id+"/playlists");
	};

	RouteController.prototype.showSearch =  function(name){
		console.log('paylist show');
		Backbone.trigger('searchbar:show-more', name);
		window.localStorage.setItem("currentTab", "search/"+name);
	};
	
	RouteController.prototype.showRadios =  function(id){
		console.log('radios show');
		Backbone.trigger('show-groupes');
		window.localStorage.setItem("currentTab", "user/"+id+"/groups");
	};

	RouteController.prototype.showFavorites =  function(id){
		console.log('favorites show');
		Backbone.trigger('show-favorites');
		window.localStorage.setItem("currentTab", "user/"+id+"/like");
	};

	RouteController.prototype.showUser =  function(id){
		console.log('user show');
		Backbone.trigger('action:showUserView', id);
		window.localStorage.setItem("currentTab", "user/"+id);
	};

	RouteController.prototype.showListened =  function(id){
		window.localStorage.setItem("currentTab", "user/"+id+"/listened");
	 	console.log('user show');
	 	Backbone.trigger('show-statistic-listened');
	};

	RouteController.prototype.showCharts =  function(){
		console.log('user show');
		Backbone.trigger('show-charts');
		window.localStorage.setItem("currentTab", "charts");
	};

	RouteController.prototype.showEplorerAlbums =  function(name){
		console.log('show albums');
		Backbone.trigger('show-albums', name);
		window.localStorage.setItem("currentTab", "explorer/albums/" + encodeURIComponent(name));
	};

	RouteController.prototype.showExplorerArtists =  function(name){
		console.log('show artists');
		Backbone.trigger('show-artists', name);
		window.localStorage.setItem("currentTab", "explorer/artists/" + encodeURIComponent(name));
	};

	RouteController.prototype.showPlaylist =  function(id, id_pl){
		console.log('show albums');
		Backbone.trigger('playlist-play', id_pl);
		window.localStorage.setItem("currentTab", "user/" + id + "/playlists/" + id_pl);
	};

	RouteController.prototype.showTrack =  function(id){
		console.log('show albums');
		Backbone.trigger('player:add-comment', id);
		window.localStorage.setItem("currentTab", "track/id/" + id);
	};

	
	

	var router = new HurriRoutes({
		  controller : new RouteController()
	});

return router;

});