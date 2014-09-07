define(['marionette'], function(Marionette){

var HurriRoutes = Marionette.AppRouter.extend({
	appRoutes: {
		'user/:id/playlists' : 'showPlaylists',
		'user/:id/groups' : 'showRadios',
		'user/:id/listened' : 'showListened',
		'user/:id/like'	: 'showFavorites',
		'user/:id' : 'showUser',
		'explorer/albums' : 'showEplorerAlbums',
		'charts' : 'showCharts',
		'user/:id/playlists/:id_pl' : 'showPlaylist',
		'track/id/:id' : 'showTrack'
	},
	 routes : {
	 	// 'user/:id/playlists' : 'showPlaylists',
	 	// 'user/:id/groups' : 'showRadios'
	 },

	 showPlaylists : function(){
	 	alert();
	 }
});

	
	var RouteController = function(){
		
	};

	RouteController.prototype.showPlaylists =  function(){
		console.log('paylist show');
		Backbone.trigger('show-playlists');
	};

	RouteController.prototype.showRadios =  function(){
		console.log('radios show');
		Backbone.trigger('show-groupes');
	};

	RouteController.prototype.showFavorites =  function(){
		console.log('favorites show');
		Backbone.trigger('show-favorites');
	};

	RouteController.prototype.showUser =  function(id){
		console.log('user show');
		Backbone.trigger('action:showUserView', id);
	};

	RouteController.prototype.showListened =  function(){
	 	console.log('user show');
	 	Backbone.trigger('show-statistic-listened');
	};

	RouteController.prototype.showCharts =  function(){
		console.log('user show');
		Backbone.trigger('show-charts');
	};

	RouteController.prototype.showEplorerAlbums =  function(){
		console.log('show albums');
		Backbone.trigger('show-albums');
	};

	RouteController.prototype.showPlaylist =  function(id, id_pl){
		console.log('show albums');
		Backbone.trigger('playlist-play', id_pl);
	};

	RouteController.prototype.showTrack =  function(){
		console.log('show albums');
		Backbone.trigger('player:add-comment');
	};

	
	

	var router = new HurriRoutes({
		  controller : new RouteController()
	});

return router;

});