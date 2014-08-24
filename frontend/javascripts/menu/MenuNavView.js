define(['marionette'], function(Marionette){
	MenuNavView = Marionette.ItemView.extend({
		id: 'menu-navigation',
		template: '#menu-nav-template',
		events: {
			'click #favorites-button' : 'showFavorites',
			'click #playlists-button' : 'showPlaylists',
			'click #radio-button' : 'showGroupes',
			'click #genres-button' : 'showGenres',
			'click #artists-button' : 'showArtists',
			'click #albums-button' : 'showAlbums',
			'click #charts-button' : 'showCharts'
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