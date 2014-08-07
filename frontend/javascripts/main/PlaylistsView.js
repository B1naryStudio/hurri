define(['marionette'], function(Marionette){
	PlaylistsView = Marionette.ItemView.extend({
		template: '#playlists-template'
	});

	return PlaylistsView;
});