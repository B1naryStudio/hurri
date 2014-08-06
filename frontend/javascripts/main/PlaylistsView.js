define(['marionette'], function(Marionette){
	Playlists = Marionette.ItemView.extend({
		template: '#playlists-template'
	});

	return PlaylistsView();
});