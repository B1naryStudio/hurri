define(['marionette'], function(Marionette){
	MenuNavView = Marionette.ItemView.extend({
		template: '#menu-nav-template',
		events: {
			'click .favourites-image' : 'showFavorites',
			'click .show-playlists' : 'showPlaylists',
			'click .show-groupes' : 'showGroupes',
			'click .show-by-genres' : 'showGenres',
			'click .show-by-artists' : 'showArtists',
			'click .show-by-albums' : 'showAlbums',
			'click .show-by-charts' : 'showCharts'
		},

		showFavorites : function(){
			Backbone.trigger('show-favorites');
		},

		showPlaylists : function(){
			Backbone.trigger('show-playlists');
		},

		showGroupes : function(){
			Backbone.trigger('show-groupes');
		},

		showGenres : function(){
			Backbone.trigger('show-genres');
		},

		showArtists : function(){
			Backbone.trigger('show-artists');
		},

		showAlbums : function(){
			Backbone.trigger('show-albums');
		},

		showCharts : function(){
			Backbone.trigger('show-charts');
		}
	});
	
	return MenuNavView;
});