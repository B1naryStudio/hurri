define(['marionette'], function(Marionette){
	Playlists = Backbone.Marionette.ItemView.extend({
		template: '#playlists-template'
	});

	return PlaylistsView();
});