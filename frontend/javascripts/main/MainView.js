define(['marionette'], function(Marionette){
	Playlists = Backbone.Marionette.ItemView.extend({
		template: '#playlists-template'
	});

	playlistsView = new PlaylistsView();
	playlistsView.render();
});